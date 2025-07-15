"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
import { Select } from "@react-three/postprocessing";
import { useRouter } from "next/navigation";

const Controller = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const gltf = useGLTF("/models/computer2.glb");
  const router = useRouter();

  const controllerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Memoize only if gltf.scene exists
  const scene = useMemo(() => gltf?.scene?.clone?.(), [gltf?.scene]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'url("/images/fairyWandTEST.png") 32 32, auto';
    } else {
      document.body.style.cursor = 'url("/images/fairyWandUP.png") 32 32, auto';
    }
  }, [hovered]);

  const handleClick = () => {
    router.push("/dj");
  };

  // If the model hasn't loaded yet
  if (!scene) return null;

  return (
    <Select enabled={hovered}>
      <primitive
        ref={controllerRef}
        onClick={handleClick}
        object={scene}
        position={position}
        rotation={rotation}
        scale={0.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </Select>
  );
};

useGLTF.preload("/models/computer2.glb");

export default Controller;
