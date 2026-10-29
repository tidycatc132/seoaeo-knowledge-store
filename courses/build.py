#!/usr/bin/env python3
"""Build a WISE Academy course page from a topic's lesson layer.

Usage: python3 courses/build.py T48 [--out dist]

Reads bank/lessons/<topic>-*.json, its bank items file, the cited source notes in
research/ and courses/scenes/<topic>.css/.js, then writes <out>/<topic>/index.html
with the logo and owl images beside it. Fails loudly when the lesson layer breaks
a rule in courses/README.md.
"""
import argparse
import glob
import json
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HERE = os.path.join(ROOT, "courses")
REQUIRED = ["topic_id", "items_file", "course_title", "subtitle", "outcomes", "intro", "lessons", "conclusion", "quiz"]
LESSON_KEYS = ["title", "est_minutes", "objectives", "scene", "sections", "takeaways", "exercise", "reflection", "whats_next"]
BLOCK_TYPES = {"p", "classes", "list", "callout", "query", "quote", "chips", "example"}


def fail(msg):
    sys.exit(f"build: {msg}")


def source_meta(sid):
    paths = glob.glob(os.path.join(ROOT, "research", "sources", f"{sid}-*.md"))
    if not paths:
        fail(f"no source note for {sid} in research/sources/")
    head = open(paths[0], encoding="utf-8").read().split("---")[1]
    meta = dict(line.split(": ", 1) for line in head.strip().splitlines() if ": " in line)
    return {"title": meta.get("title", sid), "url": meta.get("url", "")}


def check(course, bank, scene_js):
    for k in REQUIRED:
        if k not in course:
            fail(f"lesson layer is missing '{k}'")
    for i, L in enumerate(course["lessons"], 1):
        for k in LESSON_KEYS:
            if k not in L:
                fail(f"lesson {i} is missing '{k}'")
        if f"{L['scene']['id']}:" not in scene_js and f"{L['scene']['id']}(" not in scene_js:
            fail(f"lesson {i} scene '{L['scene']['id']}' has no entry in the scene JS")
        for b in (blk for s in L["sections"] for blk in s["blocks"]):
            if b["type"] not in BLOCK_TYPES:
                fail(f"lesson {i} uses unknown block type '{b['type']}'")
    items = {it["item_id"]: it for it in bank["items"]}
    quiz = course["quiz"]
    for k in ("intro", "pass_mark", "est_minutes", "item_ids"):
        if k not in quiz:
            fail(f"quiz is missing '{k}'")
    overrides = {o["item_id"]: o for o in quiz.get("multiple_choice_overrides", [])}
    answers = []
    for iid in quiz["item_ids"]:
        if iid not in items:
            fail(f"quiz item {iid} is not in {course['items_file']}")
        it = dict(items[iid], **overrides.get(iid, {}))
        if not it.get("options") or it.get("answer") not in "ABCD":
            fail(f"quiz item {iid} is not multiple choice (add an override)")
        answers.append(it["answer"])
        correct = next(o for o in it["options"] if o[0] == it["answer"])
        if len(correct) == max(len(o) for o in it["options"]) and len(it["options"]) > 1:
            print(f"build: warning: {iid} correct option is the longest", file=sys.stderr)
    spread = {k: answers.count(k) for k in "ABCD"}
    if max(spread.values()) > len(answers) // 2:
        print(f"build: warning: answer letters are bunched {spread}", file=sys.stderr)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("topic")
    ap.add_argument("--out", default=os.path.join(ROOT, "dist"))
    args = ap.parse_args()
    tid = args.topic.upper()
    found = glob.glob(os.path.join(ROOT, "bank", "lessons", f"{tid}-*.json"))
    if not found:
        fail(f"no lesson layer at bank/lessons/{tid}-*.json")
    course = json.load(open(found[0], encoding="utf-8"))
    bank = json.load(open(os.path.join(ROOT, course["items_file"]), encoding="utf-8"))
    css_p, js_p = (os.path.join(HERE, "scenes", f"{tid}.{x}") for x in ("css", "js"))
    if not (os.path.exists(css_p) and os.path.exists(js_p)):
        fail(f"missing courses/scenes/{tid}.css or .js")
    scene_css, scene_js = open(css_p, encoding="utf-8").read(), open(js_p, encoding="utf-8").read()
    check(course, bank, scene_js)

    ids = sorted(set(re.findall(r"S\d{3}", json.dumps(course))))
    sources = {sid: source_meta(sid) for sid in ids}
    for sid, label in course.get("source_labels", {}).items():
        sources[sid]["title"] = label

    def inline(obj):
        return json.dumps(obj, ensure_ascii=False).replace("</", "<\\/")

    html = open(os.path.join(HERE, "shell.html"), encoding="utf-8").read()
    for key, val in {
        "__TITLE__": f"{course['course_title']} course",
        "__SCENE_CSS__": scene_css,
        "__SCENE_JS__": scene_js,
        "__SOURCES__": inline(sources),
        "__LESSON__": inline(course),
        "__BANK__": inline(bank),
    }.items():
        html = html.replace(key, val)

    dest = os.path.join(args.out, tid)
    os.makedirs(dest, exist_ok=True)
    open(os.path.join(dest, "index.html"), "w", encoding="utf-8").write(html)
    for f in ("wise-logo.png", "owl.png"):
        shutil.copy(os.path.join(HERE, "assets", f), dest)
    print(f"built {os.path.relpath(dest, ROOT)}/index.html ({len(course['lessons'])} lessons, {len(course['quiz']['item_ids'])} quiz items, {len(ids)} sources)")


if __name__ == "__main__":
    main()
