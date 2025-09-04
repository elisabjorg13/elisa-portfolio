"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DJPage() {
  const router = useRouter();
  type TrackItem = {
    title: string;
    link: string;
    stream: string;
  };
  const [menu, setMenu] = useState<'ELYSIUM' | 'DJ ÓK'>('ELYSIUM');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastAngle, setLastAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Simple device detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700 || /Mobi|Android/i.test(navigator.userAgent));
    check(); // Check immediately
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  
  const mixes = [
    {
      title: "DJ örsi jersey club mix - Drif Radio",
      link: "https://www.youtube.com/watch?v=eIiaiu_8EAc&list=RDeIiaiu_8EAc&start_radio=1&t=2307s",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/ytdl.canehill.info+-+DJ+O%CC%88RSI%CC%81+DRIF+(16+Jun+2024)+(320+KBps)-trimmed.mp3",
    },
    {
      title: "DJ ÓK mix 002 - Drif Radio",
      link: "https://www.youtube.com/watch?v=EVXhIASN9iE&list=RDEVXhIASN9iE&start_radio=1&t=485s",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/ytdl.canehill.info+-+DJ+O%CC%81K+DRIF+(14+Apr+2024)+(320+KBps)+(1)-trimmed.wav",
    },
    {
      title: "DJ ÓK Drums pilled mix - Egregore",
      link: "https://soundcloud.com/egreg-re/dj-ok-drum-pilled-fevrier-2025?si=680048eb7ba9453baeec2e3be30692ee&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/DJ+OK+-+Drum+Pilled+(Fe%CC%81vrier+2025).mp3",
    },
    {
      title: "DJ ÓK Cellar mix",
      link: "https://soundcloud.com/djok-889666396/cellarmix?si=7d7ca63bdb5447afadc08545aeee185b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/CellarMix.mp3",
    },
    {
      title: "ELYSIUM Promising young woman - Egregore",
      link: "https://soundcloud.com/egreg-re/promising-young-woman-elysium-avril-2025?si=9354fd0dfd8a4ce0867cffbf63d747b5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/Promising+Young+Woman+-+Elysium+(Avril+2025)+(1).mp3",
    },
    {
      title: "ELYSIUM Rich aunt mix",
      link: "https://soundcloud.com/elysium-001/mixtest?si=6f390427c2634809925bd6ba3d3f6a01&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/ELYSIUM+01+-+RICH+AUNT+MIX+(JERSEY+CLUB+SPECIAL).mp3",
    },
  ];
  const tracks = [
    {
      title: "Danser avec lui (feat Jon Edvard)",
      link: "https://soundcloud.com/elysium-001/danser-avec-lui-feat-eddi?si=c69728f78bc742348881de884ebe8765&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/SpotiDownloader.com+-+Danser+avec+lui+-+Jon+Edvard.mp3",
    },
    {
      title: "Dns (ft. DJÓTTAR & Elisa Björg)",
      link: "https://soundcloud.com/user-162986744/dns-im-wokeft-djottar-elisa-bjorg?si=c726062719ee45c5bf9de93ff0280ce9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/SpotiDownloader.com+-+DnS+(I'm+Woke)+-+Jon+Edvard.mp3",
    },
    {
      title: "Dns Cursed Mix (ft. DJÓTTAR & Elisa Björg)",
      link: "https://soundcloud.com/user-162986744/dns-im-woke-cursed?si=f670137edf984c259f3cbe3af4dd5e3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/SpotiDownloader.com+-+DnS+-+Cursed+-+Jon+Edvard.mp3",
    },
    {
      title: "3gs",
      link: "https://open.spotify.com/track/3V54Fgf8DZuKka7DkfBrm8?si=7328689a36ef495a",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/Music/SpotiDownloader.com+-+3gs+-+ELYSIUM.mp3",
    },
  ];
  const currentList = menu === 'ELYSIUM' ? tracks : mixes;
  const [currentItem, setCurrentItem] = useState<TrackItem>(tracks[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Calculate angle from center of wheel to mouse/touch point
  const getAngle = (clientX: number, clientY: number) => {
    if (!wheelRef.current) return 0;
    
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    return Math.atan2(deltaY, deltaX);
  };

  // Handle wheel rotation
  const handleWheelRotation = (clientX: number, clientY: number) => {
    const currentAngle = getAngle(clientX, clientY);
    const angleDiff = currentAngle - lastAngle;
    
    // Normalize angle difference to handle wrapping around
    let normalizedDiff = angleDiff;
    if (normalizedDiff > Math.PI) normalizedDiff -= 2 * Math.PI;
    if (normalizedDiff < -Math.PI) normalizedDiff += 2 * Math.PI;
    
    // Threshold for movement (prevents tiny movements from triggering)
    if (Math.abs(normalizedDiff) > 0.1) {
      if (normalizedDiff > 0) {
        // Clockwise - go to next song
        goToNext();
      } else {
        // Counter-clockwise - go to previous song
        goToPrevious();
      }
    }
    
    setLastAngle(currentAngle);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastAngle(getAngle(e.clientX, e.clientY));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleWheelRotation(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastAngle(getAngle(e.touches[0].clientX, e.touches[0].clientY));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault(); // Prevent scrolling
      handleWheelRotation(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add global mouse/touch listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  // When menu changes, select the first item
  useEffect(() => {
    setSelectedIndex(0);
    setCurrentItem(menu === 'ELYSIUM' ? tracks[0] : mixes[0]);
  }, [menu]);

  // When selectedIndex changes, update currentItem
  useEffect(() => {
    const newItem = currentList[selectedIndex];
    setCurrentItem(newItem);
    setIsLoading(true);
  
    if (audioRef.current) {
      const audio = audioRef.current;
  
      // Clean up previous listeners
      const handleCanPlay = () => {
        setIsLoading(false);
        if (isPlaying) {
          audio.play().catch((err) => console.warn("Play failed:", err));
        }
        audio.removeEventListener("canplaythrough", handleCanPlay);
      };
  
      audio.pause();
      audio.src = newItem.stream;
      audio.load();
      audio.addEventListener("canplaythrough", handleCanPlay);
    }
  }, [selectedIndex, menu]);

  const currentIndex = currentList.findIndex(
    (item) => item.title === currentItem.title
  );

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleClickHome = () => {
    router.push("/"); // or wherever you want to send the user
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedIndex(currentIndex - 1);
      // Auto-play the previous song
      setIsPlaying(true);
    }
  };

  const goToNext = () => {
    if (currentIndex < currentList.length - 1) {
      setSelectedIndex(currentIndex + 1);
      // Auto-play the next song
      setIsPlaying(true);
    }
  };

  return (
    <main className="w-screen vh-100 h-screen flex items-center justify-center" style={{ cursor: 'pointer' }}>
      <div className={`bg-[#ffffff] w-full h-full p-4 flex flex-col ${isMobile ? 'justify-start' : 'justify-between'}`}>
        {/* iPod Screen Split */}
        <div className="relative bg-white border-2 border-[#d9d9d9] rounded-md p-4 h-[60%] overflow-auto flex flex-row justify-start items-start">
          {/* Left menu */}
          <div className="basis-1/3 flex flex-col">
            <div
              className={`px-4 py-2 cursor-pointer rounded-md mb-2 flex items-center justify-between text-sm md:text-base ${menu === 'ELYSIUM' ? 'bg-customBlue text-white font-bold' : ''}`}
              onClick={() => setMenu('ELYSIUM')}
            >
              ELYSIUM
              {menu === 'ELYSIUM' && (
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 78 92"
                  fill="currentColor"
                  className="text-white ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M78 46L-4.24146e-06 91.0333L-3.04523e-07 0.966675L78 46Z" fill="currentColor"/>
                </svg>
              )}
            </div>
            <div
              className={`px-4 py-2 cursor-pointer rounded-md flex items-center justify-between text-sm md:text-base ${menu === 'DJ ÓK' ? 'bg-customBlue text-white font-bold' : ''}`}
              onClick={() => setMenu('DJ ÓK')}
            >
              DJ ÓK
              {menu === 'DJ ÓK' && (
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 78 92"
                  fill="currentColor"
                  className="text-white ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M78 46L-4.24146e-06 91.0333L-3.04523e-07 0.966675L78 46Z" fill="currentColor"/>
                </svg>
              )}
            </div>
          </div>
          {/* Right list */}
          <div className="basis-2/3 flex flex-col">
            {currentList.map((item: TrackItem, idx: number) => (
              <div
                key={item.title}
                className={`px-4 py-2 cursor-pointer rounded flex items-center text-xs md:text-sm ${selectedIndex === idx ? 'bg-customBlue text-white font-bold' : ''}`}
                onClick={() => setSelectedIndex(idx)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        {/* Controller and wheel remain unchanged below */}
        <div className={`relative flex flex-col items-center ${isMobile ? 'justify-start mt-8' : 'justify-center'}`}>
          {/* Circular Insta/Cloud buttons above the wheel */}

          {/* Click Wheel */}
          <div 
            ref={wheelRef}
            className="w-40 h-40 md:w-60 md:h-60 bg-[#d9d9d9] rounded-full flex flex-col items-center justify-center gap-2 text-center relative cursor-pointer select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              userSelect: 'none',
              touchAction: 'none' // Prevents default touch behaviors
            }}
          >
            {/* Insta and Cloud buttons on the wheel, flanking HOME */}
            <button
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow font-bold text-[8px] md:text-xs absolute left-0 top-4 z-10 p-1 md:p-3
                ${menu === 'ELYSIUM'
                  ? 'bg-[#f8f8f8] border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors cursor-pointer font-serif'
                  : menu === 'DJ ÓK'
                  ? 'bg-[#f8f8f8] border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors cursor-pointer font-serif'
                  : 'bg-[#f8f8f8] border-2 border-[#e0e0e0] text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors font-serif'}
              `}
              style={{ transform: 'translate(-50%, 0)', textTransform: 'uppercase', letterSpacing: '0.1em', pointerEvents: menu === 'ELYSIUM' || menu === 'DJ ÓK' ? 'auto' : 'none' }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent wheel rotation when clicking buttons
                if (menu === 'ELYSIUM') {
                  window.open('https://www.instagram.com/', '_blank');
                } else if (menu === 'DJ ÓK') {
                  window.open('https://www.instagram.com/djokokokokokok/', '_blank');
                }
              }}
            >
              <span className="text-[10px] md:text-sm">Insta</span>
            </button>
            <button
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow font-bold text-[8px] md:text-xs absolute right-0 top-4 z-10 p-1 md:p-3
                ${menu === 'ELYSIUM'
                  ? 'bg-[#f8f8f8] border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors cursor-pointer font-serif'
                  : menu === 'DJ ÓK'
                  ? 'bg-[#f8f8f8] border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors cursor-pointer font-serif'
                  : 'bg-[#f8f8f8] border-2 border-[#e0e0e0] text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors font-serif'}
              `}
              style={{ transform: 'translate(50%, 0)', textTransform: 'uppercase', letterSpacing: '0.1em', pointerEvents: menu === 'ELYSIUM' || menu === 'DJ ÓK' ? 'auto' : 'none' }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent wheel rotation when clicking buttons
                if (menu === 'ELYSIUM') {
                  window.open('https://soundcloud.com/elysium-001', '_blank');
                } else if (menu === 'DJ ÓK') {
                  window.open('https://soundcloud.com/djok-889666396', '_blank');
                }
              }}
            >
              <span className="text-[10px] md:text-sm">Cloud</span>
            </button>
            {/* Disable prev, next, play/pause, back when on main menu */}
            <button
              className="absolute left-2 text-xl"
              onClick={(e) => {
                e.stopPropagation(); // Prevent wheel rotation
                goToPrevious();
              }}
              disabled={currentIndex === 0}
              style={currentIndex === 0 ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              <svg
                width={28}
                height={18}
                viewBox="0 0 104 68"
                fill="currentColor"
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-1.4552e-06 34L49.9365 5.16913L49.9365 62.8308L-1.4552e-06 34Z" fill="currentColor"/>
                <path d="M37.1328 34L87.0693 5.16913L87.0693 62.8308L37.1328 34Z" fill="currentColor"/>
              </svg>
            </button>
            <button
              className="absolute right-2 text-xl"
              onClick={(e) => {
                e.stopPropagation(); // Prevent wheel rotation
                goToNext();
              }}
              disabled={currentIndex === currentList.length - 1}
              style={currentIndex === currentList.length - 1 ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              <svg
                width={28}
                height={18}
                viewBox="0 0 104 68"
                fill="currentColor"
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M103.715 34L53.7783 62.8308L53.7783 5.16913L103.715 34Z" fill="currentColor"/>
                <path d="M66.582 34L16.6455 62.8308L16.6455 5.16913L66.582 34Z" fill="currentColor"/>
              </svg>
            </button>
            <button
              className={`absolute bottom-2 ${isMobile ? 'ml-0' : 'ml-1'}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent wheel rotation
                togglePlayback();
              }}
              disabled={currentList.length === 0 || isLoading}
              style={currentList.length === 0 || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <svg
                  width={18}
                  height={28}
                  viewBox="0 0 61 92"
                  fill="currentColor"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="14" height="92" fill="currentColor"/>
                  <rect x="47" width="14" height="92" fill="currentColor"/>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={28}
                  viewBox="0 0 78 92"
                  fill="currentColor"
                  style={{ color: "#fff" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M78 46L-4.24146e-06 91.0333L-3.04523e-07 0.966675L78 46Z" fill="currentColor"/>
                </svg>
              )}
            </button>
            {/* HOME always enabled */}
            <button
              className="text-lg  absolute top-2 left-1/2 -translate-x-1/2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent wheel rotation
                handleClickHome();
              }}
            >
              <p className="text-white text-xs md:text-sm">HOME</p>
            </button>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f8f8f8] rounded-full shadow-inner" />
          </div>
        </div>
      </div>
      <audio ref={audioRef} preload="none" />
    </main>
  );
}
