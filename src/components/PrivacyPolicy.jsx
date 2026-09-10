import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, FileText, Server, Mail, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const PrivacyPolicy = ({
  onBack,
  t,
  lang = 'pt',
  userEmail = 'goncalomartinslima2007@gmail.com'
}) => {
  // Scroll to top when privacy page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = lang === 'pt'
      ? 'Política de Privacidade | Gonçalo Lima'
      : 'Privacy Policy | Gonçalo Lima';

    return () => {
      document.title = 'Gonçalo Lima | Cibersegurança & Dev Júnior';
    };
  }, [lang]);

  const isPt = lang === 'pt';

  return (
    <article className="privacy-policy-view section" style={{ paddingTop: 'calc(var(--nav-height) + 2.5rem)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <FadeInSection>
          {/* Top Navigation: Back Button */}
          <button
            onClick={onBack}
            className="blog-back-btn"
            aria-label={isPt ? 'Voltar à página principal' : 'Back to main page'}
          >
            <ArrowLeft size={16} />
            <span>{isPt ? 'Voltar ao início' : 'Back to home'}</span>
          </button>

          {/* Header Card */}
          <SpotlightCard className="privacy-header-card">
            <div className="privacy-badge">
              <ShieldCheck size={16} className="accent" aria-hidden="true" />
              <span>{isPt ? 'POLÍTICA DE PRIVACIDADE • RGPD' : 'PRIVACY POLICY • GDPR'}</span>
            </div>

            <h1 className="privacy-title">
              {isPt ? 'Política de Privacidade' : 'Privacy Policy'}
            </h1>

            <p className="privacy-lead">
              {isPt
                ? 'Informação sobre o tratamento de dados pessoais e privacidade no website goncalolima.pt, em cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD).'
                : 'Information regarding the processing of personal data and privacy on goncalolima.pt, in compliance with the General Data Protection Regulation (GDPR).'}
            </p>

            <div className="privacy-meta-bar">
              <span className="privacy-meta-item">
                <Lock size={14} className="accent" aria-hidden="true" />
                <span><strong>{isPt ? 'Responsável:' : 'Controller:'}</strong> Gonçalo Martins de Lima</span>
              </span>
              <span className="privacy-meta-dot">•</span>
              <span className="privacy-meta-item">
                <FileText size={14} className="accent" aria-hidden="true" />
                <span><strong>{isPt ? 'Atualizado em:' : 'Last updated:'}</strong> {isPt ? 'Março de 2026' : 'March 2026'}</span>
              </span>
              <span className="privacy-meta-dot">•</span>
              <span className="privacy-meta-item">
                <Server size={14} className="accent" aria-hidden="true" />
                <span>goncalolima.pt</span>
              </span>
            </div>
          </SpotlightCard>

          {/* Numbered Sections Stack (Each in its own SpotlightCard) */}
          <div className="privacy-cards-stack">
            {/* 1. Identificação do Responsável */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">1.</span>
                {isPt ? 'Identificação do Responsável' : 'Data Controller Identification'}
              </h2>
              <div className="privacy-section-content">
                <p>
                  {isPt
                    ? 'O responsável pelo tratamento dos dados deste website é:'
                    : 'The data controller responsible for this website is:'}
                </p>
                <ul className="privacy-list">
                  <li><strong>{isPt ? 'Nome:' : 'Name:'}</strong> Gonçalo Martins de Lima</li>
                  <li><strong>{isPt ? 'Website:' : 'Website:'}</strong> <a href="https://goncalolima.pt" target="_blank" rel="noopener noreferrer" className="privacy-link">goncalolima.pt</a></li>
                  <li><strong>{isPt ? 'Email:' : 'Email:'}</strong> <a href={`mailto:${userEmail}`} className="privacy-link">{userEmail}</a></li>
                </ul>
              </div>
            </SpotlightCard>

            {/* 2. Dados Recolhidos */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">2.</span>
                {isPt ? 'Dados Recolhidos' : 'Collected Data'}
              </h2>
              <div className="privacy-section-content">
                <ul className="privacy-list">
                  <li>
                    <strong>{isPt ? 'Analytics:' : 'Analytics:'}</strong> {isPt
                      ? 'Plausible Analytics (dados técnicos agregados e anónimos, sem identificação individual, sem rastreamento entre sessões e sem armazenamento de endereços IP).'
                      : 'Plausible Analytics (aggregated and anonymous technical data, without individual identification, cross-site tracking, or persistent IP storage).'}
                  </li>
                  <li>
                    <strong>{isPt ? 'Formulário de contacto:' : 'Contact Form:'}</strong> {isPt
                      ? 'Nome, email, assunto e mensagem, recolhidos unicamente mediante submissão voluntária pelo utilizador.'
                      : 'Name, email address, subject, and message content, collected only upon voluntary submission by the user.'}
                  </li>
                </ul>
              </div>
            </SpotlightCard>

            {/* 3. Finalidade do Tratamento */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">3.</span>
                {isPt ? 'Finalidade do Tratamento' : 'Purposes of Processing'}
              </h2>
              <div className="privacy-section-content">
                <p>
                  {isPt
                    ? 'Os dados tratados destinam-se exclusivamente às seguintes finalidades:'
                    : 'Personal data processed through this website is strictly used for:'}
                </p>
                <ul className="privacy-list">
                  <li>
                    {isPt
                      ? 'Estatísticas agregadas de utilização e desempenho do site.'
                      : 'Aggregated website usage and performance statistics.'}
                  </li>
                  <li>
                    {isPt
                      ? 'Resposta e seguimento a mensagens submetidas via formulário de contacto ou email direto.'
                      : 'Responding to and managing inquiries sent via the contact form or direct email.'}
                  </li>
                </ul>
              </div>
            </SpotlightCard>

            {/* 4. Tabela de Cookies */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">4.</span>
                {isPt ? 'Tabela de Cookies' : 'Cookie Table'}
              </h2>
              <div className="privacy-section-content">
                <div className="privacy-table-container">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>{isPt ? 'Nome' : 'Name'}</th>
                        <th>{isPt ? 'Tipo' : 'Type'}</th>
                        <th>{isPt ? 'Finalidade' : 'Purpose'}</th>
                        <th>{isPt ? 'Duração' : 'Duration'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>portfolio-theme</code></td>
                        <td>{isPt ? 'Técnico / Essencial' : 'Technical / Essential'}</td>
                        <td>{isPt ? 'Guardar preferência de modo claro/escuro' : 'Store light/dark mode preference'}</td>
                        <td>{isPt ? 'Persistente (localStorage)' : 'Persistent (localStorage)'}</td>
                      </tr>
                      <tr>
                        <td><code>site_language</code></td>
                        <td>{isPt ? 'Técnico / Essencial' : 'Technical / Essential'}</td>
                        <td>{isPt ? 'Guardar preferência de idioma (PT/EN)' : 'Store language preference (PT/EN)'}</td>
                        <td>{isPt ? 'Persistente (localStorage)' : 'Persistent (localStorage)'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SpotlightCard>

            {/* 5. Partilha de Dados */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">5.</span>
                {isPt ? 'Partilha de Dados' : 'Data Sharing'}
              </h2>
              <div className="privacy-section-content">
                <p>
                  {isPt
                    ? 'Não há partilha, venda, aluguer ou cedência de dados pessoais a terceiros.'
                    : 'Personal data is never sold, rented, leased, or shared with third parties.'}
                </p>
              </div>
            </SpotlightCard>

            {/* 6. Direitos do Titular (RGPD) */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">6.</span>
                {isPt ? 'Direitos do Titular (RGPD)' : 'Data Subject Rights (GDPR)'}
              </h2>
              <div className="privacy-section-content">
                <p>
                  {isPt
                    ? 'Ao abrigo do RGPD (Regulamento UE 2016/679), o titular dos dados tem direito a solicitar:'
                    : 'Under the GDPR (EU Regulation 2016/679), data subjects have the right to request:'}
                </p>
                <ul className="privacy-list">
                  <li><strong>{isPt ? 'Acesso:' : 'Access:'}</strong> {isPt ? 'Confirmação e cópia dos dados pessoais tratados.' : 'Confirmation and copy of processed personal data.'}</li>
                  <li><strong>{isPt ? 'Retificação:' : 'Rectification:'}</strong> {isPt ? 'Correção de dados inexatos ou desatualizados.' : 'Correction of inaccurate or incomplete data.'}</li>
                  <li><strong>{isPt ? 'Apagamento:' : 'Erasure:'}</strong> {isPt ? 'Eliminação dos dados pessoais («direito a ser esquecido»).' : 'Deletion of personal data ("right to be forgotten").'}</li>
                  <li><strong>{isPt ? 'Limitação:' : 'Restriction:'}</strong> {isPt ? 'Limitação do tratamento em circunstâncias específicas.' : 'Restriction of data processing under specified conditions.'}</li>
                  <li><strong>{isPt ? 'Oposição:' : 'Objection:'}</strong> {isPt ? 'Oposição ao tratamento dos seus dados.' : 'Objection to personal data processing.'}</li>
                  <li><strong>{isPt ? 'Portabilidade:' : 'Portability:'}</strong> {isPt ? 'Receção dos dados em formato estruturado de leitura automática.' : 'Receipt of personal data in a structured, machine-readable format.'}</li>
                  <li>
                    <strong>{isPt ? 'Reclamação à CNPD:' : 'Complaint to Supervisory Authority:'}</strong> {isPt
                      ? 'Direito de apresentar reclamação junto da autoridade de controlo nacional: '
                      : 'Right to lodge a complaint with the Portuguese Data Protection Authority: '}
                    <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="privacy-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span>CNPD — Comissão Nacional de Proteção de Dados (www.cnpd.pt)</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </SpotlightCard>

            {/* 7. Retenção de Dados */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">7.</span>
                {isPt ? 'Retenção de Dados' : 'Data Retention'}
              </h2>
              <div className="privacy-section-content">
                <p>
                  {isPt
                    ? 'As mensagens de contacto são guardadas apenas durante o tempo necessário para responder e dar seguimento à comunicação. Os dados de analytics são agregados e não contêm identificadores individuais.'
                    : 'Contact messages are retained only for the duration required to reply and follow up on the inquiry. Analytics data is aggregated and does not contain individual identifiers.'}
                </p>
              </div>
            </SpotlightCard>

            {/* 8. Contacto */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">8.</span>
                {isPt ? 'Contacto' : 'Contact'}
              </h2>
              <div className="privacy-section-content">
                <p>
                  {isPt
                    ? 'Para exercer qualquer um dos direitos previstos no RGPD ou colocar questões sobre esta política:'
                    : 'To exercise any GDPR rights or inquire about this policy:'}
                </p>
                <div className="privacy-contact-box">
                  <Mail size={20} className="accent" aria-hidden="true" />
                  <a href={`mailto:${userEmail}`} className="privacy-contact-email">
                    {userEmail}
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* 9. Data de última atualização */}
            <SpotlightCard className="privacy-section-card">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">9.</span>
                {isPt ? 'Data de Última Atualização' : 'Last Updated Date'}
              </h2>
              <div className="privacy-section-content">
                <p style={{ margin: 0 }}>
                  {isPt ? 'Esta política de privacidade foi atualizada em ' : 'This privacy policy was last updated in '}
                  <strong>{isPt ? 'Março de 2026' : 'March 2026'}</strong>.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="blog-post-bottom-bar" style={{ marginTop: '2.5rem' }}>
            <button
              onClick={onBack}
              className="btn btn-outline"
              aria-label={isPt ? 'Voltar à página principal' : 'Back to home'}
            >
              <ArrowLeft size={16} />
              <span>{isPt ? 'Voltar ao início' : 'Back to home'}</span>
            </button>
            <a
              href="#contacto"
              className="btn btn-primary"
              onClick={() => {
                onBack();
                setTimeout(() => {
                  const el = document.getElementById('contacto');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              {t.nav.ctaBtn}
            </a>
          </div>
        </FadeInSection>
      </div>
    </article>
  );
};

export default PrivacyPolicy;
