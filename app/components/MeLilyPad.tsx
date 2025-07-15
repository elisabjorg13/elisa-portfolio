"use client";
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";

type MeLillyPadProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

const MeLillyPad = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 2,
}: MeLillyPadProps) => {
  const ref = useRef<Object3D>(null!);
  const { scene } = useGLTF("/models/meLillyPad.glb");

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

useGLTF.preload("/models/meLillyPad.glb");

export default MeLillyPad;
