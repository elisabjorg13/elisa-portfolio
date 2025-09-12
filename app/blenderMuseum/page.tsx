"use client";

import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import DjokLogo from "../components/djokLogo";
import MeLillyPad from "../components/MeLilyPad";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function BlenderMuseumPage() {
  const isMobile = useIsMobile();
  const { active } = useProgress();
  const [showLoading, setShowLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    // Always show at least 300ms of animation
    setMinTimePassed(false);
    const minTimeout = setTimeout(() => setMinTimePassed(true), 300);

    return () => {
      clearTimeout(minTimeout);
    };
  }, [active]);

  useEffect(() => {
    if (!active && minTimePassed) {
      setShowLoading(false);
    } else if (active) {
      setShowLoading(true);
    }
  }, [active, minTimePassed]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-white cursor-pointer">
      {showLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/loader.png"
              alt="Loading..."
              style={{ 
                width: "800px", 
                height: "400px",
                animation: "stepRotate 1s steps(3, end) infinite"
              }}
            />
            <div
              style={{
                fontSize: "1rem",
                fontFamily: "'Times New Roman', Times, serif",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                letterSpacing: "0.05em",
                marginTop: "20px",
              }}
            >
            </div>
          </div>
        </div>
      )}

      {/* Emergency Exit Button */}
      <button
        onClick={() => window.location.href = '/'}
        style={{
          position: 'absolute',
          top: isMobile ? '5px' : '20px',
          left: isMobile ? '5px' : '20px',
          width: isMobile ? '40px' : '60px',
          height: isMobile ? '40px' : '60px',
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 100,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
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
      <h1 className={`absolute pointer-events-none ${isMobile ? 'top-12 left-4' : 'top-12 left-20'}`}>
        Blender museum
      </h1>
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <DjokLogo position={[0, 1, 0]} scale={1.5} />
        <MeLillyPad position={[0, -2, 0]} rotation={[0, Math.PI, 0]} scale={0.15}  />
      </Canvas>

      {/* Optional overlay text */}
    </main>
  );
}
