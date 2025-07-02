"use client";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";

type ButterflyProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

const Butterfly = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: ButterflyProps) => {
  const ref = useRef<Object3D | null>(null);
  const { scene, animations } = useGLTF("/models/butterfly.glb");
  const { actions } = useAnimations(animations, ref);
  const router = useRouter();
  const handleClick = () => {
    router.push("/about"); // or wherever you want to send the user
  };
  useEffect(() => {
    console.log("Available animations:", actions);

    // Play the first available animation automatically
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.play();
    }
  }, [actions]);

  return (
    <primitive
      ref={ref}
      onClick={handleClick}
      object={scene}
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
    />
  );
};

export default Butterfly;
