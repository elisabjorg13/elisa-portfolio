"use client";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";

import { Select } from "@react-three/postprocessing";

const Speaker2 = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/Speakers2.glb");
  const speaker2Ref = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/dj");
  };
  useEffect(() => {
    if (speaker2Ref.current) {
      speaker2Ref.current.traverse((child) => {
        child.layers.enable(0) // make sure it's renderable in postprocessing layer
      })
    }
  }, [])


  return (
    <Select enabled={hovered}>
      <primitive
        ref={speaker2Ref}
        object={scene}
        position={position}
        rotation={rotation}
        onClick={handleClick}
        onPointerOver={() => !hovered && setHovered(true)}
        onPointerOut={() => hovered && setHovered(false)}
        scale={0.45}
      />
    </Select>
  );
};

export default Speaker2;
