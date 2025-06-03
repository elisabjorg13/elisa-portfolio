"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

const Controller = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/controller.glb");
  const speakerRef = useRef<Object3D | null>(null);

  return (
    <primitive
      ref={speakerRef}
      object={scene}
      position={position}
      rotation={rotation}
      scale={0.15}
    />
  );
};

export default Controller;