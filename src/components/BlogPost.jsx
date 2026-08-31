import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const BlogPost = ({
  post,
  onBack,
  t,
  lang = 'pt'
}) => {
  // Scroll to top when post opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  const formatBlogDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  if (!post) return null;

  return (
    <article className="blog-post-view section" style={{ paddingTop: 'calc(var(--nav-height) + 2.5rem)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <FadeInSection>
          {/* Top Navigation: Back Button */}
          <button
            onClick={onBack}
            className="blog-back-btn"
            aria-label={t.blog.backBtn}
          >
            <ArrowLeft size={16} />
            <span>{t.blog.backBtn}</span>
          </button>

          {/* Article Header Card */}
          <SpotlightCard className="blog-post-header-card">
            <div className="blog-post-meta-row">
              <span className="blog-meta-item">
                <Calendar size={14} className="accent" aria-hidden="true" />
                <span>{formatBlogDate(post.date)}</span>
              </span>
              <span className="blog-meta-dot">•</span>
              <span className="blog-meta-item">
                <Clock size={14} className="accent" aria-hidden="true" />
                <span>{post.readTime} {t.blog.readTime}</span>
              </span>
              {post.author && (
                <>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-meta-item">
                    <User size={14} className="accent" aria-hidden="true" />
                    <span>{post.author}</span>
                  </span>
                </>
              )}
            </div>

            <h1 className="blog-post-title">{post.title}</h1>

            {post.tags && post.tags.length > 0 && (
              <div className="blog-post-tags">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="blog-tag-pill">
                    <Tag size={12} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </SpotlightCard>

          {/* Article Markdown Body */}
          <div className="blog-post-body-wrapper">
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="blog-post-bottom-bar">
            <button
              onClick={onBack}
              className="btn btn-outline"
              aria-label={t.blog.backBtn}
            >
              <ArrowLeft size={16} />
              <span>{t.blog.backBtn}</span>
            </button>
            <a href="#contacto" className="btn btn-primary" onClick={onBack}>
              {t.nav.ctaBtn}
            </a>
          </div>
        </FadeInSection>
      </div>
    </article>
  );
};

export default BlogPost;
