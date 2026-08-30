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

export interface Site {
  meta: {
    siteName: string;
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    publications: string;
    blog: string;
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
    expertiseTitle: string;
    expertise: { title: string; description: string }[];
    aboutPreviewTitle: string;
    aboutPreview: string;
    readMore: string;
    latestPostsTitle: string;
    viewAllPosts: string;
    noPosts: string;
  };
  about: {
    title: string;
    intro: string[];
    educationTitle: string;
    education: { degree: string; school: string; period: string }[];
    certsTitle: string;
    certs: Certification[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    affiliationsTitle: string;
    affiliations: string[];
  };
  experience: {
    title: string;
    intro: string;
    items: TimelineItem[];
  };
  publications: {
    title: string;
    intro: string;
    selectedTitle: string;
    groups: PublicationGroup[];
    fullListTitle: string;
    fullListIntro: string;
    fullListCategories: PublicationGroup[];
    reportsTitle: string;
    reportsIntro: string;
    reports: { title: string; date: string }[];
  };
  blog: {
    title: string;
    intro: string;
    readMore: string;
    backToList: string;
    empty: string;
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
