"use client";

import { Canvas } from "@react-three/fiber";
import DjokLogo from "../components/djokLogo";
import MeLillyPad from "../components/MeLilyPad";

export default function blenderMuseumPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-white">
      <h1 className="absolute top-10 left-10 pointer-events-none">
        Blender museum
      </h1>
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <DjokLogo position={[0, 1, 0]} scale={1.5} />
        <MeLillyPad position={[0, -2, 0]} scale={0.15}  />
      </Canvas>

      {/* Optional overlay text */}
    </main>
  );
}
