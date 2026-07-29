# tanka: project ground truth

Ground-truth document for this repo. Read it before starting work, keep it true as you go.

## What this is

A single Claude Skill, `tanka`, that cuts long documents to what a reader needs and puts a five-line summary on top. Built 29 Jul 2026 in response to RenewCORP internal comms blowing out to five, ten, twenty pages when the load-bearing content would fit in three dot points.

The deliverable is one file: `skills/tanka/SKILL.md`. Everything else in the repo exists to distribute it.

## Decisions and why

| Decision | Reason |
|---|---|
| Named `tanka`, not `brevity` | Alex's call, 29 Jul 2026. The name carries the constraint: 31 sounds, five lines, no room for filler. It costs discoverability, so the frontmatter `description` carries every trigger word instead |
| Five-line summary cap is hard | Alex's brief said "here's the five things you actually need to know". The form says five lines. The two agreed, so the cap became literal rather than advisory |
| Four modes, routed by intent | Skills take no arguments, so the doc routes on what was asked. Summary layer is the default for ambiguous asks because it is the only mode that cannot lose content |
| Generic, no per-document-type templates | Considered a set of shapes (status update, decision request, blocker, proposal) with per-type summary fields. Rejected 29 Jul 2026: more to maintain, and the three questions a summary answers do not change by document type |
| Fidelity stated as a hard constraint | The failure mode that matters in a summariser is losing a figure or a deadline. Stated as a rule with a mandatory check, not a preference |
| No vocabulary or punctuation rules | `human-voice` owns machine tells, `alex-voice` owns identity. Two documents in charge of one decision is worse than one |
| Public repo, CC BY 4.0 | Original prose, so no share-alike inherited. Content is generic, so nothing RenewCORP-internal is exposed. Public means `/plugin marketplace add` works for anyone |
| One ground-truth doc | This file. No separate spec under `docs/`, because two overlapping ground-truth documents is the staleness trap |

## Layout

```
.claude-plugin/
  plugin.json          version lives here, bump on release
  marketplace.json     single-plugin marketplace, source "./"
skills/tanka/SKILL.md  the deliverable
examples/              synthetic before/after, safe to publish
build.sh               stages skill + LICENSE into dist/tanka.zip
```

`dist/` is gitignored. The zip is built on demand, not committed.

## Distribution

Three routes, all live:

1. **Claude Code plugin.** `/plugin marketplace add theclockworkcloud/tanka` then `/plugin install tanka@tanka`. Installs per user
2. **Claude.ai personal.** Upload `dist/tanka.zip` at Settings → Capabilities → Skills
3. **Claude.ai organisation.** An admin uploads the same zip at claude.com → Organisation settings → Skills. Everyone in the org gets it. This is the RenewCORP route, because the plugin route does not propagate across an organisation

Locally, `~/AKDev/dotfiles/skills/tanka` is a **symlink** to `skills/tanka` in this repo, so `deploy-skills.sh` picks it up and pushes it into both `~/.claude-ak/skills/` and `~/.claude-rc/skills/`. The symlink means one canonical copy. `human-voice` is a real directory in dotfiles rather than a symlink, so those two copies can drift: do not repeat that here.

## Conventions

- **No em dashes.** Anywhere. Skill text, README, manifests, commit messages, PR text. Per the 24 Jul 2026 ruling in `alex-voice`
- Australian English, British diction
- Dates DD Mon YYYY
- Sentence case headings
- The skill must survive its own checklist. A brevity skill that runs to 500 lines is an argument against itself. Current size: 261 lines, 2,300 words

## Status

Skill written and deployed 29 Jul 2026. Live in both Claude Code accounts and confirmed resolving by name.

**Open: the verification pass.** The skill has not yet been run against a real bloated document. Until it has, its rules are reasoning rather than evidence. The pass needs a real 15 to 20 page RenewCORP document (Amber tier, stays local, never enters this repo) and checks:

1. Diagnose accuracy, and whether its predicted compressed length matches what compress actually produces
2. **Fidelity.** Every figure, date, name, commitment and requested decision in the source, found in the output. Any loss is a defect in `SKILL.md`
3. Real ratio achieved against the twenty-to-three ambition
4. Cold-read of the summary: can a reader act on five lines without the body
5. Summary layer left the body byte-identical
6. Chain check: `tanka`, then `human-voice`, then `alex-voice`, without them undoing each other

`examples/before-*.md` and `examples/after-*.md` are written after that pass, so they reflect failure modes that actually occurred.
