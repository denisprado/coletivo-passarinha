import assert from 'node:assert';
import fs from 'node:fs';

console.log('Testing layout isolation logic in Header, Footer, and WhatsAppFloat...');

const headerCode = fs.readFileSync('src/components/Header.tsx', 'utf8');
const footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');
const whatsappCode = fs.readFileSync('src/components/WhatsAppFloat.tsx', 'utf8');

assert.ok(headerCode.includes('pathname'), 'Header must inspect pathname');
assert.ok(headerCode.includes('/keystatic'), 'Header must hide on /keystatic');

assert.ok(footerCode.includes('pathname'), 'Footer must inspect pathname');
assert.ok(footerCode.includes('/keystatic'), 'Footer must hide on /keystatic');

assert.ok(whatsappCode.includes('pathname'), 'WhatsAppFloat must inspect pathname');
assert.ok(whatsappCode.includes('/keystatic'), 'WhatsAppFloat must hide on /keystatic');

console.log('Layout isolation test passed!');
