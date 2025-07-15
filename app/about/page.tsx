"use client";

import { Canvas } from "@react-three/fiber";
import Butterfly from "../components/Butterfly"; // Adjust the import path as needed

export default function aboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start">
      <div className="max-w-[1200px] px-20 py-20 flex flex-col gap-[4rem] w-3/4">
        <div>
          <h1>About me</h1>
          <p>
            I am a 22 yr old programmer and UX designer. I graduated with a
            bachelors degree in software engineering from the University of
            Iceland in June 2023, after taking my last semester abroad in
            Madrid. I grew up in London but later moved to Iceland, where I am
            situated now.
          </p>
        </div>
        <div>
          <h1>My work</h1>
          <p>
            During my time studying my degree, I found myself drawn to front end
            design and programming, along with computer graphics. I also gained
            a lot of interest in data visualisation when I took part in a
            research project. Throughout my degree and beyond, I have developed
            software for various companies. Over time, I became increasingly
            involved in digital design as well. In the dynamic environment of
            small startups, versatility is key, and I discovered the importance
            of blending development skills with design knowledge. This hands-on
            experience allowed me to refine my abilities in both areas.
          </p>
        </div>
        <div>
          <h1 >
            Creative projects
          </h1>
          <p>
            During my time studying my degree, I found myself drawn to front end
            design and programming, along with computer graphics. I also gained
            a lot of interest in data visualisation when I took part in a
            research project. Throughout my degree and beyond, I have developed
            software for various companies. Over time, I became increasingly
            involved in digital design as well. In the dynamic environment of
            small startups, versatility is key, and I discovered the importance
            of blending development skills with design knowledge. This hands-on
            experience allowed me to refine my abilities in both areas.
          </p>
        </div>
      </div>

      {/* Butterfly Canvas */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          width: "400px",
          height: "400px",
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Butterfly
            position={[1, 1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </Canvas>
      </div>
    </main>
  );
}
