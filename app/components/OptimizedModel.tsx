"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMemo, useEffect, useState } from "react";
import { getOptimalQuality, getModelQualitySettings } from "../utils/performance";
import * as THREE from 'three';

interface OptimizedModelProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  onLoad?: () => void;
  quality?: 'low' | 'medium' | 'high';
}

interface MeshChild extends THREE.Object3D {
  isMesh?: boolean;
  geometry?: THREE.BufferGeometry;
  material?: THREE.Material | THREE.Material[];
}

const OptimizedModel = ({ 
  url, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = [1, 1, 1],
  onLoad,
  quality
}: OptimizedModelProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const optimalQuality = quality || getOptimalQuality();
  const qualitySettings = getModelQualitySettings(optimalQuality);

  const gltf = useLoader(GLTFLoader, url);

  const optimizedScene = useMemo(() => {
    if (!gltf.scene) return null;

    // Clone the scene to avoid modifying the original
    const scene = gltf.scene.clone();
    
    // Apply quality optimizations
    scene.traverse((child: MeshChild) => {
      if (child.isMesh) {
        // Reduce geometry detail for low-end devices
        if (optimalQuality === 'low' && child.geometry) {
          child.geometry.dispose();
          // You could implement LOD here
        }
        
        // Optimize materials
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat: THREE.Material) => {
              if ('map' in mat && mat.map && qualitySettings.textureQuality < 1) {
                mat.map.minFilter = THREE.LinearFilter;
                mat.map.magFilter = THREE.LinearFilter;
              }
            });
          } else {
            if ('map' in child.material && child.material.map && qualitySettings.textureQuality < 1) {
              child.material.map.minFilter = THREE.LinearFilter;
              child.material.map.magFilter = THREE.LinearFilter;
            }
          }
        }
      }
    });

    return scene;
  }, [gltf, optimalQuality, qualitySettings]);

  useEffect(() => {
    if (gltf && !isLoaded) {
      setIsLoaded(true);
      onLoad?.();
    }
  }, [gltf, isLoaded, onLoad]);

  if (!optimizedScene) return null;

  return (
    <primitive
      object={optimizedScene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

export default OptimizedModel;
