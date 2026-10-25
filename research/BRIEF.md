# Research agent brief (shared by all agents)

Plan: https://claude.ai/artifact/5fnqc8GKin3hptCb5N5qGe. Read `research/README.md` too. Do NOT commit or push; just write files.

AUDIENCE: SEO and AEO practitioners (marketers, content strategists, technical SEOs), not search engineers. A topic matters only for what changes how they audit, write or decide.

## Steps, in order

1. GATHER. Use WebSearch and WebFetch (curl does not work here). At most 8 sources per topic; look for grade A first (platform docs such as Google Search Central, Bing Webmaster docs, original papers, standards, textbook chapters such as Manning/Raghavan/Schutze at nlp.stanford.edu/IR-book), then B. Open every page you cite; a search snippet is not a source. Before adding a source, check `research/sources/` for an existing note on the same page and reuse its id. Write one note per new source at `research/sources/S###-slug.md`, using YOUR assigned id range only:

```
---
id: S101
url: ...
title: ...
publisher: ...
grade: A|B|C|D
page_date: YYYY-MM-DD or unknown
opened: <today's date>
status: used|rejected
reject_reason: (only if rejected)
---
Summary: three lines max.
## Passages
### P1 <short label>
> exact quote copied word for word from the page
```

Save only short exact quotes that items rely on, never whole pages. WebFetch may truncate: if a quote you need comes back cut off, fetch again for the rest, otherwise do not rely on that fact. A source that fails the dating, exact-quote or attribution check is saved as `rejected` with the reason.

2. UNDERSTAND. For each topic write `research/topics/T##-slug.md`: the single idea a practitioner should leave with; what they would do differently; key findings with source ids; conflicting claims and how resolved; dead ends; what was merged or cut and why; volatility (stable | evolving | fast-moving).

3. WRITE ITEMS. For each topic write `bank/items/T##-slug.json`:

```
{"topic_id","title","stage","merged_from":[],"volatility","last_verified":"<today>",
 "summary":"under 150 words, plain language","actions":["..."],
 "myths":[{"myth","correction","source_ids":["S101#P1"]}],
 "items":[{"item_id":"T39-L1-01","level":1,"type","prompt","options":[],"answer","explanation","related_topics":[],"source_ids":["S101#P1"]}]}
```

Kept topics: exactly 10 items: level 1 Recognize x3 (definition, multiple choice, true/false), level 2 Explain x3 (why it works, misconception check, which-statement-is-unsupported), level 3 Apply x2 (worked example, spot the error), level 4 Diagnose x2 (short case file: site, symptom, 2-3 pieces of evidence, question, 4 options, one clearly best). Condensed topics: exactly 2 items (one level 1, one level 2), a 2-sentence summary, no myths or actions needed.

## Quality rules (learned from the pilot fact-check; follow all)

- Every fact in a prompt, answer or explanation must be in a saved quote. If it is not, cut it or reword it to what the quote supports.
- Do not stretch a quote: "some properties" is not "sameAs"; a textbook method is not proof of what an engine does. Say "Google says", "the paper describes", "the patent describes" exactly as the source supports. A patent or paper never backs "Google uses X". Mark inference as "practitioner inference" and unconfirmed engine behaviour as unconfirmed, in the item text.
- Answers are exact-matchable: one short term, number or option letter, one format per key. No sentences as answers.
- Spread correct MCQ letters across A-D and keep the correct option from being the longest. No near-duplicate options. Exactly one defensible option in level-4 cases.
- Explanations say why each wrong option is wrong.
- Invent no statistics or real case data. Case-file sites are clearly labelled hypothetical.
- At least one level-4 item across your topics should combine a topic from another stage when a sourced fact supports it.
- Never write a claim about structured data being required for ranking unless a saved quote says so.

4. SELF-CHECK with a short script: JSON parses, item counts correct, every cited `S####P#` exists in the source notes, summaries under 150 words.

5. HANDOFF. Append one line per topic to `research/log.md`: `<date> | <agent> | T## | sources added N | items N | cut N`. Reply under 250 words: files written, sources used/rejected, topics merged or cut, gaps (pages that failed to fetch), open questions.
