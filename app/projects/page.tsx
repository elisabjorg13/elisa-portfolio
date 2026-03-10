"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.innerWidth < 700 || /Mobi|Android/i.test(navigator.userAgent),
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function ProjectsPage() {
  const isMobile = useIsMobile();
  const mainRef = useRef<HTMLElement | null>(null);
  const visualsVideoRef = useRef<HTMLVideoElement | null>(null);
  const ladiesRunVideoRef = useRef<HTMLVideoElement | null>(null);
  const ladiesRunSecondVideoRef = useRef<HTMLVideoElement | null>(null);
  const ladiesRunHelltimeVideoRef = useRef<HTMLVideoElement | null>(null);
  const ladiesRunEggRitualVideoRef = useRef<HTMLVideoElement | null>(null);
  const ladiesRunStrudelVideoRef = useRef<HTMLVideoElement | null>(null);
  const suskinLandingVideoRef = useRef<HTMLVideoElement | null>(null);
  const suskinShoppingVideoRef = useRef<HTMLVideoElement | null>(null);
  const suskinLandingSecondaryVideoRef = useRef<HTMLVideoElement | null>(null);
  const elisabjorgMockupVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisualsSoundOn, setIsVisualsSoundOn] = useState(false);
  const [isLadiesRunSoundOn, setIsLadiesRunSoundOn] = useState(false);
  const [isLadiesRunSecondSoundOn, setIsLadiesRunSecondSoundOn] =
    useState(false);
  const [isLadiesRunHelltimeSoundOn, setIsLadiesRunHelltimeSoundOn] =
    useState(false);
  const [isLadiesRunEggRitualSoundOn, setIsLadiesRunEggRitualSoundOn] =
    useState(false);
  const [isLadiesRunStrudelSoundOn, setIsLadiesRunStrudelSoundOn] =
    useState(false);
  const [isSuskinLandingSoundOn, setIsSuskinLandingSoundOn] = useState(false);
  const [isSuskinShoppingSoundOn, setIsSuskinShoppingSoundOn] = useState(false);
  const [isSuskinLandingSecondarySoundOn, setIsSuskinLandingSecondarySoundOn] =
    useState(false);
  const [isElisabjorgMockupSoundOn, setIsElisabjorgMockupSoundOn] =
    useState(false);

  const toggleVisualsVideoSound = () => {
    if (!visualsVideoRef.current) return;

    const video = visualsVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsVisualsSoundOn(!video.muted);
  };

  const toggleLadiesRunVideoSound = () => {
    if (!ladiesRunVideoRef.current) return;

    const video = ladiesRunVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsLadiesRunSoundOn(!video.muted);
  };

  const toggleLadiesRunSecondVideoSound = () => {
    if (!ladiesRunSecondVideoRef.current) return;

    const video = ladiesRunSecondVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsLadiesRunSecondSoundOn(!video.muted);
  };

  const toggleLadiesRunHelltimeVideoSound = () => {
    if (!ladiesRunHelltimeVideoRef.current) return;

    const video = ladiesRunHelltimeVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsLadiesRunHelltimeSoundOn(!video.muted);
  };

  const toggleLadiesRunEggRitualVideoSound = () => {
    if (!ladiesRunEggRitualVideoRef.current) return;

    const video = ladiesRunEggRitualVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsLadiesRunEggRitualSoundOn(!video.muted);
  };

  const toggleLadiesRunStrudelVideoSound = () => {
    if (!ladiesRunStrudelVideoRef.current) return;

    const video = ladiesRunStrudelVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsLadiesRunStrudelSoundOn(!video.muted);
  };

  const toggleSuskinLandingVideoSound = () => {
    if (!suskinLandingVideoRef.current) return;

    const video = suskinLandingVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsSuskinLandingSoundOn(!video.muted);
  };

  const toggleSuskinShoppingVideoSound = () => {
    if (!suskinShoppingVideoRef.current) return;

    const video = suskinShoppingVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsSuskinShoppingSoundOn(!video.muted);
  };

  const toggleSuskinLandingSecondaryVideoSound = () => {
    if (!suskinLandingSecondaryVideoRef.current) return;

    const video = suskinLandingSecondaryVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsSuskinLandingSecondarySoundOn(!video.muted);
  };

  const toggleElisabjorgMockupVideoSound = () => {
    if (!elisabjorgMockupVideoRef.current) return;

    const video = elisabjorgMockupVideoRef.current;
    video.muted = !video.muted;
    video.volume = 0.7;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    setIsElisabjorgMockupSoundOn(!video.muted);
  };

  useEffect(() => {
    if (!mainRef.current) return;

    const videos = Array.from(
      mainRef.current.querySelectorAll("video"),
    ) as HTMLVideoElement[];

    const MIN_VISIBLE_RATIO = 0.25;

    const updateFocusedPlayback = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let focusedVideo: HTMLVideoElement | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const video of videos) {
        const rect = video.getBoundingClientRect();
        const visiblePixels =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibleRatio = visiblePixels / Math.max(rect.height, 1);

        if (visibleRatio < MIN_VISIBLE_RATIO) {
          if (!video.paused) video.pause();
          continue;
        }

        const videoCenter = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(videoCenter - viewportCenter);

        if (distanceToCenter < closestDistance) {
          closestDistance = distanceToCenter;
          focusedVideo = video;
        }
      }

      for (const video of videos) {
        if (video === focusedVideo) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else if (!video.paused) {
          video.pause();
        }
      }
    };

    let rafId: number | null = null;
    const scheduleUpdate = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateFocusedPlayback();
      });
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    document.addEventListener("visibilitychange", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.removeEventListener("visibilitychange", scheduleUpdate);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .text-container {
          width: 100%;
          align-self: flex-start;
          box-sizing: border-box;
        }

        .projects-container {
          width: min(100%, 980px);
          margin: 0 auto;
        }

        @media (min-width: 1920px) {
          .text-container {
            max-width: 70% !important;
            width: auto;
            align-self: flex-start;
          }
        }
      `}</style>
      <main
        ref={mainRef}
        className={`h-screen w-full mx-auto flex flex-col items-center justify-start mt-2 md:mt-4 gap-10 md:gap-20 cursor-pointer ${isMobile ? "text-sm" : "text-base"} pb-20`}
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        {/* Emergency Exit Button */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            position: "absolute",
            top: isMobile ? "10px" : "20px",
            left: isMobile ? "5px" : "20px",
            width: isMobile ? "40px" : "60px",
            height: isMobile ? "40px" : "60px",
            borderRadius: "50%",
            border: "2px solid white",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            cursor: "pointer",
            transition: "all 0.3s ease",
            zIndex: 100,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
          }}
        >
          <svg
            width={isMobile ? "25" : "40"}
            height={isMobile ? "25" : "40"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17L7 12L12 7"
              stroke="#9333ea"
              strokeWidth="1.2"
              strokeLinecap="butt"
              strokeLinejoin="miter"
            />
          </svg>
        </button>
        <h1
          className={`pl-20 pt-8 ${isMobile ? "text-xl" : "text-3xl"} w-full text-left`}
        >
          Projects - Content
        </h1>
        <div
          className={`projects-container flex flex-col gap-16 md:gap-28 ${isMobile ? "px-4" : "px-10"}`}
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* Internet Explorer 10+ */,
          }}
        >
          <div className={`flex flex-col ${isMobile ? "gap-24" : "gap-40"}`}>
            <div className="flex flex-col gap-4">
              <h2 className={isMobile ? "text-lg" : "text-2xl"}>
                Ladies run, there is an egg in the rose garden
              </h2>
              <p>
                <span className="text-customPurple">Project type:</span>{" "}
                Freewalking video game
              </p>
              <p>
                <span className="text-customPurple">Tools:</span> Unity, C#,
                Blender, Figma, Strudel REPL, Ableton
              </p>
              <p className="text-container text-justify">
                <span className="text-customPurple">Description:</span>{" "}
                Exploration PC game created for an art exhibition that will be
                held in{" "}
                <a
                  href="https://herma.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customPurple hover:underline"
                >
                  Herma
                </a>{" "}
                in early april. Players are invited to traverse through 3
                digital universes that reflect the themes of post internet
                culture and the rituals of being online. And eggs. The universes
                are modelled by me using blender. The sound design for the
                universes forms their emotional architecture, which I produce
                using either live coding environment Strudel or Ableton.
              </p>
              <div
                className={`flex flex-col mt-4 gap-4 ${isMobile ? "text-left" : ""}`}
              >
                <div
                  className={`flex flex-col ${isMobile ? "gap-10 items-center w-full" : "gap-20 items-center"}`}
                >
                  <div className="relative">
                    <video
                      ref={ladiesRunVideoRef}
                      src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/compressed+shi/ladies+run+home-audio.mp4"
                      width={isMobile ? 300 : 900}
                      height={isMobile ? 200 : 700}
                      className="h-auto rounded-md shadow-lg border border-gray-200 "
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <button
                      onClick={toggleLadiesRunVideoSound}
                      aria-label={
                        isLadiesRunSoundOn ? "Mute video" : "Unmute video"
                      }
                      className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                      style={{
                        width: isMobile ? "28px" : "60px",
                        height: isMobile ? "28px" : "60px",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          isLadiesRunSoundOn
                            ? "/images/speaker_icon_black.png"
                            : "/images/speaker_icon_sound_off.png"
                        }
                        alt={isLadiesRunSoundOn ? "Sound On" : "Sound Off"}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </button>
                  </div>
                  <div className="relative">
                    <video
                      ref={ladiesRunSecondVideoRef}
                      src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/compressed+shi/lobbytime.mp4"
                      width={isMobile ? 300 : 900}
                      height={isMobile ? 200 : 700}
                      className="h-auto h-auto rounded-md shadow-lg border border-gray-200"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <button
                      onClick={toggleLadiesRunSecondVideoSound}
                      aria-label={
                        isLadiesRunSecondSoundOn ? "Mute video" : "Unmute video"
                      }
                      className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                      style={{
                        width: isMobile ? "28px" : "60px",
                        height: isMobile ? "28px" : "60px",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          isLadiesRunSecondSoundOn
                            ? "/images/speaker_icon_black.png"
                            : "/images/speaker_icon_sound_off.png"
                        }
                        alt={
                          isLadiesRunSecondSoundOn ? "Sound On" : "Sound Off"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </button>
                  </div>
                  <div className="relative">
                    <video
                      ref={ladiesRunHelltimeVideoRef}
                      src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/compressed+shi/helltime.mp4"
                      width={isMobile ? 300 : 900}
                      height={isMobile ? 200 : 700}
                      className="h-auto h-auto rounded-md shadow-lg border border-gray-200"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <button
                      onClick={toggleLadiesRunHelltimeVideoSound}
                      aria-label={
                        isLadiesRunHelltimeSoundOn
                          ? "Mute video"
                          : "Unmute video"
                      }
                      className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                      style={{
                        width: isMobile ? "28px" : "60px",
                        height: isMobile ? "28px" : "60px",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          isLadiesRunHelltimeSoundOn
                            ? "/images/speaker_icon_black.png"
                            : "/images/speaker_icon_sound_off.png"
                        }
                        alt={
                          isLadiesRunHelltimeSoundOn ? "Sound On" : "Sound Off"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </button>
                  </div>
                  <div className="relative">
                    <video
                      ref={ladiesRunEggRitualVideoRef}
                      src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/compressed+shi/eggRitoal.mp4"
                      width={isMobile ? 300 : 900}
                      height={isMobile ? 200 : 700}
                      className="h-auto h-auto rounded-md shadow-lg border border-gray-200"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <button
                      onClick={toggleLadiesRunEggRitualVideoSound}
                      aria-label={
                        isLadiesRunEggRitualSoundOn
                          ? "Mute video"
                          : "Unmute video"
                      }
                      className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                      style={{
                        width: isMobile ? "28px" : "60px",
                        height: isMobile ? "28px" : "60px",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          isLadiesRunEggRitualSoundOn
                            ? "/images/speaker_icon_black.png"
                            : "/images/speaker_icon_sound_off.png"
                        }
                        alt={
                          isLadiesRunEggRitualSoundOn ? "Sound On" : "Sound Off"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </button>
                  </div>
                  <div className="relative overflow-hidden rounded-md shadow-lg border border-gray-200">
                    <video
                      ref={ladiesRunStrudelVideoRef}
                      src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wrld/strudel+video.mov"
                      width={isMobile ? 300 : 900}
                      height={isMobile ? 200 : 560}
                      className="h-auto block"
                      style={{
                        transform: "scale(1.02)",
                        transformOrigin: "center",
                      }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <button
                      onClick={toggleLadiesRunStrudelVideoSound}
                      aria-label={
                        isLadiesRunStrudelSoundOn
                          ? "Mute video"
                          : "Unmute video"
                      }
                      className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                      style={{
                        width: isMobile ? "28px" : "60px",
                        height: isMobile ? "28px" : "60px",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          isLadiesRunStrudelSoundOn
                            ? "/images/speaker_icon_black.png"
                            : "/images/speaker_icon_sound_off.png"
                        }
                        alt={
                          isLadiesRunStrudelSoundOn ? "Sound On" : "Sound Off"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-[600px] mx-auto">
              <h2 className={isMobile ? "text-lg" : "text-2xl"}>
                Real-Time Radar Stream Viewer
              </h2>
              <p>
                <span className="text-customPurple">Project type:</span> Data
                visualization
              </p>
              <p>
                <span className="text-customPurple">Tools:</span> Python, React,
                HTML5
              </p>
              <p className="text-container text-justify">
                <span className="text-customPurple">Description:</span> Built a
                real-time maritime radar visualization system in collaboration
                with a radar engineer. The system ingests live UDP radar packets
                through a Python backend and streams processed sweeps to a
                frontend for low-latency display. Currently contributing to a
                maritime inertial navigation system that fuses IMU, radar, and
                sonar data for real-time vessel navigation. This radar view
                shows a few live sweeps from the Reykjavík harbor area.
              </p>
              <div
                className={`flex flex-col mt-4 gap-4 ${isMobile ? "text-left" : ""}`}
              >
                <div
                  className={`flex flex-col ${isMobile ? "gap-10 items-center w-full" : "gap-20 items-center"}`}
                >
                  <video
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/msrs/Untitled+(600+x+600+px)+(1).mp4"
                    width={isMobile ? 350 : 600}
                    height={isMobile ? 250 : 600}
                    className="h-auto rounded-md shadow-lg border border-gray-200 p-3 bg-black"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className={isMobile ? "text-lg" : "text-2xl"}>SUUÐ</h2>
            <p>
              <span className="text-customPurple">Project type:</span> Live
              performance sound design
            </p>
            <p>
              <span className="text-customPurple">Tools:</span> Rekordbox, Fl
              studio
            </p>
            <p className="text-container text-justify">
              <span className="text-customPurple">Description:</span> Live
              performace graduation project for the Icelandic Academy of the
              Arts. I created the soundscape for the performance by live mixing
              miscellaneous audioclips we sat on, one of them being an hour long
              audio recording of a mosquito in a jar. Whole performance
              available{" "}
              <a
                href="https://vimeo.com/channels/svidloka/1069949398"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customPurple hover:underline"
              >
                here
              </a>
              .
            </p>
            <div
              className={`flex flex-col mt-4 gap-4 ${isMobile ? "text-left" : ""}`}
            >
              <div
                className={`flex flex-col ${isMobile ? "gap-10 items-center w-full" : "gap-20 items-center"}`}
              >
                <div className="relative">
                  <video
                    ref={suskinLandingVideoRef}
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/compressed+shi/videoSU%C3%90.mp4"
                    width={isMobile ? 300 : 900}
                    height={isMobile ? 200 : 700}
                    className="h-auto rounded-md shadow-lg border border-gray-200 "
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <button
                    onClick={toggleSuskinLandingVideoSound}
                    aria-label={
                      isSuskinLandingSoundOn ? "Mute video" : "Unmute video"
                    }
                    className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                    style={{
                      width: isMobile ? "28px" : "60px",
                      height: isMobile ? "28px" : "60px",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={
                        isSuskinLandingSoundOn
                          ? "/images/speaker_icon_black.png"
                          : "/images/speaker_icon_sound_off.png"
                      }
                      alt={isSuskinLandingSoundOn ? "Sound On" : "Sound Off"}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </button>
                </div>
                <div className="relative">
                  <video
                    ref={suskinShoppingVideoRef}
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/compressed+shi/flugurCrazy.mp4"
                    width={isMobile ? 300 : 900}
                    height={isMobile ? 200 : 700}
                    className="h-auto h-auto rounded-md shadow-lg border border-gray-200"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <button
                    onClick={toggleSuskinShoppingVideoSound}
                    aria-label={
                      isSuskinShoppingSoundOn ? "Mute video" : "Unmute video"
                    }
                    className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                    style={{
                      width: isMobile ? "28px" : "60px",
                      height: isMobile ? "28px" : "60px",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={
                        isSuskinShoppingSoundOn
                          ? "/images/speaker_icon_black.png"
                          : "/images/speaker_icon_sound_off.png"
                      }
                      alt={isSuskinShoppingSoundOn ? "Sound On" : "Sound Off"}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className={isMobile ? "text-lg" : "text-2xl"}>Visuals RVK X</h2>
            <p>
              <span className="text-customPurple">Project type:</span> Live
              visuals
            </p>
            <p>
              <span className="text-customPurple">Tools:</span> Touchdesigner
            </p>
            <p className="text-container text-justify">
              <span className="text-customPurple">Description:</span> Created
              for the RVK X event. Since I was DJing at the event, I also
              created the visuals for my set by myself to reflect our visual
              identity. The visuals were streamed live to the event. The apple
              deformation is driven by the bass amplitude of the track, layered
              over an oscilloscope-style waveform visualization.
            </p>
            <div
              className={`flex flex-col ${isMobile ? "gap-10 items-center" : "gap-20 items-center"}`}
            >
              <div className="relative">
                <video
                  ref={visualsVideoRef}
                  src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wfhwebsite/visualsrvkX.mp4"
                  width={isMobile ? 200 : 900}
                  height={isMobile ? 100 : 500}
                  className="h-auto rounded-md shadow-lg border border-gray-200"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                />
                <button
                  onClick={toggleVisualsVideoSound}
                  aria-label={isVisualsSoundOn ? "Mute video" : "Unmute video"}
                  className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                  style={{
                    width: isMobile ? "28px" : "60px",
                    height: isMobile ? "28px" : "60px",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={
                      isVisualsSoundOn
                        ? "/images/speaker_icon_black.png"
                        : "/images/speaker_icon_sound_off.png"
                    }
                    alt={isVisualsSoundOn ? "Sound On" : "Sound Off"}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </button>
              </div>
              <div className="">
                <Image
                  src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wfhwebsite/Screenshot+2026-03-05+at+20.56.45.png"
                  alt="For You mix poster"
                  width={isMobile ? 200 : 900}
                  height={isMobile ? 100 : 500}
                  className="h-auto rounded-md shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className={isMobile ? "text-lg" : "text-2xl"}>
              Elysium & Katrinhersis: For You
            </h2>
            <p>
              <span className="text-customPurple">Project type:</span> Audio mix
            </p>
            <p>
              <span className="text-customPurple">Tools:</span> Fl studio,
              rekordbox, photoshop
            </p>
            <p className="text-container text-justify">
              <span className="text-customPurple">Description:</span> Mix for{" "}
              <a
                href="https://egrego.re/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customPurple hover:underline"
              >
                Egregore
              </a>{" "}
              collective, based in Toulouse, France. Experimented with layering
              our youtube liked videos collection, from the audioclips of
              someone giving a review of an infinity scarf to a local dj trying
              spicy food. Through overstimulation, dense layering, and
              atmospheric textures, we construct ethereal soundscapes built on
              the juxtaposition of the mundane and the surreal, blurring the
              boundaries between reality, imagination, and memory. Mix covers
              designed by us using photoshop.
            </p>
            <p className="text-container text-justify">
              Listen on my iPod{" "}
              <a href="/dj" className="text-customPurple hover:underline">
                here
              </a>
              .
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-row gap-10 items-center">
                <div className="">
                  <Image
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/foryou/FORYOU.png"
                    alt="For You mix poster"
                    width={isMobile ? 200 : 430}
                    height={isMobile ? 100 : 500}
                    className="h-auto rounded-md shadow-lg border border-gray-200"
                  />
                </div>
                <div className="">
                  <Image
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/foryou/foryou2.png"
                    alt="For You mix player"
                    width={isMobile ? 200 : 430}
                    height={isMobile ? 100 : 500}
                    className="h-auto rounded-md shadow-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className={isMobile ? "text-lg" : "text-2xl"}>
              Knackered drop campaign
            </h2>
            <p>
              <span className="text-customPurple">Project type:</span> Digital
              drop campaign
            </p>
            <p>
              <span className="text-customPurple">Tools:</span> Next.js, Css.
            </p>
            <p className="text-container pb-5">
              <span className="text-customPurple">Description:</span> I created
              a drop campaign for Danish electronic artist Knackered. For each
              weekly album drop, we released a new digital world where the song
              could be streamed before the full album was out. We designed each
              world together and I coded the websites. I hosted the experience
              myself in order to bypass streaming services like Spotify. By
              scanning a QR code, listeners could enter that week&apos;s world
              containing the track. One of the QR code mirrors was exhibited at
              the music venue / record label{" "}
              <a
                href="https://smekkleysa.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customPurple hover:underline"
              >
                Smekkleysa
              </a>
              .
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="">
                  <Image
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/ida/demo1.png"
                    alt="For You mix poster"
                    width={isMobile ? 200 : 215}
                    height={isMobile ? 100 : 500}
                    className=""
                  />
                </div>
                <div className="">
                  <Image
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/ida/demo2.png"
                    alt="For You mix player"
                    width={isMobile ? 200 : 215}
                    height={isMobile ? 100 : 500}
                    className=""
                  />
                </div>
                <div className="">
                  <Image
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/ida/demo3.png"
                    alt="For You mix poster"
                    width={isMobile ? 200 : 215}
                    height={isMobile ? 100 : 500}
                    className=""
                  />
                </div>
                <div className="">
                  <Image
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/ida/demo4.png"
                    alt="For You mix player"
                    width={isMobile ? 200 : 215}
                    height={isMobile ? 100 : 500}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className={isMobile ? "text-lg" : "text-2xl"}>
              Work From Home studios
            </h2>
            <p className="text-container text-justify">
              Work From Home Studios is a creative tech studio I cofounded with
              Katrín Hersisdóttir. We design and implement audiovisual
              identities and websites.
            </p>
            <div
              className={`flex flex-col mt-4 gap-4 w-full ${isMobile ? "text-left max-w-full" : "max-w-[600px] mx-auto"}`}
            >
              <p
                className={`text-customPurple w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
              >
                Komumutiminus.is
              </p>
              <div className="flex flex-col gap-1">
                <p>
                  <span className="text-customPurple">Project type:</span> Audio
                  visual identity
                </p>
                <p>
                  <span className="text-customPurple">Tools:</span> Ableton,
                  blender, photoshop, after effects
                </p>
                <p className="text-container text-justify">
                  <span className="text-customPurple">Description:</span> Poster
                  and motion-led visuals for grassroots grassroot performance
                  art festival Komum út í mínus (e. let's end up in a deficit).
                  We designed the visuals and sound in collaboration and I
                  implemented the animation.
                </p>
              </div>
              <div
                className={`flex flex-col ${isMobile ? "gap-10 items-center w-full" : "gap-20 items-center"}`}
              >
                <div className="relative">
                  <video
                    ref={suskinLandingSecondaryVideoRef}
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/komumutiminus/komumutiminus.final.mp4"
                    width={isMobile ? 300 : 600}
                    height={isMobile ? 200 : 700}
                    className="h-auto rounded- shadow-lg border border-gray-200"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <button
                    onClick={toggleSuskinLandingSecondaryVideoSound}
                    aria-label={
                      isSuskinLandingSecondarySoundOn
                        ? "Mute video"
                        : "Unmute video"
                    }
                    className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                    style={{
                      width: isMobile ? "28px" : "60px",
                      height: isMobile ? "28px" : "60px",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={
                        isSuskinLandingSecondarySoundOn
                          ? "/images/speaker_icon_black.png"
                          : "/images/speaker_icon_sound_off.png"
                      }
                      alt={
                        isSuskinLandingSecondarySoundOn
                          ? "Sound On"
                          : "Sound Off"
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </button>
                </div>

                <Image
                  src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/komumutiminus/lifidererfitt.postermockup.png"
                  alt="Suskin Shopping Page"
                  width={isMobile ? 300 : 600}
                  height={isMobile ? 200 : 700}
                  className="h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-4 w-full max-w-[900px] mx-auto text-left">
              <p
                className={`text-customPurple w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
                style={{ paddingLeft: isMobile ? undefined : "106px" }}
              >
                Katrinhers.is
              </p>
              <div
                className="flex flex-col gap-1"
                style={{
                  paddingLeft: isMobile ? undefined : "106px",
                  paddingRight: isMobile ? undefined : "106px",
                }}
              >
                <p>
                  <span className="text-customPurple">Project type:</span>{" "}
                  Portfolio website
                </p>
                <p>
                  <span className="text-customPurple">Tools:</span> Next.js, Css
                </p>
                <p className="text-container text-justify">
                  <span className="text-customPurple">Description:</span>{" "}
                  Website design and implementation for Katrinhers.is. Designed
                  by Katrín Hersisdóttir and implemented by me. Mockup design
                  for the website by me.
                </p>
              </div>
              <div
                className={`flex flex-col w-full ${isMobile ? "gap-10 items-center" : "gap-20 items-center"}`}
              >
                <video
                  src="/images/whitebgmockupcompressed.mp4"
                  width={isMobile ? 350 : 900}
                  height={isMobile ? 250 : 700}
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                />
              </div>
            </div>
            <div
              className={`flex flex-col mt-4 gap-4 w-full ${isMobile ? "text-left max-w-full" : "max-w-[600px] mx-auto"}`}
            >
              <p
                className={`text-customPurple w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
              >
                Elisabjorg.is
              </p>
              <div className="flex flex-col gap-1">
                <p>
                  <span className="text-customPurple">Project type:</span>{" "}
                  Website and mockup design
                </p>
                <p>
                  <span className="text-customPurple">Tools:</span> Three.js,
                  Css, React3fiber, photoshop, after effects, Ableton.
                </p>
                <p className="text-container text-justify">
                  <span className="text-customPurple">Description:</span> A My
                  own digital world portfolio website. I designed, modelled and
                  implemented the 3d world myself using blender and three.js. I
                  modelled myself into my world and animated the model to follow
                  the mouse movements. The soundscape was produced in
                  collaboration with a friend in Ableton. Mockup design by
                  Katrín Hersisdóttir.
                </p>
              </div>
              <div
                className={`flex flex-col gap-20 ${isMobile ? "items-center w-full" : "items-center"}`}
              >
                <div className="relative">
                  <video
                    ref={elisabjorgMockupVideoRef}
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/elisabjorg/elisabjorg.is.mockup1.mp4"
                    width={isMobile ? 300 : 600}
                    height={isMobile ? 200 : 700}
                    className="h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <button
                    onClick={toggleElisabjorgMockupVideoSound}
                    aria-label={
                      isElisabjorgMockupSoundOn ? "Mute video" : "Unmute video"
                    }
                    className="absolute right-2 top-2 z-10 transition-transform duration-300 hover:scale-105"
                    style={{
                      width: isMobile ? "28px" : "60px",
                      height: isMobile ? "28px" : "60px",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={
                        isElisabjorgMockupSoundOn
                          ? "/images/speaker_icon_black.png"
                          : "/images/speaker_icon_sound_off.png"
                      }
                      alt={isElisabjorgMockupSoundOn ? "Sound On" : "Sound Off"}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </button>
                </div>

                <Image
                  src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/elisabjorg/elisa.is.coochiemockup.jpg"
                  alt="Suskin Shopping Page"
                  width={isMobile ? 300 : 600}
                  height={isMobile ? 200 : 700}
                  className="h-auto"
                />
                <div className="relative">
                  <video
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/elisabjorg/elisabjorg.is.simimockup.mp4"
                    width={isMobile ? 300 : 600}
                    height={isMobile ? 200 : 700}
                    className="h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                </div>
                <Image
                  src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/elisabjorg/elisa.istoiletmockup.xray.jpg"
                  alt="Suskin Shopping Page"
                  width={isMobile ? 300 : 600}
                  height={isMobile ? 200 : 700}
                  className="h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-4 w-full max-w-[900px] mx-auto text-left">
              <p
                className={`text-customPurple w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
                style={{ paddingLeft: isMobile ? undefined : "50px", paddingRight: isMobile ? undefined : "50px" }}
              >
                Suskin.is popup website
              </p>
              <div
                className="flex flex-col gap-1"
                style={{
                  paddingLeft: isMobile ? undefined : "50px",
                  paddingRight: isMobile ? undefined : "50px",
                }}
              >
                <p>
                  <span className="text-customPurple">Project type:</span> Popup website
                </p>
                <p>
                  <span className="text-customPurple">Tools:</span> Liquid
                </p>
                <p className="text-container text-justify">
                  <span className="text-customPurple">Description:</span>{" "}
                  Popup website created for the{" "}
                  <a
                    href="https://www.instagram.com/suskin___/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-customPurple hover:underline"
                  >
                    Suskin
                  </a>{" "}
                  launch at Reykjavík Design March, co-designed with Katrín
                  Hersisdóttir and implemented by me.
                </p>
              </div>
              <div
                className={`flex flex-col w-full ${isMobile ? "gap-4 items-center" : "gap-8 items-center"}`}
              >
                <Image
                  src="/images/suskinLanding.png"
                  alt="Suskin Landing Page"
                  width={isMobile ? 300 : 900}
                  height={isMobile ? 200 : 700}
                  className="w-full h-auto"
                />

                <Image
                  src="/images/suskinShopping.png"
                  alt="Suskin Shopping Page"
                  width={isMobile ? 300 : 900}
                  height={isMobile ? 200 : 700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[600px] mx-auto  pb-10">
            <h2 className={isMobile ? "text-lg" : "text-2xl"}>
              Data analysis and visualization
            </h2>
            <p>
              <span className="text-customPurple">Project type:</span> Data
              analysis and visualization
            </p>
            <p>
              <span className="text-customPurple">Tools:</span> R, GIS datasets,
              TomTom GPS data
            </p>
            <p className="text-container text-justify">
              <span className="text-customPurple">Description:</span> Rannís
              innovation project focused on identifying optimal locations for a
              startup&apos;s urban pickup hubs using linear regression and
              geospatial mapping. Data visualisation created a simple and understandeable
              heatmap solution used for decision making. I performed the data analysis in collaboration with another student and implemented the visualization myself. 
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-row gap-4 items-center">
                <Image
                  src="/images/pikkolo .png" // Must be in the public/ folder
                  alt="Magic Wand"
                  width={isMobile ? 200 : 600}
                  height={isMobile ? 100 : 400}
                  className=" h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
