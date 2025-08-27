"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import * as THREE from "three";

import Model from "./Model";
import Speaker from "./Speaker";
import Speaker2 from "./Speaker2";
import Computer1 from "./Computer1";
import Controller from "./Controller";
import BlenderMuseum from "./BlenderMuseum";


import Paper from "./Paper";
import Stairway from "./Stairway";


// Simple device detection hook
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    const radius = 14; // distance from center
    const angle = Math.PI + 0.5; // ~22.5 degrees counterclockwise

    // Calculate new X/Z position (Y is unchanged here)
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    camera.position.set(x, 0, z); // orbit around center
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

// Custom Skybox component for PNG files
const Skybox = ({ isMobile }: { isMobile: boolean }) => {
  const { scene } = useThree();
  
  useEffect(() => {
    if (isMobile) {
      // Create a simple skybox using PNG texture
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load('/images/skypng.png', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
       
        scene.environment = texture;
      });
    }
  }, [isMobile, scene]);

  return null;
};

const Scene = () => {
  const { active } = useProgress();
  const [showLoading, setShowLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [labels, setLabels] = useState<Array<{id: number, label: string}>>([]);
  // const [modelsLoaded, setModelsLoaded] = useState(0);
  // const totalModels = 8; // Total number of 3D models
  const isMobile = useIsMobile();

  useEffect(() => {
    // Always show at least 300ms of animation
    setMinTimePassed(false);
    const minTimeout = setTimeout(() => setMinTimePassed(true), 300);

    return () => {
      clearTimeout(minTimeout);
    };
  }, [active]);

  useEffect(() => {
    if (!active && minTimePassed) {
      setShowLoading(false);
    } else if (active) {
      setShowLoading(true);
    }
  }, [active, minTimePassed]);

  // Track when models are loaded (you can call this from individual model components)
  // const handleModelLoad = () => {
  //   setModelsLoaded(prev => prev + 1);
  // };

  const handleLabelChange = (labelInfo: {id: number, label: string, position: [number, number, number]}) => {
    setLabels(prev => {
      const existing = prev.find(l => l.id === labelInfo.id);
      if (existing) return prev;
      return [...prev, { id: labelInfo.id, label: labelInfo.label }];
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/loader.png"
              alt="Loading..."
              style={{ 
                width: "800px", 
                height: "400px",
                animation: "stepRotate 1s steps(3, end) infinite"
              }}
            />
          </div>
        </div>
      )}
      <Canvas
        style={{
          width: isMobile ? "100vw" : "100vw",
          height: isMobile ? "60vh" : "100vh",
          maxWidth: isMobile ? 500 : undefined,
          display: "block",
        }}
        dpr={isMobile ? [1, 2] : [1, 2]}
      >
        {isMobile ? (
          <Skybox isMobile={isMobile} />
        ) : (
          <Environment files="/images/sky.hdr" />
        )}
        <CameraSetup />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, -2]} intensity={1} />
        <BlenderMuseum position={[10, -1.40, 2]} rotation={[0, 1, 0]} onLabelChange={handleLabelChange} />

        <Model onLabelChange={handleLabelChange} />
        <Speaker position={[-8, -1.5, 0]} rotation={[0, Math.PI - 2.5, 0]} />
        <Speaker2 position={[4, -1.5, -6.5]} rotation={[0, Math.PI - 0.5, 0]} />

        <Computer1 position={[-5, -2.3, 6]} rotation={[0, Math.PI + 2.6, 0]} onLabelChange={handleLabelChange} />
        {/* <Arrow position={[5, 5, 0]} rotation={[0, Math.PI / 2 - 2.5, 0]} /> */}
        <Controller position={[1.5, -2, -5]} rotation={[0, Math.PI - 1.4, 0]} onLabelChange={handleLabelChange} />
        <Paper position={[-5, -2.5, -3]} rotation={[0, 0.7, 0]} onLabelChange={handleLabelChange}></Paper>
        <Stairway position={[0, -2.83, 1.5]} rotation={[0, -1.1, 0]}></Stairway>
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>

      {/* Legend for mobile */}
      {isMobile && !showLoading && labels.length > 0 && (
        <div
          style={{
            position: "fixed",
            width: "full",
            bottom: "20px",
            left: "0",
            right: "0",
            backgroundColor: "#90EE90",
            border: "2px solid #ffffff",
            borderRadius: "8px",
            padding: "15px 20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 100,
            margin: "0 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "12px",
              color: "#1e3a8a",
              fontStyle: "italic",
            }}
          >
            {labels.sort((a, b) => a.id - b.id).map((label) => (
              <div 
                key={label.id} 
                style={{ 
                  textAlign: "left",
                  cursor: "pointer",
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "2px",
                  userSelect: "none"
                }}
                onClick={() => {
                  const routes = {
                    1: "/dj",
                    2: "/projects", 
                    3: "/cv",
                    4: "/about",
                    5: "/blenderMuseum"
                  };
                  const route = routes[label.id as keyof typeof routes];
                  if (route) {
                    window.location.href = route;
                  }
                }}
              >
                {label.id}. {label.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Scene;
