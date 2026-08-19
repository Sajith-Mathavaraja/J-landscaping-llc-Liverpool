import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userUploadedImage = `C:\\Users\\Sajith\\.gemini\\antigravity\\brain\\e0bf1dab-fed5-41a6-b64b-fd04bac33e85\\.user_uploaded\\media_1787144751487.jpg`;
const publicDir = `c:\\Users\\Sajith\\Desktop\\J landscaping llc Liverpool\\public\\images`;

async function processHeroImages() {
  const metadata = await sharp(userUploadedImage).metadata();
  console.log('Original image dimensions:', metadata.width, metadata.height);

  // 1. Desktop version
  await sharp(userUploadedImage)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(path.join(publicDir, 'hero-landscape.webp'));

  // 2. Mobile Portrait optimized version (4:5 / 9:16 framing that captures sunset, house, and mower lawn lines)
  // Let's create an optimized mobile crop
  await sharp(userUploadedImage)
    .resize({
      width: 800,
      height: 1100,
      fit: 'cover',
      position: 'center'
    })
    .webp({ quality: 85, effort: 6 })
    .toFile(path.join(publicDir, 'hero-mobile.webp'));

  console.log('Successfully created desktop & mobile hero WebP images!');
}

processHeroImages().catch(console.error);
