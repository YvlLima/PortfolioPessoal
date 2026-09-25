const API = 'https://api.github.com/users/YvlLima';

export async function fetchGitHubSnapshot({ signal, fetcher = fetch } = {}) {
  const read = async (path) => {
    const response = await fetcher(`${API}${path}`, { signal, headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) {
      const error = new Error(`GitHub HTTP ${response.status}`);
      error.kind = response.status === 429 || (response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0') ? 'rate-limit' : 'unavailable';
      const reset = Number(response.headers.get('x-ratelimit-reset'));
      error.retryAt = reset > 0 ? reset * 1000 : null;
      throw error;
    }
    return response.json();
  };
  const [user, repos, events] = await Promise.all([read(''), read('/repos?sort=updated&per_page=6'), read('/events/public?per_page=6')]);
  if (!user?.login || !Number.isInteger(user.public_repos) || !Array.isArray(repos) || !Array.isArray(events)) {
    throw new Error('Invalid GitHub response');
  }
  return { user, repos, events, syncedAt: new Date().toISOString() };
}
