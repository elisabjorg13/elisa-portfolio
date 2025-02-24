"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import Model from "./Model"; // ✅ Import Model

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 2, 6); // ✅ Move camera to a better position
    camera.lookAt(0, 1, 0); // ✅ Make camera focus on the model
  }, [camera]);

  return null;
};

const Scene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <CameraSetup /> {/* ✅ Set camera at start */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
      <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Scene;