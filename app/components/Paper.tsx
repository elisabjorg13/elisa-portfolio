"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Object3D} from "three";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";

interface LabelInfo {
  id: number;
  label: string;
  position: [number, number, number];
}

interface PaperProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLabelChange?: (labelInfo: LabelInfo) => void;
}

const Paper = ({ position = [0, 0, 0], rotation = [0, 0, 0], onLabelChange }: PaperProps) => {
  const { scene } = useGLTF("/models/paper.glb");
  const paperRef = useRef<Object3D | null>(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sceneClone = useMemo(() => scene.clone(), [scene]);
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
        id: 3,
        label: "Resume",
        position: [position[0], position[1] + 1.2, position[2]]
      });
    }
  }, [onLabelChange, position]);


  const handleClick = () => {
    router.push("/cv");
  };

  return (
    <>
      <primitive
        ref={paperRef}
        object={sceneClone}
        position={position}
        rotation={rotation}
        scale={0.7}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      />
      
      {/* Show numbered circle on mobile */}
      {isMobile && (
        <Html position={[position[0], position[1] + 0.75, position[2]]}>
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
            3
          </div>
        </Html>
      )}

      {/* Show styled text on hover for desktop */}
      {!isMobile && hovered && (
        <Text
          position={[position[0], position[1] + 1.2, position[2]]}
          fontSize={0.5}
          color="#E94DCC"
          anchorY="bottom"
          anchorX="center"
          outlineColor="#fff"
          outlineWidth={0.02}
          rotation={[0, Math.PI, 0]}
        >
          Resumé
        </Text>
      )}
    </>
  );
};

useGLTF.preload("/models/paper.glb");

export default Paper;
