---
title: "MusicHub: interface web, API e persistência"
date: "2026-08-25"
excerpt: "Uma leitura da estrutura do MusicHub: JavaScript no browser, Express no servidor e PostgreSQL para os dados."
tags: ["JavaScript", "Express", "PostgreSQL"]
readTime: "2"
author: "Gonçalo Lima"
---

## A estrutura do projeto

O [repositório do MusicHub](https://github.com/YvlLima/MusicHub) reúne um frontend em HTML, CSS e JavaScript e um backend em Node.js com Express. A interface está em `public/`; as rotas e o middleware do servidor estão em `src/`.

Esta organização separa a apresentação dos dados da lógica executada no servidor. O frontend deste repositório não usa React.

## Contas e dados

As dependências incluem JWT para autenticação, bcrypt para hashing de palavras-passe e o cliente `pg` para PostgreSQL. O ficheiro `schema.sql` descreve a estrutura da base de dados. As rotas incluem utilizadores, likes e avaliações.

## Verificação

O repositório contém testes de API e segurança com Jest e Supertest. Para consultar o que é verificado, lê a pasta `tests/` e os scripts em `package.json`. A existência destes testes não comprova, por si só, uma auditoria completa ou um resultado de execução atual.

## Explorar

A [página do projeto](/projetos/musichub) reúne as funcionalidades e ligações ao código. Esta descrição corresponde à estrutura pública consultada em 25 de setembro de 2026; não apresenta benchmarks nem funcionalidades futuras como concluídas.
