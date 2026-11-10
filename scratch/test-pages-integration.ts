import assert from 'node:assert';
import fs from 'node:fs';

console.log('Testing page integration with Keystatic reader...');

const espetaculosCode = fs.readFileSync('src/app/espetaculos/page.tsx', 'utf8');
const praticasCode = fs.readFileSync('src/app/praticas-formativas/page.tsx', 'utf8');
const quemSomosCode = fs.readFileSync('src/app/quem-somos/page.tsx', 'utf8');

assert.ok(espetaculosCode.includes('getShows'), 'espetaculos/page.tsx must call getShows');
assert.ok(praticasCode.includes('getWorkshops'), 'praticas-formativas/page.tsx must call getWorkshops');
assert.ok(quemSomosCode.includes('getTeamMembers'), 'quem-somos/page.tsx must call getTeamMembers');

console.log('Pages integration test passed!');
