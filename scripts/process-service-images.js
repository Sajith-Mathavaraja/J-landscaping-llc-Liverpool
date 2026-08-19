import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const artifactDir = `C:\\Users\\Sajith\\.gemini\\antigravity\\brain\\e0bf1dab-fed5-41a6-b64b-fd04bac33e85`;
const publicImagesDir = `c:\\Users\\Sajith\\Desktop\\J landscaping llc Liverpool\\public\\images\\services`;

// Ensure services directory exists
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const serviceImages = [
  { prefix: 'service_lawn_care', output: 'lawn-care.webp' },
  { prefix: 'service_landscape_design', output: 'landscape-design.webp' },
  { prefix: 'service_mulch_stone', output: 'mulch-stone.webp' },
  { prefix: 'service_shrub_plant', output: 'shrub-plant.webp' },
  { prefix: 'service_cleanup', output: 'spring-fall-cleanup.webp' },
  { prefix: 'service_sod', output: 'sod-installation.webp' },
  { prefix: 'service_hardscaping', output: 'hardscaping.webp' },
  { prefix: 'service_property_cleanup', output: 'property-cleanup.webp' },
];

const artifactFiles = fs.readdirSync(artifactDir);

async function processAll() {
  for (const svc of serviceImages) {
    const file = artifactFiles.find(f => f.startsWith(svc.prefix) && (f.endsWith('.jpg') || f.endsWith('.png')));
    if (file) {
      const inputPath = path.join(artifactDir, file);
      const outputPath = path.join(publicImagesDir, svc.output);
      await sharp(inputPath)
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ ${svc.output}`);
    } else {
      console.warn(`✗ Not found: ${svc.prefix}`);
    }
  }
  console.log('All service images processed!');
}

processAll().catch(console.error);
