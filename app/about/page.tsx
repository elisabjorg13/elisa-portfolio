"use client";
import { useEffect, useState } from "react";

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

export default function AboutPage() {
  const isMobile = useIsMobile();
  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start cursor-pointer">
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
        className={`text-justify max-w-[1200px] flex flex-col gap-[4rem]  ${isMobile ? "px-4 pt-12 pb-4" : "px-20  pt-12 pb-20 w-2/4"}`}
      >
        <div>
          <h1>About me</h1>
          <div className="flex flex-col gap-4">
            <p>
              I am a creative programmer working at the intersection of
              computation, sound, and digital art. My practice combines a
              spontaneous musical sensibility with a logical, analytical
              mindset. Through programming, live-coded music, and interactive
              media, I build digital worlds that explore how we experience
              technology, identity, and online culture. My work often begins
              with worldbuilding: designing environments with their own
              aesthetics, rules, and sonic landscapes, where sound acts as the
              emotional architecture of the space. Alongside my artistic work, I
              work as a software engineer and teach computer science.
            </p>
            <p>
              I collaborate with artists and cultural organizations in
              Reykjavík’s grassroots scene, creating audiovisual projects,
              generative visuals, and host events. My practice focuses on
              building systems that invite participation, interpretation, and
              exploration. I thrive when computation becomes a creative material
              rather than just a technical tool.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
