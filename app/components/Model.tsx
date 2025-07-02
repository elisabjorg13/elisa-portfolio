"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D, Bone } from "three";
import { useRouter } from "next/navigation";

const Model = () => {
  const { scene } = useGLTF("/models/me.glb");
  const modelRef = useRef<Object3D | null>(null);
  const headBoneRef = useRef<Bone | null>(null);
  const bodyRef = useRef<Object3D | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const router = useRouter();


const handleClick = () => {
  router.push("/about"); // or wherever you want to send the user
};
  // ✅ Orient model properly
  useEffect(() => {
    modelRef.current = scene;
    if (modelRef.current) {
      modelRef.current.rotation.set(0, 0, 0); // Rotate to face front
    }
  }, [scene]);

  // ✅ Traverse and find the bone named "Bone"
  useEffect(() => {
    scene.traverse((child) => {
      if ('isBone' in child && child.name === "Bone") {
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

  return (<primitive object={scene} scale={0.3} position={[0, -2, 0]}     onClick={handleClick} />);
};

export default Model;
