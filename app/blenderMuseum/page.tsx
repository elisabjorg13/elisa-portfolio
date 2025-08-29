"use client";

import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import DjokLogo from "../components/djokLogo";
import MeLillyPad from "../components/MeLilyPad";

export default function BlenderMuseumPage() {
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

      <h1 className="absolute top-10 left-10 pointer-events-none">
        Blender museum
      </h1>
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <DjokLogo position={[0, 1, 0]} scale={1.5} />
        <MeLillyPad position={[0, -2, 0]} rotation={[0, Math.PI, 0]} scale={0.15}  />
      </Canvas>

      {/* Optional overlay text */}
    </main>
  );
}
