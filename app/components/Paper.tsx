"use client";
import { useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D} from "three";

import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";

const Paper = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/paper.glb");
  const paperRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);

  const sceneClone = useMemo(() => scene.clone(), [scene]);
  const router = useRouter();



  const handleClick = () => {
    router.push("/cv");
  };

  return (

      <>
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
        {hovered && (
          <Text
            position={[position[0], position[1] + 1.2, position[2]]}
            fontSize={0.4}
            color="#E94DCC"
            anchorY="bottom"
            anchorX="center"
            outlineColor="#fff"
            outlineWidth={0.02}
            rotation={[0, Math.PI, 0]}
          >
            Resumé
          </Text>
        )}
      </>

  );
};


useGLTF.preload("/models/paper.glb");

export default Paper;
