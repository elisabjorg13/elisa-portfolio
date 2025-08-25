// Performance optimization utilities for 3D models

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 700 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;
  
  // Check for low-end devices
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const cores = (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency;
  
  return (memory && memory < 4) || (cores && cores < 4);
};

export const getOptimalQuality = () => {
  if (isLowEndDevice()) return 'low';
  if (isMobileDevice()) return 'medium';
  return 'high';
};

export const getModelQualitySettings = (quality: 'low' | 'medium' | 'high') => {
  switch (quality) {
    case 'low':
      return {
        dpr: 1,
        antialias: false,
        shadows: false,
        postprocessing: false,
        maxLights: 2,
        textureQuality: 0.5,
      };
    case 'medium':
      return {
        dpr: 1.5,
        antialias: false,
        shadows: false,
        postprocessing: false,
        maxLights: 3,
        textureQuality: 0.75,
      };
    case 'high':
      return {
        dpr: 2,
        antialias: true,
        shadows: true,
        postprocessing: true,
        maxLights: 5,
        textureQuality: 1,
      };
  }
};

export const preloadCriticalModels = async () => {
  const criticalModels = [
    '/models/me.glb',
    '/models/computerwall.glb',
    '/models/blendermuseum.glb'
  ];
  
  try {
    await Promise.all(
      criticalModels.map(url => 
        fetch(url, { method: 'HEAD' })
      )
    );
  } catch (error) {
    console.warn('Failed to preload some models:', error);
  }
};

export const createOptimizedImageBitmap = async (url: string, quality: number = 1): Promise<ImageBitmap | null> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return await createImageBitmap(blob, { 
      imageOrientation: 'none',
      premultiplyAlpha: 'none',
      colorSpaceConversion: 'none',
      resizeQuality: quality < 1 ? 'low' : 'high'
    });
  } catch (error) {
    console.error('Failed to create image bitmap:', error);
    return null;
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
