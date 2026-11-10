import { readFile } from "node:fs/promises";
import { join } from "node:path";

const DIR = join(process.cwd(), "content");
const HEAD = '<!doctype html>\n<html lang="en">\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<link rel="icon" href="/owl.png">\n';

export async function catalog() {
  return JSON.parse(await readFile(join(DIR, "courses.json"), "utf-8"));
}

export async function readPage(topic) {
  const file = topic ? join(DIR, topic, "index.html") : join(DIR, "index.html");
  try { return await readFile(file, "utf-8"); } catch { return null; }
}

const json = (v) => JSON.stringify(v).replace(/</g, "\\u003c");

// Turns a built page into a site page: proper document head, absolute image paths,
// the signed-in person's saved progress, and the sync script that reports changes.
export function sitePage(html, { boot, nav }) {
  const firstScript = html.indexOf("<script>");
  if (firstScript < 0) throw new Error("built page has no inline script");
  const inject = `<script>window.__ACADEMY__=${json(boot)};</script>\n<script src="/academy-sync.js"></script>\n`;
  html = html.slice(0, firstScript) + inject + html.slice(firstScript);
  html = html.replaceAll('src="wise-logo.png"', 'src="/wise-logo.png"').replaceAll('src="owl.png"', 'src="/owl.png"');
  if (nav.course) {
    html = html.replace(/<button class="brand" type="button" data-go="course"([^>]*)>([\s\S]*?)<\/button>/, '<a class="brand" href="/"$1>$2</a>');
    html = html.replace('<span class="topnav">Courses</span>', `<nav class="topnav" aria-label="Site"><a href="/">All courses</a><a href="/auth/signout/">Sign out</a></nav>`);
  } else {
    html = html.replace('<a href="#courses">All courses</a></nav>',
      `<a href="#courses">All courses</a>${nav.admin ? '<a href="/admin/">Team progress</a>' : ""}<a href="/auth/signout/" title="${nav.email.replace(/"/g, "")}">Sign out</a></nav>`);
  }
  return HEAD + html;
}

export function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "private, no-store" },
  });
}
