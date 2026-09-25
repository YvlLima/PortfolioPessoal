import test from 'node:test';
import assert from 'node:assert/strict';
import { projectsCaseStudies, projectCategories, getCaseStudyBySlug } from '../src/data/projectsData.js';
import { getNowProjects } from '../src/data/nowProjects.js';

test('projectsCaseStudies contains Sengoku with category games and verified details', () => {
  const sengoku = getCaseStudyBySlug('sengoku');
  assert.ok(sengoku, 'Sengoku should exist in projectsCaseStudies');
  assert.equal(sengoku.category, 'games');
  assert.ok(sengoku.tags.some(t => t.includes('Godot')));
  assert.ok(sengoku.tags.some(t => t.includes('GDScript')));
  assert.equal(sengoku.links.github, 'https://github.com/YvlLima/Sengoku');
  assert.ok(sengoku.evidence.includes('sengoku/project.godot'));
  assert.ok(sengoku.evidence.includes('sengoku/world'));
});

test('Sengoku features explicitly distinguish implemented from planned features', () => {
  const sengoku = getCaseStudyBySlug('sengoku');
  const ptFeatures = sengoku.features.pt;
  const enFeatures = sengoku.features.en;
  
  assert.ok(ptFeatures.some(f => f.startsWith('Implementado:')));
  assert.ok(ptFeatures.some(f => f.startsWith('Planeado:')));
  assert.ok(enFeatures.some(f => f.startsWith('Implemented:')));
  assert.ok(enFeatures.some(f => f.startsWith('Planned:')));
  
  // No generic unverified combat claim without planned label
  assert.ok(!ptFeatures.includes('Combate, animais e ciclo de dia/noite'));
});

test('BagLess is consistent as travel clothing rental and not a productivity tool', () => {
  const bagless = getCaseStudyBySlug('bagless');
  assert.ok(bagless, 'BagLess should exist in projectsCaseStudies');
  assert.equal(bagless.category, 'web');
  assert.ok(bagless.summary.pt.toLowerCase().includes('aluguer de roupa'));
  assert.ok(!bagless.summary.pt.toLowerCase().includes('produtividade'));
  assert.ok(bagless.summary.en.toLowerCase().includes('clothing rental'));
  assert.ok(!bagless.summary.en.toLowerCase().includes('productivity'));
  assert.equal(bagless.links.github, 'https://github.com/YvlLima/BagLess');
});

test('all projects have required fields and bilingual content', () => {
  for (const project of projectsCaseStudies) {
    assert.ok(project.slug, `Project must have a slug: ${project.title}`);
    assert.ok(project.title, `Project must have a title: ${project.slug}`);
    assert.ok(projectCategories[project.category], `Project category ${project.category} must exist in projectCategories`);
    assert.ok(project.summary.pt, `Project ${project.slug} must have pt summary`);
    assert.ok(project.summary.en, `Project ${project.slug} must have en summary`);
    assert.ok(project.context.pt, `Project ${project.slug} must have pt context`);
    assert.ok(project.context.en, `Project ${project.slug} must have en context`);
    assert.ok(project.technical.pt, `Project ${project.slug} must have pt technical`);
    assert.ok(project.technical.en, `Project ${project.slug} must have en technical`);
    assert.ok(project.scope.pt, `Project ${project.slug} must have pt scope`);
    assert.ok(project.scope.en, `Project ${project.slug} must have en scope`);
    assert.ok(Array.isArray(project.features.pt) && project.features.pt.length > 0, `Project ${project.slug} must have pt features`);
    assert.ok(Array.isArray(project.features.en) && project.features.en.length > 0, `Project ${project.slug} must have en features`);
    assert.ok(project.status.pt, `Project ${project.slug} must have pt status`);
    assert.ok(project.status.en, `Project ${project.slug} must have en status`);
  }
});

test('nowProjects returns verified information without claiming false continuous dev', () => {
  const ptNow = getNowProjects('pt');
  const enNow = getNowProjects('en');
  
  assert.equal(ptNow.length, 2);
  assert.equal(enNow.length, 2);
  
  const sengokuItem = ptNow.find(item => item.slug === 'sengoku');
  assert.ok(sengokuItem, 'Sengoku must be in Now section');
  assert.equal(sengokuItem.status, 'Protótipo publicado');
  
  const academicItem = ptNow.find(item => item.id === 'now-academic');
  assert.ok(academicItem, 'Academic item must be in Now section');
  assert.ok(academicItem.status.includes('Em frequência'));
});
