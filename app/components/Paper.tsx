"use client";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";


const Paper = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/paper.glb");
  const paperRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    // Open PDF resume in a new tab
    window.open(
      "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/resumeMR.pdf",
      "_blank"
    );
  };

  return (
    <primitive
      ref={paperRef}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      object={scene}
      position={position}
      rotation={rotation}
      scale={hovered ? 0.78 : 0.75}
    />
  );
};

export default Paper;