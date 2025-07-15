"use client";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";

const Computer1 = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/computerwall.glb");
  const speakerRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor =
        'url("/images/fairyWandTEST.png") 32 32, auto';
    } else {
      document.body.style.cursor = 'url("/images/fairyWandUP.png") 32 32, auto';
    }
  }, [hovered]);
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <primitive
      ref={speakerRef}
      object={scene}
      position={position}
      rotation={rotation}
      scale={0.6}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export default Computer1;
