"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

const Speaker = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/Speakers.glb");
  const speakerRef = useRef<Object3D | null>(null);

  return (
    <primitive
      ref={speakerRef}
      object={scene}
      position={position}
      rotation={rotation}
      scale={0.45}
    />
  );
};

export default Speaker;
