"use client";

import { useRef, useState } from "react";
import Image from "next/image"; 

export default function DJPage() {
  type TrackItem = {
    title: string;
    link: string;
    stream: string;
  };
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

  const [currentItem, setCurrentItem] = useState<TrackItem>(tracks[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isCurrentMix = mixes.some((mix) => mix.title === currentItem.title);
  const activeList = isCurrentMix ? mixes : tracks;
  const currentIndex = activeList.findIndex(
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
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevItem = activeList[currentIndex - 1];
      setCurrentItem(prevItem);
      setTimeout(() => {
        playAudio();
        setIsPlaying(true);
      }, 100);
    }
  };

  const goToNext = () => {
    if (currentIndex < activeList.length - 1) {
      const nextItem = activeList[currentIndex + 1];
      setCurrentItem(nextItem);
      setTimeout(() => {
        playAudio();
        setIsPlaying(true);
      }, 100);
    }
  };
  return (
    <main className="w-screen vh-100 h-screen flex items-center justify-center">
      <div className="bg-[#d9d9d9] w-full h-full  p-4 flex flex-col justify-between">
        {/* Screen */}
        <div className="bg-white rounded-md p-4 h-[60%] overflow-auto text-center flex flex-col items-center justify-center">
          {tracks.map((track, index) => (
           <p
           key={index}
           className={`text-3xl ${
             track.title === currentItem.title ? "text-gray-400" : "text-black"
           }`}
         >
           {track.title}
         </p>
         
          ))}
        </div>

        {/* Controller */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Top Buttons */}
          {/* <div className="absolute top-[-20px] left-[40px] w-10 h-10 bg-gray-300 rounded-full"></div>
      <div className="absolute top-[-20px] right-[40px] w-10 h-10 bg-gray-300 rounded-full"></div> */}

          {/* Click Wheel */}
          <div className="w-60 h-60 bg-white rounded-full flex flex-col items-center justify-center gap-2 text-center relative">
            <p className="text-lg text-gray-500 absolute top-2">HOME</p>
            <button className="absolute left-2 text-xl" onClick={goToPrevious}>
            <Image
                src="/images/backButtonGray.png" // your icon path
                alt="Play"
                width={28}
                height={28}
              />
            </button>
            <button className="absolute right-2 text-xl" onClick={goToNext}>
            <Image
                src="/images/skipButtonGray.png" // your icon path
                alt="Play"
                width={28}
                height={28}
              />
            </button>
            <button className="absolute ml-2 bottom-2" onClick={togglePlayback}>
              <Image
                src={`/images/${isPlaying ? "pauseButtonGray.png" : "playButtonGray.png"}`}
                alt="Play"
                width={24}
                height={24}
              />
            </button>
            <div className="w-20 h-20 bg-[#d9d9d9] rounded-full shadow-inner" />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={currentItem.stream} preload="auto" />
    </main>
  );
}
