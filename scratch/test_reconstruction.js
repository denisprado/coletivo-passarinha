const sharp = require('sharp');
const fs = require('fs');

async function testReconstruction() {
  const meta = await sharp('public/brand/passarinha-ave.png').metadata();
  const w = meta.width; // 591
  const h = meta.height; // 528

  // The wing polygon:
  // Starts top-left (0,0), goes to (410, 0), drops down behind head at (410, 200),
  // curves down the back/shoulder to (300, 310), then under the wing to (150, 290),
  // then out to (0, 270) and closes at (0, 0).
  const wingMask = Buffer.from(`
    <svg width="${w}" height="${h}">
      <path d="M 0 0 L 410 0 L 410 200 C 370 215, 335 250, 305 305 C 250 310, 190 295, 140 275 L 0 250 Z" fill="white" />
    </svg>
  `);

  const bodyMask = Buffer.from(`
    <svg width="${w}" height="${h}">
      <rect width="${w}" height="${h}" fill="white" />
      <path d="M 0 0 L 410 0 L 410 200 C 370 215, 335 250, 305 305 C 250 310, 190 295, 140 275 L 0 250 Z" fill="black" />
    </svg>
  `);

  // Wing layer
  await sharp('public/brand/passarinha-ave.png')
    .composite([{ input: wingMask, blend: 'dest-in' }])
    .webp({ quality: 95 })
    .toFile('public/brand/passarinha-asa.webp');

  // Body layer
  await sharp('public/brand/passarinha-ave.png')
    .composite([{ input: bodyMask, blend: 'dest-in' }])
    .webp({ quality: 95 })
    .toFile('public/brand/passarinha-corpo.webp');

  console.log('Saved passarinha-asa.webp and passarinha-corpo.webp');
}

testReconstruction().catch(console.error);
