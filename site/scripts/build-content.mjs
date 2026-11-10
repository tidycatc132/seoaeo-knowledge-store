// Builds the hub and every course into site/content/ with the course kit in ../courses,
// and writes content/courses.json (id, title, track, steps) for the admin page.
import { execFileSync } from "node:child_process";
import { readdirSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = join(SITE, "..");
const OUT = join(SITE, "content");
const py = process.env.PYTHON || "python3";
const run = (args) => execFileSync(py, args, { cwd: ROOT, stdio: ["ignore", "inherit", "inherit"] });

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const topics = readdirSync(join(ROOT, "bank", "lessons"))
  .map((f) => f.match(/^(T\d+)-.*\.json$/)?.[1])
  .filter(Boolean);
if (!topics.length) throw new Error("build-content: no lesson layers found in bank/lessons");
for (const t of topics) run(["courses/build.py", t, "--out", OUT]);
run(["courses/build_hub.py", "--links", "relative", "--out", OUT]);

const catalog = execFileSync(py, ["-c", `
import json, sys
sys.path.insert(0, "courses")
from build_hub import load_courses
hub = json.load(open("courses/hub.json", encoding="utf-8"))
tracks = {t["stage"]: t["name"] for t in hub["tracks"]}
print(json.dumps([{"id": c["id"], "title": c["title"], "track": tracks.get(c["stage"], ""), "steps": c["lessons"] + 3} for c in load_courses()]))
`], { cwd: ROOT, encoding: "utf-8" });
writeFileSync(join(OUT, "courses.json"), catalog);
console.log(`build-content: ${topics.length} courses and the hub written to site/content/`);
