#!/usr/bin/env node
/**
 * build.mjs — генератор из единого источника data/profile.json.
 * Запуск:  node scripts/build.mjs
 *
 * Эмитит:
 *   cv/cv_en.md, cv/cv_ru.md, cv/cv_fr.md  — полные CV на 3 языках
 *   cv.json                                — машиночитаемое резюме (JSON Resume-ish), сайт отдаёт по /cv.json
 *   js/profile.gen.js                      — window.PROFILE для сайта (опыт + стек)
 *   README.md                              — блок About между маркерами
 *
 * Зависимостей нет. Деплой сайта остаётся статикой: сгенерированные
 * файлы коммитятся в репозиторий, генератор гоняется только при правке контента.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const profile = JSON.parse(readFileSync(join(ROOT, "data", "profile.json"), "utf8"));

const LANGS = ["en", "ru", "fr"];
const t = (v, l) => (v && typeof v === "object" ? v[l] : v); // взять перевод

/* ---------- локализация дат и заголовков ---------- */
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ru: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
  fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
};
const PRESENT = { en: "present", ru: "настоящее время", fr: "aujourd'hui" };
const DASH = { en: "–", ru: "—", fr: "–" };
const HEADINGS = {
  work: { en: "Work Experience", ru: "Опыт работы", fr: "Expérience professionnelle" },
  teaching: { en: "Teaching", ru: "Преподавание", fr: "Enseignement" },
  education: { en: "Education", ru: "Образование", fr: "Formation" },
  skills: { en: "Skills", ru: "Навыки", fr: "Compétences" },
  languages: { en: "Languages", ru: "Языки", fr: "Langues" },
};
const LANG_TABLE = {
  en: ["Language", "Level"], ru: ["Язык", "Уровень"], fr: ["Langue", "Niveau"],
};

function monthYear(ym, l) {
  if (!ym) return PRESENT[l];
  const [y, m] = ym.split("-");
  return m ? `${MONTHS[l][+m - 1]} ${y}` : y;
}
function period(start, end, l) {
  return `${monthYear(start, l)} ${DASH[l]} ${end ? monthYear(end, l) : PRESENT[l]}`;
}
function years(start, end, l) {
  return `${start} ${DASH[l]} ${end}`;
}

/* ---------- генерация CV markdown ---------- */
function buildCv(l) {
  const b = profile.basics;
  const links = [
    `📍 ${t(b.location, l)}`,
    `📧 [${b.email}](mailto:${b.email})`,
    ...b.profiles.filter((p) => p.network !== "GitHub" || true).map((p) => {
      const icon = p.network === "Telegram" ? "💬" : p.network === "GitHub" ? "🐙" : "🔗";
      return `${icon} [${p.handle}](${p.url})`;
    }),
  ];
  const out = [];
  out.push(`# ${t(b.name, l)}`, "");
  out.push(`**${t(b.label, l)}**`, "");
  out.push(links.join(" · "), "");
  out.push("---", "");
  out.push(t(b.summary, l), "");

  out.push(`## ${HEADINGS.work[l]}`, "");
  for (const w of profile.work) {
    out.push(`### ${w.company} — ${t(w.role, l)} · *${t(w.team, l)}*`);
    out.push(`**${period(w.start, w.end, l)}**`, "");
    for (const h of w.highlights) out.push(`- ${t(h, l)}`);
    out.push("");
  }

  out.push(`## ${HEADINGS.teaching[l]}`, "");
  for (const w of profile.teaching) {
    out.push(`### ${t(w.org, l)} — ${t(w.role, l)}`);
    out.push(`**${period(w.start, w.end, l)}**`, "");
    for (const h of w.highlights) out.push(`- ${t(h, l)}`);
    out.push("");
  }

  out.push(`## ${HEADINGS.education[l]}`, "");
  for (const e of profile.education) {
    out.push(`### ${t(e.institution, l)} — ${t(e.degree, l)}`);
    out.push(`**${years(e.start, e.end, l)}** · ${t(e.area, l)}`, "");
  }

  out.push(`## ${HEADINGS.skills[l]}`, "");
  for (const s of profile.skills) out.push(`- ${t(s, l)}`);
  out.push("");

  out.push(`## ${HEADINGS.languages[l]}`, "");
  const [c1, c2] = LANG_TABLE[l];
  out.push(`| ${c1} | ${c2} |`, `|${"-".repeat(c1.length + 2)}|${"-".repeat(c2.length + 2)}|`);
  for (const lang of profile.languages) out.push(`| ${t(lang.name, l)} | ${t(lang.level, l)} |`);
  out.push("");

  return out.join("\n");
}

/* ---------- cv.json (машиночитаемое, JSON Resume-ish, на английском) ---------- */
function buildCvJson() {
  const b = profile.basics;
  return JSON.stringify({
    $schema: "https://kirillyat.ru/cv.json",
    basics: {
      name: t(b.name, "en"),
      label: t(b.label, "en"),
      email: b.email,
      location: { city: t(b.location, "en") },
      summary: t(b.summary, "en"),
      profiles: b.profiles.map((p) => ({ network: p.network, username: p.handle, url: p.url })),
    },
    work: profile.work.map((w) => ({
      name: w.company, position: t(w.role, "en"), department: t(w.team, "en"),
      startDate: w.start, endDate: w.end, keywords: w.stack,
      highlights: w.highlights.map((h) => t(h, "en")),
    })),
    teaching: profile.teaching.map((w) => ({
      organization: t(w.org, "en"), position: t(w.role, "en"),
      startDate: w.start, endDate: w.end, highlights: w.highlights.map((h) => t(h, "en")),
    })),
    education: profile.education.map((e) => ({
      institution: t(e.institution, "en"), studyType: t(e.degree, "en"),
      startDate: e.start, endDate: e.end, area: t(e.area, "en"),
    })),
    skills: profile.skills.map((s) => t(s, "en")),
    languages: profile.languages.map((x) => ({ language: t(x.name, "en"), fluency: t(x.level, "en") })),
  }, null, 2) + "\n";
}

/* ---------- js/profile.gen.js — данные для сайта (все языки инлайном) ---------- */
function buildSiteData() {
  // опыт = work + teaching, для таймлайна сайта; period/role/desc/tags на 3 языках
  const pack = (item, isTeaching) => {
    const p = {};
    for (const l of LANGS) {
      p[l] = {
        period: period(item.start, item.end, l),
        company: isTeaching ? t(item.org, l) : item.company,
        role: t(item.role, l),
        highlights: item.highlights.map((h) => t(h, l)),
        tags: isTeaching ? [t(item.subject, l)] : item.stack,
        kind: isTeaching ? "teaching" : "work",
      };
    }
    return p;
  };
  const experience = [...profile.work.map((w) => pack(w, false)), ...profile.teaching.map((w) => pack(w, true))];
  const stack = profile.stack.map((g) => {
    const o = { items: g.items };
    for (const l of LANGS) o[l] = t(g.name, l);
    return o;
  });
  const payload = { experience, stack };
  return `/* СГЕНЕРИРОВАНО build.mjs из data/profile.json — НЕ редактируй вручную */\nwindow.PROFILE = ${JSON.stringify(payload, null, 2)};\n`;
}

/* ---------- README: блок About между маркерами ---------- */
function buildReadmeAbout() {
  const w0 = profile.work[0], w1 = profile.work[1];
  const edu = profile.education.map((e) => t(e.short, "en")).join(" · ");
  const teach = profile.teaching.map((x) => t(x.org, "en")).join(" and ");
  const teachSubj = profile.teaching.map((x) => t(x.subject, "en")).join(" / ");
  const langs = profile.languages.map((x) => `${t(x.name, "en")} (${t(x.level, "en")})`).join(" · ");
  return [
    `- 🛠 **${t(w0.role, "en")} @ ${w0.company}** — ${t(w0.impact, "en")}`,
    `- ⚡ Previously: **${w1.company}** (${t(w1.team, "en")}, ${w1.stack.join("/")}) — ${t(w1.impact, "en")}`,
    `- 🎓 ${edu}`,
    `- 👨‍🏫 Teaching ${teachSubj} at ${teach}`,
    `- 🌍 ${langs}`,
  ].join("\n");
}
function patchReadme() {
  const path = join(ROOT, "README.md");
  let md = readFileSync(path, "utf8");
  const START = "<!-- PROFILE:ABOUT:START -->", END = "<!-- PROFILE:ABOUT:END -->";
  const block = `${START}\n${buildReadmeAbout()}\n${END}`;
  if (md.includes(START) && md.includes(END)) {
    md = md.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
  } else {
    // первая генерация: заменяем содержимое секции "## About" на блок с маркерами
    md = md.replace(/## About\n[\s\S]*?(?=\n## )/, `## About\n\n${block}\n\n`);
  }
  writeFileSync(path, md);
}

/* ---------- запуск ---------- */
for (const l of LANGS) writeFileSync(join(ROOT, "cv", `cv_${l}.md`), buildCv(l));
writeFileSync(join(ROOT, "cv.json"), buildCvJson());
writeFileSync(join(ROOT, "js", "profile.gen.js"), buildSiteData());
patchReadme();
console.log("✓ generated: cv/cv_{en,ru,fr}.md, cv.json, js/profile.gen.js, README About block");
