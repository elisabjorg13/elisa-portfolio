"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { FisheyeEffect } from "./FisheyeEffect";
import { Environment, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { extend } from "@react-three/fiber";


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
    const angle = Math.PI+0.5 ; // ~22.5 degrees counterclockwise

    // Calculate new X/Z position (Y is unchanged here)
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    camera.position.set(x, 0, z); // orbit around center
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const Scene = () => {
  return (
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
      <Controller position={[1.5, -2, -5]} rotation={[0, Math.PI -1.4, 0]} />
      <Paper position={[-5, -2.5, -3]} rotation={[0, 0.7, 0]}></Paper>
      <Stairway position={[0, -2.83, 1.5]} rotation={[0, -1.1, 0]}></Stairway>
      <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Scene;
