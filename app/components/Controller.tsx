"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useState, useMemo} from "react";
import { Select } from "@react-three/postprocessing";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";

const Controller = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const gltf = useGLTF("/models/computer2.glb");
  const router = useRouter();

  const controllerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Memoize only if gltf.scene exists
  const scene = useMemo(() => gltf?.scene?.clone?.(), [gltf?.scene]);

  // Removed useEffect for cursor logic

  const handleClick = () => {
    router.push("/dj");
  };

  // If the model hasn't loaded yet
  if (!scene) return null;

  return (
    <Select enabled={hovered}>
      <>
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
        {hovered && (
          <Text
            position={[position[0], position[1] + 1.2, position[2]]}
            fontSize={0.4}
            color="#E94DCC"
            anchorY="bottom"
            anchorX="center"
            outlineColor="#fff"
            outlineWidth={0.02}
            rotation={[0,Math.PI,0]}
          >
            Music
          </Text>
        )}
      </>
    </Select>
  );
};

useGLTF.preload("/models/computer2.glb");

export default Controller;
