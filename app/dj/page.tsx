"use client";

import { useRef, useState } from "react";

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
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
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
        "https://www.youtube.com/watch?v=eIiaiu_8EAc&list=RDeIiaiu_8EAc&start_radio=1&t=2307s",
    },
  ];
  const tracks = [
    {
      title: "Danser avec lui (feat Jon Edvard)",
      link: "https://soundcloud.com/elysium-001/danser-avec-lui-feat-eddi?si=c69728f78bc742348881de884ebe8765&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
    },
    {
      title: "Dns (ft. DJÓTTAR & Elisa Björg)",
      link: "https://soundcloud.com/user-162986744/dns-im-wokeft-djottar-elisa-bjorg?si=c726062719ee45c5bf9de93ff0280ce9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
    },
    {
      title: "Dns Cursed Mix (ft. DJÓTTAR & Elisa Björg)",
      link: "https://soundcloud.com/user-162986744/dns-im-woke-cursed?si=f670137edf984c259f3cbe3af4dd5e3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      stream:
        "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/SpotiDownloader.com+-+Feel+Me+-+Sassy+009.mp3",
    },
    {
      title: "3gs",
      link: "https://open.spotify.com/track/3V54Fgf8DZuKka7DkfBrm8?si=7328689a36ef495a",
      stream:
        "https://www.youtube.com/watch?v=eIiaiu_8EAc&list=RDeIiaiu_8EAc&start_radio=1&t=2307s",
    },
  ];

  const [currentItem, setCurrentItem] = useState<TrackItem>(mixes[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
  return (
    <main className=" min-h-screen p-20 w-full bg-white flex flex-col gap-10 items-start justify-start">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-medium mb-2">{currentItem.title}</h2>
        <button onClick={togglePlayback}>
          <img
            src={`/images/${isPlaying ? "pauseButton.png" : "playButton.png"}`}
            alt="Play"
            className="w-10 h-10"
          />
        </button>
        <audio ref={audioRef} src={currentItem.stream} preload="auto" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <h1>Mixes</h1>
          </div>
          <div className="flex flex-col gap-2">
            {mixes.map((mix, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Play Button as Image */}
                <button
                  onClick={() => {
                    if (currentItem.title === mix.title) {
                      togglePlayback();
                    } else {
                      setCurrentItem(mix);
                      setTimeout(() => {
                        playAudio();
                        setIsPlaying(true);
                      }, 100); // ensure audio element updates before play
                    }
                  }}
                >
                  <img
                    src={`/images/${
                      isPlaying && currentItem.title === mix.title
                        ? "pauseButton.png"
                        : "playButton.png"
                    }`}
                    alt="Play"
                    className="w-5 h-5 hover:opacity-80 transition-opacity"
                  />
                </button>

                {/* Hyperlinked Title */}
                <a
                  href={mix.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-customPink transition-colors duration-200"
                >
                  {mix.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1>Tracks</h1>
          </div>
          <div className="flex flex-col gap-2">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Play Button as Image */}
                <button
                  onClick={() => {
                    if (currentItem.title === track.title) {
                      togglePlayback();
                    } else {
                      setCurrentItem(track);
                      setTimeout(() => {
                        playAudio();
                        setIsPlaying(true);
                      }, 100); // ensure audio element updates before play
                    }
                  }}
                >
                  <img
                    src={`/images/${
                      isPlaying && currentItem.title === track.title
                        ? "pauseButton.png"
                        : "playButton.png"
                    }`}
                    alt="Play"
                    className="w-5 h-5 hover:opacity-80 transition-opacity"
                  />
                </button>

                {/* Hyperlinked Title */}
                <a
                  href={track.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-customPink transition-colors duration-200"
                >
                  {track.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none w-1/2 -rotate-6 ">
        <img
          src="/images/MUSIC.png"
          alt="music notes"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
