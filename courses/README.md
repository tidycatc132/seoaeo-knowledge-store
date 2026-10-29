# WISE Academy courses

One topic in `bank/items/` becomes one course: four lessons, a conclusion, a 10-question quiz and a completion badge. Search intent (T48) is the reference course. Copy its shape.

## Files

| Path | What it is |
|---|---|
| `courses/shell.html` | The shared page: layout, WISE styling, router, scene player, quiz and badge. Edit it only for changes every course should get. |
| `courses/scenes/<T##>.css` | That course's animated scenes: element positions and per-beat states. |
| `courses/scenes/<T##>.js` | `SCENES` (stage markup for each scene id) and optional `HOOKS` (timed effects per beat). |
| `bank/lessons/<T##>-<slug>.json` | The lesson layer: all course text, with source ids on every factual block. |
| `courses/assets/` | WISE logo and Digi the Owl, copied next to each built page. |
| `courses/build.py` | Checks the lesson layer and writes `dist/<T##>/index.html`. |
| `courses/hub.html`, `courses/hub.json`, `courses/build_hub.py` | The WISE Academy hub that lists every course: page template, tracks, learning paths and published links, and its build script. |

Build a course:

```
python3 courses/build.py T48            # writes dist/T48/
python3 courses/build.py T48 --out /some/dir
```

`dist/` is build output and is not committed. Publish the built page as an Artifact, with `wise-logo.png` and `owl.png` passed as files.

## Lesson layer

Top level, in this order: `topic_id`, `items_file`, `course_title`, `subtitle`, `last_verified`, `outcomes` (4), `intro` (2-3 paragraphs for the course page), `lessons` (4), `conclusion`, `quiz`. Optional `source_labels` maps a source id to a shorter display name.

Each lesson has:

- `lesson_id`, `title`, `est_minutes`, and `objectives` (3).
- `scene`: `{id, title, beats: [{caption, source_ids}]}`. Use 4-6 beats, each caption one or two sentences. Captions are the transcript, so they must stand alone.
- `sections`: 2-3 sections of `{heading, blocks}`. Block types:
  - `p` `{text}`.
  - `classes` `{items: [{name, text}]}`, coloured blue, green and orange in that order.
  - `list` `{items: [{lead, text}]}`.
  - `callout` `{tone: "info"|"warn", label, text}`.
  - `query` `{query, meanings, label?}`.
  - `quote` `{text, cite}`.
  - `chips` `{items}`.
  - `example` `{text}`.
- `takeaways`: `[{text, source_ids}]`, 3-4 of them.
- `exercise`: `{title, minutes, steps, prompt_template, answers?}`. The prompt opens in Claude, so write it as a request a learner can paste.
- `reflection` (2 questions) and `whats_next` (one sentence leading into the next lesson).

`conclusion` is `{title, est_minutes, text, related_topics: [{topic_id, title}]}`.

`quiz` is `{title, est_minutes, intro, pass_mark: 0.8, item_ids, multiple_choice_overrides}`. The quiz uses all 10 bank items. Items that are not multiple choice (true/false, short answer) need an override with four `options` and an `answer` letter. Write overrides from the item's own sources.

## Content rules

These come from `research/BRIEF.md` plus El Gordo's review of the pilot.

- Every factual block cites `source_ids` that exist in `research/sources/`. Add new sources with exact quotes if the bank's sources are too thin. Label practitioner judgement as such in the text.
- Never mention how many questions there are, and never say answers come with explanations. The quiz card's own "Question 3 of 10" counter is the only exception.
- Quiz: spread correct letters across A-D, and keep the correct option from being the longest. `build.py` warns on both.
- Action lists need a lead-in sentence that says when they apply.
- Plain language for practitioners: short sentences, no jargon without a definition, no statistics that aren't in a saved quote.

## Scenes

The stage is a 16:9 box with `container-type: inline-size`. Size everything in `cqw` and position it in percentages, so it scales from phone to desktop.

The player adds cumulative classes to the stage: beat 2 has `.s-<id>.b0.b1.b2`. Write the starting state on the element and the change under `.s-<id>.bN`. Transitions are already on every stage child.

- Reusable pieces: `.pill`, `.lane`, `.tile` (`.new`, `.rep`), `.gram`, `.cand`, `.planet`, `.elem`. Copy the ones you need from `scenes/T48.css`, which is the reference.
- `HOOKS[id](stage, beatIndex, timers)` runs on every beat for typed text or counters. Push every `setTimeout` into `timers` so pause and seek can clear it, and use `reduce` to skip motion delays.
- The stage stays dark (`#061012`) in WISE branding, with `--accent` set to WISE light green `#4dbc7c`.
- Check each beat at 1280px and 400px wide. Nothing may overlap, and text must stay at least 1.6cqw.

## WISE look

The tokens sit at the top of `shell.html`, taken from the WISE design system artifact:

- Montserrat, with headings at weight 600 and the last word of a title light (300).
- Accent `#019f44`, hover `#017a34`, soft `#e5f5ec`, tint `#f2faf6`. Ink `#111111`, text `#505858`, lines `#cccccc`.
- Pill buttons. Dark gradient bands (`#020506` to `#061012`) for page titles, the score card and the badge.

Don't hand-edit colours in a scene file except on the stage.

## Hub

The hub lists every course in `bank/lessons/`, grouped into tracks by the bank's `stage`, with learning paths, search and filters. Track names, path lists and each course's published Artifact link live in `courses/hub.json`.

```
python3 courses/build_hub.py                          # Artifact links, writes dist/hub/
python3 courses/build_hub.py --links relative --out site   # links to T##/, writes site/index.html
```

Publish `dist/hub/index.html` as an Artifact with `wise-logo.png` and `owl.png` as files. The build fails if a course has no link, a stage has no track, or a path names a missing course. After publishing a new course, add its link to `artifact_links` (and to a path if it fits), then rebuild and republish the hub.

## Checklist for a new course

1. Read the topic's bank file and `research/topics/T##-*.md`, and list the source passages available.
2. Draft the 4 lesson titles, then the lesson layer JSON, citing sources as you write.
3. Write `scenes/T##.css` and `.js`, one scene per lesson.
4. Run `build.py` and fix every error and warning.
5. Screenshot every view, and each scene's last beat, at desktop and phone widths, then fix any overlaps.
6. Append a line to `research/log.md` and commit the lesson layer, scenes and any new sources.
7. Add the published link to `courses/hub.json`, then rebuild and republish the hub.
