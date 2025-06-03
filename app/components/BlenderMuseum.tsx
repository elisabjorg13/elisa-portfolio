"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

const BlenderMuseum = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/blendermuseum.glb");
  const blenderMuseumRef = useRef<Object3D | null>(null);

  return (
    <primitive
      ref={blenderMuseumRef}
      object={scene}
      position={position}
      rotation={rotation}
      scale={0.4}
    />
  );
};

export default BlenderMuseum;