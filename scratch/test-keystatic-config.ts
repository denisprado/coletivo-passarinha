import config from '../keystatic.config';
import assert from 'node:assert';

console.log('Testing Keystatic config...');

assert.ok(config, 'Config must be defined');
assert.ok(config.collections, 'Config must have collections');
assert.ok(config.collections.espetaculos, 'espetaculos collection must exist');
assert.ok(config.collections.praticasFormativas, 'praticasFormativas collection must exist');
assert.ok(config.collections.equipe, 'equipe collection must exist');
assert.ok(config.collections.historico, 'historico collection must exist');

assert.ok(config.singletons, 'Config must have singletons');
assert.ok(config.singletons.configuracoes, 'configuracoes singleton must exist');

console.log('Config test passed! Collections:', Object.keys(config.collections), 'Singletons:', Object.keys(config.singletons));
