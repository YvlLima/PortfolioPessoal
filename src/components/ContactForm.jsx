import React, { useState } from 'react';
import { Mail, Copy, Check, Send, FolderGit2 } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

// Clean SVG for LinkedIn
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactForm = ({
  t,
  lang,
  userEmail,
  githubUrl,
  linkedinUrl
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${userEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _template: 'box',
          _replyto: formState.email,
          _subject: `📬 [Portfólio Web] ${formState.subject || 'Nova Mensagem'} (de ${formState.name})`,
          _autoresponse: `Olá ${formState.name}!\n\nObrigado por entrares em contacto através do meu portfólio (goncalolima.pt).\nRecebi a tua mensagem com o assunto "${formState.subject || 'Contacto'}" e irei responder com a maior brevidade possível.\n\nCom os melhores cumprimentos,\nGonçalo Martins de Lima`,
          'Nome do Remetente': formState.name,
          'Email do Remetente': formState.email,
          'Assunto da Mensagem': formState.subject,
          'Conteúdo da Mensagem': formState.message
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 6000);
      } else {
        window.location.href = `mailto:${userEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`)}`;
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      window.location.href = `mailto:${userEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <span className="number">05.</span> {t.contact.title}
          </h2>

          <div className="contact-container">
            <p className="contact-subtitle">
              {t.contact.subtitle}
            </p>

            <SpotlightCard className="contact-card">
              <Mail size={36} style={{ color: 'var(--accent)' }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  {t.contact.cardTitle}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {t.contact.cardSub}
                </p>
              </div>

              <div className="email-box" onClick={copyToClipboard} title="Clique para copiar email">
                <span>{userEmail}</span>
                {copiedEmail ? <Check size={18} color="var(--accent)" /> : <Copy size={18} />}
              </div>

              {copiedEmail && (
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-code)' }}>
                  {t.contact.copiedToast}
                </span>
              )}
            </SpotlightCard>

            {/* Interactive Contact Form */}
            <SpotlightCard className="contact-form-wrapper">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} className="accent" /> {t.contact.formTitle}
              </h3>

              {formSubmitted && (
                <div className="form-success-alert">
                  <Check size={20} />
                  <span>{t.contact.formSuccess}</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t.contact.formName}</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder={t.contact.formNamePlaceholder}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.formEmail}</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder={t.contact.formEmailPlaceholder}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.contact.formSubject}</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder={t.contact.formSubjectPlaceholder}
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>{t.contact.formMessage}</label>
                  <textarea
                    required
                    className="form-textarea"
                    placeholder={t.contact.formMessagePlaceholder}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                >
                  {isSubmitting ? (
                    <span>{lang === 'pt' ? 'A enviar...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <Send size={16} /> {t.contact.formSubmit}
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>

            <div className="social-links" style={{ marginTop: '2.5rem' }}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title={t.contact.githubTooltip}
              >
                <FolderGit2 size={22} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title={t.contact.linkedinTooltip}
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href={`mailto:${userEmail}`}
                className="social-icon-btn"
                title={t.contact.emailTooltip}
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactForm;
