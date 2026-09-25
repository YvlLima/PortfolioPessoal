---
title: "MusicHub: web interface, API and persistence"
date: "2026-08-25"
excerpt: "A look at the MusicHub structure: JavaScript in the browser, Express on the server and PostgreSQL for data."
tags: ["JavaScript", "Express", "PostgreSQL"]
readTime: "2"
author: "Gonçalo Lima"
---

## Project structure

The [MusicHub repository](https://github.com/YvlLima/MusicHub) combines an HTML, CSS and JavaScript frontend with a Node.js and Express backend. The interface lives in `public/`; server routes and middleware live in `src/`.

This structure separates data presentation from server-side logic. The frontend in this repository does not use React.

## Accounts and data

Dependencies include JWT for authentication, bcrypt for password hashing and the `pg` client for PostgreSQL. The `schema.sql` file describes the database structure. Routes include users, likes and ratings.

## Verification

The repository contains API and security tests using Jest and Supertest. Read the `tests/` directory and the scripts in `package.json` to see what is checked. The presence of tests alone does not establish a complete audit or a current passing test run.

## Explore

The [project page](/projetos/musichub) brings together features and source links. This description reflects the public structure reviewed on 25 September 2026; it does not claim benchmarks or present future features as completed.
