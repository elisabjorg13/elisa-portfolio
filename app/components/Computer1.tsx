"use client";
import {useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";

interface LabelInfo {
  id: number;
  label: string;
  position: [number, number, number];
}

interface Computer1Props {
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLabelChange?: (labelInfo: LabelInfo) => void;
}

const Computer1 = ({ position = [0, 0, 0], rotation = [0, 0, 0], onLabelChange }: Computer1Props) => {
  const { scene } = useGLTF("/models/computer1.glb");
  const speakerRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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
        id: 2,
        label: "Projects",
        position: [position[0]+3, position[1] + 4, position[2]+2]
      });
    }
  }, [onLabelChange, position]);

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <>
      <primitive
        ref={speakerRef}
        object={scene}
        position={position}
        rotation={rotation}
        scale={0.6}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      
      {/* Show numbered circle on mobile */}
      {isMobile && (
        <Html position={[position[0], position[1] + 3.5, position[2]]}>
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
            2
          </div>
        </Html>
      )}

      {/* Show styled text on hover for desktop */}
      {!isMobile && hovered && (
        <Text
          position={[position[0]+2.5, position[1] + 3.5, position[2]]}
          fontSize={0.7}
          color="#E94DCC"
          anchorY="bottom"
          anchorX="center"
          outlineColor="#fff"
          outlineWidth={0.02}
          rotation={[0, Math.PI, 0]}
        >
          Projects
        </Text>
      )}
    </>
  );
};

useGLTF.preload("/models/computerwall.glb");

export default Computer1;
