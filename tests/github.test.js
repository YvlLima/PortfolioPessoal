import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchGitHubSnapshot } from '../src/utils/github.js';

const json = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), { status, headers });
const fetcher = (overrides = {}) => async (url) => {
  if (url.includes('/repos?')) return overrides.repos?.() || json([]);
  if (url.includes('/events/')) return overrides.events?.() || json([]);
  return overrides.user?.() || json({ login: 'YvlLima', public_repos: 0 });
};

test('a genuinely empty account stays empty, with no sample repositories or events', async () => {
  const result = await fetchGitHubSnapshot({ fetcher: fetcher() });
  assert.equal(result.user.public_repos, 0);
  assert.deepEqual(result.repos, []);
  assert.deepEqual(result.events, []);
  assert.ok(Number.isFinite(Date.parse(result.syncedAt)));
});

test('partial HTTP failure rejects the entire snapshot rather than reporting successful sync', async () => {
  await assert.rejects(fetchGitHubSnapshot({ fetcher: fetcher({ events: () => json({}, 503) }) }), { kind: 'unavailable' });
});

test('rate-limit errors expose the reset time without fabricating fresh data', async () => {
  await assert.rejects(fetchGitHubSnapshot({ fetcher: fetcher({ repos: () => json({}, 403, { 'x-ratelimit-remaining': '0', 'x-ratelimit-reset': '1800000000' }) }) }), { kind: 'rate-limit', retryAt: 1800000000000 });
});

test('HTTP 429 is a rate limit even without reset headers', async () => {
  await assert.rejects(fetchGitHubSnapshot({ fetcher: fetcher({ user: () => json({}, 429) }) }), { kind: 'rate-limit', retryAt: null });
});

test('other forbidden responses are not mislabelled as rate limits', async () => {
  await assert.rejects(fetchGitHubSnapshot({ fetcher: fetcher({ user: () => json({}, 403) }) }), { kind: 'unavailable' });
});

test('malformed successful responses do not become live content', async () => {
  await assert.rejects(fetchGitHubSnapshot({ fetcher: fetcher({ repos: () => json({ message: 'unexpected' }) }) }), /Invalid GitHub response/);
});

test('network failure never produces a successful snapshot', async () => {
  await assert.rejects(fetchGitHubSnapshot({ fetcher: async () => { throw new TypeError('Network unavailable'); } }), /Network unavailable/);
});

test('one cancellation signal covers all requests and no authentication token is sent', async () => {
  const controller = new AbortController();
  controller.abort();
  let calls = 0;
  await assert.rejects(fetchGitHubSnapshot({ signal: controller.signal, fetcher: async (_url, options) => {
    calls++;
    assert.equal(options.signal, controller.signal);
    assert.equal(options.headers.Authorization, undefined);
    options.signal.throwIfAborted();
  } }), { name: 'AbortError' });
  assert.equal(calls, 3);
});
