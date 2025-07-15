"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D, Mesh } from "three";
import { Select } from "@react-three/postprocessing";

const Paper = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/paper.glb");
  const paperRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);

  const sceneClone = useMemo(() => scene.clone(), [scene]);

  // Enable outline layer
  useEffect(() => {
    paperRef.current?.traverse((child) => {
      if (child instanceof Mesh) child.layers.enable(0);
    });
  }, []);

  // Cursor switching side-effect
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'url("/images/fairyWandTEST.png") 32 32, auto';
    } else {
      document.body.style.cursor = 'url("/images/fairyWandUP.png") 32 32, auto';
    }
  }, [hovered]);

  const handleClick = () => {
    window.open(
      "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/resumeMR.pdf",
      "_blank"
    );
  };

  return (
    <Select enabled={hovered}>
      <primitive
        ref={paperRef}
        object={sceneClone}
        position={position}
        rotation={rotation}
        scale={0.7}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      />
    </Select>
  );
};

useGLTF.preload("/models/paper.glb");
export default Paper;
