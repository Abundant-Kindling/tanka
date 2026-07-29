# Examples

Two worked pairs, one for each treatment. Everything here is synthetic: invented companies, people and figures.

| Pair | Treatment | Result |
|---|---|---|
| `before-status-report.md` → `after-status-report.md` | **Compress** | 68% shorter |
| `before-proposal.md` → `after-proposal.md` | **Restructure** | 35% *longer* |

Read them in that order. The second one is the point.

## Why two

The compress case is the intuitive one: a padded internal update, most of it restatement and spelled-out consequences, cut by two thirds with nothing of substance lost. Every named pattern in the skill appears in the source at least once, and the notes at the bottom of the output say which went and why.

The restructure case is the one that matters, because most real documents are that one. The source proposal is competently written. Almost every sentence carries content, so there is little to cut. What is wrong with it is order: the fee is 883 words in, the acceptance deadline arrives in the final paragraph with its justification three sections earlier, and a live compliance exposure sits mid-paragraph in a discovery-findings list.

Restructured, it comes out **35 per cent longer** and a reader can decide after 95 words. Nothing was removed. Layers 1 and 2 are 468 words of new writing; layer 3 gave back 108 through tightening.

That is worth stating plainly because it looks like failure. Anyone who asks for a shorter document and receives a longer one will assume the tool broke. The measure that moved is not length, it is how long it takes a reader to reach the thing they have to decide.

## A note on the drop zone

This folder is `.gitignore`d deny-by-default. Files here are invisible to git unless their filename is whitelisted in `.gitignore`, which is deliberate: the folder doubles as a scratch space for real documents during testing, and this repo is public. Adding a new committed example means adding its name to the whitelist on purpose.
