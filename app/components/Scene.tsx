"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { FisheyeEffect } from "./FisheyeEffect";
import { Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { extend } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";

import Model from "./Model";
import Speaker from "./Speaker";
import Speaker2 from "./Speaker2";
import Computer1 from "./Computer1";
import Controller from "./Controller";
import BlenderMuseum from "./BlenderMuseum";
import Butterfly from "./Butterfly";

import Paper from "./Paper";
import Stairway from "./Stairway";
extend({ FisheyeEffect });

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    const radius = 10; // distance from center
    const angle = Math.PI + 0.5; // ~22.5 degrees counterclockwise

    // Calculate new X/Z position (Y is unchanged here)
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    camera.position.set(x, 0, z); // orbit around center
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const Scene = () => {
  const { active } = useProgress();
  const [dotCount, setDotCount] = useState(1);
  const [showLoading, setShowLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 200);

    // Always show at least 600ms of animation
    setMinTimePassed(false);
    const minTimeout = setTimeout(() => setMinTimePassed(true), 600);

    return () => {
      clearInterval(interval);
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
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {showLoading && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}>
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "'Times New Roman', Times, serif",
              color: "#E94DCC",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ minWidth: "7ch", textAlign: "right" }}>Loading</span>
            <span
              style={{
                marginLeft: "0.2em",
                minWidth: "3ch",
                display: "inline-block",
                textAlign: "left",
                fontFamily: "'Times New Roman', Times, serif"
              }}
            >
              <span style={{ opacity: dotCount >= 1 ? 1 : 0 }}>.</span>
              <span style={{ opacity: dotCount >= 2 ? 1 : 0 }}>.</span>
              <span style={{ opacity: dotCount >= 3 ? 1 : 0 }}>.</span>
            </span>
          </div>
        </div>
      )}
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Environment files="/images/sky.hdr" background />
        <CameraSetup />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <BlenderMuseum position={[10, -1.5, 2]} rotation={[0, 1, 0]} />

        <Model />
        <Speaker position={[-8, -1.5, 0]} rotation={[0, Math.PI - 2.5, 0]} />
        <Speaker2 position={[4, -1.5, -6.5]} rotation={[0, Math.PI - 0.5, 0]} />

        <Computer1 position={[-5, -2.3, 6]} rotation={[0, Math.PI + 2.6, 0]} />
        <Butterfly
          position={[2, 3, 0]}
          rotation={[Math.PI * 4, Math.PI - 5, 0]}
          scale={0.8}
        />
        <Controller position={[1.5, -2, -5]} rotation={[0, Math.PI - 1.4, 0]} />
        <Paper position={[-5, -2.5, -3]} rotation={[0, 0.7, 0]}></Paper>
        <Stairway position={[0, -2.83, 1.5]} rotation={[0, -1.1, 0]}></Stairway>
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Scene;
