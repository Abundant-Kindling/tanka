# tanka

A Claude Skill that cuts a long document down to what a reader needs, puts a five-line summary on top they can act on, and strips the signatures of machine-written prose.

A tanka is 31 syllables across five lines. There is no room in it for filler, so it carries only what matters. That is the standard the skill applies, and the five-line cap on the summary is literal.

## The problem it solves

Internal documents blow out to five, ten, twenty pages when the load-bearing content would fit in three dot points. The content is usually good. What makes the document unwieldy is over-communication: restating what sits above, spelling out consequences the reader already inferred, putting background before the ask, explaining why you are writing.

The tell is a blockers list followed by "if these are not resolved, I cannot proceed". That sentence tells the reader nothing the list did not already say.

A good communicator solves this with a short top-line summary and a pointer to where the detail lives. The reader scans, works out whether this needs them, and either acts or moves on. `tanka` does that mechanically.

## Three layers

Most documents that read badly are well written and badly ordered. The fix is not cutting, it is sorting the same content into layers a reader can stop at.

| Layer | Length | The reader's question | They finish able to |
|---|---|---|---|
| **1. The five lines** | 5 lines | Does this need me? | Act, delegate, or read on |
| **2. Executive summary** | 1 page | What is the position? | Chair the meeting about it |
| **3. All the facts** | However long it is | What exactly does it say? | Look anything up |

Each layer is a complete answer at its own depth. Layer 3 loses nothing, which is what makes a restructure safe on contracts, costings and scopes of work where compression would destroy the document.

## What it does

Six modes, selected by what you ask for:

| Ask | Mode | Effect |
|---|---|---|
| "summarise this", "give me a TL;DR" | **Summary layer** | Prepends the five lines. Body untouched |
| "sort this out", "make this readable" | **Restructure** | The three layers. Nothing cut |
| "cut this down", "tighten this" | **Compress** | Rewrites throughout. For genuinely padded documents |
| "is this too long?" | **Diagnose** | Reports what is wrong and which treatment fits. Changes nothing |
| "does this read as AI?" | **Register** | Removes the machine tells. Structure untouched |
| drafting something new | **Author brief** | Applies at draft time so the document comes out short |

Restructure is the right answer more often than compress.

## What it will not do

Compression removes words, never facts. Figures, dates, deadlines, named people, commitments, and the decision being requested survive every pass. A summary that loses a dollar figure or a due date is a defect, not a trade-off.

It also declines to compress documents where the detail is the deliverable: specifications, costings, contracts, scopes of work, incident timelines. Those get restructured instead, so the full detail survives while a decision-maker still gets five lines and a page. A document that reads long because it is dense is not a document that needs cutting.

It reports the reduction it actually achieved rather than the one you hoped for. Measured on a real client email, a full pass cut 17 per cent of the prose and moved the ask from the last paragraph to the first line. The second number is the one that mattered.

## Installing

### Claude Code

```
/plugin marketplace add Abundant-Kindling/tanka
/plugin install tanka@tanka
```

Or clone and symlink the skill into your config:

```bash
git clone https://github.com/Abundant-Kindling/tanka.git
ln -s "$PWD/tanka/skills/tanka" ~/.claude/skills/tanka
```

### Claude.ai, personal

Download `tanka.zip` from [Releases](https://github.com/Abundant-Kindling/tanka/releases), then **Settings → Capabilities → Skills → Create skill** and upload it.

To build the zip yourself: `./build.sh`

### Claude.ai, whole organisation

An admin uploads the same zip at **claude.com → Organisation settings → Skills**. Everyone in the org gets it.

The plugin route installs per user and does not propagate across an organisation. If you want a team to have this without each person installing it, the admin zip upload is the path.

## The register pass

Structure is half the job. The other half is what the document sounds like, and a restructured document still reads as machine-written if it is full of things that stand as a testament to a broader shift in the evolving landscape.

So the skill carries a register pass as well. It runs **last**, because structural cuts change what prose is left to work on and polishing before cutting wastes the polish.

Six rules sit in `SKILL.md`: Australian English with British diction, sentence case headings, no em dashes, plain verbs over stiff ones, name the source or own the claim, and search every draft for chat residue before it ships. That is the house-style layer, and it stands on its own.

The full catalogue of machine tells is a separate skill, **[human-voice](https://github.com/Abundant-Kindling/human-voice)**. Install it alongside this one and `tanka` hands the sentence-level pass to it. It covers content tells, language tells, formatting tells, residue tells that are conclusive on sight, and a list of things that get wrongly flagged and are not tells at all. Two skills rather than one because they do different jobs: `human-voice` is voice-neutral and imposes no house style, `tanka` decides what a document says and in what order.

Both halves come from one cause. Over-communication and machine register are the same trade: the specific thing leaves, and volume arrives to cover the gap. A blockers list followed by "if these are not resolved I cannot proceed" and a paragraph closing with "underscoring its importance to the broader programme" are the same sentence in different clothes.

**It is not an accusation tool.** Tells cluster, no single one proves anything, and detection scores are not evidence.

## Licence

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Copy it, adapt it, redistribute it, including commercially. Credit Alex Hender and link the licence. You are not obliged to licence your version under the same terms.

Original work throughout, which is what makes the permissive licence defensible. The share-alike material sits in the companion skill [human-voice](https://github.com/Abundant-Kindling/human-voice), which is [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) because it is adapted from Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing). The two are separate repos so that the share-alike obligation stays where it belongs. Redistribute them combined and the combined work carries CC BY-SA.
