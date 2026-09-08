import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Server, Mail, CheckCircle2, FileText } from 'lucide-react';
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

          {/* Privacy Header Card */}
          <SpotlightCard className="privacy-header-card">
            <div className="privacy-badge">
              <ShieldCheck size={16} className="accent" aria-hidden="true" />
              <span>{isPt ? 'RGPD & PRIVACIDADE • COOKIELESS ANALYTICS' : 'GDPR & PRIVACY • COOKIELESS ANALYTICS'}</span>
            </div>

            <h1 className="privacy-title">
              {isPt ? 'Política de Privacidade' : 'Privacy Policy'}
            </h1>

            <p className="privacy-lead">
              {isPt
                ? 'Este website foi concebido com uma política de privacidade rigorosa e respeito absoluto pelos teus dados. Transparência total, sem cookies de rastreamento e sem partilha com terceiros.'
                : 'This website was built with a strict privacy-first mindset and absolute respect for your data. Total transparency, no tracking cookies, and zero third-party sharing.'}
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

          {/* Key Highlights / Summary Grid */}
          <div className="privacy-highlights-grid">
            <SpotlightCard className="privacy-highlight-card">
              <EyeOff size={24} className="accent" />
              <h3>{isPt ? 'Sem Cookies de Tracking' : 'No Tracking Cookies'}</h3>
              <p>
                {isPt
                  ? 'Não usamos cookies invasivos nem criamos perfis de navegação. Não necessitas de aceitar banners de cookies.'
                  : 'We do not use invasive cookies or build tracking profiles. No annoying cookie banners needed.'}
              </p>
            </SpotlightCard>

            <SpotlightCard className="privacy-highlight-card">
              <ShieldCheck size={24} className="accent" />
              <h3>{isPt ? 'Analytics 100% Anónimos' : '100% Anonymous Analytics'}</h3>
              <p>
                {isPt
                  ? 'Métricas agregadas através do Plausible Analytics, sem gravação de endereço IP nem identificadores pessoais.'
                  : 'Aggregated metrics powered by Plausible Analytics, without storing IP addresses or persistent identifiers.'}
              </p>
            </SpotlightCard>

            <SpotlightCard className="privacy-highlight-card">
              <Mail size={24} className="accent" />
              <h3>{isPt ? 'Finalidade do Contacto' : 'Direct Contact Only'}</h3>
              <p>
                {isPt
                  ? 'Os dados do formulário de contacto são usados exclusivamente para responder à tua mensagem e eliminados após a resposta.'
                  : 'Contact form details are used solely to reply to your inquiry and deleted when no longer required.'}
              </p>
            </SpotlightCard>
          </div>

          {/* Structured Policy Content */}
          <div className="privacy-body-wrapper">
            <section className="privacy-section">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">01.</span>
                {isPt ? 'Identificação do Responsável pelo Tratamento' : 'Data Controller Identification'}
              </h2>
              <p>
                {isPt
                  ? 'O responsável pelo tratamento dos dados deste website (goncalolima.pt) é:'
                  : 'The data controller responsible for this website (goncalolima.pt) is:'}
              </p>
              <ul className="privacy-list">
                <li><strong>{isPt ? 'Nome:' : 'Name:'}</strong> Gonçalo Martins de Lima</li>
                <li><strong>{isPt ? 'Ocupação:' : 'Role:'}</strong> {isPt ? 'Estudante de CTeSP em Cibersegurança, Redes e Sistemas Informáticos (ESTG - Politécnico do Porto) & Desenvolvedor Júnior' : 'Cybersecurity, Networks & Systems Associate Student (ESTG - P.PORTO) & Junior Developer'}</li>
                <li><strong>{isPt ? 'Website:' : 'Website:'}</strong> <a href="https://goncalolima.pt" target="_blank" rel="noopener noreferrer" className="privacy-link">https://goncalolima.pt</a></li>
                <li><strong>{isPt ? 'Email de Contacto:' : 'Contact Email:'}</strong> <a href={`mailto:${userEmail}`} className="privacy-link">{userEmail}</a></li>
                <li><strong>{isPt ? 'Localização:' : 'Location:'}</strong> Portugal, {isPt ? 'União Europeia' : 'European Union'}</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">02.</span>
                {isPt ? 'Dados Recolhidos e Finalidades' : 'Collected Data & Purposes'}
              </h2>
              
              <h3 className="privacy-subheading">
                {isPt ? 'A. Estatísticas de Visitação (Plausible Analytics)' : 'A. Visitor Statistics (Plausible Analytics)'}
              </h3>
              <p>
                {isPt
                  ? 'Este site utiliza o Plausible Analytics para recolher métricas gerais de utilização de forma totalmente anónima e respeitadora da privacidade.'
                  : 'This website uses Plausible Analytics to collect aggregate usage metrics in a completely anonymous and privacy-friendly manner.'}
              </p>
              <ul className="privacy-list">
                <li>
                  <strong>{isPt ? 'Sem Cookies:' : 'Cookieless:'}</strong> {isPt ? 'O Plausible não grava cookies, não usa localStorage e não coloca identificadores persistentes no teu dispositivo.' : 'Plausible does not store cookies, localStorage, or persistent identifiers on your device.'}
                </li>
                <li>
                  <strong>{isPt ? 'Anonimização de IP:' : 'IP Anonymization:'}</strong> {isPt ? 'O teu endereço IP nunca é guardado em base de dados. É processado temporariamente apenas na memória volátil para gerar uma chave diária anonimizada e irreversível.' : 'Your IP address is never stored in any database. It is processed in volatile memory only to generate a daily irreversible hash.'}
                </li>
                <li>
                  <strong>{isPt ? 'Dados agregados:' : 'Aggregated data:'}</strong> {isPt ? 'Recolhemos apenas informações técnicas genéricas como contagem de visualizações de páginas, páginas de referência (referrer), tipo de dispositivo (computador/telemóvel), sistema operativo e país de origem.' : 'We only collect generic statistics such as page view counts, referrer sources, device type, operating system, and approximate country of origin.'}
                </li>
                <li>
                  <strong>{isPt ? 'Finalidade e Base Legal:' : 'Purpose & Legal Basis:'}</strong> {isPt ? 'A finalidade é estritamente estatística, para compreender o alcance e performance dos projetos técnicos expostos no portfólio (Interesse Legítimo, Art. 6.º, n.º 1, alínea f) do RGPD).' : 'The purpose is purely statistical to assess the performance of technical projects featured on the portfolio (Legitimate Interest, Art. 6(1)(f) GDPR).'}
                </li>
              </ul>

              <h3 className="privacy-subheading">
                {isPt ? 'B. Formulário de Contacto e Comunicação Direta' : 'B. Contact Form and Direct Communications'}
              </h3>
              <p>
                {isPt
                  ? 'Ao utilizar o formulário de contacto do site ou enviar uma mensagem por email:'
                  : 'When you voluntarily use the website contact form or send an email:'}
              </p>
              <ul className="privacy-list">
                <li>
                  <strong>{isPt ? 'Dados fornecidos voluntariamente:' : 'Voluntarily provided data:'}</strong> {isPt ? 'Nome, endereço de email, assunto e texto da mensagem fornecidos pelo remetente.' : 'Name, email address, subject, and message text entered by the sender.'}
                </li>
                <li>
                  <strong>{isPt ? 'Finalidade estrita:' : 'Strict Purpose:'}</strong> {isPt ? 'Os dados são utilizados única e exclusivamente para ler, analisar e responder à mensagem enviada (oportunidades profissionais, feedback sobre projetos ou questões técnicas).' : 'These details are used solely to read, evaluate, and reply to your inquiry (job opportunities, technical feedback, or questions).'}
                </li>
                <li>
                  <strong>{isPt ? 'Sem Marketing / Sem Spam:' : 'No Marketing / No Spam:'}</strong> {isPt ? 'O teu email nunca será utilizado para marketing, newsletters automáticas ou qualquer tipo de comunicação não solicitada.' : 'Your email will never be used for marketing, newsletter subscriptions, or unsolicited messages.'}
                </li>
                <li>
                  <strong>{isPt ? 'Conservação:' : 'Retention:'}</strong> {isPt ? 'Os emails são mantidos apenas enquanto a troca de mensagens for necessária para a finalidade de contacto, sendo eliminados periodicamente quando já não forem necessários.' : 'Emails are retained only for the duration needed to resolve the communication and deleted when no longer required.'}
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">03.</span>
                {isPt ? 'Política de Cookies' : 'Cookie Policy'}
              </h2>
              <p>
                {isPt
                  ? 'Este website não utiliza cookies de rastreio, cookies de terceiros publicitários ou ferramentas de monitorização comportamental.'
                  : 'This website does not use tracking cookies, third-party advertising cookies, or behavioral monitoring tools.'}
              </p>
              <div className="privacy-callout">
                <CheckCircle2 size={20} className="accent" />
                <div>
                  <strong>{isPt ? 'Sem necessidade de Cookie Banner' : 'No Cookie Banner Needed'}</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {isPt
                      ? 'Uma vez que não são colocados cookies não-essenciais no teu navegador, este site não requer nem exibe banners de consentimento de cookies, respeitando as diretrizes da Diretiva e-Privacy e da CNPD.'
                      : 'Because no non-essential tracking cookies are stored on your device, this website complies with the e-Privacy Directive without requiring intrusive cookie banners.'}
                  </p>
                </div>
              </div>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">04.</span>
                {isPt ? 'Partilha de Dados com Terceiros' : 'Third-Party Data Sharing'}
              </h2>
              <p>
                {isPt
                  ? 'Não existe qualquer venda, aluguer, cedência ou partilha de dados pessoais com terceiros ou redes de publicidade. Todo o tráfego do website é encriptado via HTTPS (SSL/TLS).'
                  : 'We never sell, rent, lease, or share personal data with third parties or advertising networks. All website communication is strictly encrypted via HTTPS (SSL/TLS).'}
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">05.</span>
                {isPt ? 'Direitos do Titular dos Dados (RGPD)' : 'Your Rights under GDPR'}
              </h2>
              <p>
                {isPt
                  ? 'Ao abrigo do Regulamento Geral sobre a Proteção de Dados (Regulamento UE 2016/679 - RGPD), tens garantidos os seguintes direitos:'
                  : 'Under the General Data Protection Regulation (EU Regulation 2016/679 - GDPR), you have the right to:'}
              </p>
              <ul className="privacy-list">
                <li><strong>{isPt ? 'Direito de Acesso:' : 'Right of Access:'}</strong> {isPt ? 'Confirmar se os teus dados são tratados e solicitar acesso aos mesmos.' : 'Confirm whether your data is processed and request a copy.'}</li>
                <li><strong>{isPt ? 'Direito de Retificação:' : 'Right to Rectification:'}</strong> {isPt ? 'Solicitar a correção de dados incompletos ou incorretos.' : 'Request the correction of inaccurate or incomplete information.'}</li>
                <li><strong>{isPt ? 'Direito ao Apagamento:' : 'Right to Erasure:'}</strong> {isPt ? 'Pedir a eliminação dos teus dados de contacto («direito a ser esquecido»).' : 'Request the permanent deletion of your contact data ("right to be forgotten").'}</li>
                <li><strong>{isPt ? 'Direito à Limitação ou Oposição:' : 'Right to Restriction or Objection:'}</strong> {isPt ? 'Opor-te ou limitar o tratamento dos teus dados a qualquer momento.' : 'Object to or restrict the processing of your data at any time.'}</li>
                <li>
                  <strong>{isPt ? 'Direito de Reclamação:' : 'Right to Lodge a Complaint:'}</strong> {isPt ? 'Tens o direito de apresentar uma reclamação formal junto da autoridade de controlo competente em Portugal:' : 'You have the right to lodge a formal complaint with the supervisory authority in Portugal:'}
                  <div style={{ marginTop: '0.4rem', paddingLeft: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    CNPD — Comissão Nacional de Proteção de Dados (<a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="privacy-link">www.cnpd.pt</a>)
                  </div>
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="privacy-section-heading">
                <span className="privacy-sec-num">06.</span>
                {isPt ? 'Contacto para Exercício de Direitos' : 'Contact to Exercise Your Rights'}
              </h2>
              <p>
                {isPt
                  ? 'Para exercer qualquer um dos teus direitos ao abrigo do RGPD, esclarecer qualquer dúvida ou solicitar a eliminação de mensagens anteriores, contacta diretamente:'
                  : 'To exercise any of your GDPR rights or request the deletion of previous messages, please contact directly:'}
              </p>

              <div className="privacy-contact-box">
                <Mail size={22} className="accent" />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {isPt ? 'Email Oficial para Assuntos de Privacidade:' : 'Official Email for Privacy Inquiries:'}
                  </span>
                  <a href={`mailto:${userEmail}`} className="privacy-contact-email">
                    {userEmail}
                  </a>
                </div>
              </div>
            </section>
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
