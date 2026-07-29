---
name: tanka
description: Cut a long document to what a reader needs, and put a five-line summary on top they can act on. Use when asked to summarise, condense, shorten, tighten, trim or cut down a document, email or report; when asked for a TL;DR, executive summary, top line or key points; when a document is too long, bloated, unwieldy or over-communicating; when asked to write briefly or keep something short; and when drafting internal comms that should come out short in the first place.
---

# Tanka

A tanka runs 5-7-5-7-7, thirty-one sounds across five lines. The form has been in use since the eighth century, and it holds one complete thought with no room left over for anything else.

That is the standard here, and the five-line cap on a summary is literal.

## When to use this skill

Internal and professional communications: emails, status updates, project documents, briefs, memos, reports, meeting notes, Slack and Teams posts, proposals, board papers.

Skip it for code, configuration, structured data, and anything where a machine is the reader.

## Pick a mode

Route on what was asked. There are no flags.

| The ask | Mode | What you produce |
|---|---|---|
| "summarise this", "give me a TL;DR", "top line" | **Summary layer** | A five-line summary prepended. Body byte-identical |
| "cut this down", "tighten this", "shorten this" | **Compress** | A rewritten document, summary on top, source linked |
| "is this too long?", "what's wrong with this?" | **Diagnose** | A findings report. No changes to the document |
| Drafting something new | **Author brief** | A document that comes out short the first time |

When the ask is ambiguous, default to **summary layer**. It is the only mode that cannot lose anything, so it is the safe default when you are unsure what the document is for.

When no document has been supplied, ask which one. Do not guess.

**Read the whole source first.** Never summarise from the opening pages and infer the rest. The ask, the deadline and the figure that matters sit near the end at least as often as the start, and a summary built from a partial read is confidently wrong in a way the reader cannot detect.

**Where the output goes.** A pasted document gets its output in the reply. A document supplied as a file gets a new file alongside it, suffixed `-short`, and the original is left untouched. Overwrite the source only on an explicit instruction to do so.

## The five-line summary

Every summary answers three questions inside five lines:

1. What is this?
2. What do you need from me?
3. Where do I look if I need more?

A line is one sentence or one bullet. Headings do not count. Five is a cap, not a target: three is better when three will do.

**The ask is stated, never implied.** "Approve the $48k variation, or cut scope to Stage 1" is an ask. "Let me know your thoughts" is not, and neither is "for your consideration".

**When there is no ask, say so in line one.** "For information. No action needed." That single line is the most useful thing you can give a reader who turns out not to be the audience, and it is the line most writers leave out.

**Name the deadline in the summary.** A deadline that appears only in the body does not exist.

**If five lines will not hold it, the document has more than one purpose.** Split it. Where splitting is not possible, state the primary ask and point at the second: "a second decision on the panel structure sits at section 6."

Write the summary last. It is read first.

It goes at the very top, above any existing executive summary. An executive summary that runs to a page is a body section now.

## Fidelity: what survives every pass

Compression removes words. It does not remove facts.

Never cut, in any mode:

- **Figures.** Amounts, quantities, percentages, rates, variances
- **Dates.** Deadlines, milestones, effective dates, anything already committed to a third party
- **Named people and organisations,** and who owns what
- **Commitments,** made or requested, and by whom
- **The decision requested,** and the options available
- **Conditions, exceptions and caveats** attached to an agreement or a number
- Anything a reader could later be held to
- Anything a reader would need in order to reconstruct the decision

A three-page document that lost a due date is worse than the twenty pages it replaced. The reader now acts confidently on something incomplete, and the confidence came from the compression.

**The check, before any compress pass is declared done:** list every figure, date, name, commitment and requested decision in the source. Find each one in the output. Anything missing goes back. If it will not fit, the compression target was wrong, and the target moves.

The check applies to the whole output, not to the summary. A summary of a costing document cannot carry forty figures and should not try. What the summary must carry is the figures the decision turns on: the total, the amount being approved, and the deadline. Everything else lives in the body, and in summary layer mode the body is untouched, so fidelity is automatic there.

Where a fact is genuinely repeated (the same figure stated four times), keep one instance, and keep it where a reader will look for it.

**When the repeats disagree, stop and flag it.** Deduplicating is what makes a contradiction visible: four statements of a site count are four chances for one of them to say 20 where the others say 21. Never resolve it by picking the version that reads best. Surface both and ask which is right. A long document hides its contradictions, and compression is often the first thing to expose them.

**Fidelity runs in both directions. Never invent a fact to satisfy a rule.** Where the source sets no deadline, the summary says so: "No date set. Tell me when you need this by." A fabricated deadline is a worse failure than a missing one, because the reader cannot tell it apart from a real one. The same holds for an ask the source never made, and a total the source never stated.

**Check the dates against today.** An old document carries dates that have quietly expired: three meeting windows offered, two of them last week. Reproducing them faithfully is accurate and useless. Keep them in the body, surface only the live ones in the summary, and say which have passed. A summary that offers the reader a date in the past has failed at the one job the summary has.

## Over-communication: the patterns

A long document is rarely long because it holds too much content. It is long because the content is stated more than once, and because the writer wrote down inferences the reader would have drawn unassisted.

For every pattern below, the fix is deletion.

### 1. The spelled-out consequence

A blockers list, then "if these are not resolved, I cannot proceed." A risk register, then "these risks could impact delivery." An overrun, then "this will affect the bottom line."

The reader reached that conclusion while reading the list. Delete the sentence.

Where the consequence is genuinely not obvious, it is new information, so give it a number and a fact: "each week these stay open costs $6k in standby labour."

### 2. The recap of the document

A section restating what sits above it in the same document, whether labelled "Summary of the above", "Recap", "In review", or simply doing the job unannounced.

Delete it. The five-line summary is the only recap of itself a document gets.

**A recap of a conversation is the opposite, and must survive.** "Recap of today's discussion" in a meeting follow-up is not padding, it is the document's entire purpose: the written record of what was agreed, which is what both parties will rely on when memories diverge. Tighten the prose inside it and never cut the substance. Getting this backwards is the most expensive mistake available in this skill, because it deletes the only durable record of a conversation.

The test: does this restate something the reader can scroll up and read, or something that happened in a room? Scroll-up recaps go. Room recaps stay.

### 3. Background in front of the ask

Six paragraphs of history, then the request on page four.

Reverse it. The ask goes first and the background goes behind it or into an appendix. Most readers never need the background, and the ones who do will read on.

### 4. Structural narration

"This document will cover...", "In the next section we will...", "As outlined above...", "Before we begin, some context."

The headings already do this. Delete the narration and keep the headings.

### 5. The restated question

"You asked whether the rebaseline can land before quarter end. The rebaseline can land before quarter end."

Answer first. Where the question needs restating for context, one clause carries it.

### 6. The hedged double-statement

The claim, then the same claim again more softly, so the writer has somewhere to retreat to: "The deadline is not achievable. It may be difficult to meet the current timeline."

Keep the version you will defend and delete the other. Usually that is the first one.

### 7. Politeness padding

"I hope this finds you well", "just wanted to check in", "sorry to bother you", "when you get a chance", "no rush but".

One warm line is fine where the relationship calls for it, and it belongs at the top or the bottom. Wrapped around a request, it buries the request.

### 8. Scope disclaimers at length

A paragraph on what the document does not cover.

One line, where a reader would otherwise be misled. Otherwise nothing.

### 9. Explaining why you are writing

"I am writing to update you on...", "The purpose of this email is to..."

Delete it and start with the update.

### 10. Symmetry padding

Every workstream, region or stakeholder gets its paragraph whether or not anything happened.

Report what changed. Silence on a workstream means nothing moved, and a reader who needs that confirmed will ask. Where completeness is genuinely required, as in a board pack, one table row per workstream does it.

### 11. Defensive over-justification

A decision already taken, followed by three paragraphs defending it against objections nobody raised.

State the decision and the one reason that actually drove it. Keep the alternatives considered only where the reader has authority to overturn the decision.

### 12. The list that is one item

A bulleted list whose bullets rephrase a single point, most often under "Key risks" or "Benefits".

Keep the strongest bullet and delete the others. Three bullets saying one thing read as padding, and they make the real point weaker than it was alone.

## Progressive disclosure

The summary promises the detail exists. Make that true.

- **Compression produces a layer. The source survives.** Link it or name it: "full background: [link]", "supplier detail: attachment A". Never delete the source unless explicitly told to
- **Close with how to get more,** including asking you. "Anything else, ask me" is a real offer and costs one line
- **Where the detail is in the same document, name the section.** "Detail on the variation: section 4"
- **Never point at something the reader cannot reach.** A pointer to a document they lack access to is worse than no pointer

## When not to compress

Some documents run long because the detail is the deliverable. Compressing those destroys the thing. They get a summary layer and keep their body intact:

- Specifications and scopes of work
- Costings, rate schedules, bills of quantities
- Contracts and anything with legal effect
- Incident and audit timelines, where sequence and completeness are the point
- Minutes, where a record is required
- Reference material, including this file
- Anything a third party will rely on, or that forms part of a record

**The test:** would a reader ever need to look something up in this, rather than read it through? Look-up documents keep everything.

### The hybrid, which is most real documents

A twenty-page proposal is usually a look-up document wearing a padded prose layer. The rate tables, site schedules, standards references and exclusion lists have to survive untouched. The connecting prose around them often states the same thing four times.

Treat these as one pass with two rules:

- **Tables, schedules, figures, standards references, assumptions and exclusions: verbatim.** Do not reformat, merge or round them. A rate table is a look-up surface, and editing it silently changes a commercial position
- **Connecting prose: compress hard.** This is where the repetition lives, because a writer restates the delivery model at the top of each section so that section reads standalone

The result is not a three-page document. It is the same document, three or four pages shorter, with a summary on top and a reader who reaches the ask on page one instead of page nineteen. Report it that way rather than claiming a ratio the tables made impossible.

The second case is a document that is dense rather than padded. Run the diagnose pass, and where nothing on the taxonomy above appears, report that. "Eleven pages, and all eleven are carrying content" is a real finding, and it beats manufacturing a cut to satisfy the request.

## Report the real ratio, and know that it is the wrong headline

State the reduction actually achieved. Where twenty pages compress to eight, say eight.

Two ways to fake it, both banned: hitting a target by dropping content off the never-cut list, and claiming a ratio the pass did not reach.

**Word count is the weaker of the two measures. The one that matters is how long it takes a reader to reach the ask.**

A well-written document that buries its request at the bottom yields very little on word count, because most of its words are carrying content. Measured on a real client follow-up email, a full pass cut 17 per cent of the prose. On the same email it moved the ask from the last paragraph to the first line. The second change is worth more than the first, and a reader would describe the result as dramatically shorter while the word count says otherwise.

So report both, and lead with the one that helped:

- Where the source was padded, the ratio is the story. Say it
- Where the source was well written and badly ordered, say that instead: "17 per cent shorter, and the ask moved from the bottom to line one." Do not apologise for the ratio, and do not pad the cut to improve it

Ninety per cent reductions are real, and they come from documents that were ninety per cent padding. They are not the expected result on competent writing, and treating them as a target on good source material means cutting content to hit a number.

## Diagnose mode output

Keep it to a page. Report, in this order:

1. Source length, and estimated load-bearing content
2. Patterns found, by name and instance count, with one example each
3. Whether an ask exists, and whether it is stated in the first five lines
4. Any figure, date or commitment stated once and buried where a reader will miss it
5. Estimated compressed length, and whether this document should be compressed at all

Change nothing. The point of the mode is that the author does the cutting.

## Where this stops and other skills start

Three skills, three axes. This one stays on its own.

| Skill | The question it answers |
|---|---|
| **tanka** | Does this respect the reader's time and let them act? Structure and density |
| **human-voice** | Does this read as machine-written? Register |
| **alex-voice** | Does this sound like the named author? Identity |

Run **tanka first.** Structural cuts change what prose is left to work on, so polishing before cutting wastes the polish.

This skill holds no vocabulary lists, no punctuation rules and no register guidance. Those belong to the other two, and duplicating them here would put two documents in charge of one decision.

## Worked example

**Before, about 135 words:**

> I hope this email finds you well. I am writing to provide an update on the supplier rebaseline and to seek your input on a matter that has arisen.
>
> By way of background, as you will recall, we commenced the rebaseline in March following the decision to consolidate the panel. Since then the team has worked through the first two tranches and made considerable progress.
>
> Unfortunately we have encountered some blockers. The first is that three suppliers have not returned their rate cards. The second is that the pricing model needs sign-off before tranche three can begin.
>
> If these blockers are not resolved, we will not be able to proceed to the next phase.
>
> The variation currently sits at $48,000 above the approved budget, driven by supplier rate rises.
>
> Happy to discuss at your convenience.

**After, about 70 words:**

> **Approve the $48k budget variation by 07 Aug, or tell me to cut tranche three.**
>
> - Rebaseline is on track for 14 Aug, with two blockers.
> - Three suppliers have not returned rate cards. Chasing.
> - The pricing model needs your sign-off before tranche three starts.
> - Variation is $48,000 over approved budget, all supplier rate rises.
>
> Rate card detail and the tranche schedule are in the attached pack. Anything else, ask me.

What went: the greeting, the statement of purpose, the March background, "considerable progress", the spelled-out consequence, "happy to discuss". What stayed: every figure, both dates, both blockers, the ask, and the pointer to more.

## Checklist

Run over a finished pass:

1. Is there an ask, and is it in the first five lines in words the reader can act on?
2. Does the summary run to five lines or fewer?
3. List every figure, date, name, commitment and requested decision in the source. Find each in the output
4. Delete every sentence stating a consequence the list above it already implied
5. Delete every recap
6. Is any background sitting in front of the ask? Move it behind
7. Delete "I am writing to", "This document will cover", "As outlined above"
8. Any list whose bullets rephrase one point? Keep one
9. Any workstream reported on with nothing to report? Cut it
10. Does the reader know where to get more, and can they reach it?
11. Read the summary cold, without the body. Can you act on it?
12. State the real ratio

## Licence

Copyright Alex Hender. Released under **Creative Commons Attribution 4.0 International (CC BY 4.0)**. Copy it, adapt it, redistribute it, including commercially. Credit the source.
