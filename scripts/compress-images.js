#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log('🖼️  Starting image optimization...');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageConfigs = [
  { 
    name: 'sky.hdr', 
    type: 'hdr',
    quality: 80,
    maxWidth: 2048,
    maxHeight: 2048
  },
  { 
    name: 'puresky.hdr', 
    type: 'hdr',
    quality: 80,
    maxWidth: 2048,
    maxHeight: 2048
  },
  { 
    name: 'autumn_field_puresky.jpg', 
    type: 'jpeg',
    quality: 85,
    maxWidth: 1920,
    maxHeight: 1080
  },
  { 
    name: 'skypng.png', 
    type: 'png',
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080
  },
  { 
    name: 'suskinLanding.png', 
    type: 'png',
    quality: 90,
    maxWidth: 1200,
    maxHeight: 800
  },
  { 
    name: 'suskinShopping.png', 
    type: 'png',
    quality: 90,
    maxWidth: 1200,
    maxHeight: 800
  },
  { 
    name: 'pikkolo .png', 
    type: 'png',
    quality: 90,
    maxWidth: 800,
    maxHeight: 600
  },
  { 
    name: 'inkUp1.png', 
    type: 'png',
    quality: 90,
    maxWidth: 800,
    maxHeight: 600
  },
  { 
    name: 'inkUp2.png', 
    type: 'png',
    quality: 90,
    maxWidth: 800,
    maxHeight: 600
  },
  { 
    name: 'elisaCV.jpg', 
    type: 'jpeg',
    quality: 90,
    maxWidth: 800,
    maxHeight: 1000
  }
];

async function optimizeImage(imageConfig) {
  const inputPath = path.join(imagesDir, imageConfig.name);
  const outputPath = path.join(outputDir, imageConfig.name);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Image not found: ${imageConfig.name}`);
    return;
  }

  try {
    console.log(`🔧 Optimizing ${imageConfig.name}...`);
    
    let pipeline = sharp(inputPath);
    
    // Resize if needed
    if (imageConfig.maxWidth || imageConfig.maxHeight) {
      pipeline = pipeline.resize(imageConfig.maxWidth, imageConfig.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply quality settings based on type
    if (imageConfig.type === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: imageConfig.quality });
    } else if (imageConfig.type === 'png') {
      pipeline = pipeline.png({ quality: imageConfig.quality });
    }
    
    // Also create WebP version for modern browsers
    const webpPath = outputPath.replace(/\.[^.]+$/, '.webp');
    await pipeline.toFile(outputPath);
    await sharp(inputPath)
      .resize(imageConfig.maxWidth, imageConfig.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: imageConfig.quality })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    const webpReduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${imageConfig.name}:`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    console.log(`   WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB (${webpReduction}% reduction)`);
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${imageConfig.name}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('📁 Found images to optimize:', imageConfigs.length);
  
  for (const imageConfig of imageConfigs) {
    await optimizeImage(imageConfig);
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log(`📂 Optimized images saved to: ${outputDir}`);
  console.log('\n💡 Next steps:');
  console.log('1. Test the optimized images');
  console.log('2. Update your components to use optimized images');
  console.log('3. Consider implementing responsive images with srcset');
  console.log('4. Use WebP format for modern browsers');
}

optimizeAllImages().catch(console.error);
