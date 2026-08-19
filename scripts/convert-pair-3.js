import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const artifactDir = `C:\\Users\\Sajith\\.gemini\\antigravity\\brain\\e0bf1dab-fed5-41a6-b64b-fd04bac33e85`;
const publicImagesDir = `c:\\Users\\Sajith\\Desktop\\J landscaping llc Liverpool\\public\\images`;

const files = fs.readdirSync(artifactDir);
const before3 = files.find(f => f.startsWith('before_3') && f.endsWith('.jpg'));
const after3 = files.find(f => f.startsWith('after_3') && f.endsWith('.jpg'));

async function convertPair() {
  if (before3) {
    await sharp(path.join(artifactDir, before3))
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(publicImagesDir, 'before-3.webp'));
    console.log('before-3.webp created');
  }
  if (after3) {
    await sharp(path.join(artifactDir, after3))
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(publicImagesDir, 'after-3.webp'));
    console.log('after-3.webp created');
  }
}

convertPair().catch(console.error);
