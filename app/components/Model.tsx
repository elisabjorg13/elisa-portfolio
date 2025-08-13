"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D, Bone } from "three";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/me.glb");
  const headBoneRef = useRef<Bone | null>(null);
  const bodyRef = useRef<Object3D | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    router.push("/about"); // or wherever you want to send the user
  };
  useEffect(() => {
    scene.traverse((child) => {
      if ("isBone" in child && child.name === "Bone") {
        headBoneRef.current = child as Bone;
        console.log("🎯 Found the bone:", child.name);
      }

      if (child.name === "Cube") {
        bodyRef.current = child;
        console.log("🧍 Body mesh found:", child.name);
      }
    });
  }, [scene]);

  // ✅ Mouse tracking
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Rotate the bone
  useFrame(() => {
    if (headBoneRef.current) {
      headBoneRef.current.rotation.y = mousePos.x * 1.2;
      headBoneRef.current.rotation.x = mousePos.y * 0.8;
    }
  });

  return (
    <>
      <primitive
        object={scene}
        onClick={handleClick}
        position={[-1.1, -2, -1]}
        rotation={[0,0.6,0]}
        scale={ 0.4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      {hovered && (
        <Text
          position={[-1.1, -1.5 + 3.5, -1]}
          fontSize={0.4}
          color="#E94DCC"
          anchorY="bottom"
          anchorX="center"
          outlineColor="#fff"
          outlineWidth={0.02}
          rotation={[0, Math.PI+0.5, 0]}
        >
          About
        </Text>
      )}
    </>
  );
};

useGLTF.preload("/models/me.glb");

export default Model;
