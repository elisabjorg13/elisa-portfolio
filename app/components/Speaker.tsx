"use client";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";

import { Select } from "@react-three/postprocessing";

const Speaker = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/Speakers.glb");
  const speakerRef = useRef<Object3D | null>(null);
  const router = useRouter();
  const handleClick = () => {
    router.push("/dj");
  };
  // Removed useEffect for cursor logic
  useEffect(() => {
    if (speakerRef.current) {
      speakerRef.current.traverse((child) => {
        child.layers.enable(0) // make sure it's renderable in postprocessing layer
      })
    }
  }, [])

  return (
    <Select enabled={false}>
      <primitive
        ref={speakerRef}
        object={scene}
        position={position}
        rotation={rotation}
        onClick={handleClick}
        scale={0.45}
      />
    </Select>
  );
};

export default Speaker;
