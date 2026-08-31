import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const TerminalWidget = ({ lang = 'pt', userEmail = 'goncalomartinslima2007@gmail.com', githubUrl = 'https://github.com/YvlLima', linkedinUrl = 'https://www.linkedin.com/in/gon%C3%A7alo-lima-532318428/?skipRedirect=true' }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState(() => [
    {
      type: 'system',
      content: lang === 'pt'
        ? '🤖 Terminal Interativo dev.lima [v2.6.0]\nEscreve "help" para ver os comandos disponíveis.'
        : '🤖 dev.lima Interactive Terminal [v2.6.0]\nType "help" to view available commands.'
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new history lines are added
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    const cmd = raw.toLowerCase();

    if (!raw) return;

    // Save to command history for up/down navigation
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryPointer(-1);

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      return;
    }

    let outputText = '';

    switch (cmd) {
      case 'help':
        outputText = lang === 'pt'
          ? `Comandos disponíveis:
  whoami          — Identidade, formação e foco profissional
  skills --list   — Principais competências e tecnologias
  projects --list — Lista de projetos em destaque
  contact         — Email, GitHub e LinkedIn
  clear           — Limpar o histórico do ecrã
  help            — Mostrar esta ajuda de comandos`
          : `Available commands:
  whoami          — Identity, education & core focus
  skills --list   — Core technical skills & tools
  projects --list — Featured project showcase
  contact         — Email, GitHub and LinkedIn links
  clear           — Clear terminal screen
  help            — Show this command reference`;
        break;

      case 'whoami':
        outputText = lang === 'pt'
          ? `Gonçalo Martins de Lima
📌 Função: Estudante de Cibersegurança & Developer Júnior
🎓 Formação: CTeSP em Cibersegurança, Redes e Sistemas Informáticos (ESTG - P.PORTO)
🎯 Próximo Passo: Licenciatura em Segurança Informática em Redes de Computadores
📍 Localização: Porto / Felgueiras, Portugal
⚡ Status: Disponível para estágio e novos desafios`
          : `Gonçalo Martins de Lima
📌 Role: Cybersecurity Student & Junior Developer
🎓 Education: Associate Degree in Cybersecurity, Networks & Systems (ESTG - P.PORTO)
🎯 Next Step: B.Sc. in Information Security in Computer Networks
📍 Location: Porto / Felgueiras, Portugal
⚡ Status: Open to internships and new junior dev roles`;
        break;

      case 'skills':
      case 'skills --list':
      case 'skills -l':
        outputText = lang === 'pt'
          ? `[Frontend] React, JavaScript (ES6+), HTML5, CSS3, Vite
[Backend]  Node.js, C#, PHP, Discord.js, REST APIs
[Sistemas] Cibersegurança, Redes TCP/IP, Linux, Administração
[Tools]    Git, GitHub, VS Code, Rojo (Luau), Cloudflare Pages`
          : `[Frontend] React, JavaScript (ES6+), HTML5, CSS3, Vite
[Backend]  Node.js, C#, PHP, Discord.js, REST APIs
[Systems]  Cybersecurity, TCP/IP Networks, Linux, SysAdmin
[Tools]    Git, GitHub, VS Code, Rojo (Luau), Cloudflare Pages`;
        break;

      case 'projects':
      case 'projects --list':
      case 'projects -l':
        outputText = lang === 'pt'
          ? `1. Music Hub               [React / Cloudflare] Web App de áudio em tempo real
2. Fazbear Nightshift      [Node.js / Discord]  Bot PvP com turnos e economia
3. Galeria Piso Dois (PAP) [WordPress / PHP]   Galeria comunitária escolar
4. BagLess                 [JavaScript / UI]    Utilitário de produtividade
5. Portfólio Pessoal       [React + Vite]       SPA Cyberpunk com Spotlight 3D`
          : `1. Music Hub               [React / Cloudflare] Real-time audio streaming app
2. Fazbear Nightshift      [Node.js / Discord]  PvP turn-based Discord bot
3. Galeria Piso Dois (PAP) [WordPress / PHP]   Student community gallery
4. BagLess                 [JavaScript / UI]    Productivity & routine utility
5. Personal Portfolio      [React + Vite]       Cyberpunk SPA with 3D Spotlight`;
        break;

      case 'contact':
        outputText = `📬 Email:    ${userEmail}
🌐 GitHub:   ${githubUrl}
💼 LinkedIn: ${linkedinUrl}`;
        break;

      case 'sudo':
      case 'sudo su':
        outputText = lang === 'pt'
          ? '🔒 Permissão concedida: O Gonçalo já tem acesso root no sistema.'
          : '🔒 Permission granted: Gonçalo already has root privilege.';
        break;

      default:
        outputText = lang === 'pt'
          ? `Comando não reconhecido: "${raw}". Escreve "help" para ver a lista de comandos.`
          : `Command not recognized: "${raw}". Type "help" to see available commands.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', command: raw },
      { type: 'output', content: outputText }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer] || '');
      }
    }
  };

  return (
    <div
      className="terminal-widget"
      onClick={handleTerminalClick}
      role="region"
      aria-label={lang === 'pt' ? 'Terminal interativo simulado' : 'Simulated interactive terminal'}
    >
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="terminal-dots" aria-hidden="true">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <div className="terminal-title">
          <TerminalIcon size={13} className="accent" />
          <span>goncalo@portfolio:~</span>
        </div>
        <div className="terminal-actions-placeholder" aria-hidden="true">
          <span className="terminal-tag">bash</span>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="terminal-output" aria-live="polite">
          {history.map((item, idx) => {
            if (item.type === 'system') {
              return (
                <div key={idx} className="terminal-line system-line">
                  {item.content}
                </div>
              );
            }
            if (item.type === 'command') {
              return (
                <div key={idx} className="terminal-line command-line">
                  <span className="terminal-prompt">goncalo@portfolio:~$</span>
                  <span className="terminal-cmd-text">{item.command}</span>
                </div>
              );
            }
            return (
              <div key={idx} className="terminal-line output-line">
                <pre>{item.content}</pre>
              </div>
            );
          })}
        </div>

        {/* Active Input Line */}
        <div className="terminal-input-row">
          <span className="terminal-prompt" aria-hidden="true">goncalo@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label={lang === 'pt' ? 'Linha de comando do terminal' : 'Terminal command input'}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default TerminalWidget;
