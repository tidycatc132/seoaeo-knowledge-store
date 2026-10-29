#!/usr/bin/env python3
"""Build the WISE Academy hub page that lists every course.

Usage: python3 courses/build_hub.py [--links artifact|relative] [--out dist]

Reads every lesson layer in bank/lessons/, its bank items file (for stage and
volatility) and courses/hub.json (tracks, learning paths, published links), then
writes the hub with the logo and owl images beside it.

--links artifact (default) links each course to its published Artifact and writes
<out>/hub/index.html. --links relative links to <topic>/ and writes <out>/index.html,
for a static site where each course is built to <out>/<topic>/.
Fails loudly when a course, track, path or link is missing.
"""
import argparse
import glob
import json
import os
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HERE = os.path.join(ROOT, "courses")


def fail(msg):
    sys.exit(f"build_hub: {msg}")


def course_minutes(c):
    return sum(L["est_minutes"] for L in c["lessons"]) + c["conclusion"]["est_minutes"] + c["quiz"]["est_minutes"]


def load_courses():
    courses = []
    for path in sorted(glob.glob(os.path.join(ROOT, "bank", "lessons", "T*-*.json"))):
        c = json.load(open(path, encoding="utf-8"))
        bank = json.load(open(os.path.join(ROOT, c["items_file"]), encoding="utf-8"))
        courses.append({
            "id": c["topic_id"],
            "title": c["course_title"],
            "subtitle": c["subtitle"],
            "outcomes": c["outcomes"],
            "minutes": course_minutes(c),
            "lessons": len(c["lessons"]),
            "verified": c.get("last_verified", bank.get("last_verified", "")),
            "stage": bank["stage"],
            "volatility": bank["volatility"],
            "topic": bank["title"],
            "related": [t["topic_id"] for t in c["conclusion"].get("related_topics", [])],
        })
    courses.sort(key=lambda x: (x["stage"], int(x["id"][1:])))
    return courses


def check(hub, courses, mode):
    ids = {c["id"] for c in courses}
    stages = {t["stage"] for t in hub["tracks"]}
    for c in courses:
        if c["stage"] not in stages:
            fail(f"{c['id']} is in stage {c['stage']}, which has no track in courses/hub.json")
        if c["volatility"] not in hub["volatility"]:
            fail(f"{c['id']} has volatility '{c['volatility']}' with no label in courses/hub.json")
    for p in hub["paths"]:
        for tid in p["topics"]:
            if tid not in ids:
                fail(f"path '{p['id']}' lists {tid}, which has no course in bank/lessons/")
    if mode == "artifact":
        links = hub["artifact_links"]
        missing = sorted(ids - set(links), key=lambda t: int(t[1:]))
        if missing:
            fail(f"no published Artifact link in courses/hub.json for {', '.join(missing)}")
        extra = sorted(set(links) - ids)
        if extra:
            fail(f"courses/hub.json links {', '.join(extra)}, which have no course")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--links", choices=["artifact", "relative"], default="artifact")
    ap.add_argument("--out", default=os.path.join(ROOT, "dist"))
    args = ap.parse_args()

    hub = json.load(open(os.path.join(HERE, "hub.json"), encoding="utf-8"))
    courses = load_courses()
    check(hub, courses, args.links)
    for c in courses:
        c["href"] = hub["artifact_links"][c["id"]] if args.links == "artifact" else f"{c['id']}/"

    data = {
        "title": hub["title"],
        "lede": hub["lede"],
        "tracks": hub["tracks"],
        "paths": hub["paths"],
        "volatility": hub["volatility"],
        "mode": args.links,
        "courses": courses,
    }
    html = open(os.path.join(HERE, "hub.html"), encoding="utf-8").read()
    html = html.replace("__HUB__", json.dumps(data, ensure_ascii=False).replace("</", "<\\/"))

    dest = os.path.join(args.out, "hub") if args.links == "artifact" else args.out
    os.makedirs(dest, exist_ok=True)
    open(os.path.join(dest, "index.html"), "w", encoding="utf-8").write(html)
    for f in ("wise-logo.png", "owl.png"):
        shutil.copy(os.path.join(HERE, "assets", f), dest)
    total = sum(c["minutes"] for c in courses)
    print(f"built {os.path.relpath(dest, ROOT)}/index.html ({len(courses)} courses, {len(hub['tracks'])} tracks, {len(hub['paths'])} paths, {total} min, {args.links} links)")


if __name__ == "__main__":
    main()
