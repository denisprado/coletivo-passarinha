import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

console.log('Testing Keystatic App Router files existence and structure...');

const pagePath = path.resolve('src/app/keystatic/[[...params]]/page.tsx');
const layoutPath = path.resolve('src/app/keystatic/layout.tsx');
const routePath = path.resolve('src/app/api/keystatic/[...params]/route.ts');

assert.ok(fs.existsSync(pagePath), 'src/app/keystatic/[[...params]]/page.tsx must exist');
assert.ok(fs.existsSync(layoutPath), 'src/app/keystatic/layout.tsx must exist');
assert.ok(fs.existsSync(routePath), 'src/app/api/keystatic/[...params]/route.ts must exist');

const pageContent = fs.readFileSync(pagePath, 'utf8');
const routeContent = fs.readFileSync(routePath, 'utf8');

assert.ok(pageContent.includes('makePage'), 'page.tsx must use makePage');
assert.ok(routeContent.includes('makeRouteHandler'), 'route.ts must use makeRouteHandler');
assert.ok(routeContent.includes('GET'), 'route.ts must export GET');
assert.ok(routeContent.includes('POST'), 'route.ts must export POST');

console.log('Keystatic App Router route files test passed!');
