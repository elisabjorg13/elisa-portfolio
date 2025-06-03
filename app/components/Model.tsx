"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D, Bone } from "three";

const Model = () => {
  const { scene } = useGLTF("/models/me.glb");
  const modelRef = useRef<Object3D | null>(null);
  const headBoneRef = useRef<Bone | null>(null);
  const bodyRef = useRef<Object3D | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      if ((child as any).isBone && child.name === "Bone") {
        console.log("🎯 Found the bone:", child.name);
        headBoneRef.current = child as Bone;
      }
      if (child.name === "Cube") {
        bodyRef.current = child as Object3D;
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

  return <primitive object={scene} scale={0.3} position={[0, -2, 0]} />;
};

export default Model;
