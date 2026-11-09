const sharp = require('sharp');
const fs = require('fs');

async function generateFrames() {
  const w = 591;
  const h = 528;

  // Let's refine the wing and body separation
  // Pivot point: Px = 305, Py = 295 (wing shoulder joint)
  
  // Wing mask:
  const wingMask = Buffer.from(`
    <svg width="${w}" height="${h}">
      <path d="M 0 0 L 415 0 L 415 195 C 375 210, 335 245, 305 295 C 255 300, 195 285, 140 265 L 0 240 Z" fill="white" />
    </svg>
  `);

  // Body mask with a nice feathered curve where the wing sits
  const bodyMask = Buffer.from(`
    <svg width="${w}" height="${h}">
      <rect width="${w}" height="${h}" fill="white" />
      <path d="M 0 0 L 415 0 L 415 195 C 375 210, 335 245, 305 295 C 255 300, 195 285, 140 265 L 0 240 Z" fill="black" />
    </svg>
  `);

  const wingBuf = await sharp('public/brand/passarinha-ave.png')
    .composite([{ input: wingMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // For the body, let's also fill the back cavity with an artistic feathered patch so when the wing is down,
  // the bird has a complete back
  const backFillSvg = Buffer.from(`
    <svg width="${w}" height="${h}">
      <path d="M 230 330 C 270 320, 310 310, 345 285 C 380 260, 395 235, 410 205 C 390 220, 360 250, 310 280 C 270 300, 230 315, 200 325 Z" fill="#E91C47" opacity="0.9" />
    </svg>
  `);

  const bodyBuf = await sharp('public/brand/passarinha-ave.png')
    .composite([
      { input: bodyMask, blend: 'dest-in' },
      { input: backFillSvg, blend: 'over' }
    ])
    .png()
    .toBuffer();

  await sharp(wingBuf).webp({ quality: 95 }).toFile('public/brand/passarinha-asa.webp');
  await sharp(bodyBuf).webp({ quality: 95 }).toFile('public/brand/passarinha-corpo.webp');

  console.log('Successfully saved passarinha-asa.webp and passarinha-corpo.webp');
}

generateFrames().catch(console.error);
