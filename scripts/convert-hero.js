import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const userUploadedImage = `C:\\Users\\Sajith\\.gemini\\antigravity\\brain\\e0bf1dab-fed5-41a6-b64b-fd04bac33e85\\.user_uploaded\\media_1787144751487.jpg`;
const outputPath = `c:\\Users\\Sajith\\Desktop\\J landscaping llc Liverpool\\public\\images\\hero-landscape.webp`;

async function convert() {
  await sharp(userUploadedImage)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(outputPath);
  console.log('Successfully updated hero-landscape.webp with user sunset hero background image!');
}

convert().catch(console.error);
