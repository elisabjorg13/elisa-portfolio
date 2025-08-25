import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,
  // Enable bundle analyzer in production
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')())()
      );
      return config;
    },
  }),
};

export default nextConfig;
