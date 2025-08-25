#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting 3D model optimization...');

const modelsDir = path.join(__dirname, '../public/models');
const outputDir = path.join(__dirname, '../public/models/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const models = [
  { name: 'me.glb', targetSize: '2MB' },
  { name: 'meLillyPad.glb', targetSize: '3MB' },
  { name: 'djokLogo360.glb', targetSize: '500KB' },
  { name: 'Speakers.glb', targetSize: '500KB' },
  { name: 'Speakers2.glb', targetSize: '500KB' },
  { name: 'computerwall.glb', targetSize: '500KB' },
  { name: 'glass.glb', targetSize: '200KB' },
  { name: 'paper.glb', targetSize: '100KB' },
  { name: 'controller.glb', targetSize: '100KB' },
  { name: 'computer2.glb', targetSize: '100KB' },
  { name: 'blendermuseum.glb', targetSize: '50KB' }
];

async function optimizeModel(modelName, targetSize) {
  const inputPath = path.join(modelsDir, modelName);
  const outputPath = path.join(outputDir, modelName);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Model not found: ${modelName}`);
    return;
  }

  try {
    console.log(`🔧 Optimizing ${modelName}...`);
    
    // Use gltf-pipeline to optimize the model
    const command = `npx gltf-pipeline -i "${inputPath}" -o "${outputPath}" -s`;
    
    execSync(command, { stdio: 'inherit' });
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${modelName}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${modelName}:`, error.message);
  }
}

async function optimizeAllModels() {
  console.log('📁 Found models to optimize:', models.length);
  
  for (const model of models) {
    await optimizeModel(model.name, model.targetSize);
  }
  
  console.log('\n🎉 Model optimization complete!');
  console.log(`📂 Optimized models saved to: ${outputDir}`);
  console.log('\n💡 Next steps:');
  console.log('1. Test the optimized models');
  console.log('2. Update your Scene component to use optimized models');
  console.log('3. Consider implementing LOD (Level of Detail) for mobile');
}

optimizeAllModels().catch(console.error);
