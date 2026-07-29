# tanka

A Claude Skill that cuts a long document down to what a reader needs, and puts a five-line summary on top they can act on.

A tanka is 31 syllables across five lines. There is no room in it for filler, so it carries only what matters. That is the standard the skill applies, and the five-line cap on the summary is literal.

## The problem it solves

Internal documents blow out to five, ten, twenty pages when the load-bearing content would fit in three dot points. The content is usually good. What makes the document unwieldy is over-communication: restating what sits above, spelling out consequences the reader already inferred, putting background before the ask, explaining why you are writing.

The tell is a blockers list followed by "if these are not resolved, I cannot proceed". That sentence tells the reader nothing the list did not already say.

A good communicator solves this with a short top-line summary and a pointer to where the detail lives. The reader scans, works out whether this needs them, and either acts or moves on. `tanka` does that mechanically.

## What it does

Four modes, selected by what you ask for:

| Ask | Mode | Effect |
|---|---|---|
| "summarise this", "give me a TL;DR" | **TL;DR layer** | Prepends a five-line summary. Body untouched |
| "cut this down", "tighten this" | **Compress** | Rewrites throughout. Twenty pages to two or three |
| "is this too long?" | **Diagnose** | Reports where it over-communicates. Changes nothing |
| drafting something new | **Author brief** | Applies at draft time so the document comes out short |

## What it will not do

Compression removes words, never facts. Figures, dates, deadlines, named people, commitments, and the decision being requested survive every pass. A summary that loses a dollar figure or a due date is a defect, not a trade-off.

It also declines to compress documents where the detail is the deliverable: specifications, costings, contracts, scopes of work, incident timelines. Those get the summary layer and keep their body. A document that reads long because it is dense is not a document that needs cutting.

## Installing

### Claude Code

```
/plugin marketplace add theclockworkcloud/tanka
/plugin install tanka@tanka
```

Or clone and symlink the skill into your config:

```bash
git clone https://github.com/theclockworkcloud/tanka.git
ln -s "$PWD/tanka/skills/tanka" ~/.claude/skills/tanka
```

### Claude.ai, personal

Download `tanka.zip` from [Releases](https://github.com/theclockworkcloud/tanka/releases), then **Settings → Capabilities → Skills → Create skill** and upload it.

To build the zip yourself: `./build.sh`

### Claude.ai, whole organisation

An admin uploads the same zip at **claude.com → Organisation settings → Skills**. Everyone in the org gets it.

The plugin route installs per user and does not propagate across an organisation. If you want a team to have this without each person installing it, the admin zip upload is the path.

## Using it with other skills

`tanka` works on structure and information density. It deliberately says nothing about register or voice, because two other skills own those:

- [`human-voice`](https://github.com/theclockworkcloud/human-voice) removes the signatures of machine-written prose
- `alex-voice` applies one person's voice

Run `tanka` first. Structural cuts change what prose is left to work on, so polishing before cutting wastes the polish.

## Licence

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Copy it, adapt it, redistribute it, including commercially. Credit the source.
