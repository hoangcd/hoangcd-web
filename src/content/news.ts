import type { Locale } from "./types";

/**
 * News articles published on hoangcd.com.
 *
 * Editorial rules:
 * - Every article is written for this site (not copied from the press).
 * - Every article cites at least one original source (`sources`).
 * - Photos are Dr. Hoang's own or event photos from his archive; credit them.
 * Images live in /public/news/<slug>/.
 */

export type NewsCategory = "science" | "innovation" | "policy" | "event";

type L<T> = Record<Locale, T>;

export interface NewsSource {
  outlet: string;
  title: string;
  url: string;
  date?: string;
}

export interface NewsPhoto {
  src: string;
  caption: L<string>;
}

export interface NewsItem {
  slug: string;
  /** ISO date of the event / publication, e.g. "2026-07-29" */
  date: string;
  category: NewsCategory;
  location?: L<string>;
  title: L<string>;
  excerpt: L<string>;
  /** Article body, one string per paragraph. */
  body: L<string[]>;
  cover: NewsPhoto;
  gallery?: NewsPhoto[];
  photoCredit?: L<string>;
  sources: NewsSource[];
}

export const categoryLabels: L<Record<NewsCategory | "all", string>> = {
  vi: {
    all: "Tất cả",
    science: "Khoa học & Công nghệ",
    innovation: "Đổi mới sáng tạo",
    policy: "Chính sách",
    event: "Sự kiện",
  },
  en: {
    all: "All",
    science: "Science & Technology",
    innovation: "Innovation",
    policy: "Policy",
    event: "Events",
  },
};

export const newsUi: L<{
  sourcesTitle: string;
  sourcesNote: string;
  galleryTitle: string;
  related: string;
  photo: string;
  share: string;
  pressTitle: string;
  pressIntro: string;
  readMore: string;
  back: string;
}> = {
  vi: {
    sourcesTitle: "Nguồn tin gốc",
    sourcesNote: "Bài viết được biên soạn cho hoangcd.com dựa trên các nguồn sau:",
    galleryTitle: "Hình ảnh",
    related: "Tin liên quan",
    photo: "Ảnh",
    share: "Chia sẻ",
    pressTitle: "Báo chí viết về TS. Chử Đức Hoàng",
    pressIntro: "Bài báo, phỏng vấn và đưa tin trên báo chí, cổng thông tin chính thức (2020 – nay). Bấm để đọc bài gốc.",
    readMore: "Đọc tiếp",
    back: "← Tất cả tin tức",
  },
  en: {
    sourcesTitle: "Original sources",
    sourcesNote: "This article was written for hoangcd.com based on the following sources:",
    galleryTitle: "Photos",
    related: "Related news",
    photo: "Photo",
    share: "Share",
    pressTitle: "Press coverage of Dr. Chu Duc Hoang",
    pressIntro: "Articles, interviews and coverage in the press and on official portals (2020 – present). Click to read the original.",
    readMore: "Read more",
    back: "← All news",
  },
};

export const news: NewsItem[] = [
  {
    slug: "2025-11-20-vov-dien-dan-dnnn",
    date: "2025-11-20",
    category: "policy",
    location: { vi: "Hà Nội", en: "Hanoi" },
    title: {
      vi: "Đề xuất cơ chế thử nghiệm và nhóm doanh nghiệp nhà nước dẫn dắt công nghệ chiến lược",
      en: "Proposing a technology sandbox and a group of state enterprises to lead strategic technologies",
    },
    excerpt: {
      vi: "Tại diễn đàn \"Doanh nghiệp Nhà nước: Nâng cao năng lực cạnh tranh và vai trò dẫn dắt\" do Báo Điện tử VOV tổ chức, TS. Chử Đức Hoàng trình bày tham luận về đòn bẩy chính sách cho đổi mới công nghệ.",
      en: "At the VOV forum \"State-owned Enterprises: Enhancing Competitiveness and Leadership\", Dr. Chu Duc Hoang spoke on policy levers for technology innovation.",
    },
    body: {
      vi: [
        "Sáng 20/11/2025, tại Hà Nội, Báo Điện tử VOV tổ chức diễn đàn \"Doanh nghiệp Nhà nước: Nâng cao năng lực cạnh tranh và vai trò dẫn dắt\". Diễn đàn có sự tham dự của Tổng Giám đốc Đài Tiếng nói Việt Nam Đỗ Tiến Sỹ, đại diện Bộ Tài chính, các chuyên gia kinh tế và lãnh đạo nhiều tập đoàn, tổng công ty nhà nước.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), trình bày tham luận \"Đòn bẩy chính sách cho đổi mới công nghệ: Giải pháp nâng cao năng lực cạnh tranh của doanh nghiệp nhà nước\".",
        "Theo TS. Chử Đức Hoàng, mỗi năm Nhà nước dành khoảng 25.000 tỷ đồng cho các hình thức hỗ trợ đổi mới công nghệ như hỗ trợ lãi suất, tài trợ nghiên cứu và ưu đãi thuế. Để nguồn lực này phát huy hiệu quả với khối doanh nghiệp nhà nước, ông đề xuất áp dụng cơ chế thử nghiệm có kiểm soát (sandbox) trong 12–24 tháng, cho phép doanh nghiệp thử nghiệm công nghệ mới mà không bị quy trách nhiệm nếu thử nghiệm không thành công vì lý do khách quan.",
        "Ông cũng kiến nghị lựa chọn 10–15 doanh nghiệp nhà nước có vai trò chiến lược để tập trung làm chủ các công nghệ then chốt như trí tuệ nhân tạo, bán dẫn, 5G–6G, năng lượng sạch và công nghệ sinh học; đồng thời hoàn thiện cơ chế tự chủ tài chính theo Luật Khoa học, Công nghệ và Đổi mới sáng tạo năm 2025 và rút ngắn thời gian phê duyệt dự án đổi mới công nghệ từ 90 xuống 30 ngày.",
      ],
      en: [
        "On the morning of 20 November 2025 in Hanoi, VOV's online newspaper held the forum \"State-owned Enterprises: Enhancing Competitiveness and Leadership\", attended by Voice of Vietnam Director General Do Tien Sy, representatives of the Ministry of Finance, economists and leaders of major state-owned groups.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (Ministry of Science and Technology), presented a paper on policy levers for technology innovation as a way to raise the competitiveness of state-owned enterprises.",
        "He noted that the State spends about VND 25 trillion a year on support for technology innovation, through interest-rate support, research grants and tax incentives. To make this support work for state-owned enterprises, he proposed a 12–24-month controlled-testing (sandbox) mechanism that lets enterprises pilot new technologies without being held liable when a pilot fails for objective reasons.",
        "He also proposed selecting 10–15 strategic state-owned enterprises to master key technologies — artificial intelligence, semiconductors, 5G/6G, clean energy and biotechnology — completing financial-autonomy mechanisms under the 2025 Law on Science, Technology and Innovation, and cutting project approval times from 90 to 30 days.",
      ],
    },
    cover: {
      src: "/news/2025-11-20-vov-dien-dan-dnnn/1.jpg",
      caption: {
        vi: "TS. Chử Đức Hoàng trình bày tham luận tại diễn đàn.",
        en: "Dr. Chu Duc Hoang presenting at the forum.",
      },
    },
    gallery: [
      { src: "/news/2025-11-20-vov-dien-dan-dnnn/2.jpg", caption: { vi: "Phát biểu tại diễn đàn.", en: "Speaking at the forum." } },
      { src: "/news/2025-11-20-vov-dien-dan-dnnn/3.jpg", caption: { vi: "Toàn cảnh phiên tham luận.", en: "The presentation session." } },
      { src: "/news/2025-11-20-vov-dien-dan-dnnn/4.jpg", caption: { vi: "Phiên thảo luận cùng các chuyên gia.", en: "Panel discussion with experts." } },
    ],
    photoCredit: { vi: "Ban tổ chức (Báo Điện tử VOV)", en: "Organizers (VOV)" },
    sources: [
      {
        outlet: "VOV.vn",
        title: "Toàn cảnh Diễn đàn \"DNNN: Nâng cao năng lực cạnh tranh và vai trò dẫn dắt\"",
        url: "https://vov.vn/kinh-te/toan-canh-dien-dan-dnnn-nang-cao-nang-luc-canh-tranh-va-vai-tro-dan-dat-post1247492.vov",
        date: "20/11/2025",
      },
      {
        outlet: "VOV.vn",
        title: "Đề xuất trao cơ chế để DNNN làm chủ công nghệ chiến lược",
        url: "https://vov.vn/kinh-te/de-xuat-trao-co-che-de-dnnn-lam-chu-cong-nghe-chien-luoc-post1247879.vov",
        date: "21/11/2025",
      },
    ],
  },
  {
    slug: "2025-07-17-vov-chuyen-doi-so-khu-vuc-cong",
    date: "2025-07-17",
    category: "innovation",
    location: { vi: "Hà Nội", en: "Hanoi" },
    title: {
      vi: "Chuyển đổi số khu vực công: đánh giá bằng hiệu quả thực tế và số liệu định lượng",
      en: "Public-sector digital transformation should be judged on real results and hard data",
    },
    excerpt: {
      vi: "Phát biểu tại Diễn đàn \"Chuyển đổi số khu vực công – Tiền đề phát triển kinh tế xã hội\", TS. Chử Đức Hoàng nhấn mạnh việc chuyển từ tiền kiểm sang hậu kiểm và đánh giá độc lập kết quả đầu tư.",
      en: "At the forum \"Public-Sector Digital Transformation — A Foundation for Socio-Economic Development\", Dr. Chu Duc Hoang stressed the shift to post-checks and independent evaluation of results.",
    },
    body: {
      vi: [
        "Ngày 17/7/2025, tại Hà Nội, Báo Điện tử VOV tổ chức Diễn đàn \"Chuyển đổi số khu vực công – Tiền đề phát triển kinh tế xã hội\" với sự tham gia của đại diện Ngân hàng Nhà nước, Bộ Khoa học và Công nghệ, các viện nghiên cứu và chuyên gia. Phó Tổng Giám đốc Đài Tiếng nói Việt Nam Phạm Mạnh Hùng phát biểu khai mạc, nhấn mạnh chuyển đổi số là động lực quan trọng cho phát triển kinh tế – xã hội trong bối cảnh thể chế còn chưa đồng bộ.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, trình bày chủ đề \"Tầm nhìn tương lai của chuyển đổi số trong khu vực công\". Ông cho rằng, theo tinh thần Nghị quyết 57-NQ/TW, Việt Nam đang chuyển từ tiền kiểm sang hậu kiểm trong quản lý các chương trình, dự án.",
        "Theo ông, nguồn lực đầu tư lớn cho chuyển đổi số chỉ thực sự phát huy khi kết quả được đánh giá đúng — dựa trên hiệu quả thực tế và số liệu định lượng, do một tổ chức độc lập thực hiện. Ông cũng lưu ý rằng những nỗ lực chưa mang lại kết quả ngay vẫn là nền móng cho các bước tiến tiếp theo.",
      ],
      en: [
        "On 17 July 2025 in Hanoi, VOV's online newspaper held the forum \"Public-Sector Digital Transformation — A Foundation for Socio-Economic Development\", with representatives of the State Bank of Vietnam, the Ministry of Science and Technology, research institutes and experts. Voice of Vietnam Deputy Director General Pham Manh Hung opened the forum, calling digital transformation a key driver of development while institutions are still catching up.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, spoke on the future of digital transformation in the public sector. Under Resolution 57-NQ/TW, he said, Vietnam is moving from pre-approval checks to post-checks in managing programmes and projects.",
        "Large investments in digital transformation only pay off, he argued, when results are properly evaluated — on real-world effectiveness and quantitative data, by an independent body. Efforts that do not show immediate results still lay the foundation for later progress.",
      ],
    },
    cover: {
      src: "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/1.jpg",
      caption: {
        vi: "TS. Chử Đức Hoàng phát biểu tại Diễn đàn Chuyển đổi số khu vực công.",
        en: "Dr. Chu Duc Hoang speaking at the public-sector digital transformation forum.",
      },
    },
    gallery: [
      { src: "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/2.jpg", caption: { vi: "Các đại biểu chụp ảnh lưu niệm.", en: "Speakers and guests." } },
      { src: "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/3.jpg", caption: { vi: "Phiên thảo luận.", en: "Panel discussion." } },
      { src: "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/4.jpg", caption: { vi: "TS. Chử Đức Hoàng tại phiên thảo luận.", en: "Dr. Chu Duc Hoang on the panel." } },
    ],
    photoCredit: { vi: "Ban tổ chức (Báo Điện tử VOV)", en: "Organizers (VOV)" },
    sources: [
      {
        outlet: "VOV.vn",
        title: "Toàn cảnh Diễn đàn chuyển đổi số khu vực công - Tiền đề phát triển kinh tế xã hội",
        url: "https://vov.vn/xa-hoi/toan-canh-dien-dan-chuyen-doi-so-khu-vuc-cong-tien-de-phat-trien-kinh-te-xa-hoi-post1215387.vov",
        date: "17/07/2025",
      },
      {
        outlet: "Tạp chí Doanh Nghiệp (qua vietnam.vn)",
        title: "Chuyển đổi số chỉ đột phá khi được tích hợp vào cải cách thể chế",
        url: "https://www.vietnam.vn/chuyen-doi-so-chi-dot-pha-khi-duoc-tich-hop-vao-cai-cach-the-che",
        date: "17/07/2025",
      },
    ],
  },
  {
    slug: "2025-06-27-quoc-hoi-thong-qua-luat-khcn-dmst",
    date: "2025-06-27",
    category: "policy",
    location: { vi: "Nhà Quốc hội, Hà Nội", en: "National Assembly House, Hanoi" },
    title: {
      vi: "Quốc hội thông qua Luật Khoa học, công nghệ và đổi mới sáng tạo",
      en: "National Assembly passes the Law on Science, Technology and Innovation",
    },
    excerpt: {
      vi: "Luật số 93/2025/QH15 được thông qua với 435/438 đại biểu có mặt tán thành, thể chế hóa cơ chế chấp nhận rủi ro trong nghiên cứu và mở rộng khoán chi đến sản phẩm cuối cùng.",
      en: "Law No. 93/2025/QH15 passed with 435 of 438 deputies present in favour, establishing risk acceptance in research and output-based lump-sum funding.",
    },
    body: {
      vi: [
        "Sáng 27/6/2025, tại Kỳ họp thứ Chín, Quốc hội khóa XV đã biểu quyết thông qua Luật Khoa học, công nghệ và đổi mới sáng tạo (Luật số 93/2025/QH15) với 435/438 đại biểu có mặt tán thành. Luật gồm 73 điều và có hiệu lực từ ngày 1/10/2025.",
        "Luật thể chế hóa nhiều chính sách mới, trong đó có cơ chế chấp nhận rủi ro trong nghiên cứu: tổ chức, cá nhân được miễn trách nhiệm hành chính, dân sự, hình sự và không phải hoàn trả kinh phí khi rủi ro xảy ra do nguyên nhân khách quan. Luật cũng khuyến khích nghiên cứu mạo hiểm thông qua cơ chế thử nghiệm có kiểm soát, chia sẻ rủi ro và mở rộng cơ chế khoán chi đến sản phẩm cuối cùng.",
        "Trước đó, trao đổi với Tạp chí Doanh nghiệp và Hội nhập về dự thảo luật, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, đánh giá luật sửa đổi sẽ tháo gỡ nhiều rào cản cho doanh nghiệp đổi mới sáng tạo nhờ chuyển từ tiền kiểm sang hậu kiểm, đồng thời bổ sung các ưu đãi về thuế thu nhập cá nhân cho hoạt động đổi mới sáng tạo và miễn tiền thuê đất cho cơ sở nghiên cứu – phát triển.",
      ],
      en: [
        "On the morning of 27 June 2025, at its Ninth Session, the 15th National Assembly passed the Law on Science, Technology and Innovation (Law No. 93/2025/QH15), with 435 of 438 deputies present voting in favour. The law has 73 articles and took effect on 1 October 2025.",
        "It introduces several new policies, including acceptance of risk in research: organizations and individuals are exempt from administrative, civil and criminal liability, and need not repay funding, when risks arise from objective causes. The law also encourages venture research through controlled testing and risk sharing, and extends lump-sum funding up to the final product.",
        "Earlier, speaking to Doanh nghiệp và Hội nhập magazine about the draft, Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, said the revised law would remove many barriers for innovative enterprises by moving from pre-checks to post-checks, adding personal-income-tax incentives for innovation work and land-rent exemptions for R&D facilities.",
      ],
    },
    cover: {
      src: "/news/2025-06-27-quoc-hoi-thong-qua-luat-khcn-dmst/1.jpg",
      caption: {
        vi: "Ảnh lưu niệm tại Hội trường Diên Hồng, Kỳ họp thứ Chín, Quốc hội khóa XV.",
        en: "Commemorative photo in Dien Hong Hall, Ninth Session of the 15th National Assembly.",
      },
    },
    gallery: [
      { src: "/news/2025-06-27-quoc-hoi-thong-qua-luat-khcn-dmst/2.jpg", caption: { vi: "Hội trường Diên Hồng, Nhà Quốc hội.", en: "Dien Hong Hall, National Assembly House." } },
    ],
    photoCredit: { vi: "Tư liệu TS. Chử Đức Hoàng", en: "Dr. Chu Duc Hoang's archive" },
    sources: [
      {
        outlet: "VnExpress",
        title: "Quốc hội thông qua Luật Khoa học, công nghệ và đổi mới sáng tạo",
        url: "https://vnexpress.net/quoc-hoi-thong-qua-luat-khoa-hoc-cong-nghe-va-doi-moi-sang-tao-4906848.html",
        date: "27/06/2025",
      },
      {
        outlet: "Cổng thông tin điện tử Chính phủ",
        title: "Luật Khoa học, công nghệ và đổi mới sáng tạo số 93/2025/QH15",
        url: "https://vanban.chinhphu.vn/?pageid=27160&docid=214603",
      },
      {
        outlet: "Doanh nghiệp và Hội nhập",
        title: "Sửa đổi Luật Khoa học, Công nghệ và Đổi mới sáng tạo: Gỡ \"rào cản\" cho doanh nghiệp",
        url: "https://doanhnghiephoinhap.vn/sua-doi-luat-khoa-hoc-cong-nghe-va-doi-moi-sang-tao-go-rao-can-cho-doanh-nghiep-105586.html",
        date: "30/05/2025",
      },
    ],
  },
  {
    slug: "2024-04-17-vov-kinh-te-xanh",
    date: "2024-04-17",
    category: "innovation",
    location: { vi: "Hà Nội", en: "Hanoi" },
    title: {
      vi: "Đổi mới công nghệ – then chốt trong phát triển kinh tế xanh",
      en: "Technology innovation is key to developing the green economy",
    },
    excerpt: {
      vi: "Tại Diễn đàn Doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh, TS. Chử Đức Hoàng phân tích mối liên hệ giữa đổi mới công nghệ, kinh tế số và kinh tế xanh, nhấn mạnh vai trò của doanh nghiệp nhỏ và vừa.",
      en: "At the Vietnam Business Forum on accelerating the green economy, Dr. Chu Duc Hoang linked technology innovation, the digital economy and the green economy, highlighting the role of SMEs.",
    },
    body: {
      vi: [
        "Sáng 17/4/2024, tại Hà Nội, Báo Điện tử VOV tổ chức \"Diễn đàn Doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh\" với sự tham dự của Tổng Giám đốc Đài Tiếng nói Việt Nam Đỗ Tiến Sỹ, Đại biểu Quốc hội Tạ Thị Yên, đại diện Bộ Thông tin và Truyền thông, các viện nghiên cứu và doanh nghiệp.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, trình bày tham luận \"Đổi mới công nghệ: Then chốt quan trọng trong phát triển kinh tế xanh\". Theo ông, đổi mới công nghệ là yếu tố đầu vào thúc đẩy kinh tế số, và kinh tế số tạo nền tảng cho kinh tế xanh.",
        "Ông nhận định hoạt động đổi mới công nghệ ở Việt Nam hiện chủ yếu dừng ở mức ứng dụng; năng lực tạo ra công nghệ lõi, công nghệ nguồn còn hạn chế. Trong bối cảnh hơn 97% doanh nghiệp Việt Nam có quy mô nhỏ và siêu nhỏ, doanh nghiệp nhỏ và vừa giữ vai trò trung tâm trong chuyển đổi số và chuyển đổi xanh, và cần được hỗ trợ phù hợp để đổi mới công nghệ.",
      ],
      en: [
        "On the morning of 17 April 2024 in Hanoi, VOV's online newspaper held the \"Vietnam Business Forum: Accelerating the Green Economy\", attended by Voice of Vietnam Director General Do Tien Sy, National Assembly deputy Ta Thi Yen, representatives of the Ministry of Information and Communications, research institutes and enterprises.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, presented \"Technology innovation: a key to developing the green economy\". Technology innovation, he said, is an input that drives the digital economy, which in turn underpins the green economy.",
        "He observed that technology innovation in Vietnam is still mostly about applying existing technology, with limited capacity to create core and source technologies. With more than 97% of Vietnamese enterprises being small or micro, SMEs are central to the digital and green transitions and need suitable support to innovate.",
      ],
    },
    cover: {
      src: "/news/2024-04-17-vov-kinh-te-xanh/1.jpg",
      caption: {
        vi: "TS. Chử Đức Hoàng phát biểu tại Diễn đàn Doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh.",
        en: "Dr. Chu Duc Hoang speaking at the Vietnam Business Forum on the green economy.",
      },
    },
    gallery: [
      { src: "/news/2024-04-17-vov-kinh-te-xanh/2.jpg", caption: { vi: "Phiên thảo luận tại diễn đàn.", en: "Discussion session at the forum." } },
    ],
    photoCredit: { vi: "Ban tổ chức (Báo Điện tử VOV)", en: "Organizers (VOV)" },
    sources: [
      {
        outlet: "VOV.vn",
        title: "Toàn cảnh Diễn đàn Doanh nghiệp Việt Nam đẩy mạnh phát triển kinh tế xanh",
        url: "https://vov.vn/kinh-te/toan-canh-dien-dan-doanh-nghiep-viet-nam-day-manh-phat-trien-kinh-te-xanh-post1089697.vov",
        date: "17/04/2024",
      },
      {
        outlet: "VOV.vn",
        title: "Đổi mới công nghệ có vai trò quan trọng để phát triển kinh tế xanh",
        url: "https://vov.vn/kinh-te/doi-moi-cong-nghe-co-vai-tro-quan-trong-de-phat-trien-kinh-te-xanh-post1092050.vov",
        date: "02/05/2024",
      },
    ],
  },
  {
    slug: "2023-10-12-vov-trien-vong-nganh-nang-luong",
    date: "2023-10-12",
    category: "science",
    location: { vi: "Hà Nội", en: "Hanoi" },
    title: {
      vi: "Đổi mới công nghệ trong chuyển dịch từ năng lượng truyền thống sang năng lượng sạch",
      en: "Technology innovation in the shift from traditional to clean energy",
    },
    excerpt: {
      vi: "Tại Diễn đàn \"Triển vọng ngành năng lượng Việt Nam\", TS. Chử Đức Hoàng cho rằng bảo đảm an ninh năng lượng là mục tiêu cốt lõi, trong đó chuyển dịch sang năng lượng sạch là ưu tiên hàng đầu.",
      en: "At the forum \"Prospects for Vietnam's Energy Sector\", Dr. Chu Duc Hoang said energy security is the core goal, with the shift to clean energy the top priority.",
    },
    body: {
      vi: [
        "Sáng 12/10/2023, tại Hà Nội, Báo Điện tử VOV phối hợp với Công ty CP Tiếp thị và Kinh doanh Quốc tế BGC tổ chức Diễn đàn \"Triển vọng ngành năng lượng Việt Nam\". Tham dự có Tổng Giám đốc Đài Tiếng nói Việt Nam Đỗ Tiến Sỹ, Đại biểu Quốc hội Vương Quốc Thăng, đại diện Bộ Công Thương, Tổng Công ty Điện lực miền Bắc, Viện Dầu khí Việt Nam cùng nhiều chuyên gia.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, trình bày tham luận về vai trò của đổi mới công nghệ trong quá trình chuyển từ năng lượng truyền thống sang năng lượng sạch. Ông nhận định bảo đảm an ninh năng lượng là mục tiêu cốt lõi, trong đó chuyển dịch sang năng lượng sạch được ưu tiên hàng đầu.",
        "Theo ông, trước những hạn chế của nhiên liệu truyền thống về trữ lượng và tác động môi trường, phát triển năng lượng tái tạo là giải pháp thiết yếu; đồng thời, đổi mới công nghệ là điều kiện để tối ưu việc sử dụng năng lượng và bảo đảm phát triển bền vững.",
      ],
      en: [
        "On the morning of 12 October 2023 in Hanoi, VOV's online newspaper and BGC International Marketing and Trading JSC held the forum \"Prospects for Vietnam's Energy Sector\", attended by Voice of Vietnam Director General Do Tien Sy, National Assembly deputy Vuong Quoc Thang, representatives of the Ministry of Industry and Trade, Northern Power Corporation, the Vietnam Petroleum Institute and experts.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, presented on the role of technology innovation in moving from traditional to clean energy. Energy security, he said, is the core goal, and the shift to clean energy is the top priority.",
        "Given the limited reserves and environmental impact of traditional fuels, developing renewable energy is essential, he argued — and technology innovation is what makes it possible to optimize energy use and keep development sustainable.",
      ],
    },
    cover: {
      src: "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/1.jpg",
      caption: {
        vi: "TS. Chử Đức Hoàng trình bày tham luận tại Diễn đàn Triển vọng ngành năng lượng Việt Nam.",
        en: "Dr. Chu Duc Hoang presenting at the Prospects for Vietnam's Energy Sector forum.",
      },
    },
    gallery: [
      { src: "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/2.jpg", caption: { vi: "Toàn cảnh diễn đàn.", en: "The forum hall." } },
      { src: "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/3.jpg", caption: { vi: "Phát biểu tại diễn đàn.", en: "Speaking at the forum." } },
      { src: "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/4.jpg", caption: { vi: "Phiên thảo luận.", en: "Discussion session." } },
    ],
    photoCredit: { vi: "Ban tổ chức (Báo Điện tử VOV)", en: "Organizers (VOV)" },
    sources: [
      {
        outlet: "VOV.vn",
        title: "Toàn cảnh Diễn đàn \"Triển vọng ngành năng lượng Việt Nam\"",
        url: "https://vov.vn/kinh-te/toan-canh-dien-dan-trien-vong-nganh-nang-luong-viet-nam-post1052057.vov",
        date: "12/10/2023",
      },
      {
        outlet: "Thời báo Tài chính Việt Nam",
        title: "Đảm bảo an ninh năng lượng, ưu tiên chuyển dịch sang năng lượng sạch",
        url: "https://thoibaotaichinhvietnam.vn/dam-bao-an-ninh-nang-luong-uu-tien-chuyen-dich-sang-nang-luong-sach-137516.html",
        date: "13/10/2023",
      },
    ],
  },
];

export function getNews(): NewsItem[] {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

export function formatNewsDate(date: string, locale: Locale): string {
  return new Date(`${date}T00:00:00+07:00`).toLocaleDateString(
    locale === "vi" ? "vi-VN" : "en-GB",
    { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Ho_Chi_Minh" }
  );
}
