const sharp = require('sharp');

async function testComposite() {
  const w = 591;
  const h = 528;

  // Let's composite the body and the wing at 0 deg:
  await sharp('public/brand/passarinha-corpo.webp')
    .composite([{ input: 'public/brand/passarinha-asa.webp' }])
    .webp({ quality: 95 })
    .toFile('public/brand/test-assembled-0.webp');

  // Let's rotate the wing by -20 deg with pivot at (305, 295)
  // In sharp, we can rotate an image around its center, or we can use SVG:
  const svgRotated = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <image href="passarinha-corpo.webp" width="${w}" height="${h}" />
      <g transform="rotate(-22 305 295)">
        <image href="passarinha-asa.webp" width="${w}" height="${h}" />
      </g>
    </svg>
  `;

  await sharp(Buffer.from(svgRotated), { density: 72 })
    .webp({ quality: 95 })
    .toFile('public/brand/test-assembled-flapped.webp');

  console.log('Saved test-assembled-0.webp and test-assembled-flapped.webp');
}

testComposite().catch(console.error);
