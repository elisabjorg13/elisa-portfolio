"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

const Model = () => {
  const { scene } = useGLTF("/models/me.glb");
  const headRef = useRef<Object3D | null>(null);
  const modelRef = useRef<Object3D | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


  useEffect(() => {
    modelRef.current = scene;
    if (modelRef.current) {
      // Rotate the model to face front (adjust the angle as necessary)
      modelRef.current.rotation.set(0, -Math.PI / 2, 0); // Rotate by 180 degrees to face the front
    }
  }, [scene]);

  // ✅ Find the head inside the GLTF model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.name === "Armature") {
        // 🔹 Change "Cube.001" to your head's actual name
        headRef.current = child as Object3D;
      }
    });
  }, [scene]);
  useEffect(() => {
    console.log("GLTF Model Loaded:", scene);

    scene.traverse((child) => {
      console.log("Detected object:", child.name); // Log all object names in the model
    });
  }, [scene]);

  // ✅ Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      let y = -(event.clientY / window.innerHeight) * 2 + 1;
      if (x > 0) {
        // Invert Y-axis for right side of the screen
        y = -y;
      }
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Apply rotation only to the head (Not whole body)
  useFrame(() => {
    if (headRef.current) {
      headRef.current.rotation.y = mousePos.x * 0.6; // Rotate left/right
      headRef.current.rotation.x = -mousePos.y * 0.6; // Rotate up/down
    }
  });

  return <primitive object={scene} scale={0.4} position={[0, -0.5, 0]} />;
};

export default Model;
