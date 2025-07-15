"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
import { Select } from "@react-three/postprocessing";
import { useRouter } from "next/navigation";

const Controller = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const gltf = useGLTF("/models/computer2.glb");
  const router = useRouter();

  // Ensure the scene exists
  if (!gltf || !gltf.scene) return null;

  // Clone and memoize scene ONCE
  const scene = useMemo(() => gltf.scene.clone(), []);

  const controllerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
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

// Preload outside component to avoid hydration issues
useGLTF.preload("/models/computer2.glb");

export default Controller;
