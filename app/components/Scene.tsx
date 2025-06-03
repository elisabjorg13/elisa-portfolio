"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import Model from "./Model"; // ✅ Import Model
import Speaker from "./Speaker";
import Speaker2 from "./Speaker2";
import Computer1 from "./Computer1";
import Controller from "./Controller";
import BlenderMuseum from "./BlenderMuseum";

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, -7);
    // ✅ Move camera to a better position
    camera.lookAt(0, 0, 0); // ✅ Make camera focus on the model
  }, [camera]);

  return null;
};

const Scene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Environment files="/images/sky.hdr" background />
      <CameraSetup /> {/* ✅ Set camera at start */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
      <Speaker position={[-4.5, -1, -2]} rotation={[0, Math.PI-2.5 , 0]} />
      <Speaker2 position={[3, -1, -3.5]} rotation={[0, Math.PI-0.5 , 0]} />
      <BlenderMuseum position={[5, -1.5, 4]} rotation={[0, 1   , 0]} />
      <Computer1 position={[-5, -2.5, 6]} rotation={[0, Math.PI+2.6, 0]} />
      <Controller position={[1,-2,-3]} rotation={[0, Math.PI-1.8, 0]} />
      <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Scene;
