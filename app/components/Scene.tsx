"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useState, Suspense } from "react";
import { useProgress } from "@react-three/drei";
import { suspend } from "suspend-react";
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
    const radius = 12; // distance from center
    const angle = Math.PI + 0.5; // ~22.5 degrees counterclockwise

    // Calculate new X/Z position (Y is unchanged here)
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    camera.position.set(x, 2, z); // orbit around center
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

// Custom Skybox component for PNG files (mobile only)
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

// Compressed HDR component using pmndrs/assets
const CompressedEnvironment = () => {
  const sky = suspend(() => import('@pmndrs/assets/hdri/sky.exr'), []);
  return <Environment files={sky.default} />;
};

const Scene = () => {
  const { active } = useProgress();
  const [showLoading, setShowLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [labels, setLabels] = useState<Array<{id: number, label: string}>>([]);
  const [loadedModels, setLoadedModels] = useState<Set<string>>(new Set());
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
    // Show loading until at least one model is loaded and minimum time has passed
    if (loadedModels.size > 0 && minTimePassed) {
      setShowLoading(false);
    } else if (loadedModels.size === 0) {
      setShowLoading(true);
    }
  }, [loadedModels.size, minTimePassed]);

  const handleModelLoad = (modelName: string) => {
    setLoadedModels(prev => new Set([...prev, modelName]));
  };

  const handleLabelChange = (labelInfo: {id: number, label: string, position: [number, number, number]}) => {
    setLabels(prev => {
      const existing = prev.find(l => l.id === labelInfo.id);
      if (existing) return prev;
      return [...prev, { id: labelInfo.id, label: labelInfo.label }];
    });
  };

  // Preload all models for faster loading
  useEffect(() => {
    // Preload all model files
    const models = [
      '/models/me_more_compressed.glb',
      '/models/Speakers_compressed.glb', 
      '/models/Speakers2_compressed.glb',
      '/models/computer1_more_compressed.glb',
      '/models/computer2.glb',
      '/models/paper.glb',
      '/models/glass_compressed.glb',
      '/models/blendermuseum.glb',
      '/models/controller.glb'
    ];
    
    models.forEach(model => {
      // Start preloading each model
      fetch(model, { method: 'HEAD' }).catch(() => {});
    });
  }, []);

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
          height: isMobile ? "80vh" : "100vh",
          maxWidth: isMobile ? 500 : undefined,
          paddingBottom: isMobile ? "20vh" : "0",
          display: "block",
        }}
        dpr={isMobile ? [1, 2] : [1, 2]}
      >
        {isMobile ? (
          <Skybox isMobile={isMobile} />
        ) : (
          <Suspense fallback={null}>
            <CompressedEnvironment />
          </Suspense>
        )}
        <CameraSetup />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, -2]} intensity={1} />
        
        {/* Models appear progressively as they load */}
        <Suspense fallback={null}>
          <BlenderMuseum position={[10, -1.40, 2]} rotation={[0, 1, 0]} onLabelChange={handleLabelChange} />
        </Suspense>

        <Suspense fallback={null}>
          <Model onLabelChange={handleLabelChange} onLoad={() => handleModelLoad('model')} />
        </Suspense>
        
        <Suspense fallback={null}>
          <Speaker position={[-8, -1.5, 0]} rotation={[0, Math.PI - 2.5, 0]} />
        </Suspense>
        
        <Suspense fallback={null}>
          <Speaker2 position={[4, -1.5, -6.5]} rotation={[0, Math.PI - 0.5, 0]} />
        </Suspense>

        <Suspense fallback={null}>
          <Computer1 position={[-5, -2.3, 6]} rotation={[0, Math.PI + 2.6, 0]} onLabelChange={handleLabelChange} onLoad={() => handleModelLoad('computer1')} />
        </Suspense>
        
        <Suspense fallback={null}>
          <Controller position={[1.5, -2, -5]} rotation={[0, Math.PI - 1.4, 0]} onLabelChange={handleLabelChange} />
        </Suspense>
        
        <Suspense fallback={null}>
          <Paper position={[-5, -2.5, -3]} rotation={[0, 0.7, 0]} onLabelChange={handleLabelChange}></Paper>
        </Suspense>
        
        <Suspense fallback={null}>
          <Stairway position={[0, -2.83, 1.5]} rotation={[0, -1.1, 0]}></Stairway>
        </Suspense>
        
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>

      {/* Legend for mobile */}
      {isMobile && !showLoading && labels.length > 0 && (
        <div
          style={{
            position: "fixed",
            width: "full",
            bottom: "0px",
            left: "0",
            right: "0",
            background: "linear-gradient(135deg, #f8fff8 0%, #f0fff0 50%, #e8ffe8 100%)",
            border: "1px solid #ffffff",
            borderRadius: "4px",
            padding: "15px 20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 100,
            margin: "10px 10px",
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
