import React, { useState } from 'react';
import { RefreshCw, FolderGit2, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import useGitHub from '../hooks/useGitHub';

const eventLabels = {
  PushEvent: ['Commits enviados', 'Commits pushed'], CreateEvent: ['Criação de repositório, branch ou tag', 'Repository, branch or tag created'],
  PullRequestEvent: ['Atividade num pull request', 'Pull request activity'], IssuesEvent: ['Atividade numa issue', 'Issue activity'],
  ReleaseEvent: ['Atividade numa versão', 'Release activity'], WatchEvent: ['Repositório marcado com estrela', 'Repository starred'],
  ForkEvent: ['Fork criado', 'Fork created'], DeleteEvent: ['Branch ou tag removida', 'Branch or tag deleted'],
};
export default function GitHubLive({ lang }) {
  const { snapshot, loading, error, refresh } = useGitHub();
  const [tab, setTab] = useState('repos');
  const pt = lang === 'pt';
  const date = value => new Date(value).toLocaleString(pt ? 'pt-PT' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' });
  const repos = snapshot?.repos || [];
  const events = snapshot?.events || [];
  return <section className="github-live-wrapper" aria-labelledby="github-title">
    <SpotlightCard className="github-live-panel">
      <div className="github-live-header"><div><span className="github-badge-text">GITHUB · @YvlLima</span></div>
        <button className="github-sync-btn" disabled={loading} onClick={refresh}><RefreshCw size={15} className={loading ? 'spin-icon' : ''} />{loading ? (pt ? 'A consultar…' : 'Loading…') : (pt ? 'Atualizar' : 'Refresh')}</button>
      </div>
      <div className="github-live-intro"><h2 id="github-title" className="github-live-title">{pt ? 'Mais no GitHub' : 'More on GitHub'}</h2><p className="github-live-sub">{pt ? 'Até 6 repositórios públicos atualizados recentemente e eventos devolvidos pela API do GitHub.' : 'Up to 6 recently updated public repositories and events returned by the GitHub API.'}</p></div>
      <div className="github-status" role="status" aria-live="polite">
        {loading && <p>{pt ? 'A consultar os dados públicos…' : 'Fetching public data…'}</p>}
        {error && <p className="github-error">{error.kind === 'rate-limit' ? (pt ? 'O limite de pedidos do GitHub foi atingido.' : 'The GitHub API rate limit has been reached.') : error.kind === 'timeout' ? (pt ? 'O GitHub demorou demasiado a responder.' : 'GitHub took too long to respond.') : (pt ? 'Não foi possível consultar o GitHub.' : 'Could not fetch GitHub data.')}{error.retryAt ? ` ${pt ? 'Tenta novamente após' : 'Try again after'} ${date(error.retryAt)}.` : ''} {snapshot ? (pt ? 'A mostrar os últimos dados obtidos nesta sessão.' : 'Showing the last data fetched in this session.') : (pt ? 'Podes tentar novamente ou abrir o perfil.' : 'You can retry or open the profile.')}</p>}
        {snapshot && <p>{pt ? 'Última consulta bem-sucedida' : 'Last successful fetch'}: <time dateTime={snapshot.syncedAt}>{date(snapshot.syncedAt)}</time> · {snapshot.user.public_repos} {pt ? 'repositórios públicos no perfil' : 'public repositories on the profile'}</p>}
      </div>
      <div className="github-subtabs" role="group" aria-label={pt ? 'Conteúdo do GitHub' : 'GitHub content'}>
        <button className={`github-tab-btn ${tab === 'repos' ? 'active' : ''}`} aria-pressed={tab === 'repos'} onClick={() => setTab('repos')}>{pt ? 'Repositórios' : 'Repositories'}</button>
        <button className={`github-tab-btn ${tab === 'activity' ? 'active' : ''}`} aria-pressed={tab === 'activity'} onClick={() => setTab('activity')}>{pt ? 'Atividade pública' : 'Public activity'}</button>
      </div>
      {snapshot && tab === 'repos' && <div className="github-repos-grid">
        {repos.length === 0 && <p>{pt ? 'Sem repositórios públicos nesta consulta.' : 'No public repositories in this response.'}</p>}
        {repos.map(repo => <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-repo-card"><div className="github-repo-top"><span className="github-repo-name"><FolderGit2 size={17} /> {repo.name}</span><ExternalLink size={15} /></div><p className="github-repo-desc">{repo.description || (pt ? 'Sem descrição no GitHub.' : 'No description on GitHub.')}</p><div className="github-repo-footer"><span>{repo.language || (pt ? 'Linguagem não indicada' : 'Language not specified')}</span><time dateTime={repo.updated_at}>{new Date(repo.updated_at).toLocaleDateString(pt ? 'pt-PT' : 'en-GB')}</time></div></a>)}
      </div>}
      {snapshot && tab === 'activity' && <div className="github-activity-stream">
        {events.length === 0 && <p>{pt ? 'Sem eventos públicos nesta consulta. Isto não significa ausência de trabalho.' : 'No public events in this response. This does not mean no work was done.'}</p>}
        {events.map(event => <div className="github-activity-item" key={event.id}><div className="github-activity-content"><div className="github-activity-header"><span>{(eventLabels[event.type] || ['Atividade pública', 'Public activity'])[pt ? 0 : 1]}</span><time dateTime={event.created_at}>{date(event.created_at)}</time></div><a className="github-activity-repo-link" href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer">{event.repo.name}<ExternalLink size={14} /></a></div></div>)}
      </div>}
      <div className="github-live-footer"><a href="https://github.com/YvlLima" target="_blank" rel="noopener noreferrer" className="github-view-all-link">{pt ? 'Ver perfil no GitHub' : 'View GitHub profile'}<ExternalLink size={15} /></a></div>
    </SpotlightCard>
  </section>;
}
