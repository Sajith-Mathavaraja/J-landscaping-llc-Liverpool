import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const artifactDir = `C:\\Users\\Sajith\\.gemini\\antigravity\\brain\\e0bf1dab-fed5-41a6-b64b-fd04bac33e85`;
const publicImagesDir = `c:\\Users\\Sajith\\Desktop\\J landscaping llc Liverpool\\public\\images`;

const artifactFiles = fs.readdirSync(artifactDir);
const logoFile = artifactFiles.find(f => f.startsWith('brand_logo') && f.endsWith('.jpg'));

if (logoFile) {
  const inputPath = path.join(artifactDir, logoFile);

  async function processLogo() {
    // 1. Full Logo
    await sharp(inputPath)
      .resize({ width: 500, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'logo.webp'));

    // 2. Icon Logo (Top Emblem)
    await sharp(inputPath)
      .extract({ left: 100, top: 100, width: 800, height: 800 })
      .resize({ width: 200, height: 200 })
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'logo-icon.webp'));

    console.log('Successfully processed brand logo into WebP assets!');
  }

  processLogo().catch(console.error);
} else {
  console.error('Logo file not found');
}
