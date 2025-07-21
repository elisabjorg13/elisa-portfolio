"use client";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";

const Computer1 = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/computerwall.glb");
  const speakerRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  // Removed useEffect for cursor logic
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <>
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
      {hovered && (
        <Text
          position={[position[1], position[1] + 3.5, position[2]]}
          fontSize={0.4}
          color="#E94DCC"
          anchorY="bottom"
          anchorX="center"
          outlineColor="#fff"
          outlineWidth={0.02}
          rotation={[0, Math.PI, 0]}
        >
          Projects
        </Text>
      )}
    </>
  );
};

export default Computer1;
