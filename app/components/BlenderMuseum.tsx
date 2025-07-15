"use client";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

import { useRouter } from "next/navigation";
import { Select } from "@react-three/postprocessing";

const BlenderMuseum = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/blendermuseum.glb");
  const blenderMuseumRef = useRef<Object3D | null>(null);
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    router.push("/blenderMuseum");
  };
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'url("/images/fairyWandTEST.png") 32 32, auto';
    } else {
      document.body.style.cursor = 'url("/images/fairyWandUP.png") 32 32, auto';
    }
  }, [hovered]);




  return (
    <Select enabled={hovered}>
      <primitive
        ref={blenderMuseumRef}
        object={scene}
        position={position}
        rotation={rotation}
        onClick={handleClick}
        onPointerOver={() => !hovered && setHovered(true)}
        onPointerOut={() => hovered && setHovered(false)}
        scale={0.5}
      />
    </Select>
  );
};

export default BlenderMuseum;
