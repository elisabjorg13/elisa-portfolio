"use client";
import { useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";


import { Select } from "@react-three/postprocessing";

const Arrow = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/arrow.glb");
  const arrowRef = useRef<Object3D | null>(null);


  // Removed useEffect for cursor logic


  return (
    <Select enabled={false}>
      <primitive
        ref={arrowRef}
        object={scene}
        position={position}
        rotation={rotation}

        scale={0.2}
      />
    </Select>
  );
};

useGLTF.preload("/models/arrow.glb");

export default Arrow;
