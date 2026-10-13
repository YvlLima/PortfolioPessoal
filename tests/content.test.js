import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pageMetadata } from '../src/utils/metadata.js';
import { parseMarkdownPost } from '../src/utils/blog.js';
test('metadata follows project and article routes in both languages', () => {
  const project={title:'MusicHub',slug:'musichub',summary:{pt:'Música',en:'Music'}};
  assert.deepEqual(pageMetadata({lang:'en',project}),{title:'MusicHub | Gonçalo Lima',description:'Music',path:'/projetos/musichub'});
  assert.equal(pageMetadata({privacy:true,lang:'en'}).title,'Privacy Policy | Gonçalo Lima');
  assert.equal(pageMetadata({post:{title:'Artigo',slug:'artigo',excerpt:'Texto'}}).path,'/blog/artigo');
  assert.equal(pageMetadata({seo:{title:'Home'}}).title,'Home');
});
test('invalid dates and reading times cannot become published metadata', () => {
  const post=parseMarkdownPost('/blog/test.md','---\ntitle: "Title: subtitle"\ndate: 2026-02-30\nreadTime: nope\ntags: [Godot, JavaScript]\n---\nArticle text');
  assert.equal(post.title,'Title: subtitle');
  assert.equal(post.date,'');
  assert.equal(post.readTime,'1');
  assert.deepEqual(post.tags,['Godot','JavaScript']);
});
test('Portuguese and English translation keys remain identical', () => {
  const keys = (value,prefix='') => Object.entries(value).flatMap(([key,child])=>child && typeof child==='object' && !Array.isArray(child) ? keys(child,`${prefix}${key}.`) : [`${prefix}${key}`]).sort();
  const pt=JSON.parse(readFileSync(new URL('../src/locales/pt.json',import.meta.url)));
  const en=JSON.parse(readFileSync(new URL('../src/locales/en.json',import.meta.url)));
  assert.deepEqual(keys(pt),keys(en));
});
