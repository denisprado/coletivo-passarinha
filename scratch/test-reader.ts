import assert from 'node:assert';
import {
  getShows,
  getWorkshops,
  getTeamMembers,
  getTimeline,
  getSiteConfig,
} from '../src/lib/keystatic';

console.log('Testing src/lib/keystatic reader helper functions...');

async function test() {
  const shows = await getShows();
  assert.ok(Array.isArray(shows), 'getShows must return an array');
  assert.ok(shows.length >= 4, 'Must return at least 4 shows');
  assert.ok(shows[0].title, 'First show must have a title');
  assert.ok(shows[0].id, 'First show must have an id');
  assert.ok(shows[0].photos, 'First show must have photos');

  const workshops = await getWorkshops();
  assert.ok(Array.isArray(workshops), 'getWorkshops must return an array');
  assert.ok(workshops.length >= 3, 'Must return at least 3 workshops');
  assert.ok(workshops[0].title, 'First workshop must have a title');

  const team = await getTeamMembers();
  assert.ok(Array.isArray(team), 'getTeamMembers must return an array');
  assert.ok(team.length >= 4, 'Must return at least 4 team members');
  assert.ok(team[0].name, 'First team member must have a name');

  const timeline = await getTimeline();
  assert.ok(Array.isArray(timeline), 'getTimeline must return an array');
  assert.ok(timeline.length >= 9, 'Must return at least 9 timeline items');

  const config = await getSiteConfig();
  assert.ok(config, 'getSiteConfig must return an object');
  assert.ok(config.phone, 'Config must have a phone');
  assert.ok(config.emailGeral, 'Config must have an email');

  console.log('src/lib/keystatic test passed successfully!');
}

test();
