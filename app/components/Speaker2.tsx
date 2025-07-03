"use client";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";

const Speaker2 = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/Speakers2.glb");
  const speakerRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/dj");
  };


  return (
    <primitive
    ref={speakerRef}
      object={scene}
      position={position}
      rotation={rotation}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 0.48: 0.45}
    />
  );
};

export default Speaker2;
