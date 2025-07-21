"use client";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

import { useRouter } from "next/navigation";
import { Select } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";

const BlenderMuseum = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/blendermuseum.glb");
  const blenderMuseumRef = useRef<Object3D | null>(null);
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    router.push("/blenderMuseum");
  };
  // Removed useEffect for cursor logic


  return (
    <Select enabled={hovered}>
      <>
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
        {hovered && (
          <Text
            position={[position[0], position[1] + 3.5, position[2]]}
            fontSize={0.4}
            color="#E94DCC"
            anchorY="bottom"
            anchorX="center"
            outlineColor="#fff"
            outlineWidth={0.02}
            rotation={[0, Math.PI, 0]}
          >
            Blender Museum
          </Text>
        )}
      </>
    </Select>
  );
};

export default BlenderMuseum;
