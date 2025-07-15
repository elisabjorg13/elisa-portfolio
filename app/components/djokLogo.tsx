"use client";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";

type DjokLogoProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

const DjokLogo = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 2,
}: DjokLogoProps) => {
  const ref = useRef<Object3D>(null!);
  const { scene } = useGLTF("/models/djokLogo360.glb");

  // 🔁 Rotate on every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
    />
  );
};

useGLTF.preload("/models/djokLogo360.glb");

export default DjokLogo;
