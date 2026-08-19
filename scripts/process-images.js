import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const artifactDir = `C:\\Users\\Sajith\\.gemini\\antigravity\\brain\\e0bf1dab-fed5-41a6-b64b-fd04bac33e85`;
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Find generated images in artifactDir
const artifactFiles = fs.readdirSync(artifactDir);

const getImageFile = (prefix) => {
  const match = artifactFiles.find(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  if (match) return path.join(artifactDir, match);
  return null;
};

const heroPath = getImageFile('hero_landscape');
const before1Path = getImageFile('before_1');
const after1Path = getImageFile('after_1');
const before2Path = getImageFile('before_2');
const after2Path = getImageFile('after_2');
const hardscapePath = getImageFile('showcase_hardscape');

async function processAll() {
  console.log('Processing images into WebP format...');

  // 1. Hero Image (1200px max width for perfect LCP performance)
  if (heroPath) {
    await sharp(heroPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(publicImagesDir, 'hero-landscape.webp'));
    console.log('Processed hero-landscape.webp');
  }

  // 2. Before / After 1
  if (before1Path) {
    await sharp(before1Path)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'before-1.webp'));
    console.log('Processed before-1.webp');
  }
  if (after1Path) {
    await sharp(after1Path)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'after-1.webp'));
    console.log('Processed after-1.webp');
  }

  // 3. Before / After 2
  if (before2Path) {
    await sharp(before2Path)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'before-2.webp'));
    console.log('Processed before-2.webp');
  }
  if (after2Path) {
    await sharp(after2Path)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'after-2.webp'));
    console.log('Processed after-2.webp');
  }

  // 4. Hardscaping Showcase
  if (hardscapePath) {
    await sharp(hardscapePath)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'showcase-hardscape.webp'));
    console.log('Processed showcase-hardscape.webp');
  }

  // 5. Lawn showcase (use after1 as base)
  if (after1Path) {
    await sharp(after1Path)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'showcase-lawn.webp'));
    console.log('Processed showcase-lawn.webp');
  }

  // 6. Mulch showcase (use after2 as base)
  if (after2Path) {
    await sharp(after2Path)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'showcase-mulch.webp'));
    console.log('Processed showcase-mulch.webp');
  }

  // 7. Design showcase (use hero cropped/resized)
  if (heroPath) {
    await sharp(heroPath)
      .resize({ width: 800, height: 600, fit: 'cover' })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'showcase-design.webp'));
    console.log('Processed showcase-design.webp');

    await sharp(heroPath)
      .resize({ width: 800, height: 600, fit: 'cover' })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'about-team.webp'));
    console.log('Processed about-team.webp');

    await sharp(heroPath)
      .resize({ width: 800, height: 600, fit: 'cover' })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'showcase-cleanup.webp'));
    console.log('Processed showcase-cleanup.webp');

    await sharp(heroPath)
      .resize({ width: 800, height: 600, fit: 'cover' })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(publicImagesDir, 'showcase-sod.webp'));
    console.log('Processed showcase-sod.webp');
  }

  console.log('All image processing complete!');
}

processAll().catch(console.error);
