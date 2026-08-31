---
title: "O que aprendi a construir o MusicHub: React, Streaming de Áudio e Performance Web"
date: "2026-08-25"
excerpt: "Uma reflexão sobre os desafios técnicos de sincronização de estado, manipulação da HTML5 Audio API e otimização de renderização na criação de uma plataforma web interativa de música."
tags: ["React", "JavaScript", "Web Dev", "Performance", "Audio API"]
readTime: "5"
author: "Gonçalo Lima"
---

## A Motivação

Quando comecei a desenhar o **MusicHub**, o meu objetivo principal era criar uma interface fluida, moderna e reativa para descoberta e reprodução contínua de áudio na web, sem depender de bibliotecas externas pesadas e com deploy ágil na cloud (Cloudflare Pages).

No entanto, reproduzir música na web traz desafios específicos que não surgem em aplicações web tradicionais de formulários e tabelas.

---

## 3 Principais Desafios Técnicos Superados

### 1. Gestão do Ciclo de Vida da `HTML5 Audio API`
Trabalhar com a instância nativa de `new Audio()` dentro do ciclo de componentes do React exige cuidado redobrado com efeitos secundários e re-renders:
- Criar a instância de áudio fora do estado reativo com `useRef` para evitar recriação a cada render do componente.
- Registar e limpar ouvintes de eventos (`timeupdate`, `ended`, `canplaythrough`, `error`) no retorno da `useEffect` para prevenir memory leaks graves.

```javascript
// Exemplo de padrão limpo com useRef para HTML5 Audio
const audioRef = useRef(new Audio());

useEffect(() => {
  const audio = audioRef.current;
  const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

  audio.addEventListener('timeupdate', handleTimeUpdate);
  return () => {
    audio.removeEventListener('timeupdate', handleTimeUpdate);
    audio.pause();
  };
}, []);
```

### 2. Sincronização e Scrubbing da Barra de Progresso
Uma experiência de utilizador agradável exige que o utilizador possa arrastar a barra de progresso (timeline) sem que o áudio engasgue:
- Separei o estado visual do arrasto (*isDragging*) do tempo real da faixa.
- Só aplico o valor de `audio.currentTime` quando o utilizador larga o ponteiro do rato (`onPointerUp`), garantindo uma transição fluida.

### 3. Deploy Contínuo e Edge Hosting no Cloudflare Pages
A escolha do **Cloudflare Pages** proporcionou:
- Tempos de carregamento quase instantâneos graças à CDN global distribuída na Edge.
- Integração contínua com Git: qualquer commit faz deploy automático em menos de 30 segundos.

---

## Principais Lições Aprendidas

1. **Menos dependências, maior controlo:** Manipular as APIs nativas do browser (como a Audio API e Web APIs modernas) permite entender a fundo como a plataforma web realmente opera.
2. **Performance é UI:** Uma interface só é verdadeiramente bonita se responder instantaneamente a cada clique ou gesto do utilizador.
3. **Arquitetura modular poupa tempo:** Separar componentes de controlo, lista de faixas e visualizadores facilitou muito a manutenção posterior.

O projeto está disponível em código aberto no meu GitHub e continuará a evoluir com novas funcionalidades!
