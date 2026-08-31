export type Locale = "vi" | "en";

export interface TimelineItem {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  current?: boolean;
}

export interface PublicationGroup {
  title: string;
  items: string[];
}

export interface Certification {
  title: string;
  meta: string;
}

export interface MediaItem {
  title: string;
  source: string;
  date: string;
  url?: string;
}

export interface Site {
  meta: {
    siteName: string;
    title: string;
    description: string;
  };
  nav: {
    home: string;
    research: string;
    management: string;
    media: string;
    contact: string;
  };
  hero: {
    kicker: string;
    name: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quote: string;
    quoteSource: string;
  };
  home: {
    primaryRolesTitle: string;
    primaryRoles: string[];
    concurrentRolesTitle: string;
    concurrentRoles: string[];
    bioTitle: string;
    bio: string[];
    expertiseTitle: string;
    expertise: { title: string; description: string }[];
    educationTitle: string;
    education: { degree: string; school: string; period: string }[];
    certsTitle: string;
    certs: Certification[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    exploreTitle: string;
    exploreResearch: string;
    exploreResearchDesc: string;
    exploreManagement: string;
    exploreManagementDesc: string;
    exploreMedia: string;
    exploreMediaDesc: string;
  };
  research: {
    title: string;
    intro: string;
    scholarLabel: string;
    scholarUrl: string;
    strongGroupsTitle: string;
    strongGroupsIntro: string;
    selectedTitle: string;
    groups: PublicationGroup[];
    fullListTitle: string;
    fullListIntro: string;
    fullListCategories: PublicationGroup[];
    reportsTitle: string;
    reportsIntro: string;
    reports: { title: string; date: string }[];
  };
  management: {
    title: string;
    intro: string;
    placeholderNote: string;
    items: TimelineItem[];
  };
  media: {
    title: string;
    intro: string;
    curatedTitle: string;
    curatedIntro: string;
    curated: MediaItem[];
    postsTitle: string;
    readMore: string;
    empty: string;
    backToList: string;
  };
  contact: {
    title: string;
    intro: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
    detailsTitle: string;
    socialTitle: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
