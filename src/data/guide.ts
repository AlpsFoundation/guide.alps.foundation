import { frontmatter as deGuideContent } from "../content/guide/de.mdx";
import { frontmatter as enGuideContent } from "../content/guide/en.mdx";
import { frontmatter as esGuideContent } from "../content/guide/es.mdx";
import { frontmatter as frGuideContent } from "../content/guide/fr.mdx";
import { frontmatter as itGuideContent } from "../content/guide/it.mdx";
import { frontmatter as ptGuideContent } from "../content/guide/pt.mdx";
import { guideMeta } from "./guide-meta.mjs";
import { sharedResources } from "./guide-shared";

export const locales = ["en", "fr", "de", "it", "es", "pt"] as const;
export const translatedLocales = ["fr", "de", "it", "es", "pt"] as const;

export type Locale = (typeof locales)[number];
export type TranslatedLocale = (typeof translatedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
  it: "IT",
  es: "ES",
  pt: "PT",
};

type IconName =
  | "book"
  | "buildingBank"
  | "calendarEvent"
  | "circleCheck"
  | "clipboardCheck"
  | "compass"
  | "fileText"
  | "forms"
  | "heartHandshake"
  | "leaf"
  | "mapPin"
  | "microscope"
  | "movie"
  | "network"
  | "presentation"
  | "route"
  | "school"
  | "shieldCheck"
  | "targetArrow"
  | "usersGroup"
  | "whatsapp";

type TextIconItem = {
  icon: IconName;
  text: string;
};

type GuidePartId = "register" | "mission" | "swiss-model" | "kickstart";

type ResourceLink = {
  title: string;
  displayUrl: string;
  href: string;
};

type TimelineItem = {
  year: string;
  text: string;
};

export type GuideContent = {
  htmlLang: string;
  draftBanner: string;
  languageSwitcherLabel: string;
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  hero: {
    summary: string;
    title: string;
  };
  why: {
    label: string;
    headline: string;
    paragraphs: string[];
  };
  origin: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  principles: {
    label: string;
    title: string;
    principleHeading: string;
    campusHeading: string;
    items: Array<{
      icon: IconName;
      principle: string;
      campus: string;
    }>;
  };
  guideParts: Array<{
    id: GuidePartId;
    number: string;
    title: string;
    label: string;
    icon: IconName;
    partLabel: string;
  }>;
  register: {
    title: string;
    intro: string;
    steps: Array<{
      icon: IconName;
      title: string;
      body: string;
    }>;
    tipTitle: string;
    tipParagraphs: string[];
  };
  mission: {
    title: string;
    intro: string;
    missionTitle: string;
    missionIntro: string;
    isLabel: string;
    notLabel: string;
    isItems: string[];
    notItems: string[];
    ethicsTitle: string;
    ethics: TextIconItem[];
    formatsTitle: string;
    formats: TextIconItem[];
    caseTitle: string;
    caseIntro: string;
    palaPillars: string[];
  };
  swissModel: {
    title: string;
    intro: string;
    namingTitle: string;
    namingIntro: string;
    namingAdvice: string[];
    figures: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  };
  kickstart: {
    title: string;
    intro: string;
    actions: Array<{
      icon: IconName;
      title: string;
      paragraphs: string[];
    }>;
    networkTitle: string;
    networkParagraphs: string[];
    resources: ReadonlyArray<ResourceLink>;
    timelineTitle: string;
    timeline: TimelineItem[];
    rememberTitle: string;
    remember: string[];
  };
  footer: {
    version: string;
    builtWith: string;
    sourceLabel: string;
  };
};

type GuideContentFrontmatter = Omit<GuideContent, "meta" | "kickstart"> & {
  kickstart: Omit<GuideContent["kickstart"], "resources">;
};

const withSharedContent = (locale: Locale, frontmatter: GuideContentFrontmatter): GuideContent => ({
  ...frontmatter,
  meta: guideMeta[locale],
  kickstart: {
    ...frontmatter.kickstart,
    resources: sharedResources,
  },
});

export const guideContent: Record<Locale, GuideContent> = {
  en: withSharedContent("en", enGuideContent as GuideContentFrontmatter),
  fr: withSharedContent("fr", frGuideContent as GuideContentFrontmatter),
  de: withSharedContent("de", deGuideContent as GuideContentFrontmatter),
  it: withSharedContent("it", itGuideContent as GuideContentFrontmatter),
  es: withSharedContent("es", esGuideContent as GuideContentFrontmatter),
  pt: withSharedContent("pt", ptGuideContent as GuideContentFrontmatter),
};

export const getLocalePath = (locale: Locale) => (locale === "en" ? "/" : "/" + locale + "/");
