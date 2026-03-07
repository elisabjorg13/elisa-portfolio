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
  const [isLadiesRunSecondSoundOn, setIsLadiesRunSecondSoundOn] = useState(false);
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
        <div
          className={`projects-container flex flex-col gap-10 md:gap-10 pt-12 ${isMobile ? "px-4" : "px-10"}`}
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* Internet Explorer 10+ */,
          }}
        >
          <h1
            className={`${isMobile ? "text-xl" : "text-3xl"} w-full text-left`}
          >
            Projects - Content
          </h1>
          <div className="flex flex-col gap-10">
            <div></div>
            <div className="flex flex-col gap-10">
            <h2>Ladies run, there's an egg in the rose garden</h2>
            <p className="text-container">
              Work From Home Studios I cofounded with Katrín Hersisdóttir. It is
              a web design studio where I implement websites for various brands
              and artists.
            </p>
            <div
              className={`flex flex-col mt-4 gap-4 ${isMobile ? "text-left" : ""}`}
            >
              <div
                className={`flex flex-col gap-8 ${isMobile ? "items-center w-full" : "items-center"}`}
              >
                <div className="relative">
                  <video
                    ref={ladiesRunVideoRef}
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wrld/ladies+run+home-audio.mp4"
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
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wrld/lobbytime.mp4"
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
                      alt={isLadiesRunSecondSoundOn ? "Sound On" : "Sound Off"}
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
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wrld/helltime.mp4"
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
                      isLadiesRunHelltimeSoundOn ? "Mute video" : "Unmute video"
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
                      alt={isLadiesRunHelltimeSoundOn ? "Sound On" : "Sound Off"}
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
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/wrld/eggritualgo.mp4"
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
                      isLadiesRunEggRitualSoundOn ? "Mute video" : "Unmute video"
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
                    style={{ transform: "scale(1.02)", transformOrigin: "center" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <button
                    onClick={toggleLadiesRunStrudelVideoSound}
                    aria-label={
                      isLadiesRunStrudelSoundOn ? "Mute video" : "Unmute video"
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
                      alt={isLadiesRunStrudelSoundOn ? "Sound On" : "Sound Off"}
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
            <div className="flex flex-col gap-10 w-full max-w-[600px] mx-auto">
              <h2>MSRS</h2>
              <p className="text-container">
                Work From Home Studios I cofounded with Katrín Hersisdóttir. It
                is a web design studio where I implement websites for various
                brands and artists.
              </p>

              <div
                className={`flex flex-col mt-4 gap-4 ${isMobile ? "text-left" : ""}`}
              >
                <div
                  className={`flex flex-col gap-4 ${isMobile ? "items-center w-full" : "items-center"}`}
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
          <div className="flex flex-col gap-10">
            <h2>SUUUUÐ</h2>
            <p className="text-container">
              Work From Home Studios I cofounded with Katrín Hersisdóttir. It is
              a web design studio where I implement websites for various brands
              and artists.
            </p>
            <div
              className={`flex flex-col mt-4 gap-4 ${isMobile ? "text-left" : ""}`}
            >
              <div
                className={`flex flex-col gap-8 ${isMobile ? "items-center w-full" : "items-center"}`}
              >
                <div className="relative">
                  <video
                    ref={suskinLandingVideoRef}
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/su%C3%B0/videoSU%C3%90.mp4"
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
                    src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/content-portfolio/su%C3%B0/flugurCrazy.mp4"
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
          <div className="flex flex-col gap-10">
            <h2>Visuals RVK X </h2>
            <p className="text-container">
              Visuals for the RVK X event, a collaboration between the Reykjavík
              City Council and the Icelandic Music Industry Association.
            </p>
            <div className="flex flex-col gap-20 items-center">
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
          <div className="flex flex-col gap-10">
            <h2>Elysium & Katrinhersis: For You</h2>
            <div className="text-container text-justify flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p>Sound design</p>
                  <p>Mix for Egregore collective, based in Toulouse, France.</p>
                </div>
              </div>
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
          <div className="flex flex-col gap-10">
            <h2>Knackered</h2>
            <p className="text-container">
              Knackered is a project I did for the Icelandic Music Industry
              Association. It is a collaboration between the Icelandic Music
              Industry Association and the Reykjavík City Council.
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
          <div className="flex flex-col gap-10">
            <h2>Work From Home studios</h2>
            <p className="text-container">
              Work From Home Studios I cofounded with Katrín Hersisdóttir. It is
              a web design studio where I implement websites for various brands
              and artists.
            </p>
            <div
              className={`flex flex-col mt-4 gap-4 w-full ${isMobile ? "text-left max-w-full" : "max-w-[600px] mx-auto"}`}
            >
              <p
                className={`text-customPurple w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
              >
                Komumutiminus.is poster
              </p>
              <div
                className={`flex flex-col gap-4 ${isMobile ? "items-center w-full" : "items-center"}`}
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
            <div
              className="flex flex-col mt-4 gap-4 w-full max-w-[900px] mx-auto text-left"
            >
              <a
                href="https://www.katrinhers.is"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-customPurple hover:underline w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
                style={{ paddingLeft: isMobile ? undefined : "106px" }}
              >
                Katrinhers.is
              </a>
              <div
                className="flex flex-col gap-4 items-center w-full"
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
                Komumutiminus.is poster
              </p>
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
            <div
              className="flex flex-col mt-4 gap-4 w-full max-w-[900px] mx-auto text-left"
            >
              <p
                className={`text-customPurple w-full text-left ${isMobile ? "text-base" : "text-xl"}`}
                style={{ paddingLeft: isMobile ? undefined : "50px" }}
              >
                Suskin.is popup website
              </p>
              <div
                className="flex flex-col gap-4 items-center w-full"
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
          <div className="flex flex-col gap-10 w-full max-w-[600px] mx-auto">
            <h2>Linear Regression</h2>
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
              <div className="text-container text-justify flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p>Motivation</p>
                  <p>
                    Rannís innovation project. The project was given to me after
                    taking a course in machine learning and operational
                    programming.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Method</p>
                  <p>
                    Linear regression performed on data in order to calculate
                    where to situate Pikkoló&apos;s next pick up stations. A
                    dataset was created for the project, sourced from the
                    geographic information system of Reykjavik and the GPS
                    system TomTom. Data analyzation and Regression was performed
                    using R and mapped onto a map of Reykjavik.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Outcome</p>
                  <p>
                    Data visualisation created a simple and understandeable
                    heatmap solution used for potential business opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
