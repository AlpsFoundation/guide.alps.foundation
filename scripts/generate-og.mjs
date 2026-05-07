import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getOgImagePath, guideMeta, ogImageSize } from "../src/data/guide-meta.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const jpegQuality = 82;

const fontBuffer = await fs.readFile(path.join(publicDir, "fonts/Switzer-Variable.woff2"));
const fontUrl = `data:font/woff2;base64,${fontBuffer.toString("base64")}`;

const logoSvg = await fs.readFile(path.join(publicDir, "alps-logo.svg"), "utf8");
const logoUrl = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`;

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const titleSizeFor = (title) => {
  if (title.length >= 76) return 58;
  if (title.length >= 68) return 61;
  if (title.length >= 60) return 64;
  return 68;
};

const htmlFor = ({ locale, meta }) => `<!DOCTYPE html>
<html lang="${escapeHtml(locale)}">
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: "Switzer";
    src: url("${fontUrl}") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: block;
  }

  :root {
    --paper: #f7f5ed;
    --ink: #14140f;
    --ink-soft: #414538;
    --rule: #bdb79d;
    --olive-300: #b8c47a;
    --olive-500: #7f8c3f;
    --olive-700: #4b552a;
    --olive-800: #363f22;
    --olive-900: #252d19;
    --olive-950: #151a0e;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    width: ${ogImageSize.width}px;
    height: ${ogImageSize.height}px;
  }

  body {
    font-family: "Switzer", "Helvetica Neue", Arial, sans-serif;
    color: var(--ink);
    background:
      radial-gradient(circle at 95% 0%, rgb(157 170 87 / 0.32), transparent 720px),
      radial-gradient(circle at 12% 28%, rgb(212 219 169 / 0.42), transparent 540px),
      linear-gradient(180deg, #fbfaf4 0%, var(--paper) 42%, #f1eedf 100%);
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    padding: 72px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
  }

  body::before {
    content: "";
    position: absolute;
    inset: 24px;
    border: 1px solid rgb(74 85 42 / 0.35);
    border-radius: 4px;
    pointer-events: none;
  }

  .top, .middle, .bottom {
    position: relative;
    z-index: 1;
  }

  .logo {
    display: block;
    width: 280px;
    height: calc(280px * 580 / 2100);
    background: linear-gradient(
      110deg,
      var(--olive-950) 0%,
      var(--olive-700) 24%,
      var(--olive-300) 48%,
      var(--olive-800) 72%,
      var(--olive-500) 100%
    );
    mask: url("${logoUrl}") center / contain no-repeat;
    -webkit-mask: url("${logoUrl}") center / contain no-repeat;
  }

  .eyebrow {
    font-size: 18px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink-soft);
    font-weight: 500;
    margin-bottom: 22px;
  }

  .title {
    font-size: ${titleSizeFor(meta.title)}px;
    line-height: 1.02;
    font-weight: 900;
    max-width: 1000px;
    background: linear-gradient(135deg, var(--ink) 0%, var(--olive-900) 55%, var(--olive-700) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    hyphens: auto;
    overflow-wrap: normal;
    text-wrap: balance;
  }

  .tagline {
    font-size: 22px;
    line-height: 1.45;
    color: var(--ink-soft);
    max-width: 980px;
    margin-top: 28px;
    font-weight: 400;
    text-wrap: balance;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .rule {
    height: 1px;
    background: linear-gradient(90deg, var(--rule) 0%, rgb(189 183 157 / 0) 100%);
  }

  .footer {
    font-size: 18px;
    color: var(--ink);
    font-weight: 500;
    letter-spacing: 0.06em;
  }
</style>
</head>
<body>
  <div class="top">
    <span class="logo" aria-hidden="true"></span>
  </div>

  <div class="middle">
    <div class="eyebrow">Awareness Lectures on Psychedelics in Switzerland</div>
    <h1 class="title">${escapeHtml(meta.title)}</h1>
    <p class="tagline">${escapeHtml(meta.description)}</p>
  </div>

  <div class="bottom">
    <div class="rule"></div>
    <div class="footer">guide.alps.foundation</div>
  </div>
</body>
</html>`;

const browser = await chromium.launch();

try {
  const context = await browser.newContext({
    viewport: { width: ogImageSize.width, height: ogImageSize.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const [locale, meta] of Object.entries(guideMeta)) {
    const outPath = path.join(publicDir, getOgImagePath(locale).slice(1));

    await page.setContent(htmlFor({ locale, meta }), { waitUntil: "load" });
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    await page.screenshot({
      path: outPath,
      type: "jpeg",
      quality: jpegQuality,
      clip: { x: 0, y: 0, width: ogImageSize.width, height: ogImageSize.height },
    });

    const stats = await fs.stat(outPath);
    console.log(`Wrote ${path.relative(root, outPath)} (${Math.round(stats.size / 1024)} KB)`);
  }

  await fs.rm(path.join(publicDir, "og-image.png"), { force: true });
} finally {
  await browser.close();
}
