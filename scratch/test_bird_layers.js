const sharp = require('sharp');
const fs = require('fs');

async function run() {
  const meta = await sharp('public/brand/passarinha-ave.png').metadata();
  const w = meta.width; // 591
  const h = meta.height; // 528

  // The wing polygon: covers top-left to shoulder
  // Shoulder pivot point is approximately at (310, 290)
  // Neck is around (380, 240) to (410, 210)
  // Back is around (240, 310)
  
  // Wing SVG mask:
  // Points: (0,0) -> (360, 0) -> (355, 240) -> (310, 310) -> (190, 305) -> (0, 240) -> (0,0)
  const wingMaskSvg = Buffer.from(`
    <svg width="${w}" height="${h}">
      <path d="M 0 0 L 370 0 L 370 230 C 350 250, 330 280, 305 315 C 260 315, 200 300, 160 280 L 0 240 Z" fill="white" />
    </svg>
  `);

  // Body SVG mask: invert of wing mask
  const bodyMaskSvg = Buffer.from(`
    <svg width="${w}" height="${h}">
      <rect width="${w}" height="${h}" fill="white" />
      <path d="M 0 0 L 370 0 L 370 230 C 350 250, 330 280, 305 315 C 260 315, 200 300, 160 280 L 0 240 Z" fill="black" />
    </svg>
  `);

  // Extract wing:
  await sharp('public/brand/passarinha-ave.png')
    .composite([{ input: wingMaskSvg, blend: 'dest-in' }])
    .png()
    .toFile('public/brand/test-wing.png');

  // Extract body:
  await sharp('public/brand/passarinha-ave.png')
    .composite([{ input: bodyMaskSvg, blend: 'dest-in' }])
    .png()
    .toFile('public/brand/test-body.png');

  console.log('Created test-wing.png and test-body.png');
}

run().catch(console.error);
