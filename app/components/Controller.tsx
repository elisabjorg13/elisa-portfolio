"use client";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";


const Controller = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/computer2.glb");
  const speakerRef = useRef<Object3D | null>(null);
  const router = useRouter();

  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    router.push("/dj");
  };

  return (
    <primitive
      ref={speakerRef}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      object={scene}
      position={position}
      rotation={rotation}
      scale={hovered ? 0.17 : 0.15}
    />
  );
};


export default Controller;