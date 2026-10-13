# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Validação local

`npm test` verifica dados de projetos, traduções, metadados, parsing de artigos e estados do GitHub. `npm run lint` e `npm run build` validam o código. As páginas secundárias são carregadas dinamicamente, e os artigos têm URL `/blog/slug`. O formulário confirma a resposta do serviço de envio, tem timeout e mantém a mensagem quando falha. O cursor respeita movimento reduzido e volta ao cursor nativo quando a animação não está ativa.

A informação do Sengoku descreve o protótipo verificado neste workspace; publicação e disponibilidade de uma build externa são verificações separadas.

## Administração da secção Agora

Abre `/admin` ou o link Admin no rodapé e entra com GitHub. Só a identidade GitHub `171242459` (YvlLima) pode editar. O painel gere títulos, descrições, estado, etiquetas, ícones, ligações, ordem e visibilidade em PT/EN. Os textos em inglês vazios usam português. Publicar grava o conjunto de cartões; os visitantes recebem apenas os cartões visíveis. O armazenamento está separado dos deploys.

Na Vercel, a aplicação usa `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` e `ADMIN_SESSION_SECRET` (pelo menos 32 caracteres aleatórios) exclusivamente no servidor. Nunca prefixar estas variáveis com `VITE_`. A origem é `https://www.goncalolima.pt`, configurável por `ADMIN_ORIGIN`. A URI de retorno da aplicação OAuth é `https://www.goncalolima.pt/api/admin?action=callback`. A aplicação não solicita permissões de repositório. Cookies HttpOnly/Secure, OAuth com state e PKCE, verificação de identidade e proteção CSRF controlam as escritas.

Um Blob privado ligado ao projeto fornece `BLOB_STORE_ID` e autenticação OIDC automática da Vercel. Não é necessário gerar um token estático. O documento `portfolio/now-content.json` é lido sem cache; escritas condicionais com ETag impedem que uma janela sobreponha alterações de outra. Até à primeira publicação, o painel importa o conteúdo inicial do portfólio. Falhas de gravação mantêm o rascunho no painel e nunca mostram sucesso.

`tests/admin.test.js` verifica autenticação, restrição de proprietário, PKCE, CSRF e validação de conteúdo. `node tests/fixtures/admin-preview.mjs` serve um ambiente local isolado para testar a interface na porta 5180; a fixture usa dados em memória e não faz parte da aplicação publicada.
