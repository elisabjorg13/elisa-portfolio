"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D, Bone } from "three";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";

interface LabelInfo {
  id: number;
  label: string;
  position: [number, number, number];
}

interface ModelProps {
  onLabelChange?: (labelInfo: LabelInfo) => void;
}

  const Model = ({ onLabelChange }: ModelProps) => {
    const { scene } = useGLTF("/models/me_more_compressed.glb");
  const headBoneRef = useRef<Bone | null>(null);
  const bodyRef = useRef<Object3D | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700 || /Mobi|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Notify parent component about label info
  useEffect(() => {
    if (onLabelChange) {
      onLabelChange({
        id: 4,
        label: "About",
        position: [-1.1, -1.5 + 3.5, -1]
      });
    }
  }, [onLabelChange]);

  const handleClick = () => {
    router.push("/about");
  };

  useEffect(() => {
    scene.traverse((child) => {
      if ("isBone" in child && child.name === "Bone") {
        headBoneRef.current = child as Bone;
      }

      if (child.name === "Cube") {
        bodyRef.current = child;
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
      
      {/* Show numbered circle on mobile */}
      {isMobile && (
        <Html position={[-1.1, -2 + 3.5, -1]}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#3B82F6",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "10px",
              fontWeight: "bold",
              border: "2px solid white",
              transform: "translate(-50%, -50%)",
            }}
          >
            4
          </div>
        </Html>
      )}

      {/* Show styled text on hover for desktop */}
      {!isMobile && hovered && (
        <Text
          position={[-1.1, -1.5 + 3.5, -1]}
          fontSize={0.7}
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

useGLTF.preload("/models/me_more_compressed.glb");

export default Model;
