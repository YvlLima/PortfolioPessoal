import React from 'react';
import { Calendar, Clock, ChevronRight, BookOpen, Tag } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const Blog = ({
  posts = [],
  onSelectPost,
  t,
  lang = 'pt'
}) => {
  const formatBlogDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="blog" className="section">
      <div className="container">
        <FadeInSection>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">
                <span className="number">05.</span> {t.blog.title}
              </h2>
              {t.blog.subtitle && (
                <p className="projects-subtitle-text" style={{ textAlign: 'left', margin: '0.35rem 0 2.25rem' }}>
                  {t.blog.subtitle}
                </p>
              )}
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="blog-empty-state">
              <BookOpen size={36} className="accent" />
              <p>{t.blog.empty}</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <SpotlightCard
                  key={post.slug}
                  className="blog-card"
                  onClick={() => onSelectPost(post)}
                  aria-label={`${lang === 'pt' ? 'Ler artigo' : 'Read article'}: ${post.title}`}
                  title={lang === 'pt' ? 'Clique para ler o artigo completo' : 'Click to read full article'}
                >
                  {/* Top Meta: Date & Read Time */}
                  <div className="blog-card-meta">
                    <span className="blog-meta-item">
                      <Calendar size={13} aria-hidden="true" />
                      <span>{formatBlogDate(post.date)}</span>
                    </span>
                    <span className="blog-meta-dot">•</span>
                    <span className="blog-meta-item">
                      <Clock size={13} aria-hidden="true" />
                      <span>{post.readTime} {t.blog.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="blog-card-title">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>

                  {/* Footer with Tags & Read Action */}
                  <div className="blog-card-footer">
                    <div className="blog-tags-list">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="blog-tag-pill">
                          <Tag size={11} aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="blog-read-btn">
                      <span>{t.blog.readMore}</span>
                      <ChevronRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          )}
        </FadeInSection>
      </div>
    </section>
  );
};

export default Blog;
