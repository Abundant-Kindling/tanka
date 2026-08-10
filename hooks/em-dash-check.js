#!/usr/bin/env node
// em-dash-check.js: fails on U+2014 in this repo's tracked markdown.
//
// WHY THIS EXISTS
// The em dash ban (Alex, 24 Jul 2026) applies everywhere in this repo: skill
// text, README, manifests, examples, commit messages, PR text. Until 10 Aug
// 2026 the only enforcement was a hook installed from the dotfiles repo, which
// scanned dotfiles' own skills tree and reached this repo's SKILL.md only
// through a symlink. That covered one file and was coupled to a path on one
// machine. This check is self-contained: clone the repo, run the installer,
// and every tracked markdown file is guarded.
//
// SCOPE
// Tracked *.md only, asked of git itself (ls-files), so staged new files are
// covered at pre-commit time and untracked scratch files are not. Code and
// manifests are out of scope for the mechanical check; the ban still applies
// to them, held by review rather than by this hook.
//
// The dash is built from its codepoint, never typed, so this file passes the
// rule it enforces even if the scan ever widens beyond markdown.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const EM_DASH = '\u2014';

// --- Allow rules -------------------------------------------------------------
// Two, both narrow, both from Alex's 30 Jul 2026 call for this repo's durable
// check: allowlist the sign-off token and verbatim specimens in a catalogue of
// tells. Anything else is a failure.
const ALLOW = [
  {
    name: 'signoff-token',
    // Gwendolen's sign-off is a signature token, not punctuation. Kept in step
    // with the same pattern in dotfiles/hooks/em-dash-check.js.
    test: (line) => new RegExp(`${EM_DASH}\\s*G\\b`).test(line),
  },
  {
    name: 'quoted-specimen',
    // A markdown blockquote is quoted material: a specimen of the tell being
    // catalogued, not the document's own voice. The register section quotes
    // machine-written prose, and stripping a dash there destroys the specimen.
    test: (line) => /^\s*>/.test(line),
  },
];

/**
 * Return the offending lines in `text` as {line, text}. A line is offending
 * if it contains an em dash and no allow rule claims it.
 */
function findViolations(text) {
  const out = [];
  text.split('\n').forEach((line, i) => {
    if (!line.includes(EM_DASH)) return;
    if (ALLOW.some((rule) => rule.test(line))) return;
    out.push({ line: i + 1, text: line.trim() });
  });
  return out;
}

/**
 * The scan set: every tracked *.md, from git's index rather than a directory
 * walk. Staged additions are tracked, so a pre-commit run sees the file being
 * committed; untracked drop-zone material is invisible, which is correct.
 */
function trackedMarkdown(repoRoot) {
  const out = execFileSync('git', ['ls-files', '-z', '--', '*.md'], {
    cwd: repoRoot,
    encoding: 'utf-8',
  });
  return out.split('\0').filter(Boolean);
}

function run(repoRoot) {
  const findings = [];
  for (const rel of trackedMarkdown(repoRoot)) {
    let text;
    try {
      text = fs.readFileSync(path.join(repoRoot, rel), 'utf-8');
    } catch {
      continue; // tracked but absent from the working tree (mid-move); nothing to scan
    }
    for (const v of findViolations(text)) {
      findings.push({ file: rel, ...v });
    }
  }
  return findings;
}

module.exports = { findViolations, trackedMarkdown, run, EM_DASH };

if (require.main === module) {
  const repoRoot = path.resolve(__dirname, '..');
  const findings = run(repoRoot);

  if (findings.length > 0) {
    console.error(`em-dash-check: ${findings.length} em dash(es) in tracked markdown\n`);
    for (const f of findings) {
      console.error(`  ${f.file}:${f.line}`);
      console.error(`    ${f.text.slice(0, 140)}`);
    }
    console.error(
      '\nEm dashes are banned in this repo (Alex, 24 Jul 2026). Use a comma, a' +
        '\ncolon, parentheses, or a full stop. Allowed: the sign-off token, and' +
        '\nquoted specimens inside a markdown blockquote.',
    );
    process.exit(1);
  }

  console.log('em-dash-check: clean (tracked markdown)');
  process.exit(0);
}
