"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
import { Select } from "@react-three/postprocessing";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";

interface LabelInfo {
  id: number;
  label: string;
  position: [number, number, number];
}

interface BlenderMuseumProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLabelChange?: (labelInfo: LabelInfo) => void;
}

const BlenderMuseum = ({ position = [0, 0, 0], rotation = [0, 0, 0], onLabelChange }: BlenderMuseumProps) => {
  const gltf = useGLTF("/models/blendermuseum.glb");
  const blenderRef = useRef(null);
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
        id: 5,
        label: "Blender Museum",
        position: [position[0], position[1] + 1.2, position[2]]
      });
    }
  }, [onLabelChange]);

  // Memoize only if gltf.scene exists
  const scene = useMemo(() => gltf?.scene?.clone?.(), [gltf?.scene]);

  const handleClick = () => {
    router.push("/blenderMuseum");
  };

  // If the model hasn't loaded yet
  if (!scene) return null;

  return (
    <Select enabled={hovered}>
      <>
        <primitive
          ref={blenderRef}
          onClick={handleClick}
          object={scene}
          position={position}
          rotation={rotation}
          scale={0.5}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
  
        {/* Show numbered circle on mobile */}
        {isMobile && (
          <Html position={[position[0], position[1] + 1.2, position[2]]}>
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
              5
            </div>
          </Html>
        )}
        
        {/* Show styled text on hover for desktop */}
        {!isMobile && hovered && (
          <Text
            position={[position[0], position[1] + 3.5, position[2]]}
            fontSize={0.7}
            color="#E94DCC"
            anchorY="bottom"
            anchorX="center"
            outlineColor="#fff"
            outlineWidth={0.02}
            rotation={[0, Math.PI, 0]}
          >
            Blender Museum
          </Text>
        )}
      </>
    </Select>
  );
};

useGLTF.preload("/models/blendermuseum.glb");

export default BlenderMuseum;
