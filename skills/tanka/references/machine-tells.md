# Machine tells: the full catalogue

Look-up material for the register pass. `SKILL.md` holds the rules that decide what to do; this file holds the catalogue you check a draft against. Read it when running a register pass, when a draft reads wrong and nobody can say why, or when asked whether something looks machine-written.

## Why these patterns exist

A model predicts the most statistically likely continuation, so its output regresses to the mean of everything it read. Specific, unusual, load-bearing facts are statistically rare. Generic praise is statistically common. The result is prose that gets **less specific and more emphatic at the same time**: the inventor of a particular railway coupling becomes "a revolutionary titan of industry".

That trade is the root of nearly every tell below. Detail leaves, and volume arrives to cover the gap. The fix is almost always the same: put the specific thing back.

**The test for any sentence: does this tell the reader something they did not know, or does it tell them how to feel about something they already read?**

That is the same test `SKILL.md` applies to the spelled-out consequence. Over-communication and machine register are the same failure seen from two angles, which is why one document now owns both.

---

## Content tells

### Inflated significance

The most reliable signature. The subject's importance is asserted rather than shown, usually by tying it to a broader arc nobody asked about.

> stands as / serves as a testament to · marks a pivotal moment · played a crucial/vital/key role · underscores its importance · reflects a broader shift · part of a larger movement toward · the evolving landscape of · setting the stage for · left an indelible mark · cementing its place as · deeply rooted in · symbolising its enduring legacy

Related: placing the subject inside unnamed "debates", "discussions" or "conversations". "The project has sparked broader debate about ownership and authenticity."

**Fix:** delete the claim and state what the thing did. If the significance is real, the facts carry it. If deleting the sentence loses nothing, it was carrying nothing.

### Analysis tacked on with a participle

A trailing "-ing" clause that explains the significance of the sentence it is attached to:

> …, highlighting its role in the region's growth
> …, reflecting the company's commitment to sustainability
> …, ensuring a seamless experience for users
> …, fostering collaboration across teams
> …, showcasing the breadth of the collection
> …, contributing to the broader history of early aviation

These are unearned editorialising in a grammatical disguise. **Fix:** cut the clause. If it holds a real claim, promote it to its own sentence and support it.

### Notability puffery

Proving something matters by listing where it was covered, rather than what was said:

> has been featured in leading industry publications · profiled in national media outlets · widely covered by trade press · maintains an active social media presence · recognised by experts in the field

**Fix:** quote or paraphrase what a named source said. "The Australian called the rollout premature" beats "has received significant coverage in national media".

### Promotional drift

Even when asked for neutral prose, models slide into travel-brochure or press-release register.

> nestled in the heart of · boasts a vibrant · rich cultural heritage · a diverse array of · breathtaking · state-of-the-art · groundbreaking · renowned for · committed to excellence · seamlessly integrates · thoughtfully designed

**Fix:** describe, do not sell. Concrete detail is more persuasive than adjectives about the detail.

### Vague attribution

Opinions credited to an authority that never gets named, or one source inflated into a chorus.

> experts argue · observers have noted · critics have pointed out · industry reports suggest · it is widely regarded as · many have described · several sources indicate · scholarship describes it as

Watch especially for the inflation move: two reviewers becoming "reviewers", one paper becoming "researchers", one example becoming "examples such as".

**Fix:** name the person or publication, or state the claim as your own. Do not borrow a crowd.

This one matters more in a work document than anywhere else on this page. "Industry reports suggest" in a proposal is a figure with nobody's name on it, and a reader who acts on it cannot check it.

### Challenges-and-future-outlook

The rigid closing formula: a "Challenges" beat that opens "Despite its [positive adjective], X faces several challenges, including…" and resolves into vague optimism, often with a "Future Prospects" or "Looking Ahead" section behind it.

**Fix:** difficulties are worth writing about. The formula is not. Name the specific problem, who it affects, and what would have to change. Cut the reassuring resolution.

### Summary closes

"In summary", "In conclusion", "Overall", or a final paragraph restating what the piece just said. Short pieces do not need a recap, and the recap is usually the flattest paragraph in the piece.

**Fix:** end on the last real point.

This is the same rule as the recap of the document in `SKILL.md`, and it carries the same exception: a recap of a **conversation** survives. "In summary" at the foot of an essay goes. "To confirm what we agreed this morning" stays, because that is the record.

### Didactic disclaimers

> It's important to note that… · It's worth remembering… · It should be considered that… · Keep in mind that… · may vary depending on your circumstances

If it is important, it is in the sentence. The announcement adds a chatbot's throat-clearing.

### Speculation dressed as sourcing

When the model cannot find something, it says so and then guesses anyway:

> While specific details are limited… · not widely documented · based on available information · the subject maintains a low profile · as of my last knowledge update

Everything after such a hedge is invention, including the claim that the information does not exist.

**Fix:** find the fact, or leave the gap. Never narrate the search. `SKILL.md` states the positive version of this under fidelity: say what you have not read, and name the hole rather than writing around it.

---

## Language tells

### Model vocabulary

Density is the test, not any single use. Where one of these appears, others cluster:

> delve · tapestry (abstract) · testament · underscore (figurative) · showcase · robust · intricate/intricacies · pivotal · crucial · foster/fostering · garner · boasts · bolstered · meticulous/meticulously · interplay · landscape (abstract) · vibrant · seamless · align with · enhance · leverage (verb) · holistic · nuanced · myriad · profound · groundbreaking · nestled · valuable insights · resonate with · key (as filler adjective) · "Additionally," opening a sentence

The specific words drift by model generation. *Delve* and *tapestry* peaked in 2023 and 2024, *showcasing* and *highlighting* later, so treat the list as a live sample rather than a fixed set. The underlying move is constant: a slightly grander word standing in for a plain one.

**Fix:** two in a paragraph means rewrite the paragraph.

### The copulative dodge

Machine prose avoids plain "is" and "has":

| Avoided | Reached for instead |
|---|---|
| is | serves as, stands as, functions as, represents, marks |
| has | boasts, features, offers, maintains, houses |
| wrote | authored, penned |
| used | utilised, leveraged |
| moved | relocated, transitioned |
| tried | attempted, endeavoured |
| bought | acquired, procured |
| died | passed away |
| about | regarding, pertaining to |

Measured across academic writing, plain *is* and *are* dropped over 10 per cent after 2023. **Fix:** use the plain verb. Compression means fewer words, never stiffer ones.

### Negative parallelism

Manufactured contrast that borrows the click of insight from a foil it invented:

> Not only X, but also Y
> It's not just X, it's Y
> This isn't X. It's Y.
> No X, no Y, just Z
> X rather than Y (as a reveal rather than a plain comparison)

It also appears spread across two sentences: "He came from a family of engineers. His own path, however, ran elsewhere."

Genuine contrast between two real things is fine. The tell is contrast erected so it can be knocked down. **Fix:** state the thing that is true and drop the thing that is not.

### Rule of three

Triads of adjectives or clauses reached for by reflex: "bold, innovative, and scalable", "reduce costs, improve efficiency, and drive growth", "identity, authenticity, and meaning". Three is the default rhythm of generated prose, and it makes thin analysis sound comprehensive.

**Fix:** one strong word, or a list whose length the facts decided. Lists that genuinely have three items are fine. The ban is on manufacturing three.

This is the list that is one item from `SKILL.md`, at sentence scale instead of bullet scale.

### Elegant variation

A repetition penalty pushes models to rename the same thing every time it recurs: "the report", "the document", "the findings", "the paper" in one paragraph.

**Fix:** repeat the noun. Clarity beats variety, and pronouns handle the rest.

In a work document this is a fidelity problem, not only a style one. Four names for one artefact reads as four artefacts to someone skimming, and it is the same failure as four statements of a site count.

### English variety

Models default to American English regardless of author, subject or audience.

**The house standard is Australian English with British diction:** colour, organisation, behaviour, recognise, licence as the noun. Hold it throughout, including in headings, captions and table cells. Code identifiers follow their own language conventions and stay as they are.

Drift mid-document is the tell. A document about an Australian business written in American English is the same tell, louder.

---

## Formatting tells

- **Title Case In Headings** where sentence case is the house style. Sentence case is the house style
- **Boldface scattered** through paragraphs for emphasis, or on every instance of a chosen phrase, in a "key takeaways" style
- **Inline-header lists:** bullets of `**Bold label:** one sentence of description`, where prose would read better. The strongest formatting tell there is
- **Em dashes as a rhythmic crutch,** spaced, frequent, and used where a comma, colon or full stop belongs. Human writers use em dashes; models use them at roughly triple the rate and always for the same emphatic beat. **In this repo and in anything the skill produces, em dashes are banned outright.** Comma, colon, full stop or brackets, whichever the sentence wants
- **Emoji as structure,** decorating headings or bullets
- **Curly quotes and apostrophes** where the surrounding text uses straight ones, or inconsistently mixed within one document
- **Tables for two or three facts** that belong in a sentence
- **Skipped heading levels,** or a horizontal rule before every heading
- **Markdown leaking** into a surface that does not render it: `**bold**` and `##` appearing literally. Teams, Outlook and most intranet fields do not render it

---

## Residue tells

These are conclusive rather than probabilistic. Text containing them was pasted from a chat window without being read.

- **Chat addressed to the operator:** "Would you like me to…", "Here's a draft you can customise", "Let me know if you'd like me to expand this section", "I hope this helps", "Certainly!"
- **Unfilled placeholders:** `[Your Name]`, `[Insert date]`, `PASTE_URL_HERE`, `access-date=2025-XX-XX`
- **Citation artefacts:** `:contentReference[oaicite:0]{index=0}`, `oai_citation`, `turn0search1`, `[cite: 17]`, `[span_1][start_span]`, `【85†L261-269】`, `grok_render_citation_card_json`, `[attached_file:1]`
- **Tracking parameters on cited URLs:** `utm_source=chatgpt.com`, `utm_source=openai`, `utm_source=copilot.com`, `referrer=grok.com`
- **Refusal fragments:** "As an AI language model…"
- **Abrupt mid-sentence stops** where a generation hit a token limit

**Always search a finished draft for these before it ships.** They cost nothing to check and are unanswerable when found.

### Fabricated sourcing

Separate from formatting, and the most damaging failure. Generated citations are frequently plausible and false:

- Dead links that were never live, and are not in the Internet Archive
- DOIs that resolve to an unrelated paper
- ISBNs that fail checksum
- Real books cited without page numbers, or with page numbers that do not contain the claim
- Named references declared but never cited inline
- Quotes attributed to real people who never said them

**Every citation gets opened and read before the piece ships. A citation that has not been checked is not a citation.**

The same discipline applies to a standard, a clause number or a rate reference in a work document. A cited AS/NZS number that does not say what the paragraph claims is a fabricated citation wearing a hard hat.

---

## What human writing looks like

Positive targets, not just prohibitions. Measured across decades of human text, these are *more* common in human writing than machine writing:

- **Plain copulatives:** "there is a", "it has a", "she was"
- **Short, plain verbs:** wrote, used, moved, tried, bought, died
- **Definitive and superlative statements:** "the only", "the first", "the best". Models hedge away from these. Humans make them when they are true
- **Hedges and intensifiers used honestly:** "very", "perhaps", "tends to", "I think"
- **Ordinary wordiness:** "in order to", "as a result of", "the fact that". Not elegant, but human
- **Specific, unusual, checkable detail:** the number, the date, the name, the thing that happened
- **Uneven emphasis.** A person writes more about what interests them. Even coverage of every subtopic is a generated trait, and it is the same failure `SKILL.md` names as symmetry padding
- **A stated position.** The writer thinks something and says so, without attributing it to observers

---

## What is not a tell

False accusations are their own harm, and over-correcting produces worse prose. These get wrongly flagged:

- **Clean grammar and punctuation.** Plenty of people write well
- **Formal, academic or technical register** where the piece calls for it
- **Curly quotes and the Oxford comma in isolation.** Curly quotes come free from Word, macOS and every professional typesetter. Real signal only when stacked with other tells
- **Transition words used honestly.** "However", "consequently", "notably" are ordinary English
- **Mixed casual and formal register.** Common in technical writers, in younger writers, in neurodivergent writers, and in anything with more than one author
- **Headings, lists and tables** where the content is genuinely structured. A rate schedule is a table because it is a table
- **AI detection tools.** Error rates are high enough that a percentage score is not evidence. Human judgement is not much better on its own: in controlled tests, non-expert readers score near chance

No single item on this page proves anything. Tells cluster, and that is what makes them tells. Weigh the stack, not the instance.

**Never accuse a colleague of machine-writing on the strength of this page.** It is a revision tool for your own drafts and a diagnostic for text you have been asked to assess. Used as an accusation it is unreliable, and being wrong about it is worse than the thing it detects.

---

## Register checklist

Run after the structural pass, never before it. Structural cuts change what prose is left to work on.

1. Search for residue: `oaicite`, `contentReference`, `turn0search`, `[cite:`, `utm_source=`, `[Your Name]`, `XX-XX`
2. Open every citation, standard and clause reference. Confirm it exists and says what the draft claims
3. Delete every trailing "-ing" clause that explains significance
4. Find every "not X, it's Y" and its relatives. Remove the foil
5. Count vocabulary hits per paragraph. Two is a rewrite
6. Replace "serves as" with "is", "boasts" with "has", "utilised" with "used"
7. Cut adjective triads to one word
8. Delete "It's important to note", "In summary", and any closing recap. Keep every recap of a conversation
9. Check the English variety holds throughout: Australian spelling, British diction, sentence case headings
10. Search for em dashes. There should be none
11. Check that emphasis is uneven, that the document dwells where the interest is
12. Read the opening and closing paragraphs aloud. They carry tells at the highest rate
13. Ask of each paragraph: what does the reader now know that they did not? If the answer is "how to feel about the previous paragraph", cut it

---

## Source and licence

This file is adapted from Wikipedia's *Signs of AI writing*, the community field guide for detecting undisclosed machine-generated content, plus its cited studies on vocabulary drift and copulative decline. The original is written for encyclopedia editors and includes wiki-specific material, templates, categories, edit summaries and submission statements, omitted here as out of scope. The connections drawn to the structural rules in `SKILL.md`, and the work-document examples, are additions.

- Source article: <https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing>
- Contributors (attribution): <https://en.wikipedia.org/w/index.php?title=Wikipedia:Signs_of_AI_writing&action=history>

Because this material is a derivative of that page, the skill as a whole is released under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**. See the `LICENSE` file bundled with the skill.

Two caveats carried over from the original, and worth keeping in view. These are **observations, not rules**: they describe what generated text tends to do, not a style guide for what good writing must avoid. And human writing is being pulled toward these patterns by exposure, so their presence has never proved authorship and proves it less each year.
