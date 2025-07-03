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
import Paper from "./Paper"
import Stairway from "./Stairway";
extend({ FisheyeEffect });



const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, -8.5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const Scene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Environment files="/images/sky.hdr" background />
      <CameraSetup />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      
      {/* Your 3D Objects */}
      <Model />
      <Speaker position={[-7, -1.5, 0]} rotation={[0, Math.PI - 2.5, 0]} />
      <Speaker2 position={[3, -1.5, -4.5]} rotation={[0, Math.PI - 0.5, 0]} />
      <BlenderMuseum position={[5, -1.5, 4]} rotation={[0, 1, 0]} />
      <Computer1 position={[-5, -2.3, 6]} rotation={[0, Math.PI + 2.6, 0]} />
      <Butterfly position={[2, 3, 0]} rotation={[Math.PI*4, Math.PI-5.5,0]}scale={0.6} />
      <Controller position={[1, -2, -3]} rotation={[0, Math.PI - 1.8, 0]} />
      <Paper  position={[-3, -2.5, -4]} rotation={[0, 0.4, 0]} ></Paper>
      <Stairway position={[0, -2.83, 1.5]} rotation={[0, -1.8, 0]}></Stairway>
      <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />

    </Canvas>
  );
};

export default Scene;
