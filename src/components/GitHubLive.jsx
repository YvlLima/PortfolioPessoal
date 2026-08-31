import React, { useState } from 'react';
import {
  RefreshCw,
  Terminal,
  FolderGit2,
  Activity,
  Cpu,
  Calendar,
  ExternalLink,
  Star,
  Clock,
  GitCommit,
  ChevronRight
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const GitHubLive = ({
  t,
  lang,
  githubUser,
  githubRepos,
  githubEvents,
  githubTab,
  setGithubTab,
  isSyncing,
  lastSyncTime,
  fetchGitHubLive,
  githubUrl
}) => {
  const [chartError, setChartError] = useState(false);

  // Format Relative / Friendly Date
  const formatFriendlyDate = (dateStr, currentLang) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now - date;
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        return currentLang === 'pt' ? 'Hoje' : 'Today';
      }
      if (diffDays === 1) {
        return currentLang === 'pt' ? 'Ontem' : 'Yesterday';
      }
      if (diffDays > 0 && diffDays < 30) {
        return currentLang === 'pt' ? `há ${diffDays} dias` : `${diffDays} days ago`;
      }

      return date.toLocaleDateString(currentLang === 'pt' ? 'pt-PT' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Language Color Mapping
  const getLanguageMeta = (langName) => {
    switch (langName?.toLowerCase()) {
      case 'javascript':
        return { color: '#f7df1e', name: 'JavaScript' };
      case 'typescript':
        return { color: '#3178c6', name: 'TypeScript' };
      case 'c#':
      case 'csharp':
        return { color: '#178600', name: 'C#' };
      case 'python':
        return { color: '#3572a5', name: 'Python' };
      case 'html':
        return { color: '#e34c26', name: 'HTML5' };
      case 'css':
        return { color: '#563d7c', name: 'CSS3' };
      case 'php':
        return { color: '#4F5D95', name: 'PHP' };
      default:
        return { color: 'var(--accent)', name: langName || 'Web / Code' };
    }
  };

  return (
    <div className="github-live-wrapper" style={{ marginTop: '4.5rem' }}>
      <SpotlightCard className="github-live-panel">
        {/* Top Live Sync Header Bar */}
        <div className="github-live-header">
          <div className="github-live-header-left">
            <div className="github-badge-pulse">
              <span className="live-pulse-dot" />
              <span className="github-badge-text">{t.githubLive.badge}</span>
            </div>
            <div className="github-user-pill">
              {githubUser.avatar_url && (
                <img
                  src={githubUser.avatar_url}
                  alt={githubUser.login}
                  className="github-avatar-img"
                />
              )}
              <span className="github-user-handle">@{githubUser.login}</span>
            </div>
          </div>

          <div className="github-live-header-right">
            {lastSyncTime && (
              <span className="github-last-sync-tag">
                {lastSyncTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
            <button
              onClick={fetchGitHubLive}
              disabled={isSyncing}
              className={`github-sync-btn ${isSyncing ? 'syncing' : ''}`}
              title={lang === 'pt' ? 'Clique para sincronizar com a API do GitHub' : 'Click to sync with GitHub API'}
            >
              <RefreshCw size={14} className={isSyncing ? 'spin-icon' : ''} />
              <span>{isSyncing ? t.githubLive.syncing : t.githubLive.syncBtn}</span>
            </button>
          </div>
        </div>

        {/* Panel Title & Description */}
        <div className="github-live-intro">
          <h3 className="github-live-title">
            <Terminal size={22} className="accent" />
            {t.githubLive.title}
          </h3>
          <p className="github-live-sub">
            {t.githubLive.subtitle}
          </p>
        </div>

        {/* Sub Tabs: Repositórios / Atividade / Estatísticas / Contribuições */}
        <div className="github-subtabs">
          <button
            className={`github-tab-btn ${githubTab === 'repos' ? 'active' : ''}`}
            onClick={() => setGithubTab('repos')}
          >
            <FolderGit2 size={15} />
            <span>{t.githubLive.tabRepos} ({githubRepos.length})</span>
          </button>
          <button
            className={`github-tab-btn ${githubTab === 'activity' ? 'active' : ''}`}
            onClick={() => setGithubTab('activity')}
          >
            <Activity size={15} />
            <span>{t.githubLive.tabActivity}</span>
          </button>
          <button
            className={`github-tab-btn ${githubTab === 'stats' ? 'active' : ''}`}
            onClick={() => setGithubTab('stats')}
          >
            <Cpu size={15} />
            <span>{t.githubLive.tabStats}</span>
          </button>
          <button
            className={`github-tab-btn ${githubTab === 'contributions' ? 'active' : ''}`}
            onClick={() => setGithubTab('contributions')}
          >
            <Calendar size={15} />
            <span>{t.githubLive.tabContributions}</span>
          </button>
        </div>

        {/* TAB 1: REPOSITÓRIOS ATIVOS */}
        {githubTab === 'repos' && (
          <div className="github-repos-grid">
            {githubRepos.map((repo) => {
              const langMeta = getLanguageMeta(repo.language);
              return (
                <a
                  key={repo.id || repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-repo-card"
                >
                  <div className="github-repo-top">
                    <div className="github-repo-name-box">
                      <FolderGit2 size={18} className="accent" />
                      <span className="github-repo-name">{repo.name}</span>
                    </div>
                    <ExternalLink size={16} className="github-ext-icon" />
                  </div>

                  <p className="github-repo-desc">
                    {repo.description || (lang === 'pt' ? 'Repositório de código e utilitários no GitHub' : 'GitHub source code and utility repository')}
                  </p>

                  <div className="github-repo-footer">
                    <div className="github-repo-lang">
                      <span
                        className="lang-color-dot"
                        style={{ backgroundColor: langMeta.color }}
                      />
                      <span>{langMeta.name}</span>
                    </div>

                    <div className="github-repo-meta-right">
                      {repo.stargazers_count > 0 && (
                        <span className="github-stat-pill">
                          <Star size={13} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.updated_at && (
                        <span className="github-repo-date" title={repo.updated_at}>
                          <Clock size={12} /> {formatFriendlyDate(repo.updated_at, lang)}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* TAB 2: ATIVIDADE RECENTE & COMMITS */}
        {githubTab === 'activity' && (
          <div className="github-activity-stream">
            {githubEvents.map((evt, idx) => (
              <div key={evt.id || idx} className="github-activity-item">
                <div className="github-activity-dot-line">
                  <div className="github-activity-dot">
                    <GitCommit size={14} />
                  </div>
                  {idx < githubEvents.length - 1 && <div className="github-activity-line" />}
                </div>

                <div className="github-activity-content">
                  <div className="github-activity-header">
                    <span className="github-activity-type">
                      {evt.actionText ? evt.actionText[lang] : t.githubLive.eventPush}
                    </span>
                    <span className="github-activity-date">
                      <Clock size={12} /> {formatFriendlyDate(evt.created_at, lang)}
                    </span>
                  </div>
                  <div className="github-activity-repo">
                    <a
                      href={`https://github.com/${evt.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-activity-repo-link"
                    >
                      <FolderGit2 size={14} />
                      <span>{evt.repo}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: LINGUAGENS & MÉTRICAS */}
        {githubTab === 'stats' && (
          <div className="github-stats-wrapper">
            <div className="github-stats-grid">
              <div className="github-stat-card">
                <span className="github-stat-num">{githubUser.public_repos || 4}</span>
                <span className="github-stat-label">{t.githubLive.statRepos}</span>
              </div>
              <div className="github-stat-card">
                <span className="github-stat-num" style={{ color: '#f7df1e' }}>JavaScript</span>
                <span className="github-stat-label">{t.githubLive.statLanguage}</span>
              </div>
              <div className="github-stat-card">
                <span className="github-stat-num" style={{ color: 'var(--accent)' }}>2024 — Presente</span>
                <span className="github-stat-label">{t.githubLive.statActivity}</span>
              </div>
              <div className="github-stat-card">
                <span className="github-stat-num">
                  {formatFriendlyDate(githubRepos[0]?.updated_at, lang)}
                </span>
                <span className="github-stat-label">{lang === 'pt' ? 'Último Update' : 'Latest Update'}</span>
              </div>
            </div>

            {/* Language Distribution Bar */}
            <div className="github-lang-progress-box">
              <h4>{t.githubLive.langDistribution}</h4>
              <div className="github-lang-bar">
                <div className="github-lang-segment" style={{ width: '75%', backgroundColor: '#f7df1e' }} title="JavaScript: 75%" />
                <div className="github-lang-segment" style={{ width: '15%', backgroundColor: '#563d7c' }} title="CSS3: 15%" />
                <div className="github-lang-segment" style={{ width: '10%', backgroundColor: '#e34c26' }} title="HTML5: 10%" />
              </div>
              <div className="github-lang-legend">
                <div className="github-legend-item">
                  <span className="lang-color-dot" style={{ backgroundColor: '#f7df1e' }} />
                  <span>JavaScript (75%)</span>
                </div>
                <div className="github-legend-item">
                  <span className="lang-color-dot" style={{ backgroundColor: '#563d7c' }} />
                  <span>CSS3 (15%)</span>
                </div>
                <div className="github-legend-item">
                  <span className="lang-color-dot" style={{ backgroundColor: '#e34c26' }} />
                  <span>HTML5 (10%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GRÁFICO DE CONTRIBUIÇÕES */}
        {githubTab === 'contributions' && (
          <div className="github-contributions-wrapper">
            <div className="github-contributions-header">
              <h4 className="github-contributions-title">{t.githubLive.contributionsTitle}</h4>
              <p className="github-contributions-sub">{t.githubLive.contributionsSub}</p>
            </div>

            {!chartError ? (
              <div className="github-chart-container">
                <img
                  src="https://ghchart.rshah.io/64ffda/YvlLima"
                  alt={t.githubLive.contributionsAlt}
                  loading="lazy"
                  className="github-chart-img"
                  onError={() => setChartError(true)}
                />
              </div>
            ) : (
              <div className="github-chart-error">
                <p>{t.githubLive.chartError}</p>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '0.75rem', display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <FolderGit2 size={15} /> {t.githubLive.viewAllRepos}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Bottom Footer Action */}
        <div className="github-live-footer">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-view-all-link"
          >
            <FolderGit2 size={16} />
            <span>{t.githubLive.viewAllRepos}</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default GitHubLive;
