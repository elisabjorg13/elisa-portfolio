"use client";
import { useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";




const Speaker2 = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF("/models/Speakers2.glb");
  const speaker2Ref = useRef<Object3D | null>(null);


  // Removed useEffect for cursor logic


  return (

      <primitive
        ref={speaker2Ref}
        object={scene}
        position={position}
        rotation={rotation}

        scale={0.45}
      />

  );
};

useGLTF.preload("/models/Speakers2.glb");

export default Speaker2;
