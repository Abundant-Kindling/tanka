// Exercises findViolations against the allow rules, proves the git scoping,
// then asserts the real tracked-markdown set is clean.
//
// Fixtures live inline: this check only ever reads tracked *.md, so a test
// file full of em dashes is never in its own scope.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { findViolations, trackedMarkdown, run, EM_DASH } = require('./em-dash-check');

const D = EM_DASH; // built, not typed, so this file states the rule it tests

const cases = [
  // [label, input, expected violation count]
  ['plain prose em dash', `A sentence ${D} with a dash.`, 1],
  ['clean prose', 'A sentence, with a comma.', 0],
  ['en dash is not banned', 'Peaked in 2023–24.', 0],
  ['hyphen is not banned', 'A well-known case.', 0],
  ['signoff token', `the disagreement is the value. ${D} G`, 0],
  ['signoff token mid-line', `sign-off ${D} G):`, 0],
  ['quoted specimen in blockquote', `> It's not just X ${D} it's Y`, 0],
  ['indented blockquote', `  > quoted ${D} example`, 0],
  ['a bullet naming the tell while committing it', `- **Em dashes as a crutch** ${D} spaced, frequent`, 1],
  ['frontmatter description', `description: anything a person will read ${D} articles, posts`, 1],
  ['two dashes on one line count once', `a ${D} b ${D} c`, 1],
  ['multi-line mixed', `clean line\nbad ${D} line\n> quoted ${D} ok\n`, 1],
];

let failures = 0;
for (const [label, input, expected] of cases) {
  const actual = findViolations(input).length;
  const ok = actual === expected;
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} | expected ${expected} got ${actual} | ${label}`);
}

// Line numbers must be usable, or the output cannot be acted on.
const numbered = findViolations(`ok\nok\nbad ${D} here`);
const lineOk = numbered.length === 1 && numbered[0].line === 3;
if (!lineOk) failures++;
console.log(`${lineOk ? 'ok  ' : 'FAIL'} | reports the 1-indexed line number`);

const repoRoot = path.resolve(__dirname, '..');

// The scan set comes from git, so an untracked file stuffed with dashes is
// invisible. This is the control that proves the scoping is real rather than
// a directory walk that happens to agree with it today.
const untracked = path.join(repoRoot, 'em-dash-check-untracked-fixture.md');
fs.writeFileSync(untracked, `full of ${D} dashes ${D} everywhere\n`);
try {
  const flagged = run(repoRoot).some((f) => f.file.includes('untracked-fixture'));
  const scoped = !flagged;
  if (!scoped) failures++;
  console.log(`${scoped ? 'ok  ' : 'FAIL'} | untracked markdown is out of scope`);
} finally {
  fs.rmSync(untracked, { force: true });
}

// The scan set must be non-empty, or "clean" is vacuous: a check that scans
// nothing reads identically to a check that found nothing.
const tracked = trackedMarkdown(repoRoot);
const hasFiles = tracked.length > 0 && tracked.includes('skills/tanka/SKILL.md');
if (!hasFiles) failures++;
console.log(`${hasFiles ? 'ok  ' : 'FAIL'} | scan set is non-empty and includes the deliverable`);

// Integration: the live tracked set must be clean, or the hook is already failing.
const findings = run(repoRoot);
const treeClean = findings.length === 0;
if (!treeClean) failures++;
console.log(`${treeClean ? 'ok  ' : 'FAIL'} | live tracked markdown is clean`);
for (const f of findings) console.log(`       ${f.file}:${f.line} ${f.text.slice(0, 100)}`);

console.log(failures === 0 ? `\nall checks pass` : `\n${failures} FAILING`);
assert.strictEqual(failures, 0);
