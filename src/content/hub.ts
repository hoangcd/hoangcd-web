import type { Locale } from "./types";

/**
 * Content for the two pillar pages (Science & Technology, Innovation),
 * the About page and the condensed home page.
 *
 * `role` is intentionally left empty for projects whose role has not been
 * confirmed by Dr. Hoang — the UI hides an empty role rather than guessing.
 */

export interface Project {
  name: string;
  fullName: string;
  url: string;
  domain: string;
  description: string;
  role?: string;
  tags?: string[];
}

export interface Hub {
  nav: {
    science: string;
    innovation: string;
    about: string;
    news: string;
  };
  home: {
    tagline: string;
    pillarsTitle: string;
    pillars: {
      key: "science" | "innovation";
      title: string;
      description: string;
      cta: string;
    }[];
    newsTitle: string;
    newsAll: string;
    aboutCta: string;
  };
  about: {
    title: string;
    intro: string;
    careerTitle: string;
    currentLabel: string;
  };
  science: {
    title: string;
    intro: string;
    currentTitle: string;
    current: { title: string; description: string; links: { label: string; url: string }[] }[];
    labTitle: string;
    lab: Project & { highlights: string[] };
    profilesTitle: string;
    profilesIntro: string;
    profiles: { name: string; detail: string; url: string }[];
    orgsTitle: string;
    orgsIntro: string;
    orgs: Project[];
    publicationsTitle: string;
    publicationsIntro: string;
    visit: string;
  };
  innovation: {
    title: string;
    intro: string;
    startupTitle: string;
    startup: Project & { highlights: string[]; bridge: string };
    platformsTitle: string;
    platformsIntro: string;
    platforms: Project[];
    policyTitle: string;
    policy: string[];
    policyCta: string;
    communityTitle: string;
    community: Project[];
    disclaimer: string;
    visit: string;
  };
}

const vi: Hub = {
  nav: {
    science: "Khoa học & Công nghệ",
    innovation: "Đổi mới sáng tạo",
    about: "Giới thiệu",
    news: "Tin tức",
  },
  home: {
    tagline:
      "Kết nối nghiên cứu khoa học với đổi mới sáng tạo — từ phòng thí nghiệm quang phổ Raman và trí tuệ nhân tạo đến chính sách hỗ trợ doanh nghiệp đổi mới công nghệ.",
    pillarsTitle: "Hai mảng hoạt động",
    pillars: [
      {
        key: "science",
        title: "Khoa học & Công nghệ",
        description:
          "Nghiên cứu quang phổ Raman và AI trong y sinh tại BIRALAB (ĐHQG Hà Nội), công bố khoa học, và đồng hành cùng các viện, hội khoa học – công nghệ.",
        cta: "Xem nghiên cứu và dự án",
      },
      {
        key: "innovation",
        title: "Đổi mới sáng tạo",
        description:
          "Khởi nghiệp y tế số Zinmed và các nền tảng cộng đồng kết nối nhà khoa học, doanh nghiệp, nhà đầu tư để đưa công nghệ ra thị trường.",
        cta: "Xem dự án và nền tảng",
      },
    ],
    newsTitle: "Tin mới",
    newsAll: "Tất cả tin tức",
    aboutCta: "Tiểu sử đầy đủ",
  },
  about: {
    title: "Giới thiệu",
    intro:
      "Tiểu sử, quá trình công tác, học vấn và các chứng chỉ của TS. Chử Đức Hoàng.",
    careerTitle: "Quá trình công tác",
    currentLabel: "Hiện tại",
  },
  science: {
    title: "Khoa học & Công nghệ",
    intro:
      "Hướng nghiên cứu hiện tại, phòng thí nghiệm, hồ sơ khoa học và các tổ chức khoa học – công nghệ mà TS. Chử Đức Hoàng tham gia.",
    currentTitle: "Nghiên cứu hiện tại",
    current: [
      {
        title: "Quang phổ Raman và AI sàng lọc ung thư da không xâm lấn",
        description:
          "Xây dựng cơ sở dữ liệu phổ Raman đa nguồn chuẩn HL7/FHIR, mô hình lai 1D-CNN–Transformer phân loại tổn thương da với đánh giá chống rò rỉ dữ liệu, hướng tới thiết bị sàng lọc tại chỗ.",
        links: [
          { label: "BIRALAB", url: "https://biralab.org" },
          { label: "Zinmed", url: "https://zinmed.com" },
        ],
      },
      {
        title: "Chính sách khoa học, công nghệ và đổi mới sáng tạo",
        description:
          "Cơ chế tài chính hỗ trợ doanh nghiệp đổi mới công nghệ, tăng trưởng xanh và Net Zero, CBAM, hạ tầng số và chuyển đổi số, nguồn nhân lực cho Cách mạng công nghiệp 4.0.",
        links: [],
      },
    ],
    labTitle: "Phòng thí nghiệm",
    lab: {
      name: "BIRALAB",
      fullName: "Biomedical Raman & AI Analytics",
      url: "https://biralab.org",
      domain: "biralab.org",
      description:
        "Nhóm nghiên cứu mạnh, phi lợi nhuận của Đại học Quốc gia Hà Nội, phát triển quang phổ Raman kết hợp trí tuệ nhân tạo giải thích được cho y tế, kiểm nghiệm dược phẩm và an toàn thực phẩm.",
      highlights: [
        "Chẩn đoán không xâm lấn",
        "Kiểm nghiệm chất lượng dược phẩm",
        "An toàn thực phẩm",
        "AI xử lý tại biên, dữ liệu không rời cơ sở",
      ],
    },
    profilesTitle: "Hồ sơ khoa học",
    profilesIntro: "Danh mục công bố và chỉ số trích dẫn được cập nhật trên các nền tảng sau.",
    profiles: [
      {
        name: "Google Scholar",
        detail: "393 trích dẫn · h-index 7 · i10-index 5",
        url: "https://scholar.google.com/citations?hl=vi&user=tcJwNTsAAAAJ",
      },
      {
        name: "ORCID",
        detail: "0009-0009-9919-977X",
        url: "https://orcid.org/0009-0009-9919-977X",
      },
      {
        name: "ResearchGate",
        detail: "Bài báo, bài trình bày và toàn văn",
        url: "https://www.researchgate.net/profile/Hoang-Chuduc",
      },
      {
        name: "LinkedIn",
        detail: "Hồ sơ nghề nghiệp",
        url: "https://www.linkedin.com/in/chuduchoang/",
      },
    ],
    orgsTitle: "Tổ chức khoa học – công nghệ",
    orgsIntro: "Các hội, viện nghiên cứu và mạng lưới khoa học – công nghệ đồng hành.",
    orgs: [
      {
        name: "VAYSE",
        fullName: "Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam",
        url: "https://vayse.org",
        domain: "vayse.org",
        description:
          "Tập hợp trí thức trẻ Việt Nam trong và ngoài nước; đào tạo, chuyển giao công nghệ và kiến nghị chính sách khoa học – công nghệ.",
        role: "Phó Chủ tịch",
      },
      {
        name: "ASTRI",
        fullName: "Viện Nghiên cứu Công nghệ Hỗ trợ Nông nghiệp",
        url: "https://www.astri.vn",
        domain: "astri.vn",
        description:
          "Nghiên cứu và ứng dụng công nghệ cho nông nghiệp: phân bón hữu cơ vi sinh, tinh dầu hữu cơ, xúc tiến thương mại và đào tạo.",
      },
      {
        name: "Viện STI",
        fullName: "Viện Chiến lược Công nghệ và Đổi mới Sáng tạo",
        url: "https://sti.edu.vn",
        domain: "sti.edu.vn",
        description:
          "Nghiên cứu, tư vấn chiến lược và đào tạo cho doanh nghiệp trong chuyển đổi số; định giá tài sản vô hình.",
      },
      {
        name: "RITAD",
        fullName: "Viện Nghiên cứu Phát triển Giao thông, Nông nghiệp và Môi trường",
        url: "https://ritad.edu.vn",
        domain: "ritad.edu.vn",
        description:
          "Tổ chức phi lợi nhuận (2013) nghiên cứu và chuyển giao công nghệ: nông nghiệp thích ứng khí hậu, vật liệu phân huỷ sinh học, giao thông bền vững.",
      },
      {
        name: "NITIA",
        fullName: "Viện Đổi mới và Phát triển Công nghệ Nha Trang",
        url: "https://nitia.org",
        domain: "nitia.org",
        description:
          "Nghiên cứu, ứng dụng công nghệ cao trong nông nghiệp và y sinh; đào tạo và kết nối doanh nghiệp với nhà khoa học.",
      },
      {
        name: "VBEG",
        fullName: "Cộng đồng Kỹ thuật Y sinh Việt Nam",
        url: "https://vbeg.org",
        domain: "vbeg.org",
        description:
          "Cộng đồng kết nối kỹ sư, nhà nghiên cứu và giảng viên ngành kỹ thuật y sinh Việt Nam.",
        role: "Quản trị viên",
      },
    ],
    publicationsTitle: "Công bố khoa học",
    publicationsIntro:
      "Hơn 60 công bố, sắp xếp theo ba nhóm chủ đề. Danh mục đầy đủ ở cuối trang.",
    visit: "Truy cập",
  },
  innovation: {
    title: "Đổi mới sáng tạo",
    intro:
      "Dự án khởi nghiệp, các nền tảng cộng đồng đổi mới sáng tạo và công tác chính sách hỗ trợ doanh nghiệp đổi mới công nghệ.",
    startupTitle: "Dự án khởi nghiệp",
    startup: {
      name: "Zinmed",
      fullName: "Sàng lọc ung thư da bằng AI và quang phổ Raman",
      url: "https://zinmed.com",
      domain: "zinmed.com",
      description:
        "Công cụ sàng lọc ung thư da không xâm lấn kết hợp quang phổ Raman và trí tuệ nhân tạo. Thiết bị ZinRaman-D1 đang trong giai đoạn nghiên cứu, hướng tới chuẩn ISO 13485.",
      role: "Đồng sáng lập, Chủ tịch (từ 2014)",
      highlights: [
        "Ung thư biểu mô tế bào đáy (BCC)",
        "Ung thư biểu mô tế bào vảy (SCC)",
        "Ung thư hắc tố (Melanoma)",
        "Tổn thương lành tính",
      ],
      bridge:
        "Zinmed là cầu nối giữa hai mảng: kết quả nghiên cứu tại BIRALAB được phát triển thành sản phẩm y tế số phục vụ người dân.",
    },
    platformsTitle: "Nền tảng cộng đồng",
    platformsIntro:
      "Các nền tảng mở, phục vụ cộng đồng doanh nghiệp, nhà khoa học và nhà đầu tư.",
    platforms: [
      {
        name: "TechFair Vietnam",
        fullName: "Nơi công nghệ Việt gặp thế giới",
        url: "https://techfair.vn",
        domain: "techfair.vn",
        description:
          "Nền tảng cộng đồng đổi mới sáng tạo kết nối startup, doanh nghiệp và nhà đầu tư: ghép đối bằng AI, phòng giao dịch B2B, danh bạ hệ sinh thái và sự kiện thường niên.",
      },
      {
        name: "Đổi Mới Công Nghệ",
        fullName: "Nền tảng cộng đồng đổi mới công nghệ",
        url: "https://www.doimoicongnghe.com",
        domain: "doimoicongnghe.com",
        description:
          "Giải mã chính sách, bản đồ chương trình hỗ trợ, đào tạo kỹ năng và mạng lưới chuyên gia đồng hành cùng doanh nghiệp đổi mới công nghệ — miễn phí.",
      },
      {
        name: "LIFVietnam",
        fullName: "Mạng lưới hỗ trợ thương mại hoá kết quả nghiên cứu",
        url: "https://lifvietnam.org",
        domain: "lifvietnam.org",
        description:
          "Kết nối nhà khoa học, doanh nghiệp, nhà quản lý, tổ chức trung gian và ngân hàng để đưa kết quả nghiên cứu ra thị trường. Thành viên mạng lưới LIF Global (Royal Academy of Engineering).",
        role: "Điều phối viên",
      },
    ],
    policyTitle: "Chính sách và quỹ đổi mới công nghệ",
    policy: [
      "Hơn 10 năm công tác tại Quỹ Đổi mới công nghệ quốc gia (Bộ KH&CN), tham gia điều hành hoạt động tài trợ, cho vay và hỗ trợ lãi suất cho doanh nghiệp đổi mới công nghệ.",
      "Tham gia xây dựng và hoàn thiện cơ chế tài chính hỗ trợ doanh nghiệp, đóng góp cho Luật Khoa học, Công nghệ và Đổi mới sáng tạo năm 2025.",
      "Điều phối Chương trình Chia sẻ tri thức (KSP) Việt Nam – Hàn Quốc về chính sách tài chính công nghệ.",
    ],
    policyCta: "Xem quá trình công tác",
    communityTitle: "Cộng đồng",
    community: [
      {
        name: "hochu.vn",
        fullName: "Dòng họ Chử Việt Nam",
        url: "https://hochu.vn",
        domain: "hochu.vn",
        description:
          "Hệ sinh thái số kết nối con cháu họ Chử: cội nguồn, tin tức, nhân vật tiêu biểu và phả hệ trực tuyến.",
      },
    ],
    disclaimer:
      "Các dự án và nền tảng trên trang này là hoạt động cá nhân, cộng đồng của TS. Chử Đức Hoàng, không đại diện cho Quỹ Đổi mới công nghệ quốc gia hay Bộ Khoa học và Công nghệ.",
    visit: "Truy cập",
  },
};

const en: Hub = {
  nav: {
    science: "Science & Technology",
    innovation: "Innovation",
    about: "About",
    news: "News",
  },
  home: {
    tagline:
      "Bridging scientific research and innovation — from Raman-spectroscopy and AI laboratory work to policies that help enterprises innovate with technology.",
    pillarsTitle: "Two areas of work",
    pillars: [
      {
        key: "science",
        title: "Science & Technology",
        description:
          "Raman spectroscopy and AI for biomedicine at BIRALAB (Vietnam National University, Hanoi), scientific publications, and work with science-and-technology institutes and associations.",
        cta: "Research and projects",
      },
      {
        key: "innovation",
        title: "Innovation",
        description:
          "The digital-health startup Zinmed and community platforms connecting scientists, enterprises and investors to bring technology to market.",
        cta: "Projects and platforms",
      },
    ],
    newsTitle: "Latest news",
    newsAll: "All news",
    aboutCta: "Full biography",
  },
  about: {
    title: "About",
    intro: "Biography, career, education and certifications of Dr. Chu Duc Hoang.",
    careerTitle: "Career",
    currentLabel: "Current",
  },
  science: {
    title: "Science & Technology",
    intro:
      "Current research, laboratory, scholarly profiles, and the science-and-technology organizations Dr. Chu Duc Hoang works with.",
    currentTitle: "Current research",
    current: [
      {
        title: "Raman spectroscopy and AI for non-invasive skin-cancer screening",
        description:
          "Building an HL7/FHIR-standardized multi-source Raman spectral database and a hybrid 1D-CNN–Transformer classifier with leakage-aware evaluation, towards point-of-care screening devices.",
        links: [
          { label: "BIRALAB", url: "https://biralab.org" },
          { label: "Zinmed", url: "https://zinmed.com" },
        ],
      },
      {
        title: "Science, technology and innovation policy",
        description:
          "Financial mechanisms for enterprise technology innovation, green growth and net zero, CBAM, digital public infrastructure and digital transformation, and human resources for Industry 4.0.",
        links: [],
      },
    ],
    labTitle: "Laboratory",
    lab: {
      name: "BIRALAB",
      fullName: "Biomedical Raman & AI Analytics",
      url: "https://biralab.org",
      domain: "biralab.org",
      description:
        "A non-profit Strong Research Group of Vietnam National University, Hanoi, developing Raman spectroscopy combined with explainable artificial intelligence for healthcare, pharmaceutical quality control and food safety.",
      highlights: [
        "Non-invasive diagnostics",
        "Pharmaceutical quality control",
        "Food safety",
        "Edge AI — data never leaves the facility",
      ],
    },
    profilesTitle: "Scholarly profiles",
    profilesIntro: "Publications and citation metrics are kept up to date on these platforms.",
    profiles: [
      {
        name: "Google Scholar",
        detail: "393 citations · h-index 7 · i10-index 5",
        url: "https://scholar.google.com/citations?hl=en&user=tcJwNTsAAAAJ",
      },
      {
        name: "ORCID",
        detail: "0009-0009-9919-977X",
        url: "https://orcid.org/0009-0009-9919-977X",
      },
      {
        name: "ResearchGate",
        detail: "Papers, presentations and full texts",
        url: "https://www.researchgate.net/profile/Hoang-Chuduc",
      },
      {
        name: "LinkedIn",
        detail: "Professional profile",
        url: "https://www.linkedin.com/in/chuduchoang/",
      },
    ],
    orgsTitle: "Science & technology organizations",
    orgsIntro: "Associations, research institutes and networks he works with.",
    orgs: [
      {
        name: "VAYSE",
        fullName: "Vietnam Association of Young Scientists and Engineers",
        url: "https://vayse.org",
        domain: "vayse.org",
        description:
          "Brings together young Vietnamese scientists at home and abroad; training, technology transfer and science-and-technology policy recommendations.",
        role: "Vice Chairman",
      },
      {
        name: "ASTRI",
        fullName: "Agricultural Support Technology Research Institute",
        url: "https://www.astri.vn",
        domain: "astri.vn",
        description:
          "Research and technology application for agriculture: high-tech organic microbial fertilizers, organic essential oils, trade promotion and training.",
      },
      {
        name: "STI Institute",
        fullName: "Institute of Technology and Innovation Strategy",
        url: "https://sti.edu.vn",
        domain: "sti.edu.vn",
        description:
          "Research, strategic consulting and training for enterprises in the digital-transformation era; intangible-asset valuation.",
      },
      {
        name: "RITAD",
        fullName: "Research Institute for Transportation, Agriculture and Environment Development",
        url: "https://ritad.edu.vn",
        domain: "ritad.edu.vn",
        description:
          "A non-profit (founded 2013) for research and technology transfer: climate-adaptive farming, biodegradable materials and sustainable transportation.",
      },
      {
        name: "NITIA",
        fullName: "Nha Trang Institute of Technology Innovation and Development",
        url: "https://nitia.org",
        domain: "nitia.org",
        description:
          "High-tech research and applications in agriculture and biomedicine; training and connecting enterprises with scientists.",
      },
      {
        name: "VBEG",
        fullName: "Vietnam Biomedical Engineering Community",
        url: "https://vbeg.org",
        domain: "vbeg.org",
        description:
          "A community connecting biomedical engineers, researchers and lecturers in Vietnam.",
        role: "Administrator",
      },
    ],
    publicationsTitle: "Publications",
    publicationsIntro:
      "More than 60 publications organized into three thematic groups. The full list is at the bottom of the page.",
    visit: "Visit",
  },
  innovation: {
    title: "Innovation",
    intro:
      "A startup, community innovation platforms, and policy work supporting enterprise technology innovation.",
    startupTitle: "Startup",
    startup: {
      name: "Zinmed",
      fullName: "AI and Raman-spectroscopy skin-cancer screening",
      url: "https://zinmed.com",
      domain: "zinmed.com",
      description:
        "A non-invasive skin-cancer screening tool combining Raman spectroscopy and artificial intelligence. The ZinRaman-D1 device is under research, targeting ISO 13485 compliance.",
      role: "Co-founder & Chairman (since 2014)",
      highlights: [
        "Basal cell carcinoma (BCC)",
        "Squamous cell carcinoma (SCC)",
        "Melanoma",
        "Benign lesions",
      ],
      bridge:
        "Zinmed bridges the two areas of work: research results from BIRALAB are developed into a digital-health product for the public.",
    },
    platformsTitle: "Community platforms",
    platformsIntro:
      "Open platforms serving enterprises, scientists and investors.",
    platforms: [
      {
        name: "TechFair Vietnam",
        fullName: "Where Vietnamese technology meets the world",
        url: "https://techfair.vn",
        domain: "techfair.vn",
        description:
          "An innovation community platform connecting startups, enterprises and investors: AI matchmaking, a B2B deal room, an ecosystem directory and an annual flagship event.",
      },
      {
        name: "Đổi Mới Công Nghệ",
        fullName: "Technology-innovation community platform",
        url: "https://www.doimoicongnghe.com",
        domain: "doimoicongnghe.com",
        description:
          "Policy explainers, a map of support programmes, skills training and an expert network helping enterprises innovate with technology — free of charge.",
      },
      {
        name: "LIFVietnam",
        fullName: "R&D Commercialization Network",
        url: "https://lifvietnam.org",
        domain: "lifvietnam.org",
        description:
          "Connects scientists, enterprises, managers, intermediaries and banks to bring Vietnamese research to market. Member of the LIF Global network (Royal Academy of Engineering).",
        role: "Coordinator",
      },
    ],
    policyTitle: "Policy and technology-innovation funds",
    policy: [
      "More than ten years at the National Technology Innovation Fund (MOST), helping run grants, loans and interest-rate support for enterprises innovating with technology.",
      "Contributing to financial mechanisms that support enterprises, including the 2025 Law on Science, Technology and Innovation.",
      "Coordinating the Vietnam–Korea Knowledge Sharing Program (KSP) on technology-finance policy.",
    ],
    policyCta: "See career",
    communityTitle: "Community",
    community: [
      {
        name: "hochu.vn",
        fullName: "Chử Family of Vietnam",
        url: "https://hochu.vn",
        domain: "hochu.vn",
        description:
          "A digital hub connecting members of the Chử family: heritage, news, notable members and an online genealogy.",
      },
    ],
    disclaimer:
      "The projects and platforms on this page are personal and community activities of Dr. Chu Duc Hoang and do not represent the National Technology Innovation Fund or the Ministry of Science and Technology.",
    visit: "Visit",
  },
};

const hubs: Record<Locale, Hub> = { vi, en };

export function getHub(locale: Locale): Hub {
  return hubs[locale];
}
