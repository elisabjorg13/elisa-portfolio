"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DJPage() {
  const router = useRouter();
  type TrackItem = {
    title: string;
    link: string;
    stream: string;
  };
  const [menu, setMenu] = useState<'main' | 'ELYSIUM' | 'DJ ÓK'>('main');
  const mixes = [
    {
      title: "DJ örsi jersey club mix - Drif Radio",
      link: "https://www.youtube.com/watch?v=eIiaiu_8EAc&list=RDeIiaiu_8EAc&start_radio=1&t=2307s",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
    },
    {
      title: "DJ ÓK mix 002 - Drif Radio",
      link: "https://www.youtube.com/watch?v=EVXhIASN9iE&list=RDEVXhIASN9iE&start_radio=1&t=485s",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
    },
    {
      title: "DJ ÓK mix 001 - Drif Radio",
      link: "https://www.youtube.com/watch?v=dIoA7rcR2Io&list=RDdIoA7rcR2Io&start_radio=1&t=1739s",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
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
        "https://www.youtube.com/watch?v=eIiaiu_8EAc&list=RDeIiaiu_8EAc&start_radio=1&t=2307s",
    },
    {
      title: "ELYSIUM Promising young woman - Egregore",
      link: "https://soundcloud.com/egreg-re/promising-young-woman-elysium-avril-2025?si=9354fd0dfd8a4ce0867cffbf63d747b5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://www.youtube.com/watch?v=eIiaiu_8EAc&list=RDeIiaiu_8EAc&start_radio=1&t=2307s",
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
  const combinedList = menu === 'ELYSIUM' ? tracks : menu === 'DJ ÓK' ? mixes : [];

  const [currentItem, setCurrentItem] = useState<TrackItem>(tracks[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentIndex = combinedList.findIndex(
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
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleClickHome = () => {
    router.push("/"); // or wherever you want to send the user
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevItem = combinedList[currentIndex - 1];
      setCurrentItem(prevItem);
      setTimeout(() => {
        playAudio();
        setIsPlaying(true);
      }, 100);
    }
  };

  const goToNext = () => {
    if (currentIndex < combinedList.length - 1) {
      const nextItem = combinedList[currentIndex + 1];
      setCurrentItem(nextItem);
      setTimeout(() => {
        playAudio();
        setIsPlaying(true);
      }, 100);
    }
  };

  return (
    <main className="w-screen vh-100 h-screen flex items-center justify-center" style={{ cursor: 'pointer' }}>
      <div className="bg-[#d9d9d9] w-full h-full  p-4 flex flex-col justify-between">
        {/* Screen */}
        <div className="relative bg-white rounded-md p-4 h-[60%] overflow-auto text-left space-y-4 flex flex-col justify-start items-start">
          <Image
            src="/images/MUSIC.png"
            alt="Background Art"
            fill
            className="pointer-events-none object-contain opacity-30 z-0 absolute right-0 bottom-0"
          />
          <div className="relative z-10 w-full">
            {menu === 'main' && (
              <ul className="space-y-2 mt-4 w-full">
                <li
                  className="text-lg cursor-pointer px-4 py-2 rounded flex items-center justify-between bg-customPink text-white font-bold"
                  onClick={() => setMenu('ELYSIUM')}
                >
                  ELYSIUM
                  <span className="ml-2">▶</span>
                </li>
                <li
                  className="text-lg cursor-pointer px-4 py-2 rounded flex items-center justify-between bg-customBlue text-white font-bold mt-2"
                  onClick={() => setMenu('DJ ÓK')}
                >
                  DJ ÓK
                  <span className="ml-2">▶</span>
                </li>
              </ul>
            )}
            {menu !== 'main' && (
              <>
                <button
                  className="mb-2 text-customGray text-sm underline"
                  onClick={() => setMenu('main')}
                >
                  ← Back
                </button>
                <h1 className="text-customPink mb-2 text-xl font-bold">{menu === 'ELYSIUM' ? 'Tracks' : 'Mixes'}</h1>
                <ul className="space-y-1">
                  {combinedList.map((item) => (
                    <li
                      key={item.title}
                      className={`text-lg cursor-pointer ${item.title === currentItem?.title ? 'text-gray-400' : 'text-customGray'}`}
                      onClick={() => {
                        setCurrentItem(item);
                        setTimeout(() => {
                          playAudio();
                          setIsPlaying(true);
                        }, 100);
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Controller */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Circular Insta/Cloud buttons above the wheel */}

          {/* Click Wheel */}
          <div className="w-60 h-60 bg-white rounded-full flex flex-col items-center justify-center gap-2 text-center relative">
            {/* Insta and Cloud buttons on the wheel, flanking HOME */}
            <button
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow font-bold text-xs absolute left-0 top-4 z-10
                ${menu === 'ELYSIUM'
                  ? 'bg-white border-2 border-customPink text-customPink hover:bg-customPink hover:text-white transition-colors cursor-pointer font-serif'
                  : menu === 'DJ ÓK'
                  ? 'bg-white border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors cursor-pointer font-serif'
                  : 'bg-white border-2 border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors font-serif'}
              `}
              style={{ transform: 'translate(-50%, 0)', textTransform: 'uppercase', letterSpacing: '0.1em', pointerEvents: menu === 'ELYSIUM' || menu === 'DJ ÓK' ? 'auto' : 'none', padding: '0.75rem' }}
              onClick={() => {
                if (menu === 'ELYSIUM') {
                  window.open('https://www.instagram.com/', '_blank');
                } else if (menu === 'DJ ÓK') {
                  window.open('https://www.instagram.com/djokokokokokok/', '_blank');
                }
              }}
            >
              Insta
            </button>
            <button
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow font-bold text-xs absolute right-0 top-4 z-10
                ${menu === 'ELYSIUM'
                  ? 'bg-white border-2 border-customPink text-customPink hover:bg-customPink hover:text-white transition-colors cursor-pointer font-serif'
                  : menu === 'DJ ÓK'
                  ? 'bg-white border-2 border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors cursor-pointer font-serif'
                  : 'bg-white border-2 border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors font-serif'}
              `}
              style={{ transform: 'translate(50%, 0)', textTransform: 'uppercase', letterSpacing: '0.1em', pointerEvents: menu === 'ELYSIUM' || menu === 'DJ ÓK' ? 'auto' : 'none', padding: '0.75rem' }}
              onClick={() => {
                if (menu === 'ELYSIUM') {
                  window.open('https://soundcloud.com/elysium-001', '_blank');
                } else if (menu === 'DJ ÓK') {
                  window.open('https://soundcloud.com/djok-889666396', '_blank');
                }
              }}
            >
              Cloud
            </button>
            {/* Disable prev, next, play/pause, back when on main menu */}
            <button
              className="absolute left-2 text-xl"
              onClick={goToPrevious}
              disabled={menu === 'main'}
              style={menu === 'main' ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              <Image
                src="/images/backButtonGray.png"
                alt="Play"
                width={28}
                height={28}
              />
            </button>
            <button
              className="absolute right-2 text-xl"
              onClick={goToNext}
              disabled={menu === 'main'}
              style={menu === 'main' ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              <Image
                src="/images/skipButtonGray.png"
                alt="Play"
                width={28}
                height={28}
              />
            </button>
            <button
              className="absolute ml-2 bottom-2"
              onClick={togglePlayback}
              disabled={menu === 'main'}
              style={menu === 'main' ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            >
              <Image
                src={`/images/${isPlaying ? "pauseButtonGray.png" : "playButtonGray.png"}`}
                alt="Play"
                width={24}
                height={24}
              />
            </button>
            {/* HOME always enabled */}
            <button
              className="text-lg absolute top-2 left-1/2 -translate-x-1/2"
              onClick={handleClickHome}
            >
              <p className="text-gray-500">HOME</p>
            </button>
            <div className="w-20 h-20 bg-[#d9d9d9] rounded-full shadow-inner" />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={currentItem.stream} preload="auto" />
    </main>
  );
}
