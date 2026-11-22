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
  /** "At a glance" bullet points shown under the lead. */
  keyPoints?: L<string[]>;
  /** His role at the event, e.g. "Diễn giả", "Điều phối". */
  role?: L<string>;
  /** Article body, one string per paragraph. */
  body: L<string[]>;
  /** Own photo; omit to use the branded typographic cover. */
  cover?: NewsPhoto;
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
  keyPoints: string;
  interview: string;
  role: string;
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
    pressIntro: "Bài báo, phỏng vấn và đưa tin trên báo chí, cổng thông tin chính thức (2014 – nay), đã được kiểm tra có nêu tên TS. Chử Đức Hoàng. Bấm để đọc bài gốc.",
    readMore: "Đọc tiếp",
    keyPoints: "Điểm nhấn",
    interview: "Phỏng vấn",
    role: "Vai trò",
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
    pressIntro: "Articles, interviews and coverage in the press and on official portals (2014 – present), each checked to name Dr. Chu Duc Hoang. Click to read the original (in Vietnamese).",
    readMore: "Read more",
    keyPoints: "Key points",
    interview: "Interview",
    role: "Role",
    back: "← All news",
  },
};

export const news: NewsItem[] = [
  {
    "slug": "2026-11-19-giam-khao-khoi-nghiep-dmst-bac-ninh-2026",
    "date": "2026-11-19",
    "category": "event",
    "role": {
      "vi": "Thành viên Hội đồng Giám khảo",
      "en": "Jury member"
    },
    "location": {
      "vi": "Bắc Ninh",
      "en": "Bac Ninh"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng là thành viên Hội đồng Giám khảo vòng Chung kết Cuộc thi Khởi nghiệp ĐMST thành phố Bắc Ninh 2026",
      "en": "Dr. Chu Duc Hoang named to the final-round jury of the Bac Ninh City Innovative Startup Competition 2026"
    },
    "excerpt": {
      "vi": "TS. Chử Đức Hoàng được cử làm thành viên Hội đồng Giám khảo vòng Chung kết Cuộc thi Khởi nghiệp đổi mới sáng tạo thành phố Bắc Ninh năm 2026, sau khi từng tham gia chấm thi vòng chung kết của cuộc thi năm 2025.",
      "en": "Dr. Chu Duc Hoang has been appointed a member of the final-round jury of the Bac Ninh City Innovative Startup Competition 2026, having also judged the final round of the 2025 edition."
    },
    "keyPoints": {
      "vi": [
        "Là thành viên Hội đồng Giám khảo 7 người vòng Chung kết cuộc thi năm 2026, theo Quyết định số 3112/QĐ-BTC ngày 19/11/2026.",
        "Hội đồng có nhiệm vụ đánh giá, chấm điểm dự án theo thể lệ và quy chế chấm điểm.",
        "Tại cuộc thi năm 2025, ông nhận xét chất lượng dự án khá tốt, hơn một nửa trong 56 dự án chung kết đạt từ 80 điểm.",
        "Ông lưu ý một số dự án còn thiếu tính khả thi, minh chứng kỹ thuật và lộ trình triển khai rõ ràng."
      ],
      "en": [
        "Member of the seven-person final-round jury for the 2026 competition under Decision No. 3112/QD-BTC of 19 November 2026.",
        "The jury assesses and scores projects in line with the competition rules and scoring regulations.",
        "At the 2025 edition, he rated the entries fairly strong, with more than half of the 56 finalists scoring 80 points or more.",
        "He noted that some projects lacked feasibility, technical evidence and a clear implementation roadmap."
      ]
    },
    "body": {
      "vi": [
        "Ngày 19/11/2026, Ban Tổ chức Cuộc thi Khởi nghiệp đổi mới sáng tạo thành phố Bắc Ninh năm 2026 (Techfest Bac Ninh 2026) ban hành Quyết định số 3112/QĐ-BTC thành lập Hội đồng Giám khảo vòng Chung kết. Hội đồng gồm 7 thành viên, do ông Nguyễn Phúc Thương, Phó Giám đốc Sở Khoa học và Công nghệ, làm Chủ tịch. TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, là một trong các thành viên Hội đồng. Hội đồng có nhiệm vụ đánh giá, chấm điểm các dự án dự thi vòng chung kết theo thể lệ và quy chế chấm điểm; theo kế hoạch, vòng chung kết dự kiến diễn ra ngày 25–26/11/2026, sau giai đoạn huấn luyện chuyên sâu cho các đội thi.",
        "Đây không phải lần đầu ông tham gia chấm thi tại cuộc thi này. Với vai trò giám khảo Cuộc thi Khởi nghiệp đổi mới sáng tạo tỉnh Bắc Ninh năm 2025, ông đánh giá chất lượng các ý tưởng, dự án khá tốt: trong 56 ý tưởng, dự án vào vòng chung kết, hơn một nửa đạt từ 80 điểm trở lên, cho thấy sự đầu tư nghiêm túc của các tác giả. Tuy nhiên, ông cũng chỉ ra một số dự án còn thiếu tính khả thi, thiếu minh chứng kỹ thuật, thực tế hoặc mô tả lộ trình triển khai còn mơ hồ, cần được cơ quan quản lý và chuyên gia hỗ trợ hoàn thiện.",
        "Việc tham gia hội đồng giám khảo tại các cuộc thi khởi nghiệp địa phương là một hình thức đóng góp chuyên môn cho hệ sinh thái khởi nghiệp đổi mới sáng tạo, phù hợp với tinh thần lan tỏa văn hóa đổi mới sáng tạo và kết nối chuyên gia với cộng đồng khởi nghiệp."
      ],
      "en": [
        "On 19 November 2026, the Organising Committee of the Bac Ninh City Innovative Startup Competition 2026 (Techfest Bac Ninh 2026) issued Decision No. 3112/QD-BTC establishing the final-round jury. The seven-member jury is chaired by Mr. Nguyen Phuc Thuong, Deputy Director of the Department of Science and Technology. Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, is one of its members. The jury's task is to assess and score the final-round projects under the competition rules and scoring regulations; the final round is scheduled for 25–26 November 2026, following an intensive coaching phase for the teams.",
        "This is not his first time judging the competition. As a judge of the Bac Ninh Province Innovative Startup Competition 2025, he rated the quality of the entries as fairly strong: of the 56 ideas and projects in the final, more than half scored 80 points or more, showing serious effort by the teams. He also pointed out that some projects lacked feasibility, technical or practical evidence, or had a vague implementation roadmap, and would benefit from support from authorities and experts.",
        "Serving on juries of local startup competitions is one way he contributes professional expertise to the innovative startup ecosystem, in keeping with efforts to spread an innovation culture and connect experts with the startup community."
      ]
    },
    "sources": [
      {
        "outlet": "Cổng Chuyển đổi số tỉnh Bắc Ninh",
        "title": "Thành lập Hội đồng Giám khảo vòng Chung kết Cuộc thi Khởi nghiệp đổi mới sáng tạo thành phố Bắc Ninh năm 2026",
        "url": "https://chuyendoiso.bacninh.gov.vn/news?p_p_id=newsdetail_WAR_bacninhportlet&p_p_lifecycle=0&p_p_state=pop_up&p_p_mode=view&_newsdetail_WAR_bacninhportlet_urlTitle=thanh-lap-hoi-ong-giam-khao-vong-chung-ket-cuoc-thi-khoi-nghiep-oi-moi-sang-tao-thanh-pho-bac-ninh-nam-2026-130153668&_newsdetail_WAR_bacninhportlet_languageId=vi_VN&_newsdetail_WAR_bacninhportlet_viewMode=print&_newsdetail_WAR_bacninhportlet_print=true",
        "date": "19/11/2026"
      },
      {
        "outlet": "Báo Bắc Ninh",
        "title": "Bắc Ninh: Khởi nghiệp từ ứng dụng AI",
        "url": "https://baobacninhtv.vn/bac-ninh-khoi-nghiep-tu-ung-dung-ai-postid431801.bbg",
        "date": "25/11/2025"
      }
    ]
  },
  {
    "slug": "2026-10-13-dien-dan-van-hoa-doanh-nghiep-2026",
    "date": "2026-10-13",
    "category": "innovation",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Đổi mới sáng tạo phải trở thành văn hóa sống trong hoạt động hằng ngày của doanh nghiệp",
      "en": "Dr. Chu Duc Hoang: Innovation must become a living culture in companies' daily operations"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn Văn hóa doanh nghiệp Việt Nam 2026, TS. Chử Đức Hoàng đề xuất khung năm thành tố của văn hóa đổi mới và nhấn mạnh đổi mới có trách nhiệm trong kỷ nguyên trí tuệ nhân tạo.",
      "en": "At the Vietnam Corporate Culture Forum 2026, Dr. Chu Duc Hoang proposed a five-element framework for innovation culture and stressed responsible innovation in the age of artificial intelligence."
    },
    "keyPoints": {
      "vi": [
        "Phép thử của văn hóa sáng tạo là cách doanh nghiệp ứng xử với đề xuất khác thông lệ và với thử nghiệm chưa thành công.",
        "Khung năm thành tố: cam kết lãnh đạo; học hỏi và đề xuất của con người; quy trình quản trị; thử nghiệm có trách nhiệm; kết nối mở.",
        "Trước khi đưa công cụ AI vào sử dụng, cần làm rõ đào tạo, kiểm tra kết quả, phạm vi dữ liệu và trách nhiệm khi sai sót.",
        "Chính sách không thay doanh nghiệp tạo dựng văn hóa, nhưng có thể giảm trở ngại cho bước đi đầu tiên."
      ],
      "en": [
        "The test of an innovation culture is how a company treats unconventional proposals and unsuccessful experiments.",
        "Five elements: leadership commitment; people's learning and proposals; management processes; responsible experimentation; open partnerships.",
        "Before deploying an AI tool, firms should be clear on training, checking results, permitted data and accountability for errors.",
        "Policy cannot build culture for companies, but it can lower the barriers to the first step."
      ]
    },
    "body": {
      "vi": [
        "Ngày 13/10/2026, tại Hà Nội, Báo Văn hóa phối hợp với Hiệp hội Doanh nghiệp nhỏ và vừa thành phố Hà Nội (HANOISME) tổ chức Diễn đàn Văn hóa doanh nghiệp Việt Nam 2026 với chủ đề “Văn hóa doanh nghiệp – Nguồn lực nội sinh cho phát triển bền vững”, dưới sự chỉ đạo của Bộ Văn hóa, Thể thao và Du lịch. Diễn đàn có sự tham gia của nhiều chuyên gia, nhà quản lý và đại diện cộng đồng doanh nghiệp.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, trình bày tham luận tại phiên 2 “Xây dựng văn hóa doanh nghiệp trong kỷ nguyên mới và chuyển đổi số”. Theo ông, phép thử của văn hóa sáng tạo nằm ở cách tổ chức ứng xử với một đề xuất khác thông lệ: người lao động có được lắng nghe, và thử nghiệm chưa thành công được phân tích để học hỏi hay chỉ để tìm người chịu lỗi.",
        "Ông đề xuất nhìn văn hóa đổi mới qua năm thành tố: cam kết của lãnh đạo; khả năng học hỏi và đề xuất của con người; quy trình quản trị; thử nghiệm có trách nhiệm; kết nối mở với đối tác – và các thành tố này phải hiện diện trong công việc hằng ngày. Trong kỷ nguyên AI, trước khi đưa công cụ mới vào sử dụng, doanh nghiệp cần làm rõ ai được đào tạo, ai kiểm tra kết quả, dữ liệu nào được phép dùng và ai chịu trách nhiệm khi có sai sót; đổi mới có trách nhiệm phải bảo vệ khách hàng, tôn trọng người lao động và “không đánh đổi niềm tin lấy tốc độ”. Ông cũng nêu năm nhóm hành động để đổi mới thành thói quen: đo được, làm thử, có tiền, nối mạng và lan tỏa, đồng thời cho rằng chính sách hỗ trợ không thay doanh nghiệp tạo dựng văn hóa nhưng có thể giảm trở ngại cho bước đi đầu tiên.",
        "Ông kết nối mục tiêu của Nghị quyết 57-NQ/TW về tỷ lệ doanh nghiệp có hoạt động đổi mới sáng tạo đạt trên 40% vào năm 2030 với yêu cầu của Nghị quyết 80-NQ/TW về văn hóa như nguồn lực nội sinh. Tham luận phản ánh góc nhìn của một chuyên gia về đổi mới công nghệ và hệ sinh thái đổi mới sáng tạo, gắn công nghệ với con người, quản trị và tinh thần lan tỏa văn hóa đổi mới sáng tạo."
      ],
      "en": [
        "On 13 October 2026 in Hanoi, Văn hóa newspaper and the Hanoi Association of Small and Medium Enterprises (HANOISME) held the Vietnam Corporate Culture Forum 2026 under the theme “Corporate Culture – An Internal Resource for Sustainable Development”, under the direction of the Ministry of Culture, Sports and Tourism. The forum gathered experts, managers and representatives of the business community.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, Ministry of Science and Technology, spoke in the second session, “Building corporate culture in the new era and digital transformation”. In his view, the test of an innovation culture is how an organisation responds to an unconventional proposal: whether employees are heard, and whether a failed experiment is analysed to learn from it or used to find someone to blame.",
        "He proposed viewing innovation culture through five elements – leadership commitment; people's capacity to learn and make proposals; management processes; responsible experimentation; and open partnerships – which must be present in everyday work. In the AI era, before introducing a new tool, companies should clarify who is trained, who checks the results, which data may be used and who is accountable when things go wrong; responsible innovation must protect customers, respect workers and not trade trust for speed. He also set out five groups of action to make innovation a habit – measure, experiment, fund, network and spread – and noted that support policies cannot build culture on companies' behalf but can lower the barriers to the first step.",
        "He linked the Resolution 57-NQ/TW target of more than 40% of enterprises engaging in innovation by 2030 with Resolution 80-NQ/TW's emphasis on culture as an internal resource. The presentation reflects the perspective of an expert in technology innovation and innovation ecosystems, connecting technology with people, governance and the spread of an innovation culture."
      ]
    },
    "sources": [
      {
        "outlet": "Báo Văn hóa",
        "title": "Kiến tạo sức mạnh doanh nghiệp bằng văn hóa",
        "url": "http://baovanhoa.vn/van-hoa/kien-tao-suc-manh-doanh-nghiep-bang-van-hoa-274165.html",
        "date": "13/10/2026"
      },
      {
        "outlet": "Báo Nhân Dân",
        "title": "Văn hóa doanh nghiệp góp phần tạo dựng bản sắc, năng lực cạnh tranh trong bối cảnh mới",
        "url": "https://nhandan.vn/van-hoa-doanh-nghiep-gop-phan-tao-dung-ban-sac-nang-luc-canh-tranh-trong-boi-canh-moi-post994862.html",
        "date": "13/10/2026"
      },
      {
        "outlet": "VietnamPlus",
        "title": "Xây dựng văn hóa doanh nghiệp thành nguồn lực nội sinh cho phát triển bền vững",
        "url": "https://www.vietnamplus.vn/xay-dung-van-hoa-doanh-nghiep-thanh-nguon-luc-noi-sinh-cho-phat-trien-ben-vung-post1141722.vnp",
        "date": "13/10/2026"
      },
      {
        "outlet": "Thời báo Ngân hàng",
        "title": "Chính sách mở đường, con người quyết định sức bật đổi mới sáng tạo",
        "url": "https://thoibaonganhang.vn/chinh-sach-mo-duong-con-nguoi-quyet-dinh-suc-bat-doi-moi-sang-tao-190443.html",
        "date": "10/11/2026"
      }
    ]
  },
  {
    "slug": "2026-09-26-natif-vst-nhiem-vu-ung-dung-ai",
    "date": "2026-09-26",
    "category": "policy",
    "role": {
      "vi": "Đại diện NATIF, phát biểu khai mạc và kết luận",
      "en": "NATIF representative, opening and closing remarks"
    },
    "location": {
      "vi": "Bộ Khoa học và Công nghệ, Hà Nội",
      "en": "Ministry of Science and Technology, Hanoi"
    },
    "title": {
      "vi": "NATIF làm việc với Hiệp hội Doanh nghiệp KH&CN Việt Nam về đề xuất nhiệm vụ đổi mới công nghệ ứng dụng AI",
      "en": "NATIF holds working session with the Vietnam Association of S&T Enterprises on AI-application technology innovation proposals"
    },
    "excerpt": {
      "vi": "Tại buổi làm việc ngày 26/9/2026, TS. Chử Đức Hoàng giới thiệu cơ sở pháp lý và cách thức triển khai chương trình tài trợ nhiệm vụ đổi mới công nghệ ứng dụng AI năm 2026 của Quỹ Đổi mới công nghệ quốc gia.",
      "en": "At a working session on 26 September 2026, Dr. Chu Duc Hoang presented the legal basis and implementation approach of the National Technology Innovation Fund's 2026 programme for AI-application technology innovation tasks."
    },
    "keyPoints": {
      "vi": [
        "Chương trình được triển khai trên khung pháp lý của Luật 93/2025/QH15 và các Nghị định 265, 267, 268/2025/NĐ-CP, 77/2026/NĐ-CP.",
        "Năm 2026, Quỹ dự kiến lựa chọn khoảng 15 nhiệm vụ; hồ sơ được đánh giá, lựa chọn theo quy định.",
        "Kinh phí gắn với các mốc kết quả đo lường được, từ làm rõ bài toán, phát triển mô hình đến vận hành thực tế.",
        "Đề nghị Hiệp hội lập tổ tư vấn chuyên trách hỗ trợ doanh nghiệp thành viên làm rõ bài toán AI."
      ],
      "en": [
        "The programme rests on Law 93/2025/QH15 and Decrees 265, 267 and 268/2025/ND-CP and 77/2026/ND-CP.",
        "In 2026 the Fund plans to select about 15 tasks; proposals are assessed and selected under the applicable rules.",
        "Funding is tied to measurable milestones, from defining the problem and developing the model to real-world operation.",
        "Proposed that the Association set up a dedicated advisory team to help member firms define their AI problems."
      ]
    },
    "body": {
      "vi": [
        "Sáng 26/9/2026, tại Bộ Khoa học và Công nghệ, Quỹ Đổi mới công nghệ quốc gia (NATIF) tổ chức buổi làm việc với Hiệp hội Doanh nghiệp Khoa học và Công nghệ Việt Nam (VST) về các đề xuất nhiệm vụ đổi mới công nghệ ứng dụng trí tuệ nhân tạo (AI). Đại diện Hiệp hội cho biết đã nhận được 26 đề xuất từ doanh nghiệp thành viên ngay sau khi được thông tin về chương trình.",
        "Phát biểu khai mạc, TS. Chử Đức Hoàng, Chánh Văn phòng NATIF, Trưởng phòng Tài trợ và Đặt hàng của Quỹ, giới thiệu chương trình tài trợ ứng dụng AI là hoạt động của Quỹ được triển khai trên khung pháp lý mới: Luật Khoa học, công nghệ và đổi mới sáng tạo (Luật số 93/2025/QH15), các Nghị định 265/2025/NĐ-CP, 267/2025/NĐ-CP, 268/2025/NĐ-CP và Nghị định 77/2026/NĐ-CP quy định chức năng, nhiệm vụ của Quỹ.",
        "Theo nội dung được trình bày, năm 2026 Quỹ dự kiến lựa chọn và ký hợp đồng khoảng 15 nhiệm vụ; mức hỗ trợ từ ngân sách nhà nước tối đa 3 tỷ đồng mỗi nhiệm vụ và không quá 50% tổng kinh phí, doanh nghiệp đối ứng tối thiểu 50%, thời gian thực hiện không quá 12 tháng. Ông giải thích cơ chế thanh toán theo giai đoạn, gắn từng phần kinh phí với các mốc kết quả: làm rõ bài toán và chuẩn bị dữ liệu, phát triển thành công mô hình AI, rồi đưa vào vận hành thực tế và đo lường được hiệu quả. Kết luận buổi làm việc, ông cho biết Quỹ sẽ hỗ trợ doanh nghiệp làm rõ bài toán AI, tiếp cận phương pháp đổi mới sáng tạo bài bản và kết nối với chuyên gia phù hợp; đồng thời đề nghị Hiệp hội lập tổ tư vấn chuyên trách để hướng dẫn doanh nghiệp thành viên trên cả nước.",
        "Ngày 30/9/2026, ông tiếp tục phát biểu tại hội thảo kêu gọi đề xuất nhiệm vụ ứng dụng AI do Bộ Khoa học và Công nghệ tổ chức tại TP. Hồ Chí Minh, nơi Quỹ giới thiệu kế hoạch tài trợ và Chương trình đồng tài trợ NATIF – NEDO. Cách thiết kế giải ngân theo kết quả đầu ra phù hợp với định hướng quản lý theo kết quả và lấy doanh nghiệp làm trung tâm của Luật năm 2025; việc lựa chọn nhiệm vụ do Quỹ thực hiện theo quy trình đánh giá quy định."
      ],
      "en": [
        "On the morning of 26 September 2026, at the Ministry of Science and Technology, the National Technology Innovation Fund (NATIF) held a working session with the Vietnam Association of Science and Technology Enterprises (VST) on proposals for technology innovation tasks applying artificial intelligence (AI). The Association said it had received 26 proposals from member companies shortly after being informed of the programme.",
        "Opening the session, Dr. Chu Duc Hoang, Chief of Office of NATIF and Head of the Fund's Funding and Commissioning Division, introduced the AI application funding programme as an activity of the Fund implemented under the new legal framework: the Law on Science, Technology and Innovation (Law No. 93/2025/QH15), Decrees 265/2025/ND-CP, 267/2025/ND-CP and 268/2025/ND-CP, and Decree 77/2026/ND-CP on the Fund's functions and tasks.",
        "As presented, in 2026 the Fund plans to select and contract about 15 tasks; State support is capped at VND 3 billion per task and no more than 50% of total cost, with companies contributing at least 50%, and each task lasting no more than 12 months. He explained the phased payment mechanism, which links each tranche of funding to a milestone: defining the problem and preparing data, successfully developing the AI model, and putting it into real operation with measurable results. Closing the session, he said the Fund would help companies clarify their AI problems, adopt a structured innovation approach and connect with suitable experts, and proposed that the Association set up a dedicated advisory team to guide member firms nationwide.",
        "On 30 September 2026, he spoke again at a Ministry of Science and Technology workshop in Ho Chi Minh City calling for AI-application proposals, where the Fund presented its funding plan and the NATIF–NEDO co-funding programme. Output-based disbursement is in line with the results-based, enterprise-centred approach of the 2025 Law; task selection is carried out by the Fund under its prescribed evaluation procedures."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Doanh nghiệp Việt Nam",
        "title": "Mở cơ hội kết nối doanh nghiệp ứng dụng và cung cấp giải pháp AI",
        "url": "https://doanhnghiepvn.vn/cong-nghe/mo-co-hoi-ket-noi-doanh-nghiep-ung-dung-va-cung-cap-giai-phap-ai/20260926021242368",
        "date": "26/09/2026"
      },
      {
        "outlet": "Việt Nam News",
        "title": "Việt Nam offers up to $150,000 to accelerate enterprise AI adoption",
        "url": "https://vietnamnews.vn/Sci-Tech/1800653/viet-nam-offers-up-to-150-000-to-accelerate-enterprise-ai-adoption.html",
        "date": "26/09/2026"
      },
      {
        "outlet": "Quỹ Đổi mới công nghệ quốc gia (natif.gov.vn)",
        "title": "NATIF rót tới 3 tỷ đồng cho mỗi nhiệm vụ đổi mới công nghệ ứng dụng AI",
        "url": "https://www.natif.gov.vn/tin-tuc/tin-hoat-dong/natif-rot-toi-3-ty-dong-cho-moi-nhiem-vu-doi-moi-cong-nghe-ung-dung-ai",
        "date": "29/09/2026"
      },
      {
        "outlet": "Bộ Khoa học và Công nghệ (mst.gov.vn)",
        "title": "Thứ trưởng Hoàng Minh: Đo hiệu quả của NATIF bằng số công nghệ được chuyển giao",
        "url": "https://mst.gov.vn/do-hieu-qua-cua-natif-bang-so-cong-nghe-duoc-chuyen-giao-197260930175842547.htm",
        "date": "30/09/2026"
      }
    ]
  },
  {
    "slug": "2026-06-20-phong-van-doanh-nghiep-cong-nghe-chien-luoc",
    "date": "2026-06-20",
    "category": "policy",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Doanh nghiệp công nghệ chiến lược cần chuyển từ tư duy bao cấp sang chia sẻ rủi ro",
      "en": "Dr. Chu Duc Hoang: Strategic technology enterprises must move from a subsidy mindset to risk-sharing"
    },
    "excerpt": {
      "vi": "Trả lời phỏng vấn Tạp chí Một Thế Giới, TS. Chử Đức Hoàng phân tích các công cụ trong khung pháp lý năm 2025–2026 giúp doanh nghiệp công nghệ chiến lược đầu tư cho R&D, sở hữu trí tuệ và giữ chân nhân tài giai đoạn 2026–2030.",
      "en": "In an interview with Một Thế Giới magazine, Dr. Chu Duc Hoang discussed how the 2025–2026 legal framework can help strategic technology enterprises invest in R&D and intellectual property and retain talent in 2026–2030."
    },
    "keyPoints": {
      "vi": [
        "Ngưỡng chi cho R&D là “điểm tới hạn” để doanh nghiệp chuyển từ gia công giá trị thấp sang làm chủ công nghệ lõi.",
        "Ưu đãi thuế cho chi phí R&D và các công cụ hỗ trợ trực tiếp của Nhà nước bổ trợ cho nhau theo hướng chia sẻ rủi ro.",
        "Doanh nghiệp nên vận hành theo mô hình đổi mới sáng tạo mở, liên kết với viện, trường và tận dụng cơ chế spin-off.",
        "Chia sẻ lợi ích thương mại hóa với tác giả là công cụ giữ chân nhân tài, không phải gánh nặng."
      ],
      "en": [
        "An R&D spending threshold is a “tipping point” for firms to move from low-value outsourcing to mastering core technology.",
        "Tax treatment of R&D costs and direct State support tools complement each other in a risk-sharing approach.",
        "Firms should adopt open innovation, partnering with research institutes and universities and using spin-off mechanisms.",
        "Sharing commercialisation benefits with inventors is a talent-retention tool rather than a burden."
      ]
    },
    "body": {
      "vi": [
        "Ngày 20/6/2026, Tạp chí Một Thế Giới đăng cuộc trao đổi với TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, về lộ trình phát triển doanh nghiệp công nghệ chiến lược giai đoạn 2026–2030. Theo giới thiệu của tạp chí, ông tham gia quá trình xây dựng Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 và từng là nhà sáng lập về công nghệ (tech-founder) của Zinmed; trong phỏng vấn, ông chia sẻ quan điểm chuyên môn với tư cách cá nhân.",
        "Theo TS. Chử Đức Hoàng, để hiện thực hóa khát vọng tự chủ công nghệ, cần “chuyển dịch từ tư duy bao cấp sang chia sẻ rủi ro”. Ông cho rằng ngưỡng chi cho R&D được đặt ra là “điểm tới hạn” để doanh nghiệp chuyển từ gia công giá trị thấp sang làm chủ công nghệ lõi; việc khung pháp lý mới cho phép hạch toán chi phí R&D thực tế vào chi phí được trừ, cùng các công cụ tài trợ, hỗ trợ của Nhà nước theo Nghị định 265/2025/NĐ-CP và Nghị định 77/2026/NĐ-CP, giúp giảm áp lực tài chính, nhất là với doanh nghiệp công nghệ sâu chưa có doanh thu ở giai đoạn đầu.",
        "Ông khuyến nghị doanh nghiệp vận hành theo mô hình đổi mới sáng tạo mở: liên kết với viện nghiên cứu, trường đại học, tận dụng cơ chế spin-off và hạ tầng dùng chung để đưa công nghệ ra thị trường nhanh hơn, coi R&D là “động cơ” thay vì một khoản phí bắt buộc. Về sở hữu trí tuệ, ông lưu ý chi phí đăng ký sáng chế quốc tế không chỉ gồm lệ phí mà còn có chi phí tư vấn, dịch thuật và rà soát tự do vận hành (FTO); cơ chế phiếu hỗ trợ (voucher) theo Nghị định 268/2025/NĐ-CP có thể chia sẻ một phần gánh nặng này. Ông cũng cho rằng việc chia sẻ lợi ích từ thương mại hóa cho tác giả là công cụ giữ chân nhân tài hiệu quả.",
        "Các quan điểm này gắn với tinh thần chấp nhận rủi ro, quản lý theo kết quả và hệ thống đổi mới sáng tạo lấy doanh nghiệp làm trung tâm của Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025. Cuộc trao đổi cho thấy cách ông kết hợp kinh nghiệm chính sách với góc nhìn thực tiễn của người từng khởi nghiệp công nghệ."
      ],
      "en": [
        "On 20 June 2026, Một Thế Giới magazine published an interview with Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, on the development path for strategic technology enterprises in 2026–2030. As introduced by the magazine, he took part in developing the 2025 Law on Science, Technology and Innovation and was formerly a tech founder of Zinmed; in the interview he shared professional views in a personal capacity.",
        "Dr. Hoang said that realising the aspiration for technological self-reliance requires moving from a subsidy mindset to one of risk-sharing. He described the R&D spending threshold as a “tipping point” for firms to move from low-value outsourcing to mastering core technology. In his view, the new legal framework's treatment of actual R&D costs as deductible expenses, together with State funding and support tools under Decree 265/2025/ND-CP and Decree 77/2026/ND-CP, eases financial pressure, especially for deep-tech firms that have no revenue in their early stages.",
        "He advised companies to adopt open innovation: partnering with research institutes and universities, using spin-off mechanisms and shared infrastructure to bring technology to market faster, and treating R&D as an “engine” rather than a mandatory cost. On intellectual property, he noted that international patent filing involves not only official fees but also attorney, translation and freedom-to-operate (FTO) review costs, and that the voucher mechanism under Decree 268/2025/ND-CP can share part of this burden. He also argued that sharing commercialisation benefits with inventors is an effective way to retain talent.",
        "These views connect with the risk acceptance, results-based management and enterprise-centred innovation system set out in the 2025 Law on Science, Technology and Innovation. The interview shows how he combines policy experience with the practical perspective of a former technology founder."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Một Thế Giới",
        "title": "TS. Chử Đức Hoàng: Định hình doanh nghiệp công nghệ chiến lược",
        "url": "https://1thegioi.vn/ts-chu-duc-hoang-dinh-hinh-doanh-nghiep-cong-nghe-chien-luoc-253553.html",
        "date": "20/06/2026"
      }
    ]
  },
  {
    "slug": "2026-03-30-bai-viet-ha-tang-so-cong-canh-tranh-xanh",
    "date": "2026-03-30",
    "category": "innovation",
    "role": {
      "vi": "Tác giả",
      "en": "Author"
    },
    "title": {
      "vi": "Bài viết của TS. Chử Đức Hoàng: Hạ tầng số công trong nâng cao năng lực cạnh tranh xanh của doanh nghiệp",
      "en": "Article by Dr. Chu Duc Hoang: Digital public infrastructure for the green competitiveness of Vietnamese businesses"
    },
    "excerpt": {
      "vi": "Trên Tạp chí Khoa học và Công nghệ Việt Nam số 3/2026, TS. Chử Đức Hoàng phân tích vai trò của hạ tầng số công (DPI) đối với năng lực cạnh tranh xanh, qua nghiên cứu điển hình về hộ chiếu carbon kỹ thuật số.",
      "en": "In the March 2026 issue of Vietnam Journal of Science and Technology, Dr. Chu Duc Hoang examined the role of digital public infrastructure (DPI) in green competitiveness, using a case study on a digital carbon passport."
    },
    "keyPoints": {
      "vi": [
        "Hạ tầng số công (DPI) được xem là lời giải chiến lược cho năng lực cạnh tranh xanh của doanh nghiệp Việt Nam.",
        "Nghiên cứu điển hình: hộ chiếu carbon kỹ thuật số của Hợp tác đổi mới sáng tạo xanh Việt Nam (VIGIC).",
        "Gắn chuyển đổi số với chuyển đổi xanh trong bài toán cạnh tranh của doanh nghiệp."
      ],
      "en": [
        "Digital public infrastructure (DPI) is presented as a strategic answer to the green competitiveness of Vietnamese businesses.",
        "Case study: the digital carbon passport of the Vietnam Green Innovation Cooperation (VIGIC).",
        "Links digital transformation with the green transition in business competitiveness."
      ]
    },
    "body": {
      "vi": [
        "Ngày 30/3/2026, Tạp chí Khoa học và Công nghệ Việt Nam đăng bài viết “Hạ tầng số công trong nâng cao năng lực cạnh tranh xanh của doanh nghiệp Việt Nam” của TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, trong số 3 năm 2026 của tạp chí, chuyên mục Chuyển đổi số. Theo phần tóm tắt, bài viết khẳng định hạ tầng số công (Digital Public Infrastructure – DPI) là lời giải chiến lược cho năng lực cạnh tranh xanh của doanh nghiệp, được minh họa qua nghiên cứu điển hình về hộ chiếu carbon kỹ thuật số của Hợp tác đổi mới sáng tạo xanh Việt Nam (VIGIC).",
        "Bài viết đặt chuyển đổi số và chuyển đổi xanh – hai xu hướng của “chuyển đổi kép” – trong cùng một bài toán về năng lực cạnh tranh của doanh nghiệp. Đây là đóng góp dưới dạng bài viết chuyên môn của ông trên một ấn phẩm khoa học của ngành, thể hiện sự quan tâm đến hạ tầng số dùng chung như một nền tảng hỗ trợ doanh nghiệp đổi mới sáng tạo."
      ],
      "en": [
        "On 30 March 2026, Vietnam Journal of Science and Technology published the article “Digital public infrastructure in enhancing the green competitiveness of Vietnamese businesses” by Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, in its March 2026 issue under the Digital Transformation section. According to its abstract, the article argues that digital public infrastructure (DPI) is a strategic answer to the green competitiveness of businesses, illustrated by a case study on the digital carbon passport of the Vietnam Green Innovation Cooperation (VIGIC).",
        "The article places digital transformation and the green transition – the two strands of the “twin transition” – within a single question of business competitiveness. It is a professional contribution by the author to a sector scientific publication, reflecting his interest in shared digital infrastructure as a foundation that helps businesses innovate."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Khoa học và Công nghệ Việt Nam",
        "title": "Hạ tầng số công trong nâng cao năng lực cạnh tranh xanh của doanh nghiệp Việt Nam",
        "url": "https://a.vjst.vn/ha-tang-so-cong-trong-nang-cao-nang-luc-canh-tranh-xanh-cua-doanh-nghiep-viet-nam-102769.html",
        "date": "30/03/2026"
      }
    ]
  },
  {
    "slug": "2026-02-04-sbv2026-hop-tac-kinh-te-ky-thuat-viet-trung",
    "date": "2026-02-04",
    "category": "policy",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng tại SBV2026: Việt Nam chuyển sang mô hình “đầu tư kiến tạo – chia sẻ rủi ro”",
      "en": "Dr. Chu Duc Hoang at SBV2026: Vietnam is shifting to an “enabling investment and risk-sharing” model"
    },
    "excerpt": {
      "vi": "Tại Hội nghị Hợp tác Kinh tế & Kỹ thuật Việt – Trung 2026, TS. Chử Đức Hoàng trình bày tham luận về nền tảng kinh tế Việt Nam năm 2026, sự chuyển dịch tư duy chính sách và các lĩnh vực ưu tiên thu hút đầu tư.",
      "en": "At the 2026 Vietnam–China Economic and Technical Cooperation Conference, Dr. Chu Duc Hoang spoke on Vietnam's economic foundations for 2026, the shift in policy thinking and priority sectors for investment."
    },
    "keyPoints": {
      "vi": [
        "Kinh tế Việt Nam bước vào chu kỳ phát triển mới với các trụ cột chiến lược rõ ràng.",
        "Tư duy chính sách chuyển từ “quản lý, xin – cho” sang “đầu tư kiến tạo – chia sẻ rủi ro”.",
        "Luật KH,CN&ĐMST 2025 mở ra các công cụ như phiếu hỗ trợ công nghệ, hỗ trợ lãi suất và cơ chế chấp nhận rủi ro trong R&D.",
        "Ưu tiên bán dẫn, AI, năng lượng xanh, vật liệu mới, nông nghiệp công nghệ cao; tuân thủ pháp lý và ESG là chìa khóa."
      ],
      "en": [
        "Vietnam's economy is entering a new development cycle built on clear strategic pillars.",
        "Policy thinking is shifting from “administrative management” to “enabling investment and risk-sharing”.",
        "The 2025 S&T and Innovation Law introduces tools such as innovation vouchers, interest-rate support and risk acceptance in R&D.",
        "Priority sectors: semiconductors, AI, green energy, new materials and high-tech agriculture; legal and ESG compliance are key."
      ]
    },
    "body": {
      "vi": [
        "Sáng 4/2/2026, Hội nghị Hợp tác Kinh tế & Kỹ thuật Việt – Trung 2026 (SBV2026) diễn ra tại Hà Nội với sự tham gia của doanh nghiệp hai nước và đại diện nhiều cơ quan quản lý. Hội nghị hướng tới kết nối chính sách, trí thức và doanh nghiệp, thúc đẩy hợp tác đầu tư và chuyển giao công nghệ trong bối cảnh chuỗi cung ứng toàn cầu tái cấu trúc.",
        "TS. Chử Đức Hoàng tham dự với tư cách Phó Chủ tịch Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam (VAYSE); một số bài viết cũng giới thiệu ông là Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ. Tham luận của ông đánh giá kinh tế Việt Nam đang bước vào chu kỳ phát triển mới nhờ đà phục hồi và ổn định vĩ mô, với vị thế dựa trên hội nhập thương mại sâu rộng, độ mở kinh tế cao và vai trò cửa ngõ kết nối ASEAN.",
        "Nội dung trọng tâm được ông nhấn mạnh là sự chuyển dịch tư duy chính sách từ “xin – cho” sang “đầu tư kiến tạo – chia sẻ rủi ro”, trong đó Nhà nước đồng hành cùng doanh nghiệp. Theo ông, Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 là chất xúc tác cho chuyển dịch này, với các cơ chế như phiếu hỗ trợ công nghệ (innovation voucher), hỗ trợ lãi suất vay và chấp nhận rủi ro trong nghiên cứu và phát triển. Trước tác động của thuế tối thiểu toàn cầu, ông cho rằng Việt Nam tập trung hỗ trợ chi phí thực chất cho R&D, đào tạo nhân lực và hạ tầng công nghệ thay vì chỉ dựa vào ưu đãi thuế. Ông nêu các lĩnh vực ưu tiên như bán dẫn, AI, năng lượng xanh, vật liệu mới và nông nghiệp công nghệ cao, đồng thời lưu ý doanh nghiệp coi tuân thủ pháp lý và ESG là lợi thế cạnh tranh.",
        "Tham luận cho thấy góc nhìn của ông kết nối chính sách khoa học, công nghệ và đổi mới sáng tạo với môi trường đầu tư và hợp tác quốc tế, phù hợp với tinh thần Nghị quyết 57-NQ/TW về việc khơi thông nguồn lực cho đổi mới sáng tạo."
      ],
      "en": [
        "On the morning of 4 February 2026, the 2026 Vietnam–China Economic and Technical Cooperation Conference (SBV2026) took place in Hanoi, bringing together businesses from both countries and representatives of government agencies. The conference aimed to connect policy, knowledge and business, and to promote investment cooperation and technology transfer as global supply chains are restructured.",
        "Dr. Chu Duc Hoang took part as Vice President of the Vietnam Association of Young Scientists and Engineers (VAYSE); some reports also introduced him as Chief of Office of the National Technology Innovation Fund, Ministry of Science and Technology. His presentation assessed that Vietnam's economy is entering a new development cycle on the back of recovery and macroeconomic stability, with its position resting on deep trade integration, a high degree of openness and its role as a gateway to ASEAN.",
        "The central point he emphasised was a shift in policy thinking from “ask-and-give” to “enabling investment and risk-sharing”, with the State working alongside businesses. He described the 2025 Law on Science, Technology and Innovation as a catalyst for this shift, through mechanisms such as innovation vouchers, interest-rate support and acceptance of risk in research and development. In response to the global minimum tax, he said Vietnam is focusing on supporting real costs of R&D, workforce training and technology infrastructure rather than relying on tax incentives alone. He listed priority sectors including semiconductors, AI, green energy, new materials and high-tech agriculture, and advised companies to treat legal and ESG compliance as a competitive advantage.",
        "The presentation shows how he links science, technology and innovation policy with the investment climate and international cooperation, in line with the spirit of Resolution 57-NQ/TW on unlocking resources for innovation."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Một Thế Giới",
        "title": "Kinh tế Việt Nam 2026: Nền tảng chiến lược và cơ hội đầu tư bứt phá",
        "url": "https://1thegioi.vn/kinh-te-viet-nam-2026-nen-tang-chien-luoc-va-co-hoi-dau-tu-but-pha-245755.html",
        "date": "05/02/2026"
      },
      {
        "outlet": "Tạp chí Một Thế Giới",
        "title": "TS Trần Văn Tùng: Doanh nghiệp Việt - Trung cần nâng tầm hợp tác, chuyển giao công nghệ",
        "url": "https://1thegioi.vn/ts-tran-van-tung-doanh-nghiep-viet-trung-can-nang-tam-hop-tac-chuyen-giao-cong-nghe-245711.html",
        "date": "04/02/2026"
      },
      {
        "outlet": "Doanh nghiệp & Tiếp thị",
        "title": "Kinh tế Việt Nam 2026: Nền tảng chiến lược và cơ hội đầu tư bứt phá",
        "url": "https://dntt.vn/kinh-te-viet-nam-2026-nen-tang-chien-luoc-va-co-hoi-dau-tu-but-pha-d13605.html",
        "date": "05/02/2026"
      }
    ]
  },
  {
    "slug": "2025-11-20-vov-dien-dan-dnnn",
    "date": "2025-11-20",
    "category": "innovation",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng đề xuất cơ chế thử nghiệm để doanh nghiệp nhà nước làm chủ công nghệ chiến lược",
      "en": "Dr. Chu Duc Hoang proposes a testing mechanism for state-owned enterprises to master strategic technologies"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn “Doanh nghiệp Nhà nước: Nâng cao năng lực cạnh tranh và vai trò dẫn dắt” do VOV tổ chức, TS. Chử Đức Hoàng trình bày tham luận về đòn bẩy chính sách cho đổi mới công nghệ trong khu vực doanh nghiệp nhà nước.",
      "en": "At VOV's forum “State-Owned Enterprises: Enhancing Competitiveness and Leadership”, Dr. Chu Duc Hoang presented on policy levers for technology innovation in state-owned enterprises."
    },
    "keyPoints": {
      "vi": [
        "Đổi mới công nghệ là điều kiện sống còn để doanh nghiệp nhà nước nâng cao năng lực cạnh tranh.",
        "Cần chuyển từ cơ chế “xin – cho” sang “tự chủ, tự chịu trách nhiệm”, giao chỉ tiêu theo kết quả đầu ra.",
        "Đề xuất cơ chế thử nghiệm có kiểm soát 12–24 tháng và thí điểm cho một nhóm doanh nghiệp nhà nước chiến lược.",
        "Đề xuất Nhà nước đặt hàng doanh nghiệp nhà nước phát triển công nghệ chiến lược như AI, bán dẫn, 5G–6G."
      ],
      "en": [
        "Technology innovation is a condition for survival and competitiveness of state-owned enterprises.",
        "A shift from “ask-and-give” to “autonomy with accountability”, with output-based targets, is needed.",
        "Proposed a 12–24-month controlled testing mechanism and a pilot for a group of strategic SOEs.",
        "Proposed that the State commission SOEs to develop strategic technologies such as AI, semiconductors and 5G–6G."
      ]
    },
    "body": {
      "vi": [
        "Ngày 20/11/2025, tại Hà Nội, Đài Tiếng nói Việt Nam (VOV) tổ chức Diễn đàn “Doanh nghiệp Nhà nước: Nâng cao năng lực cạnh tranh và vai trò dẫn dắt”, với sự tham gia của đại diện cơ quan quản lý, chuyên gia kinh tế và lãnh đạo nhiều doanh nghiệp. Diễn đàn tập trung vào cơ chế quản trị, nguồn lực tài chính và vai trò của doanh nghiệp nhà nước (DNNN) trong phát triển khoa học, công nghệ.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), trình bày tham luận “Đòn bẩy chính sách cho đổi mới công nghệ: Giải pháp nâng cao năng lực cạnh tranh của DNNN”. Ông cho rằng đổi mới công nghệ là điều kiện sống còn của DNNN trong kỷ nguyên số; để giữ vai trò dẫn dắt, DNNN cần tập trung vào giải pháp đột phá như chuyển đổi số, trí tuệ nhân tạo, trong khi nguồn lực tài chính và cơ chế quản trị hiện chưa được khơi thông.",
        "Ông đề xuất chuyển mạnh từ cơ chế “xin – cho” sang “tự chủ, tự chịu trách nhiệm”, trao quyền tự chủ tài chính thực chất và giao chỉ tiêu theo kết quả đầu ra. Theo ông, cần có cơ chế thử nghiệm cho công nghệ đột phá, cho phép DNNN thí điểm trong môi trường có kiểm soát từ 12 đến 24 tháng: “nếu thành công thì mở rộng, nếu thất bại thì rút kinh nghiệm”. Ông kiến nghị thí điểm cơ chế đặc biệt cho một nhóm DNNN chiến lược, được Nhà nước đặt hàng làm chủ các công nghệ như trí tuệ nhân tạo, chip bán dẫn, mạng 5G–6G, năng lượng sạch và công nghệ sinh học, đi kèm các công cụ hỗ trợ như hỗ trợ lãi suất, tài trợ nghiên cứu và ưu đãi thuế. Ông cũng dẫn một số kết quả chuyển đổi số của EVN và Viettel làm ví dụ.",
        "Các đề xuất này gắn với cơ chế thử nghiệm có kiểm soát (sandbox) và định hướng quản lý theo kết quả của Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025, trong đó việc miễn trừ trách nhiệm được đặt trong điều kiện tuân thủ đúng quy định, quy trình. Tham luận thể hiện góc nhìn của ông về việc dùng công cụ chính sách để khơi thông năng lực đổi mới công nghệ của khu vực doanh nghiệp."
      ],
      "en": [
        "On 20 November 2025 in Hanoi, the Voice of Vietnam (VOV) held the forum “State-Owned Enterprises: Enhancing Competitiveness and Leadership”, attended by government officials, economists and business leaders. The forum focused on governance mechanisms, financial resources and the role of state-owned enterprises (SOEs) in developing science and technology.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (Ministry of Science and Technology), presented “Policy levers for technology innovation: solutions to enhance SOE competitiveness”. He said technology innovation is a matter of survival for SOEs in the digital era; to lead, they must focus on breakthrough areas such as digital transformation and artificial intelligence, yet their financial resources and governance mechanisms have not been fully unlocked.",
        "He called for a decisive shift from the “ask-and-give” mechanism to “autonomy with accountability”, with genuine financial autonomy and output-based targets. He proposed a testing mechanism for breakthrough technologies that would let SOEs pilot solutions in a controlled environment for 12 to 24 months – scaling up what succeeds and learning from what fails. He recommended piloting a special mechanism for a group of strategic SOEs commissioned by the State to master technologies such as AI, semiconductors, 5G–6G networks, clean energy and biotechnology, supported by tools such as interest-rate support, research grants and tax incentives. He also cited digital transformation results at EVN and Viettel as examples.",
        "These proposals relate to the controlled testing (sandbox) mechanism and results-based management introduced by the 2025 Law on Science, Technology and Innovation, under which exemption from liability is conditional on following the applicable rules and procedures. The presentation reflects his view of using policy instruments to unlock the technology innovation capacity of the enterprise sector."
      ]
    },
    "sources": [
      {
        "outlet": "VOV",
        "title": "Toàn cảnh Diễn đàn 'DNNN: Nâng cao năng lực cạnh tranh và vai trò dẫn dắt'",
        "url": "https://vov.vn/kinh-te/toan-canh-dien-dan-dnnn-nang-cao-nang-luc-canh-tranh-va-vai-tro-dan-dat-post1247492.vov",
        "date": "20/11/2025"
      },
      {
        "outlet": "Báo Thanh Niên",
        "title": "Đề xuất cơ chế thử nghiệm cho doanh nghiệp nhà nước phát triển công nghệ chiến lược",
        "url": "https://thanhnien.vn/de-xuat-co-che-thu-nghiem-cho-doanh-nghiep-nha-nuoc-phat-trien-cong-nghe-chien-luoc-185251120185535077.htm",
        "date": "20/11/2025"
      },
      {
        "outlet": "VOV",
        "title": "Đề xuất trao cơ chế để DNNN làm chủ công nghệ chiến lược",
        "url": "https://vov.vn/kinh-te/de-xuat-trao-co-che-de-dnnn-lam-chu-cong-nghe-chien-luoc-post1247879.vov",
        "date": "21/11/2025"
      },
      {
        "outlet": "Bộ Khoa học và Công nghệ (mst.gov.vn)",
        "title": "TS. Chử Đức Hoàng: Chính sách đột phá mở đường để DNNN làm chủ công nghệ lõi",
        "url": "https://mst.gov.vn/ts-chu-duc-hoang-chinh-sach-dot-pha-mo-duong-de-dnnn-lam-chu-cong-nghe-loi-19725112515074924.htm",
        "date": "25/11/2025"
      }
    ],
    "cover": {
      "src": "/news/2025-11-20-vov-dien-dan-dnnn/1.jpg",
      "caption": {
        "vi": "TS. Chử Đức Hoàng trình bày tham luận tại diễn đàn.",
        "en": "Dr. Chu Duc Hoang presenting at the forum."
      }
    },
    "gallery": [
      {
        "src": "/news/2025-11-20-vov-dien-dan-dnnn/2.jpg",
        "caption": {
          "vi": "Phát biểu tại diễn đàn.",
          "en": "Speaking at the forum."
        }
      },
      {
        "src": "/news/2025-11-20-vov-dien-dan-dnnn/3.jpg",
        "caption": {
          "vi": "Toàn cảnh phiên tham luận.",
          "en": "The presentation session."
        }
      },
      {
        "src": "/news/2025-11-20-vov-dien-dan-dnnn/4.jpg",
        "caption": {
          "vi": "Phiên thảo luận cùng các chuyên gia.",
          "en": "Panel discussion with experts."
        }
      }
    ],
    "photoCredit": {
      "vi": "Ban tổ chức (Báo Điện tử VOV)",
      "en": "Organizers (VOV)"
    }
  },
  {
    "slug": "2025-11-15-gop-y-du-thao-van-kien-dai-hoi-xiv-khcn",
    "date": "2025-11-15",
    "category": "policy",
    "role": {
      "vi": "Ý kiến chuyên gia",
      "en": "Expert comment"
    },
    "title": {
      "vi": "Góp ý dự thảo văn kiện Đại hội XIV: TS. Chử Đức Hoàng nhấn mạnh hoàn thiện thể chế cho khoa học, công nghệ",
      "en": "Comments on the 14th Party Congress draft documents: Dr. Chu Duc Hoang stresses institutional reform for science and technology"
    },
    "excerpt": {
      "vi": "Trong loạt bài góp ý dự thảo các văn kiện trình Đại hội XIV của Đảng, Báo Nhân Dân ghi nhận ý kiến của TS. Chử Đức Hoàng về việc thể chế hóa đầy đủ quan điểm của Đảng về khoa học, công nghệ và đổi mới sáng tạo.",
      "en": "In its coverage of comments on the draft documents for the 14th National Party Congress, Nhân Dân newspaper reported Dr. Chu Duc Hoang's view on fully institutionalising the Party's guidelines on science, technology and innovation."
    },
    "keyPoints": {
      "vi": [
        "Thể chế hóa đầy đủ, thực hiện hiệu quả quan điểm của Đảng về KH,CN và ĐMST là yêu cầu then chốt.",
        "Trọng tâm là sửa đổi, bổ sung, hoàn thiện đồng bộ các quy định pháp luật trong lĩnh vực này.",
        "Hoàn thiện thể chế sẽ góp phần tháo gỡ điểm nghẽn, giải phóng nguồn lực cho phát triển kinh tế – xã hội."
      ],
      "en": [
        "Fully institutionalising and effectively implementing the Party's guidelines on science, technology and innovation is essential.",
        "The focus is on amending, supplementing and harmonising the relevant legal provisions.",
        "Institutional reform will help remove bottlenecks and unlock resources for socio-economic development."
      ]
    },
    "body": {
      "vi": [
        "Ngày 15/11/2025, Báo Nhân Dân đăng bài “Đổi mới và hoàn thiện cơ chế, chính sách phát triển khoa học, công nghệ” trong khuôn khổ đóng góp ý kiến vào dự thảo các văn kiện trình Đại hội XIV của Đảng. Bài viết nêu rõ dự thảo văn kiện đã đánh giá những hạn chế, vướng mắc của cơ chế, chính sách khoa học, công nghệ và đổi mới sáng tạo, đồng thời ghi nhận ý kiến tán thành, ủng hộ của nhiều chuyên gia, nhà khoa học gắn với thực tiễn công tác tại cơ quan, đơn vị. Bài viết sau đó được Cổng thông tin Đại hội Đảng toàn quốc, Cổng thông tin điện tử Bộ Khoa học và Công nghệ và một số báo địa phương đăng lại.",
        "Trong bài viết, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, cho rằng việc thể chế hóa đầy đủ và thực hiện có hiệu quả hệ thống quan điểm của Đảng về khoa học, công nghệ, đổi mới sáng tạo – với trọng tâm là sửa đổi, bổ sung, hoàn thiện đồng bộ các quy định pháp luật – sẽ tháo gỡ điểm nghẽn, giải phóng các nguồn lực và tạo bứt phá trong phát triển kinh tế – xã hội. Bài viết cũng dẫn thông tin về công tác tham mưu, xây dựng văn bản pháp luật của NATIF trong nhiệm kỳ qua và việc Quỹ đang rà soát, hoàn thiện các dự thảo liên quan đến hoạt động quỹ tài chính theo Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025.",
        "Ý kiến này thống nhất với quan điểm của Nghị quyết 57-NQ/TW, trong đó thể chế được xác định là điều kiện tiên quyết, cần hoàn thiện và đi trước một bước. Từ góc độ người làm việc nhiều năm trong lĩnh vực tài trợ, hỗ trợ đổi mới công nghệ, ông nhấn mạnh vai trò của khung pháp lý đồng bộ trong việc đưa các chủ trương lớn về khoa học, công nghệ và đổi mới sáng tạo đi vào cuộc sống."
      ],
      "en": [
        "On 15 November 2025, Nhân Dân newspaper published the article “Renewing and improving mechanisms and policies for the development of science and technology” as part of the public consultation on the draft documents to be submitted to the 14th National Party Congress. The article noted that the drafts candidly assess the shortcomings of science, technology and innovation mechanisms and policies, and recorded the support of many experts and scientists drawing on their own work. It was later republished by the National Party Congress portal, the Ministry of Science and Technology portal (including its English edition) and several provincial newspapers.",
        "In the article, Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, said that fully institutionalising and effectively implementing the Party's guidelines on science, technology and innovation – with a focus on amending, supplementing and harmonising the legal framework – would remove bottlenecks, unlock resources and create breakthroughs in socio-economic development. The article also cited NATIF's work in advising on and drafting legal documents during the past term, and the Fund's ongoing review of draft regulations on its financial operations under the 2025 Law on Science, Technology and Innovation.",
        "His comment is consistent with Resolution 57-NQ/TW, which identifies institutions as a prerequisite that must be improved and move one step ahead. Speaking from long experience in funding and supporting technology innovation, he underlined the role of a coherent legal framework in turning major policy directions on science, technology and innovation into practice."
      ]
    },
    "sources": [
      {
        "outlet": "Báo Nhân Dân",
        "title": "Đổi mới và hoàn thiện cơ chế, chính sách phát triển khoa học, công nghệ",
        "url": "https://nhandan.vn/doi-moi-va-hoan-thien-co-che-chinh-sach-phat-trien-khoa-hoc-cong-nghe-post923248.html",
        "date": "15/11/2025"
      },
      {
        "outlet": "Cổng thông tin Đại hội Đảng toàn quốc",
        "title": "Đổi mới và hoàn thiện cơ chế, chính sách phát triển khoa học, công nghệ",
        "url": "https://daihoidangtoanquoc.vn/doi-moi-va-hoan-thien-co-che-chinh-sach-phat-trien-khoa-hoc-cong-nghe-post1157.html",
        "date": "15/11/2025"
      },
      {
        "outlet": "Bộ Khoa học và Công nghệ (mst.gov.vn)",
        "title": "Đổi mới và hoàn thiện cơ chế, chính sách phát triển khoa học, công nghệ",
        "url": "https://mst.gov.vn/doi-moi-va-hoan-thien-co-che-chinh-sach-phat-trien-khoa-hoc-cong-nghe-197251117163356062.htm",
        "date": "17/11/2025"
      },
      {
        "outlet": "Bộ Khoa học và Công nghệ – English portal",
        "title": "Renewing and improving mechanisms and policies for development of science and technology",
        "url": "https://english.mst.gov.vn/renewing-and-improving-mechanisms-and-policies-for-development-of-science-and-technology-19725120213241555.htm",
        "date": "02/12/2025"
      }
    ]
  },
  {
    "slug": "2025-11-14-phong-van-muc-tieu-50000-ky-su-ban-dan",
    "date": "2025-11-14",
    "category": "science",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Mục tiêu 50.000 kỹ sư bán dẫn khả thi nếu vừa mở rộng quy mô vừa giữ chất lượng",
      "en": "Dr. Chu Duc Hoang: The 50,000 semiconductor engineer goal is achievable if scale and quality advance together"
    },
    "excerpt": {
      "vi": "Trao đổi với Tạp chí Một Thế Giới, TS. Chử Đức Hoàng cho rằng mục tiêu 50.000 kỹ sư bán dẫn vào năm 2030 có thể đạt được nếu có đột phá chính sách, đổi mới chương trình đào tạo và gắn chặt với doanh nghiệp.",
      "en": "Speaking to Một Thế Giới magazine, Dr. Chu Duc Hoang said the goal of 50,000 semiconductor engineers by 2030 can be met with policy breakthroughs, reformed curricula and close links with industry."
    },
    "keyPoints": {
      "vi": [
        "Mục tiêu 50.000 kỹ sư là tham vọng lớn nhưng khả thi nếu có giải pháp đồng bộ và quyết tâm xuyên suốt.",
        "Chìa khóa là “song hành hóa”: mở rộng quy mô đi cùng kiểm soát chất lượng đào tạo.",
        "Tăng thời lượng thực hành, đưa doanh nghiệp vào quá trình đào tạo và chuẩn hóa theo tiêu chí quốc tế.",
        "Chảy máu chất xám là rủi ro thực tế, nhưng về lâu dài kỹ sư ở nước ngoài có thể thành cầu nối chuyển giao công nghệ."
      ],
      "en": [
        "The 50,000-engineer goal is ambitious but feasible with coordinated solutions and sustained commitment.",
        "The key is to “run in parallel”: expand scale while controlling training quality.",
        "More hands-on training, industry involvement in education, and alignment with international standards.",
        "Brain drain is a real risk, but in the long run engineers abroad can become bridges for technology transfer."
      ]
    },
    "body": {
      "vi": [
        "Ngày 14/11/2025, Tạp chí Một Thế Giới đăng cuộc phỏng vấn TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, xoay quanh tính khả thi của mục tiêu đào tạo ít nhất 50.000 kỹ sư bán dẫn đến năm 2030 theo chương trình phát triển nguồn nhân lực ngành công nghiệp bán dẫn của Chính phủ.",
        "Trước những băn khoăn về khả năng đạt mục tiêu, TS. Chử Đức Hoàng nhận định đây là tham vọng lớn nhưng khả thi nếu có giải pháp đồng bộ và quyết tâm chính trị xuyên suốt. Ông dẫn số liệu về lượng sinh viên, kỹ sư đang theo học hoặc chuyển sang lĩnh vực chip tăng đều trong những năm gần đây, cùng các dự án đầu tư phòng thí nghiệm quốc gia và địa phương đang khởi động. Theo ông, nếu có đột phá chính sách, tăng hỗ trợ thực tập, liên kết với các ngành gần và mở rộng hợp tác quốc tế, mục tiêu này sẽ không phải là “giấc mơ viển vông”; điều quan trọng là các trường phải nâng chất lượng chứ không chỉ chạy theo số lượng.",
        "Ông đề xuất cách tiếp cận “song hành hóa” – vừa mở rộng quy mô vừa kiểm soát chất lượng: cơ cấu lại chương trình để dành phần lớn thời lượng cho thực hành và dự án với doanh nghiệp; đưa doanh nghiệp tham gia trực tiếp vào đào tạo, thực tập và tuyển dụng sớm; tăng cường kiểm định, cập nhật chuẩn và công cụ quốc tế; khuyến khích học ngắn hạn ở nước ngoài và mô hình cố vấn quốc tế. Về chảy máu chất xám, ông cho rằng đây là rủi ro thực tế nhưng cần nhìn đa chiều: về lâu dài, những kỹ sư làm việc ở môi trường quốc tế có thể trở thành cầu nối chuyển giao công nghệ khi có chính sách thu hút phù hợp. Ông cũng nhắc lại mô hình “kim tự tháp” nhân lực với ba tầng: chuyên gia tinh hoa, kỹ sư và kỹ thuật viên.",
        "Cuộc trao đổi tiếp nối quan điểm nhất quán của ông từ năm 2025 rằng phát triển nhân lực bán dẫn cần một cấu trúc bền vững và gắn với hệ sinh thái. Cách tiếp cận lấy chất lượng làm trọng tâm, gắn đào tạo với doanh nghiệp phù hợp với tinh thần liên kết Nhà nước – nhà trường – doanh nghiệp của Nghị quyết 57-NQ/TW."
      ],
      "en": [
        "On 14 November 2025, Một Thế Giới magazine published an interview with Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, Ministry of Science and Technology, on the feasibility of training at least 50,000 semiconductor engineers by 2030 under the Government's semiconductor workforce development programme.",
        "Responding to doubts about the target, Dr. Hoang said it is ambitious but achievable with coordinated solutions and sustained political commitment. He pointed to the steadily rising number of students and engineers studying or moving into the chip field in recent years, and to national and local laboratory investment projects now getting under way. With policy breakthroughs, more internship support, links with adjacent disciplines and wider international cooperation, he said, the goal would not be a “pipe dream”; what matters is that universities raise quality rather than chase numbers.",
        "He proposed a “parallel” approach that expands scale while controlling quality: restructuring curricula so that most of the time goes to practice and company projects; bringing businesses directly into training, internships and early recruitment; strengthening accreditation and keeping up with international standards and tools; and encouraging short study stays abroad and international mentoring. On brain drain, he called it a real risk that should be seen from several angles: in the long term, engineers working in international settings can become bridges for technology transfer if the right policies draw them back. He also revisited his three-tier workforce “pyramid” of elite experts, engineers and technicians.",
        "The interview continues the consistent view he has expressed since 2025 that semiconductor workforce development needs a sustainable structure embedded in an ecosystem. A quality-first approach that ties training to industry is in keeping with the State–university–business linkage called for in Resolution 57-NQ/TW."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Một Thế Giới",
        "title": "TS Chử Đức Hoàng: Mục tiêu 50.000 kỹ sư bán dẫn không phải 'giấc mơ viển vông'",
        "url": "https://1thegioi.vn/ts-chu-duc-hoang-muc-tieu-50-000-ky-su-ban-dan-khong-phai-giac-mo-vien-vong-241036.html",
        "date": "14/11/2025"
      }
    ]
  },
  {
    "slug": "2025-07-17-vov-chuyen-doi-so-khu-vuc-cong",
    "date": "2025-07-17",
    "category": "innovation",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Chuyển đổi số khu vực công cần thể chế kiến tạo, cơ chế thử nghiệm và đánh giá độc lập",
      "en": "Dr. Chu Duc Hoang: Public-sector digital transformation needs enabling institutions, sandboxes and independent evaluation"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn “Chuyển đổi số khu vực công – Tiền đề phát triển kinh tế xã hội” do Báo Điện tử VOV tổ chức, TS. Chử Đức Hoàng trình bày về tầm nhìn tương lai của chuyển đổi số trong khu vực công.",
      "en": "At the forum “Public-Sector Digital Transformation – A Foundation for Socio-Economic Development” organised by VOV, Dr. Chu Duc Hoang presented a future vision for digital transformation in the public sector."
    },
    "keyPoints": {
      "vi": [
        "Xây dựng thể chế kiến tạo, trong đó cơ chế thử nghiệm giúp kiểm chứng giải pháp số trước khi nhân rộng.",
        "Theo tinh thần Nghị quyết 57, quản lý chuyển dần từ tiền kiểm sang hậu kiểm.",
        "Hiệu quả đầu tư chuyển đổi số cần được đánh giá bằng dữ liệu định lượng, do tổ chức độc lập thực hiện.",
        "Đầu tư vào con người và niềm tin vào đội ngũ là điều kiện để chuyển đổi số thành công."
      ],
      "en": [
        "Build enabling institutions, with testing mechanisms to validate digital solutions before scaling them up.",
        "In the spirit of Resolution 57, oversight is shifting from ex-ante to ex-post control.",
        "Returns on digital transformation spending should be assessed with quantitative data by an independent body.",
        "Investing in people and trusting the team are preconditions for successful digital transformation."
      ]
    },
    "body": {
      "vi": [
        "Ngày 17/7/2025, tại Hà Nội, Báo Điện tử VOV tổ chức Diễn đàn “Chuyển đổi số khu vực công – Tiền đề phát triển kinh tế xã hội”, với sự tham gia của đại diện cơ quan quản lý, chuyên gia kinh tế, doanh nghiệp công nghệ và tổ chức quốc tế. Diễn đàn bàn về các rào cản hạ tầng, nhân lực, thể chế và cách đo lường hiệu quả chuyển đổi số trong khu vực công.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, trình bày tham luận “Tầm nhìn tương lai của chuyển đổi số trong khu vực công”. Ông nêu kỳ vọng đến năm 2030 Việt Nam phát triển thịnh vượng, công bằng, an toàn dựa trên ba trụ cột kinh tế số, xã hội số và chính phủ số.",
        "Theo ông, để đẩy nhanh chuyển đổi số quốc gia, cần một thể chế kiến tạo vững chắc, trong đó các cơ chế thử nghiệm đóng vai trò then chốt, cho phép kiểm chứng và hoàn thiện giải pháp số trước khi triển khai rộng; hệ thống cơ sở dữ liệu quốc gia và chuyên ngành đồng bộ, liên thông là “xương sống” của dịch vụ công. Về đo lường hiệu quả, ông cho rằng theo tinh thần Nghị quyết 57-NQ/TW, Việt Nam đang chuyển từ tiền kiểm sang hậu kiểm, vì vậy “giám sát và đánh giá phải dựa trên hiệu quả thực tế”, dựa trên dữ liệu định lượng và do một tổ chức độc lập thực hiện. Ông cũng nhấn mạnh việc đầu tư vào con người, xây dựng niềm tin với đội ngũ công nghệ thông tin và chuyên gia, cùng một cơ cấu nhân sự tinh gọn có nhóm nòng cốt chất lượng cao.",
        "Các nội dung này gắn với định hướng quản lý theo hậu kiểm và cơ chế thử nghiệm có kiểm soát (sandbox) mà sau đó được quy định trong Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025. Tham luận cho thấy góc nhìn của ông về chuyển đổi số không chỉ là câu chuyện công nghệ, mà gắn với cải cách thể chế, năng lực con người và trách nhiệm giải trình về hiệu quả."
      ],
      "en": [
        "On 17 July 2025 in Hanoi, VOV's online newspaper held the forum “Public-Sector Digital Transformation – A Foundation for Socio-Economic Development”, attended by government officials, economists, technology companies and international organisations. Discussions covered barriers in infrastructure, human resources and institutions, and how to measure the results of digital transformation in the public sector.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund, Ministry of Science and Technology, delivered a presentation on “The future vision of public-sector digital transformation”. He outlined the expectation that by 2030 Vietnam will be prosperous, fair and safe, built on three pillars: the digital economy, digital society and digital government.",
        "To speed up national digital transformation, he said, the country needs solid enabling institutions in which testing mechanisms play a key role, allowing digital solutions to be validated and refined before wider rollout; synchronised, interoperable national and sectoral databases form the “backbone” of public services. On measuring impact, he noted that in the spirit of Resolution 57-NQ/TW Vietnam is moving from ex-ante to ex-post control, so monitoring and evaluation must be based on actual results and quantitative data and carried out by an independent body. He also stressed investing in people, building trust in IT teams and experts, and adopting a lean staffing structure with a high-quality core.",
        "These ideas connect with ex-post management and controlled testing (sandbox) mechanisms, which were later written into the 2025 Law on Science, Technology and Innovation. The presentation reflects his view of digital transformation as a matter not only of technology but also of institutional reform, human capacity and accountability for results."
      ]
    },
    "sources": [
      {
        "outlet": "VOV",
        "title": "Toàn cảnh Diễn đàn chuyển đổi số khu vực công - Tiền đề phát triển kinh tế xã hội",
        "url": "https://vov.vn/xa-hoi/toan-canh-dien-dan-chuyen-doi-so-khu-vuc-cong-tien-de-phat-trien-kinh-te-xa-hoi-post1215387.vov",
        "date": "17/07/2025"
      },
      {
        "outlet": "Thời báo Ngân hàng",
        "title": "Hạ tầng, nhân lực và thể chế - ba rào cản lớn nhất trong chuyển đổi số khu vực công",
        "url": "https://thoibaonganhang.vn/ha-tang-nhan-luc-va-the-che-ba-rao-can-lon-nhat-trong-chuyen-doi-so-khu-vuc-cong-167444.html",
        "date": "17/07/2025"
      },
      {
        "outlet": "Tạp chí Doanh nghiệp Việt Nam",
        "title": "Chuyển đổi số chỉ đột phá khi được tích hợp vào cải cách thể chế",
        "url": "https://doanhnghiepvn.vn/chuyen-doi-so/chuyen-doi-so-chi-dot-pha-khi-duoc-tich-hop-vao-cai-cach-the-che/20250717042118940",
        "date": "17/07/2025"
      },
      {
        "outlet": "VOV World",
        "title": "Chuyển đổi số khu vực công để phát triển kinh tế, xã hội",
        "url": "https://vovworld.vn/vi-VN/so-hoa-viet-nam/chuyen-doi-so-khu-vuc-cong-de-phat-trien-kinh-te-xa-hoi-2240458.vov5",
        "date": "01/08/2025"
      }
    ],
    "cover": {
      "src": "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/1.jpg",
      "caption": {
        "vi": "TS. Chử Đức Hoàng phát biểu tại Diễn đàn Chuyển đổi số khu vực công.",
        "en": "Dr. Chu Duc Hoang speaking at the public-sector digital transformation forum."
      }
    },
    "gallery": [
      {
        "src": "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/2.jpg",
        "caption": {
          "vi": "Các đại biểu chụp ảnh lưu niệm.",
          "en": "Speakers and guests."
        }
      },
      {
        "src": "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/3.jpg",
        "caption": {
          "vi": "Phiên thảo luận.",
          "en": "Panel discussion."
        }
      },
      {
        "src": "/news/2025-07-17-vov-chuyen-doi-so-khu-vuc-cong/4.jpg",
        "caption": {
          "vi": "TS. Chử Đức Hoàng tại phiên thảo luận.",
          "en": "Dr. Chu Duc Hoang on the panel."
        }
      }
    ],
    "photoCredit": {
      "vi": "Ban tổ chức (Báo Điện tử VOV)",
      "en": "Organizers (VOV)"
    }
  },
  {
    "slug": "2025-07-15-phong-van-nga-voi-con-voi-nhan-luc-ban-dan",
    "date": "2025-07-15",
    "category": "science",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Phát triển nhân lực bán dẫn cần nuôi dưỡng cả “con voi”, không chỉ tìm “ngà voi”",
      "en": "Dr. Chu Duc Hoang: Building a semiconductor workforce means nurturing the whole “elephant”, not just hunting for “tusks”"
    },
    "excerpt": {
      "vi": "Trả lời phỏng vấn Tạp chí Một Thế Giới, TS. Chử Đức Hoàng dùng hình ảnh “ngà voi – con voi” để phân tích bức tranh nhân lực bán dẫn và kiến nghị chuyển từ tư duy hỗ trợ dự án sang xây dựng hệ sinh thái.",
      "en": "In an interview with Một Thế Giới magazine, Dr. Chu Duc Hoang used an “elephant and tusk” metaphor to analyse Vietnam's semiconductor workforce and called for a shift from project-based support to ecosystem building."
    },
    "keyPoints": {
      "vi": [
        "Nhân tài tinh hoa (“ngà voi”) chỉ phát huy được khi có nền tảng nhân lực đa tầng (“con voi”) đủ mạnh.",
        "Chính sách cần chuyển từ hỗ trợ “dự án”, “mục tiêu số lượng” sang kiến tạo “hệ sinh thái”.",
        "Gợi ý mô hình viện nghiên cứu công nghiệp bán dẫn quốc gia theo hướng ITRI của Đài Loan (Trung Quốc).",
        "Doanh nghiệp cần tham gia “đặt hàng” đào tạo; trường đại học cần được tự chủ và đào tạo theo nhu cầu ngành."
      ],
      "en": [
        "Elite talent (the “tusks”) can only thrive on a strong, multi-tier workforce base (the “elephant”).",
        "Policy should move from supporting “projects” and “headcount targets” to building an “ecosystem”.",
        "Suggested a national semiconductor industry research institute modelled on Taiwan's ITRI.",
        "Businesses should commission training; universities need autonomy and should train for what the industry needs."
      ]
    },
    "body": {
      "vi": [
        "Ngày 15/7/2025, Tạp chí Một Thế Giới đăng cuộc trao đổi với TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), về bức tranh nhân lực bán dẫn của Việt Nam trong bối cảnh mục tiêu đào tạo 50.000 kỹ sư vào năm 2030. Nội dung cuộc phỏng vấn sau đó cũng được trang Market Times giới thiệu lại.",
        "Theo TS. Chử Đức Hoàng, điểm sáng lớn nhất là khát vọng và quyết tâm chính trị ở cấp cao nhất, thể hiện qua tinh thần Nghị quyết 57-NQ/TW, cùng lực lượng lao động trẻ và vị thế địa chính trị thuận lợi. Tuy vậy, thách thức cốt lõi nằm ở tư duy tiếp cận. Ông ví phần tinh hoa – các chuyên gia thiết kế chip, những tài năng tạo ra tài sản trí tuệ giá trị cao – là “ngà voi”, chỉ chiếm một phần nhỏ hệ sinh thái; còn “con voi” là toàn bộ đội ngũ kỹ sư quy trình, kiểm thử, đóng gói, kỹ thuật viên, chuyên gia sở hữu trí tuệ, chuỗi cung ứng và thương mại hóa. Thiếu nền tảng này, nhân tài tinh hoa sẽ không có đất dụng võ.",
        "Ông cho rằng thay đổi phải đến đồng bộ từ mọi phía. Nhà hoạch định chính sách cần chuyển từ tư duy hỗ trợ “dự án” và “mục tiêu số lượng” sang kiến tạo “hệ sinh thái”, với Nhà nước giữ vai trò “nhạc trưởng” và đầu tư mồi vào hạ tầng nghiên cứu dùng chung; ông gợi ý thành lập một viện công nghiệp bán dẫn quốc gia theo mô hình ITRI của Đài Loan (Trung Quốc). Doanh nghiệp cần “đặt hàng” và cùng tham gia đào tạo theo các cam kết rõ ràng; trường đại học cần được tự chủ, được thành lập spin-off và chuyển sang đào tạo theo nhu cầu của ngành.",
        "Những đề xuất này gắn với các định hướng của Nghị quyết 57-NQ/TW và Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 về liên kết Nhà nước – viện, trường – doanh nghiệp và thương mại hóa kết quả nghiên cứu. Cách nhìn của ông phản ánh kinh nghiệm của một chuyên gia làm việc lâu năm trong lĩnh vực hỗ trợ đổi mới công nghệ, đặt bài toán nhân lực trong tổng thể hệ sinh thái đổi mới sáng tạo."
      ],
      "en": [
        "On 15 July 2025, Một Thế Giới magazine published an interview with Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (Ministry of Science and Technology), on Vietnam's semiconductor workforce in light of the target of training 50,000 engineers by 2030. The interview was later also featured by Market Times.",
        "Dr. Hoang said the country's greatest strength is the aspiration and political determination at the highest level, reflected in the spirit of Resolution 57-NQ/TW, together with a young workforce and a favourable geopolitical position. The core challenge, however, lies in mindset. He compared the elite segment – chip design experts and talent able to create high-value intellectual property – to the “tusks”, which make up only a small share of the ecosystem. The “elephant” is everyone else: process, test and packaging engineers, technicians, and specialists in intellectual property, supply chains and commercialisation. Without that base, top talent has nowhere to apply its skills.",
        "He argued that change must come from all sides at once. Policymakers should move from supporting “projects” and “headcount targets” to building an “ecosystem”, with the State acting as “conductor” and seed investor in shared research infrastructure; he suggested a national semiconductor industry institute modelled on Taiwan's ITRI. Businesses should commission and co-deliver training under clear commitments, while universities need autonomy, the freedom to create spin-offs, and a shift towards training for what the industry actually needs.",
        "These proposals align with the directions of Resolution 57-NQ/TW and the 2025 Law on Science, Technology and Innovation on State–research–business linkages and the commercialisation of research results. His view reflects long experience in supporting technology innovation, placing the workforce question within the wider innovation ecosystem."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Một Thế Giới",
        "title": "TS Chử Đức Hoàng: Đừng mải mê đi tìm 'ngà voi' mà quên mất việc nuôi cả 'con voi' nhân lực bán dẫn",
        "url": "https://1thegioi.vn/ts-chu-duc-hoang-dung-mai-me-di-tim-nga-voi-ma-quen-mat-viec-nuoi-ca-con-voi-nhan-luc-ban-dan-234952.html",
        "date": "15/07/2025"
      },
      {
        "outlet": "Market Times",
        "title": "TS Chử Đức Hoàng: Ngành bán dẫn cần cấu trúc như mô hình 'kim tự tháp' để phát triển bền vững",
        "url": "https://markettimes.vn/ts-chu-duc-hoang-nganh-ban-dan-can-cau-truc-nhu-mo-hinh-kim-tu-thap-de-phat-trien-ben-vung-86878.html",
        "date": "19/07/2025"
      }
    ]
  },
  {
    "slug": "2025-06-30-hoi-thao-nhan-luc-ban-dan-ueb",
    "date": "2025-06-30",
    "category": "science",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Trường Đại học Kinh tế – ĐHQGHN, Hà Nội",
      "en": "VNU University of Economics and Business, Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Mục tiêu 50.000 kỹ sư bán dẫn cần chiến lược về chất lượng và cấu trúc nhân lực",
      "en": "Dr. Chu Duc Hoang: The 50,000 semiconductor engineer goal needs a strategy for workforce quality and structure"
    },
    "excerpt": {
      "vi": "Tại hội thảo quốc tế về quản trị nguồn nhân lực chiến lược cho ngành bán dẫn, TS. Chử Đức Hoàng đề xuất mô hình đào tạo – giữ chân – phát triển theo tỷ lệ 70:20:10 và cách tiếp cận hệ sinh thái nhân lực đa tầng.",
      "en": "At an international workshop on strategic human resource management for the semiconductor industry, Dr. Chu Duc Hoang proposed a 70:20:10 train–retain–develop model and a multi-tier workforce ecosystem approach."
    },
    "keyPoints": {
      "vi": [
        "Mục tiêu 50.000 kỹ sư cần đi kèm chiến lược về chất lượng và cấu trúc, không chỉ số lượng.",
        "Đề xuất mô hình đào tạo – giữ chân – phát triển theo tỷ lệ 70:20:10 (vận hành : thiết kế : nghiên cứu).",
        "Phát triển bán dẫn đòi hỏi hệ sinh thái đầy đủ: nhân lực, hạ tầng, logistics và chuỗi cung ứng.",
        "Đầu tư cho toàn bộ hệ sinh thái nhân lực hiệu quả hơn chỉ tập trung thu hút một nhóm nhỏ nhân tài cao cấp."
      ],
      "en": [
        "The 50,000-engineer target needs a strategy for quality and structure, not just numbers.",
        "Proposed a 70:20:10 train–retain–develop model (operations : design : research engineers).",
        "Semiconductor development requires a full ecosystem: people, infrastructure, logistics and supply chains.",
        "Investing in the whole workforce ecosystem is more effective than focusing only on attracting a small group of top talent."
      ]
    },
    "body": {
      "vi": [
        "Chiều 30/6/2025, Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội tổ chức Hội thảo quốc tế “Quản trị nguồn nhân lực chiến lược trong phát triển ngành công nghiệp bán dẫn tại Việt Nam”. Sự kiện quy tụ các nhà hoạch định chính sách, chuyên gia giáo dục – công nghệ, doanh nghiệp và tổ chức quốc tế, với trọng tâm là góc nhìn quản trị bên cạnh khía cạnh kỹ thuật của bài toán nhân lực bán dẫn.",
        "Tham luận tại hội thảo, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, cho rằng mục tiêu đào tạo 50.000 kỹ sư bán dẫn là thách thức lớn nếu thiếu nền tảng chiến lược và hành động cụ thể ngay từ bây giờ. Theo ông, điểm yếu hiện nay là chưa có chiến lược rõ ràng về chất lượng và cấu trúc nhân lực.",
        "Từ đó, ông đề xuất mô hình đào tạo – giữ chân – phát triển cho 50.000 kỹ sư theo tỷ lệ 70:20:10, tương ứng kỹ sư vận hành, thiết kế và nghiên cứu. Ông nhấn mạnh phát triển bán dẫn cần một hệ sinh thái đầy đủ, gồm cả hạ tầng, logistics và chuỗi cung ứng; đề xuất đào tạo “song cấp” giảng viên và sinh viên thông qua giáo sư thỉnh giảng, trao quyền tự chủ cho trường đại học, xây dựng phòng thí nghiệm dùng chung và khuyến khích mô hình spin-off. Dẫn kinh nghiệm Đài Loan (Trung Quốc), ông ước tính cần đầu tư khoảng 1–1,5 tỷ USD mỗi năm cho toàn bộ hệ sinh thái nhân lực, thay vì chỉ tập trung thu hút một nhóm nhỏ nhân tài.",
        "Quan điểm này được ông tiếp tục trình bày trong các cuộc trao đổi với báo chí những tháng sau đó: nhân lực bán dẫn cần được cấu trúc như một “kim tự tháp” bền vững; cần cơ chế tài chính thực tế, trong đó Nhà nước giữ vai trò kiến tạo và đầu tư mồi; và Việt Nam nên rút kinh nghiệm từ những nền kinh tế bị mắc kẹt ở khâu giá trị thấp để hướng tới chất lượng, không chỉ số lượng. Góc nhìn này phù hợp với tinh thần liên kết Nhà nước – nhà trường – doanh nghiệp mà Nghị quyết 57-NQ/TW đề ra."
      ],
      "en": [
        "On the afternoon of 30 June 2025, the VNU University of Economics and Business (Vietnam National University, Hanoi) hosted the international workshop “Strategic Human Resource Management in Developing Vietnam's Semiconductor Industry”. The event brought together policymakers, education and technology experts, businesses and international organisations, and focused on the management dimension of the semiconductor workforce challenge alongside its technical side.",
        "In his presentation, Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, said that training 50,000 semiconductor engineers would be a major challenge without strategic foundations and concrete action starting now. In his view, the main weakness is the lack of a clear strategy for the quality and structure of the workforce.",
        "He proposed a train–retain–develop model for 50,000 engineers in a 70:20:10 ratio of operations, design and research engineers. He stressed that the industry needs a complete ecosystem, including infrastructure, logistics and supply chains, and recommended “dual-level” training of lecturers and students through visiting professors, academic autonomy for universities, shared laboratories and spin-off models. Drawing on Taiwan's experience, he estimated that Vietnam would need to invest about USD 1–1.5 billion a year in the whole workforce ecosystem rather than concentrating only on attracting a small group of top talent.",
        "He developed the same line of thinking in press interviews over the following months: the semiconductor workforce should be structured as a sustainable “pyramid”; financing should be realistic, with the State acting as enabler and seed investor; and Vietnam should learn from economies that became stuck in low-value segments, aiming for quality rather than quantity alone. This is in line with the State–university–business linkage called for in Resolution 57-NQ/TW."
      ]
    },
    "sources": [
      {
        "outlet": "Trường ĐH Kinh tế – ĐHQGHN (ueb.edu.vn)",
        "title": "UEB tổ chức thành công Hội thảo quốc tế “Quản trị nguồn nhân lực chiến lược trong phát triển ngành công nghiệp bán dẫn tại Việt Nam”",
        "url": "https://ueb.edu.vn/Tin-Tuc/UEB/ueb-to-chuc-thanh-cong-hoi-thao-quoc-te-%E2%80%9Cquan-tri-nguon-nhan-luc-chien-luoc-trong-phat-trien-nganh-cong-nghiep-ban-dan-tai-viet-nam%E2%80%9D/44959",
        "date": "03/07/2025"
      },
      {
        "outlet": "Báo Nhân Dân",
        "title": "Quản trị nguồn nhân lực chiến lược trong phát triển ngành công nghiệp bán dẫn tại Việt Nam",
        "url": "https://nhandan.vn/quan-tri-nguon-nhan-luc-chien-luoc-trong-phat-trien-nganh-cong-nghiep-ban-dan-tai-viet-nam-post890810.html",
        "date": "30/06/2025"
      },
      {
        "outlet": "Báo Công Thương",
        "title": "Tháo gỡ điểm nghẽn nhân lực cho ngành công nghiệp bán dẫn Việt Nam",
        "url": "https://congthuong.vn/thao-go-diem-nghen-nhan-luc-cho-nganh-cong-nghiep-ban-dan-viet-nam-408571.html",
        "date": "30/06/2025"
      },
      {
        "outlet": "VietnamBiz",
        "title": "Cần đầu tư 1 - 1,5 tỷ USD/năm để phát triển hệ sinh thái nhân lực bán dẫn",
        "url": "https://vietnambiz.vn/can-dau-tu-1-15-ty-usdnam-de-phat-trien-he-sinh-thai-nhan-luc-ban-dan-202571115733320.htm",
        "date": "01/07/2025"
      }
    ]
  },
  {
    "slug": "2025-06-27-quoc-hoi-thong-qua-luat-khcn-dmst",
    "date": "2025-06-27",
    "category": "policy",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "Quốc hội thông qua Luật KH,CN và ĐMST: nhìn lại kỳ vọng của TS. Chử Đức Hoàng",
      "en": "National Assembly passes the Law on Science, Technology and Innovation: revisiting Dr. Chu Duc Hoang's expectations"
    },
    "excerpt": {
      "vi": "Ngày 27/6/2025, Quốc hội thông qua Luật Khoa học, công nghệ và đổi mới sáng tạo số 93/2025/QH15. Trước đó, TS. Chử Đức Hoàng đã chia sẻ kỳ vọng về các cơ chế hậu kiểm, chấp nhận rủi ro và vai trò của các quỹ đối với doanh nghiệp.",
      "en": "On 27 June 2025 the National Assembly passed Law No. 93/2025/QH15 on Science, Technology and Innovation. A month earlier, Dr. Chu Duc Hoang had set out his expectations on post-audit management, risk acceptance and the role of funds for enterprises."
    },
    "keyPoints": {
      "vi": [
        "Dự thảo luật chuyển mạnh từ “tiền kiểm” sang “hậu kiểm”, chấp nhận rủi ro trong nghiên cứu và đổi mới sáng tạo.",
        "Các quỹ cần hoạt động theo nguyên tắc thị trường, minh bạch, chấp nhận rủi ro có kiểm soát, không bị ràng buộc cứng nhắc về bảo toàn vốn.",
        "Kênh vốn cho khởi nghiệp sáng tạo qua phân bảng chuyên biệt trên thị trường chứng khoán; ưu đãi thu hút chuyên gia, nhà khoa học.",
        "Doanh nghiệp nhỏ và vừa, startup cần thủ tục đơn giản hơn, được tư vấn, đồng hành khi tiếp cận nguồn vốn."
      ],
      "en": [
        "The draft law shifts decisively from ex-ante control to post-audit management and accepts risk in research and innovation.",
        "Funds should operate on market principles, transparently, accepting controlled risk without rigid capital-preservation constraints.",
        "A dedicated stock-market board for innovative start-ups; incentives to attract experts and scientists.",
        "SMEs and start-ups need simpler procedures, advice and mentoring to access funding."
      ]
    },
    "body": {
      "vi": [
        "Sáng 27/6/2025, với 435/438 đại biểu có mặt tán thành, Quốc hội đã thông qua Luật Khoa học, công nghệ và đổi mới sáng tạo (Luật số 93/2025/QH15). Luật gồm 73 điều, có hiệu lực từ ngày 01/10/2025, xác lập nhiều chính sách mới như quản lý chủ yếu theo nguyên tắc hậu kiểm, cơ chế chấp nhận rủi ro, khoán chi đến sản phẩm cuối cùng, thử nghiệm có kiểm soát, quỹ đầu tư mạo hiểm và hệ thống đổi mới sáng tạo lấy doanh nghiệp làm trung tâm.",
        "Trước đó, ngày 30/5/2025, khi dự thảo luật đang được Quốc hội xem xét, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, đã trả lời phỏng vấn Tạp chí Doanh nghiệp và Hội nhập về những điểm mới có thể tháo gỡ rào cản cho doanh nghiệp đổi mới sáng tạo.",
        "Theo ông, điểm then chốt là chuyển mạnh từ “tiền kiểm” sang “hậu kiểm” và chấp nhận rủi ro trong nghiên cứu. Ông kỳ vọng cơ chế phân bổ, sử dụng vốn nhà nước cho doanh nghiệp sẽ thay đổi theo hướng phát huy vai trò của các quỹ khoa học, công nghệ và đổi mới sáng tạo, minh bạch hóa và tăng trách nhiệm giải trình; các quỹ hoạt động theo nguyên tắc thị trường, chấp nhận rủi ro có kiểm soát, không còn bị ràng buộc cứng nhắc về bảo toàn vốn. Ông cũng nhắc tới đề xuất phân bảng chuyên biệt trên thị trường chứng khoán cho doanh nghiệp khởi nghiệp sáng tạo và các ưu đãi thu hút chuyên gia, nhà khoa học. Ông cũng cho rằng doanh nghiệp nhỏ và vừa, startup cần thủ tục đơn giản hơn và có chuyên gia đồng hành.",
        "Đối chiếu với văn bản được thông qua, nhiều định hướng ông nêu đã được thể hiện trong Luật, như nguyên tắc hậu kiểm, cơ chế chấp nhận rủi ro (với điều kiện tuân thủ đúng quy trình, quy định), quỹ đầu tư mạo hiểm không phải bảo toàn vốn theo từng năm hay từng dự án, và hỗ trợ khởi nghiệp sáng tạo trên thị trường chứng khoán. Những ý kiến này là quan điểm chuyên môn của TS. Chử Đức Hoàng với tư cách người nhiều năm làm việc trong lĩnh vực hỗ trợ đổi mới công nghệ cho doanh nghiệp, góp thêm góc nhìn thực tiễn cho việc triển khai Luật mới."
      ],
      "en": [
        "On the morning of 27 June 2025, with 435 of the 438 deputies present voting in favour, the National Assembly passed the Law on Science, Technology and Innovation (Law No. 93/2025/QH15). The 73-article law took effect on 1 October 2025 and introduces new policies including management mainly through post-audit, a risk-acceptance mechanism, lump-sum funding up to the final product, controlled testing (sandboxes), venture capital funds and an enterprise-centred innovation system.",
        "Earlier, on 30 May 2025, while the draft was before the National Assembly, Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, gave an interview to Doanh nghiep va Hoi nhap magazine on the new provisions that could remove barriers for innovative enterprises.",
        "In his view, the key change was a decisive shift from ex-ante control to post-audit management, together with acceptance of risk in research. He expected the allocation and use of state funding for enterprises to change by strengthening the role of science, technology and innovation funds, increasing transparency and accountability, and letting funds operate on market principles with controlled risk, free of rigid capital-preservation requirements. He also pointed to the proposed dedicated stock-market board for innovative start-ups and incentives to attract experts and scientists. He added that SMEs and start-ups need simpler procedures and expert mentoring.",
        "Compared with the text that was adopted, many of the directions he highlighted are reflected in the Law, including the post-audit principle, risk acceptance (conditional on following the required procedures and rules), venture capital funds that need not preserve capital each year or for each project, and support for innovative start-ups on the stock market. These views are Dr. Hoang's professional opinions as someone who has worked for many years in supporting technology innovation in enterprises, offering a practical perspective on implementing the new Law."
      ]
    },
    "sources": [
      {
        "outlet": "VnExpress",
        "title": "Quốc hội thông qua Luật Khoa học, công nghệ và đổi mới sáng tạo",
        "url": "https://vnexpress.net/quoc-hoi-thong-qua-luat-khoa-hoc-cong-nghe-va-doi-moi-sang-tao-4906848.html",
        "date": "27/06/2025"
      },
      {
        "outlet": "Cổng Thông tin điện tử Chính phủ – Hệ thống văn bản",
        "title": "Luật Khoa học, công nghệ và đổi mới sáng tạo số 93/2025/QH15",
        "url": "https://vanban.chinhphu.vn/?pageid=27160&docid=214603",
        "date": "27/06/2025"
      },
      {
        "outlet": "Tạp chí Doanh nghiệp và Hội nhập",
        "title": "Sửa đổi Luật Khoa học, Công nghệ và Đổi mới sáng tạo: Gỡ 'rào cản' cho doanh nghiệp",
        "url": "https://doanhnghiephoinhap.vn/sua-doi-luat-khoa-hoc-cong-nghe-va-doi-moi-sang-tao-go-rao-can-cho-doanh-nghiep-105586.html",
        "date": "30/05/2025"
      }
    ],
    "cover": {
      "src": "/news/2025-06-27-quoc-hoi-thong-qua-luat-khcn-dmst/1.jpg",
      "caption": {
        "vi": "Ảnh lưu niệm tại Hội trường Diên Hồng, Kỳ họp thứ Chín, Quốc hội khóa XV.",
        "en": "Commemorative photo in Dien Hong Hall, Ninth Session of the 15th National Assembly."
      }
    },
    "gallery": [
      {
        "src": "/news/2025-06-27-quoc-hoi-thong-qua-luat-khcn-dmst/2.jpg",
        "caption": {
          "vi": "Hội trường Diên Hồng, Nhà Quốc hội.",
          "en": "Dien Hong Hall, National Assembly House."
        }
      }
    ],
    "photoCredit": {
      "vi": "Tư liệu TS. Chử Đức Hoàng",
      "en": "Dr. Chu Duc Hoang's archive"
    }
  },
  {
    "slug": "2025-04-04-dnvn-cbam-doanh-nghiep-xuat-khau",
    "date": "2025-04-04",
    "category": "innovation",
    "role": {
      "vi": "Chuyên gia chia sẻ quan điểm",
      "en": "Expert commentary"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Doanh nghiệp xuất khẩu cần nâng năng lực xanh trước CBAM",
      "en": "Dr. Chu Duc Hoang: Exporters must build “green” capability to meet the EU's CBAM"
    },
    "excerpt": {
      "vi": "Chia sẻ với Tạp chí Doanh nghiệp Việt Nam, TS. Chử Đức Hoàng cảnh báo phần lớn doanh nghiệp xuất khẩu chưa đáp ứng Cơ chế điều chỉnh biên giới carbon của EU và khuyến nghị giải pháp nâng cao năng lực công nghệ.",
      "en": "Speaking to Vietnam Business Magazine, Dr. Chu Duc Hoang warned that most exporters are not yet ready for the EU's Carbon Border Adjustment Mechanism and recommended ways to build technological capability."
    },
    "keyPoints": {
      "vi": [
        "EU ngày càng đặt yêu cầu khắt khe về xanh hóa sản xuất, tác động trực tiếp tới nền kinh tế dựa vào xuất khẩu như Việt Nam.",
        "Có tới 89% doanh nghiệp xuất khẩu Việt Nam chưa đáp ứng tiêu chuẩn thuộc CBAM.",
        "Thách thức: thiếu thông tin, hạn chế vốn, công nghệ lạc hậu, nhân lực chưa đáp ứng – nguy cơ mất thị phần, bị loại khỏi chuỗi cung ứng.",
        "Khuyến nghị: xây dựng văn hóa sáng tạo, dám thử nghiệm và chấp nhận rủi ro; đào tạo kỹ sư công nghệ xanh; thiết lập chuỗi cung ứng xanh."
      ],
      "en": [
        "The EU is tightening green requirements on production and consumption, directly affecting export-dependent economies such as Vietnam.",
        "As many as 89% of Vietnamese exporters do not yet meet standards under the CBAM.",
        "Challenges: information gaps, limited capital, outdated technology and skills shortages — risking lost market share and exclusion from supply chains.",
        "Recommendations: a culture of creativity, experimentation and risk-taking; training engineers in green technologies; building green supply chains."
      ]
    },
    "body": {
      "vi": [
        "Trong bài viết đăng ngày 04/4/2025 trên Tạp chí Doanh nghiệp Việt Nam, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia và Phó Chủ tịch Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam, chia sẻ quan điểm về áp lực chuyển đổi xanh đối với doanh nghiệp xuất khẩu.",
        "Ông cho rằng Liên minh châu Âu ngày càng đặt ra yêu cầu khắt khe về “xanh hóa” sản xuất và tiêu dùng – sử dụng hiệu quả tài nguyên, giảm phát thải carbon, bảo vệ môi trường – và điều này tác động trực tiếp tới những nền kinh tế phụ thuộc vào xuất khẩu như Việt Nam. Ông dẫn con số đáng chú ý: có tới 89% doanh nghiệp xuất khẩu trong nước chưa đáp ứng được tiêu chuẩn thuộc Cơ chế điều chỉnh biên giới carbon (CBAM) của EU, cho thấy mức độ sẵn sàng còn thấp.",
        "Theo TS. Chử Đức Hoàng, thiếu thông tin, hạn chế về vốn, công nghệ lạc hậu và nguồn nhân lực chưa đáp ứng là những rào cản lớn; năng lực “xanh” hạn chế có thể dẫn tới mất thị phần, giảm kim ngạch và bị loại khỏi chuỗi cung ứng toàn cầu. Ngược lại, chuyển đổi xanh mở ra cơ hội đầu tư mới trong năng lượng tái tạo, công nghệ môi trường, nông nghiệp hữu cơ, tạo thêm việc làm. Để nâng cao năng lực công nghệ, ông khuyến nghị doanh nghiệp đổi mới cả quy trình quản lý và mô hình kinh doanh, xây dựng văn hóa khuyến khích sáng tạo, thử nghiệm cái mới và chấp nhận rủi ro; chú trọng đào tạo kỹ sư, kỹ thuật viên về môi trường, năng lượng tái tạo; đồng thời thiết lập chuỗi cung ứng xanh.",
        "Quan điểm này thể hiện cách tiếp cận kết hợp giữa đổi mới công nghệ và đổi mới sáng tạo trong doanh nghiệp của TS. Chử Đức Hoàng. Tinh thần chấp nhận rủi ro mà ông đề cập ở cấp doanh nghiệp cũng là một nội dung được nhấn mạnh ở cấp cơ chế quản lý trong Luật Khoa học, công nghệ và đổi mới sáng tạo được Quốc hội thông qua vài tháng sau đó."
      ],
      "en": [
        "In an article published on 4 April 2025 by Vietnam Business Magazine, Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF) and Vice President of the Vietnam Association of Young Scientists and Engineers (VAYSE), shared his views on the green-transition pressure facing exporters.",
        "He noted that the European Union is setting ever stricter requirements for greener production and consumption — efficient use of resources, lower carbon emissions and environmental protection — which directly affect export-dependent economies like Vietnam. He cited a striking figure: as many as 89% of domestic exporters do not yet meet standards under the EU's Carbon Border Adjustment Mechanism (CBAM), indicating low readiness.",
        "According to Dr. Hoang, lack of information, limited capital, outdated technology and skills shortages are major barriers; weak “green” capability could mean lost market share, lower export turnover and exclusion from global supply chains. At the same time, the green transition opens new investment opportunities in renewable energy, environmental technology and organic agriculture, and creates jobs. To raise technological capability, he advised firms to innovate both management processes and business models, build a culture that encourages creativity, experimentation and risk-taking, train engineers and technicians in environment and renewable energy, and set up green supply chains.",
        "These views reflect Dr. Hoang's approach of combining technology innovation with broader innovation inside enterprises. The willingness to accept risk that he advocated at company level was also emphasised, at the level of public management mechanisms, in the Law on Science, Technology and Innovation passed by the National Assembly a few months later."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Doanh nghiệp Việt Nam",
        "title": "89% doanh nghiệp chưa đáp ứng được cơ chế điều chỉnh biên giới carbon của EU",
        "url": "https://doanhnghiepvn.vn/cong-nghe/89-doanh-nghiep-chua-dap-ung-duoc-co-che-dieu-chinh-bien-gioi-carbon-cua-eu/20250403054100635",
        "date": "04/04/2025"
      }
    ]
  },
  {
    "slug": "2025-03-11-dnvn-dieu-kien-ho-tro-natif",
    "date": "2025-03-11",
    "category": "policy",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng giới thiệu cơ chế hỗ trợ của Quỹ Đổi mới công nghệ quốc gia",
      "en": "Dr. Chu Duc Hoang explains the National Technology Innovation Fund's support for enterprise technology innovation"
    },
    "excerpt": {
      "vi": "Trao đổi với Tạp chí Doanh nghiệp Việt Nam, TS. Chử Đức Hoàng giới thiệu các công cụ tài chính, điều kiện tiếp cận và quy trình xét duyệt của Quỹ theo quy định, cùng tiềm năng hợp tác công nghệ Việt Nam – Nhật Bản.",
      "en": "Speaking to Vietnam Business Magazine, Dr. Chu Duc Hoang outlined the Fund's financial instruments, eligibility conditions and review procedures under its regulations, as well as prospects for Vietnam–Japan technology cooperation."
    },
    "keyPoints": {
      "vi": [
        "Chính sách hỗ trợ của Quỹ bám sát Điều lệ ban hành theo Quyết định 04/2021/QĐ-TTg, với sứ mệnh thúc đẩy đổi mới công nghệ, nâng cao năng lực cạnh tranh của doanh nghiệp.",
        "Công cụ tài chính gồm cho vay ưu đãi, hỗ trợ lãi suất, bảo lãnh vay vốn và tài trợ không hoàn lại, kèm các chương trình kết nối, thông tin thị trường.",
        "Doanh nghiệp cần có dự án đổi mới công nghệ thuộc lĩnh vực ưu tiên, đủ năng lực triển khai và có đóng góp kinh tế – xã hội; quy trình xét duyệt theo quy định, công khai.",
        "Hợp tác với NEDO (Nhật Bản) tạo khuôn khổ hỗ trợ doanh nghiệp tiếp cận, chuyển giao công nghệ."
      ],
      "en": [
        "The Fund's support follows its Charter issued under Decision 04/2021/QD-TTg, with a mission to promote technology innovation and raise enterprise competitiveness.",
        "Instruments include preferential loans, interest-rate support, loan guarantees and non-refundable grants, plus networking and market-information programmes.",
        "Firms need a technology-innovation project in a priority field, the capacity to implement it and a socio-economic contribution; reviews follow regulations and are public.",
        "Cooperation with Japan's NEDO provides a framework to help firms access and transfer technology."
      ]
    },
    "body": {
      "vi": [
        "Trong bài phỏng vấn đăng ngày 11/3/2025 trên Tạp chí Doanh nghiệp Việt Nam, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, đã giải đáp những câu hỏi doanh nghiệp quan tâm về cơ chế hỗ trợ đổi mới công nghệ của Quỹ.",
        "Với tư cách đại diện Văn phòng Quỹ, ông cho biết chính sách hỗ trợ được thực hiện theo Điều lệ tổ chức và hoạt động của Quỹ ban hành kèm Quyết định 04/2021/QĐ-TTg của Thủ tướng Chính phủ, với mục tiêu thúc đẩy đổi mới công nghệ để nâng cao năng lực cạnh tranh của doanh nghiệp Việt Nam. Theo đó, Quỹ có các công cụ tài chính như cho vay ưu đãi, hỗ trợ lãi suất vay, bảo lãnh vay vốn và tài trợ không hoàn lại, đồng thời triển khai các chương trình đổi mới công nghệ, cung cấp thông tin thị trường, kết nối đối tác.",
        "Về điều kiện tiếp cận, ông giải thích doanh nghiệp cần có dự án đổi mới công nghệ thuộc lĩnh vực ưu tiên, có năng lực triển khai và có khả năng đóng góp vào mục tiêu phát triển kinh tế – xã hội. Lĩnh vực ưu tiên không cố định mà do Hội đồng quản lý Quỹ xem xét, công bố theo từng thời kỳ, thường hướng tới công nghệ cao, công nghệ mới và công nghệ bảo vệ môi trường. Quy trình xét duyệt tuân thủ quy định hiện hành, thực hiện công khai, với thời gian tùy theo tính chất và quy mô dự án. Ông cũng giới thiệu khuôn khổ hợp tác giữa Quỹ và Tổ chức Phát triển công nghệ công nghiệp và năng lượng mới (NEDO) của Nhật Bản, giúp doanh nghiệp Việt Nam tiếp cận, chuyển giao công nghệ.",
        "Bài phỏng vấn mang tính thông tin chính sách, giúp doanh nghiệp hiểu rõ hơn các kênh hỗ trợ đổi mới công nghệ của Nhà nước. Từ tháng 3/2026, tổ chức và hoạt động của Quỹ được quy định tại Nghị định 77/2026/NĐ-CP; vì vậy một số nội dung trong bài phản ánh khung pháp lý tại thời điểm năm 2025."
      ],
      "en": [
        "In an interview published on 11 March 2025 by Vietnam Business Magazine (Tap chi Doanh nghiep Viet Nam), Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, answered questions businesses often ask about the Fund's support for technology innovation.",
        "Speaking for the Fund's Office, he explained that its support policies follow the Charter on the Fund's organisation and operation issued with Prime Ministerial Decision 04/2021/QD-TTg, with the aim of promoting technology innovation to strengthen the competitiveness of Vietnamese enterprises. The Fund's financial instruments include preferential loans, interest-rate support, loan guarantees and non-refundable grants, alongside technology-innovation programmes, market information and partner matching.",
        "On eligibility, he said firms need a technology-innovation project in a priority field, the capacity to carry it out and the potential to contribute to socio-economic goals. Priority fields are not fixed; they are reviewed and announced by the Fund's Management Board from time to time and generally favour high technology, new technology and environmental technology. The review process follows current regulations and is public, with timelines depending on the nature and scale of each project. He also described the cooperation framework between the Fund and Japan's New Energy and Industrial Technology Development Organization (NEDO), which helps Vietnamese firms access and transfer technology.",
        "The interview was essentially policy information, helping businesses understand the State's channels of support for technology innovation. Since March 2026 the Fund's organisation and operation have been governed by Decree 77/2026/ND-CP, so some details reflect the legal framework as of 2025."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Doanh nghiệp Việt Nam",
        "title": "Điều kiện để doanh nghiệp được hỗ trợ từ Quỹ Đổi mới công nghệ quốc gia?",
        "url": "https://doanhnghiepvn.vn/doanh-nghiep/dieu-kien-de-doanh-nghiep-duoc-ho-tro-tu-quy-doi-moi-cong-nghe-quoc-gia/20250311102650332",
        "date": "11/03/2025"
      }
    ]
  },
  {
    "slug": "2024-12-26-mst-chuyen-doi-so-nong-nghiep",
    "date": "2024-12-26",
    "category": "innovation",
    "role": {
      "vi": "Tác giả",
      "en": "Author"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng viết về chuyển đổi số trong chuỗi giá trị nông nghiệp",
      "en": "Dr. Chu Duc Hoang writes for the MOST portal: digital transformation to strengthen agricultural value chains"
    },
    "excerpt": {
      "vi": "Trong chuyên mục “Góc nhìn chuyên gia” của Cổng Thông tin điện tử Bộ Khoa học và Công nghệ, TS. Chử Đức Hoàng phân tích thực trạng và đề xuất giải pháp thúc đẩy chuyển đổi số trong nông nghiệp Việt Nam.",
      "en": "In the “Expert view” section of the Ministry of Science and Technology's portal, Dr. Chu Duc Hoang reviews the state of digital transformation in Vietnamese agriculture and proposes ways to accelerate it."
    },
    "keyPoints": {
      "vi": [
        "Chuyển đổi số là xu thế tất yếu, mang tính quyết định với phát triển bền vững của nông nghiệp Việt Nam.",
        "Công nghệ số giúp quản lý thông minh các khâu trong chuỗi giá trị: giám sát môi trường, điều khiển tưới tiêu, theo dõi chất lượng, kết nối thị trường.",
        "Chuyển đổi số còn chậm, tập trung ở doanh nghiệp lớn; hạ tầng số nông thôn và kỹ năng số của nông dân còn hạn chế.",
        "Đề xuất ưu đãi đầu tư, phát triển hạ tầng viễn thông nông thôn, đào tạo kỹ năng số, hỗ trợ khởi nghiệp công nghệ nông nghiệp và cơ sở dữ liệu lớn dùng chung."
      ],
      "en": [
        "Digital transformation is an inevitable and decisive trend for the sustainable development of Vietnamese agriculture.",
        "Digital technology enables smart management along the value chain: environmental monitoring, irrigation control, quality tracking and market connection.",
        "Progress is slow and concentrated in large firms; rural digital infrastructure and farmers' digital skills remain limited.",
        "He proposes investment incentives, rural telecom infrastructure, digital-skills training, support for agri-tech start-ups and a shared agricultural big-data system."
      ]
    },
    "body": {
      "vi": [
        "Ngày 26/12/2024, Cổng Thông tin điện tử Bộ Khoa học và Công nghệ đăng bài viết “Chuyển đổi số nhằm nâng cao hiệu quả và chuỗi giá trị cho nền nông nghiệp tại Việt Nam” của TS. Chử Đức Hoàng trong chuyên mục “Góc nhìn chuyên gia”. Bài viết đặt chuyển đổi số nông nghiệp trong bối cảnh Cách mạng công nghiệp lần thứ tư.",
        "Theo tác giả, chuyển đổi số trong nông nghiệp là quá trình ứng dụng các công nghệ như dữ liệu lớn, điện toán đám mây, Internet vạn vật và trí tuệ nhân tạo xuyên suốt từ sản xuất, chế biến đến phân phối, tiêu thụ. Công nghệ số cho phép quản lý thông minh các khâu của chuỗi giá trị nông sản – giám sát môi trường, điều khiển tưới tiêu, theo dõi chất lượng và năng suất cây trồng, vật nuôi – đồng thời kết nối trực tiếp nông dân với người tiêu dùng qua thương mại điện tử.",
        "Bài viết ghi nhận một số doanh nghiệp lớn đã ứng dụng công nghệ thành công, nhưng chuyển đổi số nhìn chung còn chậm, chưa lan tỏa tới hộ sản xuất nhỏ; các ứng dụng công nghệ cao chưa phổ biến; hạ tầng băng thông rộng, 5G ở nông thôn, miền núi còn hạn chế; kỹ năng số của người lao động chưa đáp ứng. Để thúc đẩy, TS. Chử Đức Hoàng đề xuất chính sách ưu đãi về thuế và tín dụng cho dự án chuyển đổi số nông nghiệp; đầu tư hạ tầng viễn thông nông thôn; xây dựng các trung tâm đào tạo, tư vấn công nghệ số cho nông hộ; khuyến khích khởi nghiệp công nghệ nông nghiệp; và xây dựng cơ sở dữ liệu lớn về nông nghiệp, chia sẻ giữa cơ quan quản lý, doanh nghiệp, hợp tác xã và nông dân.",
        "Bài viết cho thấy góc nhìn rộng của TS. Chử Đức Hoàng về đổi mới công nghệ, không chỉ ở công nghiệp và năng lượng mà cả trong nông nghiệp. Bài được đăng chỉ ít ngày sau khi Nghị quyết 57-NQ/TW (22/12/2024) xác định khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là đột phá quan trọng hàng đầu."
      ],
      "en": [
        "On 26 December 2024, the Ministry of Science and Technology's web portal published Dr. Chu Duc Hoang's article “Digital transformation to improve efficiency and the value chain of Vietnamese agriculture” in its “Expert view” section. The piece places agricultural digital transformation in the context of the Fourth Industrial Revolution.",
        "The author describes digital transformation in agriculture as the application of big data, cloud computing, the Internet of Things and artificial intelligence across production, processing, distribution and consumption. Digital technology enables smart management along the agricultural value chain — environmental monitoring, irrigation control, tracking crop and livestock quality and yields — and connects farmers directly with consumers through e-commerce.",
        "The article notes that some large companies have applied technology successfully, but digital transformation is generally slow and has not reached smallholders; high-tech applications are not widespread; broadband and 5G in rural and mountainous areas are limited; and workers' digital skills fall short. To accelerate change, Dr. Hoang proposes tax and credit incentives for agricultural digital-transformation projects; investment in rural telecom infrastructure; training and advisory centres on digital technology for farm households; support for agri-tech start-ups; and an agricultural big-data system shared among authorities, businesses, cooperatives and farmers.",
        "The article shows the breadth of Dr. Hoang's perspective on technology innovation, extending beyond industry and energy to agriculture. It appeared just days after Resolution 57-NQ/TW (22 December 2024) identified science, technology, innovation and digital transformation as the most important breakthrough."
      ]
    },
    "sources": [
      {
        "outlet": "Bộ Khoa học và Công nghệ (mst.gov.vn) – Góc nhìn chuyên gia",
        "title": "Chuyển đổi số nhằm nâng cao hiệu quả và chuỗi giá trị cho nền nông nghiệp tại Việt Nam",
        "url": "https://mst.gov.vn/chuyen-doi-so-nham-nang-cao-hieu-qua-va-chuoi-gia-tri-cho-nen-nong-nghiep-tai-viet-nam-197241224171857576.htm",
        "date": "26/12/2024"
      }
    ]
  },
  {
    "slug": "2024-12-23-iot-ai-cong-nghiep-ho-tro",
    "date": "2024-12-23",
    "category": "innovation",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Dữ liệu đổi mới công nghệ cho công nghiệp hỗ trợ",
      "en": "Dr. Chu Duc Hoang proposes a four-step roadmap for technology-innovation data in supporting industries"
    },
    "excerpt": {
      "vi": "Tại hội thảo về ứng dụng IoT/AI trong ngành công nghiệp hỗ trợ do Sở Công Thương Hà Nội phối hợp tổ chức, TS. Chử Đức Hoàng phân tích thách thức của ngành và đề xuất chính sách phát triển dữ liệu đổi mới công nghệ.",
      "en": "At a seminar on IoT/AI in supporting industries co-organised by the Hanoi Department of Industry and Trade, Dr. Chu Duc Hoang analysed the sector's challenges and proposed policies on technology-innovation data."
    },
    "keyPoints": {
      "vi": [
        "Tỷ lệ nội địa hóa ngành điện tử chỉ 5–10%, so với 65–70% ở Thái Lan và Malaysia; dưới 15% doanh nghiệp công nghiệp hỗ trợ áp dụng công nghệ 4.0.",
        "Chính sách phát triển dữ liệu đổi mới công nghệ sẽ thúc đẩy công nghiệp hỗ trợ phát triển bền vững.",
        "Lộ trình bốn bước: đánh giá hiện trạng – thiết lập hệ thống thu thập, lưu trữ – phân tích, khai thác – tối ưu hóa liên tục.",
        "Khuyến khích chuyển giao công nghệ IoT/AI, hướng tới công nghệ xanh, sạch."
      ],
      "en": [
        "Localisation in electronics is only 5–10%, versus 65–70% in Thailand and Malaysia; under 15% of supporting-industry firms use Industry 4.0 technology.",
        "A policy on technology-innovation data would help supporting industries develop sustainably.",
        "A four-step roadmap: assess the current state; set up collection and storage; analyse and exploit data; optimise continuously.",
        "Encourage transfer of IoT/AI technologies, oriented towards green and clean technology."
      ]
    },
    "body": {
      "vi": [
        "Chiều 23/12/2024, trong khuôn khổ Chương trình phát triển công nghiệp hỗ trợ trên địa bàn thành phố Hà Nội năm 2024 (đợt 1), Sở Công Thương Hà Nội phối hợp tổ chức hội thảo “Tiềm năng, xu hướng ứng dụng IoT/AI trong ngành công nghiệp hỗ trợ tại Việt Nam”. Các nhà quản lý và doanh nghiệp thảo luận về tình hình phát triển công nghiệp, xu hướng ứng dụng IoT/AI và các giải pháp nâng cao năng lực công nghệ.",
        "TS. Chử Đức Hoàng (Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ) trình bày về chính sách phát triển dữ liệu đổi mới công nghệ nhằm thúc đẩy ngành công nghiệp hỗ trợ Việt Nam phát triển bền vững.",
        "Ông nhận định công nghiệp hỗ trợ đang đối mặt nhiều thách thức trong quá trình hội nhập: tỷ lệ nội địa hóa trong các ngành chủ chốt còn thấp, riêng điện tử chỉ đạt 5–10% so với 65–70% ở Thái Lan và Malaysia; toàn ngành có khoảng 1.600 doanh nghiệp, 80% là doanh nghiệp vừa và nhỏ; dưới 15% doanh nghiệp áp dụng công nghệ 4.0, phần lớn vẫn ở mức công nghệ 2.0 và 3.0; năng suất lao động chỉ bằng khoảng 40–50% so với các nước trong khu vực. Từ đó, ông đề xuất doanh nghiệp xây dựng dữ liệu đổi mới công nghệ một cách có hệ thống qua bốn bước: đánh giá toàn diện hiện trạng và nhu cầu dữ liệu; thiết lập hệ thống thu thập, lưu trữ với quy trình chuẩn hóa; phân tích, khai thác dữ liệu phục vụ ra quyết định; và tối ưu hóa, cập nhật liên tục. Theo số liệu ông dẫn từ các doanh nghiệp đã triển khai, hệ thống dữ liệu như vậy có thể giúp tiết kiệm 20–25% chi phí đầu tư công nghệ và rút ngắn 30–40% thời gian đánh giá, lựa chọn công nghệ.",
        "Đề xuất của TS. Chử Đức Hoàng kết nối hai mảng chuyên môn của ông: hiểu biết về công nghệ số và kinh nghiệm thúc đẩy đổi mới công nghệ trong doanh nghiệp. Ông cũng khuyến nghị khuyến khích chuyển giao công nghệ IoT/AI, hướng tới công nghệ xanh, sạch – phù hợp với định hướng chuyển đổi kép mà ông nhiều lần nhấn mạnh."
      ],
      "en": [
        "On the afternoon of 23 December 2024, under Hanoi's 2024 supporting-industry development programme (phase 1), the Hanoi Department of Industry and Trade co-organised the seminar “Potential and trends of IoT/AI applications in Vietnam's supporting industries”. Officials and businesses discussed industrial development, IoT/AI adoption trends and ways to raise technological capability.",
        "Dr. Chu Duc Hoang (National Technology Innovation Fund, Ministry of Science and Technology) presented on a policy for developing technology-innovation data to help Vietnam's supporting industries grow sustainably.",
        "He said supporting industries face many challenges as they integrate: localisation in key sectors remains low — just 5–10% in electronics, against 65–70% in Thailand and Malaysia; the sector has about 1,600 firms, 80% of them small and medium-sized; fewer than 15% use Industry 4.0 technology, with most still at the 2.0 and 3.0 level; and labour productivity is only about 40–50% of regional peers. He therefore proposed that firms build technology-innovation data systematically in four steps: a full assessment of the current state and data needs; a collection and storage system with standardised procedures; analysis and use of data for decision-making; and continuous optimisation and updating. According to figures he cited from firms that have done this, such systems can save 20–25% of technology investment costs and cut the time needed to assess and select technologies by 30–40%.",
        "His proposal connects two areas of his expertise: digital technology and experience in promoting technology innovation in enterprises. He also recommended encouraging the transfer of IoT/AI technologies, oriented towards green and clean technology — in line with the twin-transition approach he has repeatedly emphasised."
      ]
    },
    "sources": [
      {
        "outlet": "Báo Đại biểu Nhân dân",
        "title": "Chưa đầy 15% doanh nghiệp công nghiệp hỗ trợ áp dụng công nghệ 4.0",
        "url": "https://daibieunhandan.vn/chua-day-15-doanh-nghiep-cong-nghiep-ho-tro-ap-dung-cong-nghe-4-0-10355411.html",
        "date": "23/12/2024"
      },
      {
        "outlet": "VietNamNet",
        "title": "IoT, AI ứng dụng trong ngành công nghiệp hỗ trợ là bước đi tất yếu",
        "url": "https://vietnamnet.vn/iot-ai-ung-dung-trong-nganh-cong-nghiep-ho-tro-la-buoc-di-tat-yeu-2358203.html",
        "date": "24/12/2024"
      },
      {
        "outlet": "Thời báo Ngân hàng",
        "title": "Để công nghiệp hỗ trợ bứt phá",
        "url": "https://thoibaonganhang.vn/de-cong-nghiep-ho-tro-but-pha-159435.html",
        "date": "02/01/2025"
      }
    ]
  },
  {
    "slug": "2024-11-26-vov-kinh-te-xanh-bien-doi-khi-hau",
    "date": "2024-11-26",
    "category": "science",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Đẩy mạnh chuyển giao công nghệ xanh trước biến đổi khí hậu",
      "en": "Dr. Chu Duc Hoang: Step up research, application and transfer of green technologies amid climate change"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn kinh tế xanh “Phát triển kinh tế trong bối cảnh biến đổi khí hậu” của Báo điện tử VOV, TS. Chử Đức Hoàng nhấn mạnh vai trò của công nghệ xanh và sự phối hợp giữa Chính phủ, viện, trường và doanh nghiệp.",
      "en": "At VOV's green-economy forum on development amid climate change, Dr. Chu Duc Hoang highlighted the role of green technology and coordination between government, research institutes, universities and businesses."
    },
    "keyPoints": {
      "vi": [
        "Biến đổi khí hậu và thời tiết cực đoan ngày càng ảnh hưởng nghiêm trọng đến đời sống và phát triển kinh tế – xã hội.",
        "Cần đẩy mạnh nghiên cứu, ứng dụng và chuyển giao công nghệ xanh, thân thiện môi trường để phát triển bền vững.",
        "Công nghệ năng lượng tái tạo đóng góp vào mục tiêu năng lượng sạch: công suất điện gió, điện mặt trời tăng 16 lần trong 2019–2020.",
        "Cần phối hợp chặt chẽ giữa Chính phủ, viện nghiên cứu, trường đại học và doanh nghiệp."
      ],
      "en": [
        "Climate change and extreme weather increasingly affect lives and socio-economic development.",
        "Research, application and transfer of green, environmentally friendly technologies must be stepped up for sustainable growth.",
        "Renewable-energy technology supports clean-energy goals: wind and solar capacity grew 16-fold in 2019–2020.",
        "Close coordination is needed between government, research institutes, universities and businesses."
      ]
    },
    "body": {
      "vi": [
        "Sáng 26/11/2024, Báo điện tử VOV tổ chức “Diễn đàn kinh tế xanh: Phát triển kinh tế trong bối cảnh biến đổi khí hậu” tại Hà Nội. Diễn đàn tập trung vào lý do và điều kiện để Việt Nam theo đuổi tăng trưởng xanh, trong đó có các vấn đề về tài chính xanh, chính sách hỗ trợ doanh nghiệp và vai trò của công nghệ.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, trình bày tham luận “Đẩy mạnh nghiên cứu, ứng dụng và chuyển giao các công nghệ xanh, thân thiện môi trường để hỗ trợ phát triển kinh tế bền vững trong bối cảnh biến đổi khí hậu”.",
        "Mở đầu, ông lưu ý biến đổi khí hậu và thời tiết cực đoan ngày càng gia tăng, gây ảnh hưởng nghiêm trọng tới đời sống và phát triển kinh tế – xã hội. Từ đó, ông cho rằng cần đẩy mạnh nghiên cứu, ứng dụng và chuyển giao công nghệ xanh. Ông dẫn ví dụ về công nghệ năng lượng tái tạo: tại Việt Nam, công suất điện gió và điện mặt trời đã tăng 16 lần trong hai năm 2019–2020, chiếm khoảng 25% tổng công suất lắp đặt. Ông cũng nêu đóng góp của các công nghệ như lọc nước tiên tiến đối với mục tiêu nước sạch và vệ sinh. Theo ông, để công nghệ xanh phát huy hiệu quả, cần sự phối hợp chặt chẽ giữa Chính phủ, viện nghiên cứu, trường đại học và doanh nghiệp.",
        "Tham luận tiếp nối chuỗi chia sẻ của TS. Chử Đức Hoàng tại các diễn đàn về chuyển dịch năng lượng và kinh tế xanh, với điểm nhấn là chuyển giao công nghệ và liên kết giữa các chủ thể trong hệ thống khoa học, công nghệ và đổi mới sáng tạo. Mối liên kết Nhà nước – nhà khoa học – doanh nghiệp này cũng là một nội dung được Nghị quyết 57-NQ/TW, ban hành khoảng một tháng sau đó, đề cao."
      ],
      "en": [
        "On the morning of 26 November 2024, VOV Online held the “Green Economy Forum: Economic development in the context of climate change” in Hanoi. The forum examined why and how Vietnam should pursue green growth, including green finance, support policies for businesses and the role of technology.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, presented a paper on stepping up research, application and transfer of green, environmentally friendly technologies to support sustainable economic development in the context of climate change.",
        "He began by noting that climate change and extreme weather are intensifying and seriously affecting lives and socio-economic development. Research, application and transfer of green technologies therefore need to be accelerated. He cited renewable-energy technology as an example: in Vietnam, wind and solar capacity increased 16-fold in 2019–2020, reaching about 25% of total installed capacity. He also pointed to the contribution of technologies such as advanced water filtration to clean-water and sanitation goals. For green technology to deliver, he said, close coordination is needed between government, research institutes, universities and businesses.",
        "The presentation continued Dr. Hoang's series of contributions to forums on the energy transition and green economy, with a focus on technology transfer and links between actors in the science, technology and innovation system. Links between the State, scientists and businesses were also emphasised in Resolution 57-NQ/TW, issued about a month later."
      ]
    },
    "sources": [
      {
        "outlet": "Báo điện tử VOV",
        "title": "Toàn cảnh Diễn đàn Phát triển kinh tế xanh trong bối cảnh biến đổi khí hậu",
        "url": "https://vov.vn/kinh-te/toan-canh-dien-dan-phat-trien-kinh-te-xanh-trong-boi-canh-bien-doi-khi-hau-post1138109.vov",
        "date": "26/11/2024"
      },
      {
        "outlet": "NetZero.VN",
        "title": "Diễn đàn kinh tế xanh: Phát triển kinh tế trong bối cảnh biến đổi khí hậu",
        "url": "https://netzero.vn/dien-dan-kinh-te-xanh-phat-trien-kinh-te-trong-boi-canh-bien-doi-khi-hau/",
        "date": "27/11/2024"
      }
    ]
  },
  {
    "slug": "2024-08-07-dien-dan-doi-moi-mo-hinh-tang-truong",
    "date": "2024-08-07",
    "category": "policy",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: “Chuyển đổi kép” trong đổi mới mô hình tăng trưởng kinh tế",
      "en": "Renewing the growth model: Dr. Chu Duc Hoang proposes a green-and-digital “twin transition” roadmap"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn “Đẩy mạnh đổi mới mô hình tăng trưởng kinh tế ở Việt Nam”, TS. Chử Đức Hoàng phân tích chuyển dịch cơ cấu kinh tế, vai trò của công nghệ cao và đưa ra các bài học cho doanh nghiệp trong chuyển đổi kép.",
      "en": "At the forum “Accelerating the renewal of Vietnam's growth model”, Dr. Chu Duc Hoang analysed structural change, the role of high technology and lessons for firms pursuing the twin transition."
    },
    "keyPoints": {
      "vi": [
        "Tỷ trọng công nghiệp – xây dựng tăng từ 32,1% GDP (2010) lên 38,1% (2023); kinh tế số khoảng 14,3% GDP (2023).",
        "Thách thức: năng suất lao động thấp, ứng dụng công nghệ mới hạn chế, phụ thuộc FDI và xuất khẩu, phát triển chưa đồng đều.",
        "Công nghệ cao – tự động hóa, IoT, dữ liệu lớn, AI, blockchain, điện toán đám mây – là nền tảng của chuyển đổi kép.",
        "Doanh nghiệp cần tích hợp chuyển đổi kép vào chiến lược, hợp tác, xây dựng văn hóa bền vững, đào tạo nhân lực và đầu tư R&D."
      ],
      "en": [
        "Industry and construction rose from 32.1% of GDP (2010) to 38.1% (2023); the digital economy was about 14.3% of GDP (2023).",
        "Challenges: low labour productivity, limited uptake of new technology, reliance on FDI and exports, and uneven regional development.",
        "High technologies — automation, IoT, big data, AI, blockchain and cloud computing — underpin the twin transition.",
        "Firms should build the twin transition into strategy, partner widely, foster a sustainability culture, train people and invest in R&D."
      ]
    },
    "body": {
      "vi": [
        "Chiều 07/8/2024, Tạp chí Tài chính Doanh nghiệp phối hợp với các bên liên quan tổ chức Diễn đàn “Đẩy mạnh đổi mới mô hình tăng trưởng kinh tế ở Việt Nam” tại Hà Nội. Diễn đàn có sự tham gia của nhiều chuyên gia kinh tế như PGS.TS Bùi Quang Tuấn, TS. Võ Trí Thành, cùng đại diện cộng đồng khởi nghiệp.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, là một trong các diễn giả, tập trung vào chuyển đổi cơ cấu và vai trò của đổi mới công nghệ trong “chuyển đổi kép” xanh và số.",
        "Ông phân tích xu hướng chuyển dịch cơ cấu: tỷ trọng công nghiệp và xây dựng tăng từ 32,1% GDP năm 2010 lên 38,1% năm 2023; công nghiệp chế biến, chế tạo tăng từ 13% lên 25%; kinh tế số chiếm khoảng 14,3% GDP năm 2023. Bên cạnh đó vẫn còn nhiều thách thức: năng suất lao động thấp so với khu vực, ứng dụng công nghệ mới hạn chế, phụ thuộc nhiều vào đầu tư nước ngoài và xuất khẩu, phát triển chưa đồng đều giữa các vùng, ô nhiễm gia tăng và lực lượng lao động chưa đáp ứng yêu cầu. Theo ông, các công nghệ như tự động hóa và robot, IoT và dữ liệu lớn, trí tuệ nhân tạo, in 3D, thực tế ảo/tăng cường, blockchain và điện toán đám mây là nền tảng cho chuyển đổi kép. Dẫn kinh nghiệm một số doanh nghiệp tiên phong, ông đúc kết năm lưu ý: tích hợp chuyển đổi kép vào chiến lược kinh doanh; hợp tác trong và ngoài nước; xây dựng văn hóa bền vững và đổi mới; đào tạo nhân lực; đầu tư nghiên cứu – phát triển.",
        "Ở tầm chính sách, TS. Chử Đức Hoàng gợi ý Việt Nam tham chiếu cách tiếp cận nhiều thành phần như ở châu Âu để vừa “xanh” vừa “số”, bắt đầu từ khung pháp lý đầy đủ về chuyển đổi số và môi trường, cùng các cấu phần năng lượng sạch, công nghiệp xanh, giao thông thông minh và cơ chế tài chính cho dự án xanh. Cách tiếp cận coi thể chế là điều kiện đầu tiên này phù hợp với tinh thần mà Nghị quyết 57-NQ/TW ban hành cuối năm 2024 nhấn mạnh."
      ],
      "en": [
        "On the afternoon of 7 August 2024, Corporate Finance Magazine (Tap chi Tai chinh Doanh nghiep), with partner organisations, held the forum “Accelerating the renewal of Vietnam's growth model” in Hanoi. Speakers included economists such as Assoc. Prof. Bui Quang Tuan and Dr. Vo Tri Thanh, as well as representatives of the start-up community.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, was one of the speakers, focusing on structural change and the role of technology innovation in the green-and-digital “twin transition”.",
        "He reviewed the shift in Vietnam's economic structure: industry and construction rose from 32.1% of GDP in 2010 to 38.1% in 2023; manufacturing grew from 13% to 25%; and the digital economy accounted for about 14.3% of GDP in 2023. Challenges remain, he said: labour productivity is low by regional standards, new technology is not widely applied, the economy depends heavily on foreign investment and exports, development is uneven across regions, pollution is rising and the workforce is not yet ready for a modern economy. He described automation and robotics, IoT and big data, artificial intelligence, 3D printing, virtual and augmented reality, blockchain and cloud computing as the foundations of the twin transition. Drawing on the experience of pioneering companies, he set out five lessons: build the twin transition into business strategy; cooperate with domestic and foreign partners; foster a culture of sustainability and innovation; train people; and invest in research and development.",
        "At the policy level, Dr. Hoang suggested that Vietnam draw on a multi-component approach like Europe's to become both green and digital, starting with a complete legal framework for digital transformation and the environment, alongside clean energy, green industry, smart transport and financing mechanisms for green projects. Treating institutions as the starting point is consistent with the emphasis later placed by Resolution 57-NQ/TW at the end of 2024."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Tài chính Doanh nghiệp",
        "title": "Diễn đàn Đẩy mạnh đổi mới mô hình tăng trưởng kinh tế ở Việt Nam",
        "url": "https://taichinhdoanhnghiep.net.vn/dien-dan-day-manh-doi-moi-mo-hinh-tang-truong-kinh-te-o-viet-nam-d50936.html",
        "date": "07/08/2024"
      },
      {
        "outlet": "Chinhphu.vn (media.chinhphu.vn)",
        "title": "Mô hình 11 thành phần trong chuyển đổi kép",
        "url": "https://media.chinhphu.vn/mo-hinh-11-thanh-phan-trong-chuyen-doi-kep-102240812160228061.htm",
        "date": "13/08/2024"
      },
      {
        "outlet": "Doanh nghiệp và Hội nhập",
        "title": "Bứt phá và tăng trưởng bền vững trong kinh doanh nhờ xu hướng \"chuyển đổi kép\"",
        "url": "https://doanhnghiephoinhap.vn/but-pha-va-tang-truong-ben-vung-trong-kinh-doanh-nho-xu-huong-chuyen-doi-kep-80622.html",
        "date": "07/08/2024"
      },
      {
        "outlet": "Diễn đàn Doanh nghiệp",
        "title": "Diễn đàn Đổi mới mô hình tăng trưởng Kinh tế: Phân tích và đề xuất từ các chuyên gia",
        "url": "https://diendandoanhnghiep.vn/dien-dan-doi-moi-mo-hinh-tang-truong-kinh-te-phan-tich-va-de-xuat-tu-cac-chuyen-gia-10140364.html",
        "date": "09/08/2024"
      }
    ]
  },
  {
    "slug": "2024-06-08-bcg-tech-chuyen-doi-kep",
    "date": "2024-06-08",
    "category": "innovation",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "title": {
      "vi": "BCG Tech 2024: TS. Chử Đức Hoàng bàn về chuyển đổi số để chuyển đổi xanh",
      "en": "At BCG Tech 2024, Dr. Chu Duc Hoang speaks on the “twin transition”: going digital to go green"
    },
    "excerpt": {
      "vi": "Với tư cách Phó Chủ tịch Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam, TS. Chử Đức Hoàng nhấn mạnh kinh tế số và kinh tế xanh là xu hướng tất yếu và con đường phát triển bền vững cho Việt Nam.",
      "en": "Speaking as Vice President of the Vietnam Association of Young Scientists and Engineers (VAYSE), Dr. Chu Duc Hoang said the digital and green economies are an inevitable trend and a path to sustainable development for Vietnam."
    },
    "keyPoints": {
      "vi": [
        "Kinh tế số và kinh tế xanh là xu hướng tất yếu, gắn với mục tiêu phát triển bền vững và thu nhập cao vào năm 2045.",
        "Đổi mới công nghệ giúp chuyển cơ cấu kinh tế từ gia công, lắp ráp sang sáng tạo và làm chủ công nghệ.",
        "Cần một chiến lược quốc gia rõ ràng, đồng bộ: thể chế, hạ tầng, nhân lực, huy động nguồn lực và hợp tác quốc tế về KH&CN.",
        "Doanh nghiệp, cơ sở nghiên cứu – đào tạo và người dân đều cần chủ động đổi mới, tăng liên kết và học hỏi."
      ],
      "en": [
        "The digital and green economies are an inevitable trend, tied to the goal of sustainable, high-income development by 2045.",
        "Technology innovation helps shift the economy from processing and assembly to creating and mastering technology.",
        "A clear, coherent national strategy is needed: institutions, infrastructure, human resources, resource mobilisation and international S&T cooperation.",
        "Businesses, research and training institutions and citizens all need to innovate, strengthen links and keep learning."
      ]
    },
    "body": {
      "vi": [
        "Ngày 08/6/2024, CLB Doanh nhân Kết nối Toàn cầu (BCG) tổ chức hội thảo “BCG Tech 2024: Ứng dụng các giải pháp trí tuệ nhân tạo phục vụ thương mại điện tử và chuyển đổi số cho doanh nghiệp”. Hội thảo hướng tới giới thiệu cho cộng đồng doanh nghiệp các xu hướng và giải pháp AI nhằm tối ưu hoạt động kinh doanh, nâng cao trải nghiệm khách hàng.",
        "Tham gia với tư cách Phó Chủ tịch Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam (VAYSE), TS. Chử Đức Hoàng trình bày chủ đề “Chuyển đổi kép – chuyển đổi số để chuyển đổi xanh”.",
        "Theo ông, kinh tế số và kinh tế xanh không chỉ là xu hướng tất yếu mà còn là con đường để Việt Nam phát triển bền vững, hướng tới mục tiêu thu nhập cao vào năm 2045. Ông nhấn mạnh vai trò của đổi mới công nghệ và sáng tạo trong việc sử dụng tài nguyên hiệu quả, giảm phát thải và ứng phó biến đổi khí hậu; đồng thời coi đổi mới công nghệ là động lực để chuyển cơ cấu kinh tế từ gia công, lắp ráp sang sáng tạo và làm chủ công nghệ, tham gia sâu hơn vào chuỗi giá trị toàn cầu. Để hiện thực hóa, ông đề xuất một chiến lược quốc gia rõ ràng, đồng bộ, bao gồm hoàn thiện thể chế, phát triển hạ tầng và nhân lực, huy động nguồn lực và hợp tác quốc tế về khoa học – công nghệ. Ông cũng chỉ ra vai trò của từng chủ thể: doanh nghiệp đổi mới tư duy và đầu tư công nghệ; trường đại học, viện nghiên cứu đổi mới chương trình đào tạo, tăng liên kết với doanh nghiệp; người dân không ngừng học hỏi.",
        "Bài chia sẻ tại một diễn đàn của cộng đồng doanh nhân cho thấy vai trò của TS. Chử Đức Hoàng trong việc kết nối giới khoa học – công nghệ trẻ với doanh nghiệp. Quan điểm của ông về mối liên kết Nhà nước – nhà khoa học – doanh nghiệp và về thể chế cũng gần với những định hướng mà Nghị quyết 57-NQ/TW (12/2024) sau này nêu rõ."
      ],
      "en": [
        "On 8 June 2024, the Global Business Connection Club (BCG) held the seminar “BCG Tech 2024: Applying artificial intelligence solutions for e-commerce and digital transformation in enterprises”. The event aimed to introduce businesses to AI trends and solutions that optimise operations and improve customer experience.",
        "Attending as Vice President of the Vietnam Association of Young Scientists and Engineers (VAYSE), Dr. Chu Duc Hoang presented on the theme “The twin transition — going digital to go green”.",
        "In his view, the digital and green economies are not only an inevitable trend but also Vietnam's path to sustainable development and its goal of high-income status by 2045. He stressed the role of technology and innovation in using resources efficiently, cutting emissions and responding to climate change, and described technology innovation as the driver for shifting the economy from processing and assembly to creating and mastering technology and integrating more deeply into global value chains. To get there, he called for a clear, coherent national strategy covering institutional reform, infrastructure and human resources, resource mobilisation and international cooperation in science and technology. He also set out the role of each actor: businesses should renew their thinking and invest in technology; universities and research institutes should update curricula and work more closely with industry; and citizens should keep learning.",
        "The talk, given at a business-community forum, illustrates Dr. Hoang's role in connecting young scientists and engineers with enterprises. His emphasis on links between the State, scientists and businesses, and on institutions, is close to directions later set out explicitly in Politburo Resolution 57-NQ/TW (December 2024)."
      ]
    },
    "sources": [
      {
        "outlet": "Doanh nghiệp & Chính sách",
        "title": "Tiến sĩ Chử Đức Hoàng: Làm Sáng Tạo và Xanh - Chìa Khóa Cho Phát Triển Bền Vững của Việt Nam",
        "url": "https://doanhnghiepchinhsach.vn/tin-trong-nuoc/tien-si-chu-duc-hoang-lam-sang-tao-va-xanh-moi-chia-khoa-cho-phat-trien-ben-vung-cua-viet-nam-55.html",
        "date": "08/06/2024"
      },
      {
        "outlet": "Tạp chí Sinh thái nông nghiệp",
        "title": "Phó Chủ tịch VAYSE: Kinh tế số và kinh tế xanh là xu hướng tất yếu và con đường phát triển bền vững cho Việt Nam",
        "url": "https://sinhthainongnghiep.net.vn/pho-chu-tich-vayse-kinh-te-so-va-kinh-te-xanh-la-xu-huong-tat-yeu-va-con-duong-phat-trien-ben-vung-cho-viet-nam-a29594.html",
        "date": "08/06/2024"
      }
    ]
  },
  {
    "slug": "2024-04-17-vov-kinh-te-xanh",
    "date": "2024-04-17",
    "category": "innovation",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Đổi mới công nghệ là then chốt của kinh tế số, kinh tế xanh",
      "en": "Dr. Chu Duc Hoang: Technology innovation is the key to Vietnam's digital and green economy"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn “Doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh” của Báo điện tử VOV, TS. Chử Đức Hoàng phân tích các điểm nghẽn về vốn, dữ liệu, hạ tầng, nhân lực và đề xuất giải pháp cho “chuyển đổi kép”.",
      "en": "At VOV's forum “Vietnamese businesses: Promoting the green economy”, Dr. Chu Duc Hoang analysed bottlenecks in capital, data, infrastructure and skills, and proposed solutions for the “twin transition”."
    },
    "keyPoints": {
      "vi": [
        "Đổi mới công nghệ thúc đẩy công nghệ sạch, năng lượng tái tạo và chuyển đổi số trong doanh nghiệp – then chốt của kinh tế số và kinh tế xanh.",
        "Thách thức: thị trường vốn xanh còn sơ khai; gần 80% dữ liệu phân tán, mới khoảng 30% đơn vị hành chính công cung cấp dữ liệu mở; rủi ro an ninh mạng.",
        "Thiếu nhân lực: khoảng 500.000 nhân lực CNTT so với nhu cầu 1 triệu vào năm 2025; gần 77% lao động chế biến, chế tạo chưa qua đào tạo hoặc chỉ đào tạo sơ cấp.",
        "Đề xuất tăng đầu tư R&D, ưu đãi vốn và thuế, thành lập quỹ đầu tư mạo hiểm, hoàn thiện pháp lý và ưu tiên nguồn lực cho nhân lực chất lượng cao."
      ],
      "en": [
        "Technology innovation drives clean technology, renewable energy and digital transformation in firms — the key to the digital and green economy.",
        "Challenges: green capital markets are nascent; nearly 80% of data is scattered and only about 30% of public administrative units provide open data; cyber-security risks are rising.",
        "Skills gap: about 500,000 IT workers versus a need for 1 million by 2025; nearly 77% of manufacturing workers are untrained or have only elementary training.",
        "He proposed more R&D investment, capital and tax incentives, venture capital funds, a better legal framework and priority resources for high-quality human capital."
      ]
    },
    "body": {
      "vi": [
        "Ngày 17/4/2024, Báo điện tử VOV tổ chức Diễn đàn “Doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh” tại Hà Nội, với sự tham gia của đại diện cơ quan Quốc hội, bộ ngành, doanh nghiệp và chuyên gia trong lĩnh vực chuyển đổi số, chuyển đổi xanh.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, trình bày tham luận “Đổi mới công nghệ: Then chốt quan trọng trong phát triển kinh tế xanh”. Ông nêu rằng tại Việt Nam, đổi mới công nghệ chủ yếu vẫn là ứng dụng, cải tiến công nghệ sẵn có, chưa chú trọng nghiên cứu phát triển công nghệ nguồn.",
        "Phân tích các thách thức của “chuyển đổi kép”, ông chỉ ra doanh nghiệp khó tiếp cận vốn cho công nghệ xanh, công nghệ số do thị trường trái phiếu xanh, chứng khoán xanh còn sơ khai; gần 80% dữ liệu nằm rải rác ở các bộ, ngành, mới khoảng 30% đơn vị hành chính công cung cấp dữ liệu mở; rủi ro an ninh mạng gia tăng. Hạ tầng 5G còn hạn chế; nhân lực CNTT mới khoảng 500.000 người so với nhu cầu 1 triệu vào năm 2025. Hơn 97% doanh nghiệp là nhỏ và siêu nhỏ, chỉ khoảng 5% tham gia chuỗi giá trị toàn cầu. Ông dẫn ví dụ về tiềm năng giảm phát thải: thay 1 triệu xe máy xăng bằng xe điện có thể giảm khoảng 1,8 triệu tấn CO2 mỗi năm. Với ngành bán dẫn, ông khuyến nghị doanh nghiệp đầu tư cơ sở vật chất, hạ tầng nghiên cứu thay vì chỉ dừng ở khâu thiết kế vi mạch.",
        "Về giải pháp, TS. Chử Đức Hoàng đề xuất tăng đầu tư cho nghiên cứu – phát triển, ưu đãi vốn và thuế cho doanh nghiệp đổi mới công nghệ, thành lập các quỹ đầu tư mạo hiểm hỗ trợ khởi nghiệp công nghệ; hoàn thiện khung pháp lý và hệ thống chia sẻ dữ liệu quốc gia; ưu tiên nguồn lực phát triển nhân lực chất lượng cao. Một số định hướng này, như quỹ đầu tư mạo hiểm và cơ chế tài chính cho đổi mới sáng tạo, sau đó đã được thể chế hóa trong Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025."
      ],
      "en": [
        "On 17 April 2024, VOV Online held the forum “Vietnamese businesses: Promoting the green economy” in Hanoi, bringing together representatives of National Assembly bodies, ministries, businesses and experts in digital and green transformation.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, presented a paper entitled “Technology innovation: a crucial key to developing the green economy”. He noted that in Vietnam, technology innovation still mostly means applying and improving existing technologies, with too little attention to developing core technologies.",
        "Turning to the challenges of the “twin transition”, he said firms struggle to finance green and digital technologies because markets for green bonds and green securities are still nascent; nearly 80% of data is scattered across ministries and only about 30% of public administrative units provide open data; and cyber-security risks are growing. 5G infrastructure is limited, and the IT workforce stands at about 500,000 against a need for 1 million by 2025. More than 97% of firms are small or micro, and only about 5% take part in global value chains. He illustrated the potential for emissions cuts: replacing one million petrol motorbikes with electric ones could cut about 1.8 million tonnes of CO2 a year. For the semiconductor sector, he advised firms to invest in facilities and research infrastructure rather than stopping at chip design.",
        "As solutions, Dr. Hoang proposed more investment in research and development, capital and tax incentives for innovating firms, and venture capital funds to support tech start-ups; a stronger legal framework and a national data-sharing system; and priority resources for high-quality human capital. Some of these directions, such as venture capital funds and financial mechanisms for innovation, were later institutionalised in the 2025 Law on Science, Technology and Innovation."
      ]
    },
    "sources": [
      {
        "outlet": "Báo điện tử VOV",
        "title": "Toàn cảnh Diễn đàn \"doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh\"",
        "url": "https://vov.vn/kinh-te/toan-canh-dien-dan-doanh-nghiep-viet-nam-day-manh-phat-trien-kinh-te-xanh-post1089697.vov",
        "date": "17/04/2024"
      },
      {
        "outlet": "Báo Thanh Niên",
        "title": "Việt Nam đang thiếu nhân lực chuyển đổi kinh tế số, kinh tế xanh",
        "url": "https://thanhnien.vn/viet-nam-dang-thieu-nhan-luc-chuyen-doi-kinh-te-so-kinh-te-xanh-18524041719245761.htm",
        "date": "17/04/2024"
      },
      {
        "outlet": "Thời báo Ngân hàng",
        "title": "Đổi mới công nghệ - chìa khóa phát triển kinh tế số, kinh tế xanh",
        "url": "https://thoibaonganhang.vn/doi-moi-cong-nghe-chia-khoa-phat-trien-kinh-te-so-kinh-te-xanh-150953.html",
        "date": "17/04/2024"
      },
      {
        "outlet": "Báo Đầu tư",
        "title": "\"Chuyển đổi kép\" - chuyển đổi số để chuyển đổi xanh",
        "url": "https://baodautu.vn/chuyen-doi-kep---chuyen-doi-so-de-chuyen-doi-xanh-d213258.html",
        "date": "17/04/2024"
      }
    ],
    "cover": {
      "src": "/news/2024-04-17-vov-kinh-te-xanh/1.jpg",
      "caption": {
        "vi": "TS. Chử Đức Hoàng phát biểu tại Diễn đàn Doanh nghiệp Việt Nam: Đẩy mạnh phát triển kinh tế xanh.",
        "en": "Dr. Chu Duc Hoang speaking at the Vietnam Business Forum on the green economy."
      }
    },
    "gallery": [
      {
        "src": "/news/2024-04-17-vov-kinh-te-xanh/2.jpg",
        "caption": {
          "vi": "Phiên thảo luận tại diễn đàn.",
          "en": "Discussion session at the forum."
        }
      }
    ],
    "photoCredit": {
      "vi": "Ban tổ chức (Báo Điện tử VOV)",
      "en": "Organizers (VOV)"
    }
  },
  {
    "slug": "2024-02-09-hoa-nhap-du-lieu-doi-moi-sang-tao",
    "date": "2024-02-09",
    "category": "innovation",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Dữ liệu là nền tảng đổi mới sáng tạo của doanh nghiệp",
      "en": "Dr. Chu Duc Hoang: Data is the core foundation of innovation in enterprises"
    },
    "excerpt": {
      "vi": "Trả lời phỏng vấn Tạp chí Hòa Nhập, TS. Chử Đức Hoàng phân tích ba nhóm dữ liệu doanh nghiệp cần cho đổi mới công nghệ, những thách thức và giải pháp để khai thác dữ liệu hiệu quả.",
      "en": "In an interview with Hoa Nhap magazine, Dr. Chu Duc Hoang discussed the three groups of data enterprises need for technology innovation, the obstacles they face, and how to use data effectively."
    },
    "keyPoints": {
      "vi": [
        "Dữ liệu là nền tảng cốt lõi giúp doanh nghiệp nắm bắt xu hướng công nghệ, thị trường và ra quyết định đổi mới đúng đắn.",
        "Ba nhóm dữ liệu then chốt: dữ liệu công nghệ, dữ liệu thị trường – khách hàng, và dữ liệu hoạt động – hiệu quả kinh doanh.",
        "Thách thức lớn: hạ tầng CNTT và chi phí đầu tư ban đầu, thiếu nhân lực phân tích dữ liệu, lo ngại bảo mật, nhận thức còn hạn chế.",
        "Cần sự chung tay của Nhà nước, viện – trường và doanh nghiệp: hạ tầng dữ liệu quốc gia, đào tạo nhân lực, văn hóa chia sẻ dữ liệu."
      ],
      "en": [
        "Data is the core foundation that lets enterprises read technology and market trends and make sound innovation decisions.",
        "Three key data groups: technology data, market and customer data, and data on the firm's own operations and performance.",
        "Main obstacles: IT infrastructure and upfront cost, a shortage of data-analysis skills, security concerns and limited awareness.",
        "Joint action is needed from the State, research institutes, universities and businesses: national data infrastructure, training and a data-sharing culture."
      ]
    },
    "body": {
      "vi": [
        "Trong cuộc trao đổi với Tạp chí Hòa Nhập đăng ngày 09/02/2024, TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, chia sẻ quan điểm về vai trò của dữ liệu đối với đổi mới công nghệ và đổi mới sáng tạo tại doanh nghiệp trong bối cảnh Cách mạng công nghiệp lần thứ tư.",
        "Theo ông, dữ liệu là nền tảng cốt lõi của mọi hoạt động đổi mới: thiếu dữ liệu, doanh nghiệp khó nắm bắt xu hướng công nghệ, thị hiếu khách hàng hay đánh giá hiệu quả của sáng kiến mới. Ông phân loại ba nhóm dữ liệu then chốt. Trước hết là dữ liệu về công nghệ – xu hướng, công nghệ tiên tiến trong lĩnh vực hoạt động và so sánh ưu nhược điểm để lựa chọn giải pháp phù hợp. Tiếp đến là dữ liệu về thị trường và khách hàng, giúp nhận diện cơ hội và ý tưởng đổi mới. Cuối cùng là dữ liệu về hoạt động và hiệu quả kinh doanh của chính doanh nghiệp như chi phí, doanh thu, năng suất, chất lượng.",
        "TS. Chử Đức Hoàng cũng chỉ ra những trở ngại: hạ tầng công nghệ thông tin và chi phí đầu tư ban đầu còn lớn với doanh nghiệp nhỏ và vừa; nhân lực phân tích dữ liệu khan hiếm; lo ngại về bảo mật khiến doanh nghiệp e dè chia sẻ dữ liệu; và nhận thức của một bộ phận nhà quản lý về giá trị của dữ liệu còn hạn chế. Ông đề xuất doanh nghiệp xây dựng chiến lược dữ liệu, đầu tư hạ tầng và con người; Nhà nước đẩy mạnh hạ tầng và nền tảng dữ liệu quốc gia; các trường, viện mở rộng đào tạo khoa học dữ liệu; hiệp hội ngành nghề tạo diễn đàn chia sẻ dữ liệu.",
        "Cuộc phỏng vấn cho thấy cách tiếp cận của TS. Chử Đức Hoàng: đổi mới công nghệ cần được dẫn dắt bằng thông tin và dữ liệu, với sự phối hợp giữa Nhà nước, giới nghiên cứu và doanh nghiệp. Đây cũng là chủ đề ông tiếp tục phát triển trong các diễn đàn sau đó về dữ liệu đổi mới công nghệ cho doanh nghiệp."
      ],
      "en": [
        "In an interview published by Hoa Nhap magazine on 9 February 2024, Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, shared his views on the role of data in technology innovation and innovation within enterprises in the era of the Fourth Industrial Revolution.",
        "He described data as the core foundation of all innovation: without it, businesses struggle to follow technology trends, understand customer preferences or assess whether new initiatives work. He outlined three key groups of data. First, technology data — trends, advanced technologies in the firm's field and comparisons of their pros and cons to choose suitable solutions. Second, market and customer data, which help identify opportunities and innovation ideas. Third, data on the firm's own operations and performance, such as costs, revenue, productivity and quality.",
        "Dr. Hoang also pointed to obstacles: IT infrastructure and upfront investment remain heavy for small and medium-sized firms; data-analysis talent is scarce; security concerns make businesses wary of sharing data; and some managers still underestimate the value of data. He suggested that firms build a data strategy and invest in infrastructure and people; that the State strengthen national data infrastructure and platforms; that universities and institutes expand data-science training; and that industry associations create forums for data sharing.",
        "The interview reflects Dr. Hoang's approach: technology innovation should be driven by information and data, with cooperation between the State, the research community and businesses. It is a theme he continued to develop at later events on technology-innovation data for enterprises."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Hòa Nhập",
        "title": "Dữ liệu quan trọng ra sao với doanh nghiệp trong Cách mạng công nghiệp 4.0?",
        "url": "https://hoanhap.vn/chi-tiet/du-lieu-chia-khoa-cho-doi-moi-cong-nghe-va-doi-moi-sang-tao-tai-doanh-nghiep1707450415.html",
        "date": "09/02/2024"
      }
    ]
  },
  {
    "slug": "2023-12-14-vov-thi-truong-dien-khi-lng",
    "date": "2023-12-14",
    "category": "science",
    "role": {
      "vi": "Điều phối và trình bày báo cáo chuyên đề",
      "en": "Moderator and keynote speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng điều phối diễn đàn điện khí, chỉ ra thách thức nguồn cung, giá LNG",
      "en": "Dr. Chu Duc Hoang moderates gas-power forum, outlines LNG supply and pricing challenges"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn “Tiềm năng phát triển thị trường điện khí tại Việt Nam” do Báo điện tử VOV tổ chức, TS. Chử Đức Hoàng vừa điều phối, vừa trình bày báo cáo chuyên đề về hiện trạng và tiềm năng của thị trường điện khí.",
      "en": "At the VOV forum “Potential for developing the gas-fired power market in Vietnam”, Dr. Chu Duc Hoang both moderated the discussion and delivered the keynote report on the state and potential of the market."
    },
    "keyPoints": {
      "vi": [
        "Việt Nam chưa có quy hoạch cụ thể, chi tiết cho điện khí LNG và sẽ phụ thuộc phần lớn vào khí LNG nhập khẩu.",
        "Giá LNG nhập khẩu khoảng 10–12 USD/triệu BTU, lên 12–14 USD sau tồn trữ, tái hóa khí và vận chuyển, khiến giá thành điện ước khoảng 9,2 cent/kWh.",
        "Chỉ ra nhiều nhóm thách thức: quy hoạch, hạ tầng, nguồn cung, giá, thị trường, công nghệ và khung pháp lý.",
        "Kiến nghị nghiên cứu phương án giá tối ưu, bổ sung chính sách phát triển thị trường khí và đẩy mạnh đầu tư hạ tầng khí."
      ],
      "en": [
        "Vietnam has no specific, detailed plan for LNG power yet and will rely largely on imported LNG.",
        "Imported LNG costs about USD 10–12 per million BTU, rising to USD 12–14 after storage, regasification and transport, putting generation cost at an estimated 9.2 US cents/kWh.",
        "He identified challenges in planning, infrastructure, supply, pricing, market design, technology and the legal framework.",
        "He recommended studying an optimal pricing approach, adding policies to develop the gas market, and stepping up investment in gas infrastructure."
      ]
    },
    "body": {
      "vi": [
        "Ngày 14/12/2023, Báo điện tử VOV (Đài Tiếng nói Việt Nam) tổ chức Diễn đàn “Tiềm năng phát triển thị trường điện khí tại Việt Nam” tại Hà Nội. Diễn đàn có sự tham dự của ông Tạ Đình Thi, Phó Chủ nhiệm Ủy ban Khoa học, Công nghệ và Môi trường của Quốc hội; ông Phạm Mạnh Hùng, Phó Tổng Giám đốc Đài Tiếng nói Việt Nam, phát biểu khai mạc; cùng đại diện doanh nghiệp ngành khí và các chuyên gia kinh tế.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, giữ vai trò điều phối diễn đàn, đồng thời trình bày báo cáo chuyên đề về hiện trạng thị trường điện khí tại Việt Nam và tiềm năng phát triển.",
        "Theo phân tích của ông, Việt Nam hiện chưa có quy hoạch phát triển điện khí LNG cụ thể và chi tiết, trong khi sẽ phải phụ thuộc phần lớn vào khí LNG nhập khẩu; vì vậy nguồn cung và giá khí là thách thức lớn. Ông tính toán giá LNG nhập về dao động 10–12 USD/triệu BTU; cộng chi phí tồn trữ, tái hóa khí và vận chuyển, giá đến hàng rào nhà máy điện có thể ở mức 12–14 USD, khiến giá thành điện ước khoảng 9,2 cent/kWh – cao hơn mức giá bán lẻ điện bình quân khi đó. Báo cáo cũng điểm qua các nhóm thách thức về quy hoạch, hạ tầng, thị trường, công nghệ và khung pháp lý, đồng thời ghi nhận việc dùng LNG trong ngành điện giúp giảm phát thải CO2 so với nguồn truyền thống.",
        "Về giải pháp, TS. Chử Đức Hoàng cho rằng “muốn bán được điện, giá phải phù hợp”, do đó cần nghiên cứu phương án giá tối ưu cho điện khí và bổ sung chính sách phát triển thị trường khí. Ông kiến nghị đẩy mạnh đầu tư hạ tầng khí gắn với lưu trữ, vận chuyển, nhà máy, cùng chính sách hỗ trợ để thu hút nguồn lực trong nước và quốc tế.",
        "Với vai trò vừa điều phối vừa trình bày nội dung chính, TS. Chử Đức Hoàng góp phần kết nối góc nhìn của cơ quan lập pháp, doanh nghiệp và chuyên gia về một lĩnh vực năng lượng giàu tính công nghệ."
      ],
      "en": [
        "On 14 December 2023, VOV Online (Voice of Vietnam) held the forum “Potential for developing the gas-fired power market in Vietnam” in Hanoi. Participants included Mr. Ta Dinh Thi, Vice Chairman of the National Assembly's Committee for Science, Technology and Environment; Mr. Pham Manh Hung, Deputy Director General of the Voice of Vietnam, who gave the opening remarks; and representatives of gas companies and economists.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, moderated the forum and also delivered its keynote report on the current state and development potential of Vietnam's gas-fired power market.",
        "In his analysis, Vietnam does not yet have a specific, detailed plan for LNG-fired power and will depend largely on imported LNG, making supply and price major challenges. He estimated imported LNG at USD 10–12 per million BTU; adding storage, regasification and transport, the delivered price at the power plant could reach USD 12–14, putting generation cost at around 9.2 US cents/kWh — higher than the average retail electricity price at the time. The report also reviewed challenges in planning, infrastructure, market design, technology and the legal framework, while noting that using LNG for power reduces CO2 emissions compared with traditional sources.",
        "On solutions, Dr. Hoang argued that electricity can only be sold if the price is right, so an optimal pricing approach for gas power should be studied and policies to develop a gas market added. He recommended stronger investment in gas infrastructure — storage, transport and plants — together with support policies to attract domestic and international capital.",
        "By both moderating and presenting the main report, Dr. Hoang helped bring together the perspectives of lawmakers, businesses and experts on a technology-intensive energy segment."
      ]
    },
    "sources": [
      {
        "outlet": "Báo điện tử VOV",
        "title": "Toàn cảnh Diễn đàn \"Tiềm năng phát triển thị trường điện khí tại Việt Nam\"",
        "url": "https://vov.vn/kinh-te/toan-canh-dien-dan-tiem-nang-phat-trien-thi-truong-dien-khi-tai-viet-nam-post1065443.vov",
        "date": "14/12/2023"
      },
      {
        "outlet": "VnExpress",
        "title": "Nhiều thách thức khi phát triển điện khí LNG",
        "url": "https://vnexpress.net/nhieu-thach-thuc-khi-phat-trien-dien-khi-lng-4688645.html",
        "date": "14/12/2023"
      },
      {
        "outlet": "Báo Tiền Phong",
        "title": "8 thách thức khi phát triển điện khí tại Việt Nam",
        "url": "https://tienphong.vn/8-thach-thuc-khi-phat-trien-dien-khi-tai-viet-nam-post1595661.tpo",
        "date": "14/12/2023"
      },
      {
        "outlet": "EVN",
        "title": "\"Tiềm năng phát triển thị trường điện khí tại Việt Nam\"",
        "url": "https://evn.com.vn/d/vi-VN/news/Tiem-nang-phat-trien-thi-truong-dien-khi-tai-Viet-Nam-60-12-122672",
        "date": "14/12/2023"
      }
    ]
  },
  {
    "slug": "2023-10-12-vov-trien-vong-nganh-nang-luong",
    "date": "2023-10-12",
    "category": "science",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Đổi mới công nghệ là chìa khóa chuyển dịch sang năng lượng sạch",
      "en": "Dr. Chu Duc Hoang: Technology innovation is key to moving from traditional to clean energy"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn “Triển vọng ngành năng lượng Việt Nam” do Báo điện tử VOV tổ chức, TS. Chử Đức Hoàng cảnh báo về giới hạn của nhiên liệu hóa thạch và nhấn mạnh vai trò của đổi mới công nghệ trong chuyển dịch năng lượng.",
      "en": "At the “Prospects for Vietnam's Energy Sector” forum hosted by VOV, Dr. Chu Duc Hoang warned about the limits of fossil fuels and stressed the role of technology innovation in the energy transition."
    },
    "keyPoints": {
      "vi": [
        "Với mức tiêu thụ hiện nay, thế giới chỉ còn khoảng 70–100 năm sử dụng than, dầu và khí; với Việt Nam là khoảng 70–80 năm.",
        "Phụ thuộc vào một số ít quốc gia sản xuất nhiên liệu hóa thạch tiềm ẩn rủi ro an ninh năng lượng khi có xung đột chính trị, kinh tế.",
        "Đổi mới công nghệ – từ lưu trữ, pin đến thu năng lượng mặt trời hiệu quả hơn – là then chốt để chuyển sang năng lượng sạch.",
        "Tiết kiệm năng lượng là cần thiết, nhưng đổi mới công nghệ vẫn là yếu tố cốt lõi."
      ],
      "en": [
        "At current consumption, the world has roughly 70–100 years of coal, oil and gas left; for Vietnam the horizon is about 70–80 years.",
        "Reliance on a small number of fossil-fuel producing countries creates energy-security risks in times of political or economic conflict.",
        "Technology innovation — from storage and batteries to more efficient solar harvesting — is key to the shift to clean energy.",
        "Energy saving matters, but technology innovation remains the core factor."
      ]
    },
    "body": {
      "vi": [
        "Ngày 12/10/2023, tại Hà Nội, Báo điện tử VOV (Đài Tiếng nói Việt Nam) phối hợp với các đơn vị liên quan tổ chức Diễn đàn “Triển vọng ngành năng lượng Việt Nam”. Đại diện cơ quan lập pháp, bộ ngành, chuyên gia và doanh nghiệp đã thảo luận về nhu cầu năng lượng tăng cao, an ninh năng lượng và hướng chuyển dịch sang năng lượng sạch.",
        "Tham dự với tư cách Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia, Bộ Khoa học và Công nghệ, TS. Chử Đức Hoàng trình bày tham luận “Từ năng lượng truyền thống đến năng lượng sạch: Vai trò của đổi mới công nghệ”.",
        "Mở đầu, ông dẫn các số liệu về trữ lượng và mức tiêu thụ than đá, dầu mỏ, khí đốt để cho thấy thế giới chỉ còn khoảng 70–100 năm sử dụng ba nguồn năng lượng truyền thống này; riêng với Việt Nam, nếu giữ mức sử dụng hiện nay, thời gian còn lại vào khoảng 70–80 năm. Ông cũng lưu ý rằng khi nhu cầu tiêu thụ ở mức cao, việc phụ thuộc vào một số ít quốc gia sản xuất dầu mỏ, than đá và khí tự nhiên có thể tạo ra rủi ro về an ninh năng lượng, nhất là khi xảy ra xung đột chính trị hoặc kinh tế.",
        "Theo TS. Chử Đức Hoàng, chuyển sang năng lượng sạch – gồm điện mặt trời, điện gió và thủy điện – là nhu cầu cấp thiết chứ không chỉ là một lựa chọn. Trong quá trình đó, công nghệ giữ vai trò quyết định: từ các giải pháp thu và lưu trữ năng lượng như pin lưu trữ, công nghệ thu năng lượng mặt trời hiệu quả hơn, đến tối ưu hóa sử dụng năng lượng trong sản xuất và đời sống. Ông cho rằng dù tiết kiệm năng lượng rất quan trọng, đổi mới công nghệ vẫn là yếu tố cốt lõi.",
        "Tham luận thể hiện góc nhìn kết hợp giữa chuyên môn khoa học – công nghệ và kinh nghiệm thúc đẩy đổi mới công nghệ trong doanh nghiệp của TS. Chử Đức Hoàng: chuyển dịch năng lượng không chỉ là bài toán nguồn cung mà còn là bài toán năng lực công nghệ."
      ],
      "en": [
        "On 12 October 2023 in Hanoi, VOV Online (Voice of Vietnam), together with partner organisations, held the forum “Prospects for Vietnam's Energy Sector”. Lawmakers, ministry officials, experts and businesses discussed rising energy demand, energy security and the shift towards clean energy.",
        "Attending as Chief of Office of the National Technology Innovation Fund (NATIF) under the Ministry of Science and Technology, Dr. Chu Duc Hoang delivered a presentation entitled “From traditional energy to clean energy: the role of technology innovation”.",
        "He opened with data on global reserves and consumption of coal, oil and gas, showing that the world has only about 70–100 years left of these three traditional sources; for Vietnam, at current rates of use, the horizon is about 70–80 years. He also noted that, with demand running high, dependence on a few oil-, coal- and gas-producing countries can create energy-security risks, particularly in the event of political or economic conflict.",
        "In Dr. Hoang's view, moving to clean energy — solar, wind and hydropower — is an urgent need rather than merely an option. Technology plays a decisive role in that process, from harvesting and storage solutions such as batteries and more efficient solar technology to optimising energy use in production and daily life. While energy saving is important, he argued, technology innovation remains the core factor.",
        "The presentation reflected Dr. Hoang's combined perspective as a science and technology specialist and as someone working to promote technology innovation in enterprises: the energy transition is not only a question of supply, but also of technological capability."
      ]
    },
    "sources": [
      {
        "outlet": "Báo điện tử VOV",
        "title": "Toàn cảnh Diễn đàn \"Triển vọng ngành năng lượng Việt Nam\"",
        "url": "https://vov.vn/kinh-te/toan-canh-dien-dan-trien-vong-nganh-nang-luong-viet-nam-post1052057.vov",
        "date": "12/10/2023"
      },
      {
        "outlet": "Báo điện tử VOV",
        "title": "Thế giới chỉ còn từ 70 - 100 năm để sử dụng 3 loại năng lượng truyền thống",
        "url": "https://vov.vn/kinh-te/the-gioi-chi-con-tu-70-100-nam-de-su-dung-3-loai-nang-luong-truyen-thong-post1052137.vov",
        "date": "12/10/2023"
      },
      {
        "outlet": "Tạp chí Điện tử và Ứng dụng",
        "title": "Vai trò của đổi mới công nghệ từ năng lượng truyền thống đến năng lượng sạch",
        "url": "https://dientuungdung.vn/vai-tro-cua-doi-moi-cong-nghe-tu-nang-luong-truyen-thong-den-nang-luong-sach-5438.html",
        "date": "12/10/2023"
      },
      {
        "outlet": "Báo Pháp Luật Việt Nam",
        "title": "Việt Nam nguy cơ phụ thuộc nguồn năng lượng nhập khẩu",
        "url": "https://baophapluat.vn/viet-nam-nguy-co-phu-thuoc-nguon-nang-luong-nhap-khau-post491600.html",
        "date": "12/10/2023"
      }
    ],
    "cover": {
      "src": "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/1.jpg",
      "caption": {
        "vi": "TS. Chử Đức Hoàng trình bày tham luận tại Diễn đàn Triển vọng ngành năng lượng Việt Nam.",
        "en": "Dr. Chu Duc Hoang presenting at the Prospects for Vietnam's Energy Sector forum."
      }
    },
    "gallery": [
      {
        "src": "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/2.jpg",
        "caption": {
          "vi": "Toàn cảnh diễn đàn.",
          "en": "The forum hall."
        }
      },
      {
        "src": "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/3.jpg",
        "caption": {
          "vi": "Phát biểu tại diễn đàn.",
          "en": "Speaking at the forum."
        }
      },
      {
        "src": "/news/2023-10-12-vov-trien-vong-nganh-nang-luong/4.jpg",
        "caption": {
          "vi": "Phiên thảo luận.",
          "en": "Discussion session."
        }
      }
    ],
    "photoCredit": {
      "vi": "Ban tổ chức (Báo Điện tử VOV)",
      "en": "Organizers (VOV)"
    }
  },
  {
    "slug": "2023-05-26-hoi-thao-ung-dung-cong-nghe-y-sinh-uet",
    "date": "2023-05-26",
    "category": "science",
    "role": {
      "vi": "Báo cáo viên",
      "en": "Speaker"
    },
    "location": {
      "vi": "Trường Đại học Công nghệ, ĐHQGHN, Hà Nội",
      "en": "VNU University of Engineering and Technology, Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng báo cáo về giải pháp công nghệ chăm sóc sức khỏe tại UET",
      "en": "Dr. Chu Duc Hoang presents technology solutions for healthcare at a VNU-UET biomedical workshop"
    },
    "excerpt": {
      "vi": "Tại hội thảo ứng dụng công nghệ trong lĩnh vực y sinh ngày 26/5/2023, TS. Chử Đức Hoàng trình bày báo cáo “Các giải pháp công nghệ cho lĩnh vực chăm sóc sức khỏe”.",
      "en": "At a workshop on technology applications in biomedicine on 26 May 2023, Dr. Chu Duc Hoang delivered a report on technology solutions for healthcare."
    },
    "keyPoints": {
      "vi": [
        "Trình bày báo cáo “Các giải pháp công nghệ cho lĩnh vực chăm sóc sức khỏe”",
        "Hội thảo tập trung vào hệ thống tự động hóa và công nghệ micro-nano ứng dụng trong y sinh",
        "Diễn đàn kết nối chuyên gia kỹ thuật, bác sĩ lâm sàng và nhà quản lý trong một hướng nghiên cứu liên ngành"
      ],
      "en": [
        "Delivered the report “Technology solutions for the healthcare sector”",
        "The workshop focused on automation systems and micro-nano technologies for biomedical applications",
        "It connected engineers, clinicians and managers around an interdisciplinary research area"
      ]
    },
    "body": {
      "vi": [
        "Ngày 26/5/2023, Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội tổ chức hội thảo ứng dụng công nghệ trong lĩnh vực y sinh, do PGS.TS Bùi Thanh Tùng, Phó Chủ nhiệm Khoa Điện tử – Viễn thông, phát biểu khai mạc. Hội thảo gồm hai nội dung chính là các hệ thống tự động hóa và công nghệ micro-nano ứng dụng trong y sinh, với năm báo cáo của các chuyên gia trong và ngoài nước, trong đó có đại diện Bệnh viện Phụ sản Hà Nội, Trường ĐH Khoa học Tự nhiên (ĐHQGHN) và Đại học Thành phố Dublin (Ireland).",
        "TS. Chử Đức Hoàng (Bộ Khoa học và Công nghệ) trình bày báo cáo “Các giải pháp công nghệ cho lĩnh vực chăm sóc sức khỏe” trong chuỗi năm báo cáo của hội thảo. Phần thảo luận sau đó nhận được nhiều ý kiến trao đổi từ các chuyên gia và nhà quản lý, đặc biệt xoay quanh một dự án liên ngành về tự động hóa quy trình giám sát và trưởng thành trứng ngoài cơ thể, được triển khai trong khuôn khổ tài trợ của Đại sứ quán Ireland.",
        "Với nền tảng đào tạo tiến sĩ về kỹ thuật y sinh và nhiều năm làm việc trong lĩnh vực hỗ trợ đổi mới công nghệ, sự tham gia của TS. Chử Đức Hoàng tại hội thảo thể hiện mối gắn kết giữa nghiên cứu kỹ thuật y sinh trong trường đại học và định hướng ứng dụng công nghệ vào chăm sóc sức khỏe, hướng tới liên kết giữa viện, trường, cơ sở y tế và doanh nghiệp."
      ],
      "en": [
        "On 26 May 2023, the VNU University of Engineering and Technology (UET) held a workshop on technology applications in biomedicine, opened by Assoc. Prof. Bui Thanh Tung, Vice Dean of the Faculty of Electronics and Telecommunications. It covered two themes, automation systems and micro-nano technologies for biomedical use, through five reports by Vietnamese and international experts, including speakers from Hanoi Obstetrics and Gynaecology Hospital, the VNU University of Science and Dublin City University (Ireland).",
        "Dr. Chu Duc Hoang (Ministry of Science and Technology) presented “Technology solutions for the healthcare sector”, one of the workshop's five reports. The discussion that followed drew many comments from experts and managers, particularly on an interdisciplinary project to automate the monitoring and in-vitro maturation of oocytes, carried out with funding from the Embassy of Ireland.",
        "With a PhD in biomedical engineering and years of experience in supporting technology innovation, Dr. Chu Duc Hoang's participation reflected the link between university research in biomedical engineering and the application of technology to healthcare, and the value of connecting research institutes, universities, hospitals and businesses."
      ]
    },
    "sources": [
      {
        "outlet": "Trường Đại học Công nghệ – ĐHQGHN",
        "title": "Hội thảo ứng dụng công nghệ trong lĩnh vực y sinh",
        "url": "https://uet.vnu.edu.vn/hoi-thao-ung-dung-cong-nghe-trong-linh-vuc-y-sinh/",
        "date": "29/05/2023"
      }
    ]
  },
  {
    "slug": "2023-02-16-toa-dam-chatgpt-goc-nhin-da-chieu",
    "date": "2023-02-16",
    "category": "policy",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "Tọa đàm ChatGPT: TS. Chử Đức Hoàng đề xuất nghiên cứu cơ chế sandbox",
      "en": "ChatGPT roundtable: Dr. Chu Duc Hoang proposes studying a controlled testing (sandbox) mechanism"
    },
    "excerpt": {
      "vi": "Tại tọa đàm về ChatGPT do VAYSE tổ chức tháng 2/2023, TS. Chử Đức Hoàng cho rằng cần ủng hộ ứng dụng công nghệ mới, đồng thời nghiên cứu cơ chế sandbox và quy định quản lý phù hợp.",
      "en": "At a VAYSE roundtable on ChatGPT in February 2023, Dr. Chu Duc Hoang said new technology applications should be supported, while a sandbox mechanism and suitable rules are studied."
    },
    "keyPoints": {
      "vi": [
        "ChatGPT và các chương trình AI tương tự là công cụ; lợi ích phụ thuộc vào cách con người ứng xử với chúng",
        "Cần thúc đẩy, ủng hộ nghiên cứu và ứng dụng khoa học công nghệ mới",
        "Với công nghệ quá mới, cần nghiên cứu cơ chế thử nghiệm (sandbox) làm cơ sở cho ứng dụng",
        "Bám sát chủ trương, định hướng phát triển khoa học công nghệ để thúc đẩy công nghiệp 4.0"
      ],
      "en": [
        "ChatGPT and similar AI programs are tools; the benefits depend on how people use them",
        "Research and application of new science and technology should be encouraged and supported",
        "For very new technologies, a testing mechanism (sandbox) should be studied as a basis for application",
        "Follow the national direction on science and technology development to advance Industry 4.0"
      ]
    },
    "body": {
      "vi": [
        "Tháng 2/2023, Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam (VAYSE) tổ chức tọa đàm “ChatGPT – Những góc nhìn đa chiều” tại Hà Nội, trong bối cảnh công cụ trí tuệ nhân tạo này đang thu hút sự quan tâm rộng rãi. Các nhà khoa học, chuyên gia công nghệ và giáo dục đã trao đổi về cơ hội cũng như những lo ngại xung quanh ChatGPT, trong đó PGS.TS Lê Phước Minh, Chủ tịch VAYSE, cho rằng nếu chỉ nhìn thấy mặt tiêu cực để cấm đoán thì đó là thất bại của giới quản lý và nhà khoa học.",
        "TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), đồng thời là Phó Chủ tịch VAYSE, tham gia tọa đàm và chia sẻ góc nhìn từ phía quản lý nhà nước.",
        "Theo ông, “ChatGPT hay các chương trình AI tương tự đều chỉ là công cụ”, và cách ứng xử với chúng phụ thuộc vào nhiều khía cạnh. Ông nêu ba hướng tiếp cận: trước hết, cần thúc đẩy và ủng hộ việc nghiên cứu, ứng dụng khoa học công nghệ; thứ hai, với những công nghệ quá mới, cần nghiên cứu phương án tạo ra cơ chế thử nghiệm (sandbox) để có cơ sở ứng dụng; và cuối cùng, cần bám theo chủ trương, định hướng của Đảng, Chính phủ và Nhà nước về phát triển khoa học công nghệ để thúc đẩy công nghiệp 4.0. Ông cũng cho rằng người dùng mang tinh thần xây dựng sẽ hưởng lợi từ những công cụ này.",
        "Quan điểm cởi mở nhưng thận trọng này đi trước khá rõ những gì sau đó được luật hóa: Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 đã quy định cơ chế thử nghiệm có kiểm soát đối với công nghệ và mô hình kinh doanh mới, đồng thời yêu cầu trí tuệ nhân tạo phải nằm dưới sự giám sát của con người."
      ],
      "en": [
        "In February 2023, the Vietnam Association of Young Scientists and Engineers (VAYSE) held a roundtable in Hanoi titled “ChatGPT – Multidimensional perspectives”, as the AI tool was drawing wide public attention. Scientists and technology and education experts discussed the opportunities and concerns around ChatGPT; VAYSE Chairman Assoc. Prof. Le Phuoc Minh argued that seeing only the negatives and banning the tool would be a failure of regulators and scientists.",
        "Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (Ministry of Science and Technology) and a VAYSE Vice Chairman, took part and offered a public-management perspective.",
        "In his view, ChatGPT and similar AI programs are simply tools, and how society deals with them depends on many factors. He outlined three approaches: first, encourage and support the research and application of science and technology; second, for very new technologies, study ways to create a testing mechanism (sandbox) as a basis for application; and third, follow the guidelines and direction of the Party, Government and State on science and technology development to advance Industry 4.0. He also said constructive users would benefit from such tools.",
        "This open yet prudent stance clearly anticipated what was later written into law: the 2025 Law on Science, Technology and Innovation provides for controlled testing of new technologies and business models, and requires artificial intelligence to remain under human supervision."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Khoa học và Công nghệ Việt Nam",
        "title": "Để khai thác ChatGPT hiệu quả cần có những quy định quản lý cụ thể",
        "url": "https://vjst.vn/de-khai-thac-chatgpt-hieu-qua-can-co-nhung-quy-dinh-quan-ly-cu-the-56621.html",
        "date": "27/02/2023"
      },
      {
        "outlet": "VietNamNet",
        "title": "Tranh cãi quanh chuyện Việt Nam nên cổ vũ hay lo sợ ChatGPT",
        "url": "https://vietnamnet.vn/viet-nam-nen-co-vu-hay-lo-so-chatgpt-i5014778.html",
        "date": "16/02/2023"
      },
      {
        "outlet": "Người Lao Động",
        "title": "Dùng ChatGPT tích cực sẽ hưởng được lợi ích",
        "url": "https://nld.com.vn/cong-nghe/dung-chatgpt-tich-cuc-se-huong-duoc-loi-ich-20230217213310953.htm",
        "date": "18/02/2023"
      },
      {
        "outlet": "Tạp chí Sở hữu trí tuệ và Sáng tạo",
        "title": "ChatGPT: Cần có những quy định quản lý cụ thể để khai thác hiệu quả",
        "url": "https://sohuutritue.net.vn/chatgpt-can-co-nhung-quy-dinh-quan-ly-cu-the-de-khai-thac-hieu-qua-d156822.html",
        "date": "27/02/2023"
      }
    ]
  },
  {
    "slug": "2023-01-19-dai-hoi-vayse-lan-iii-pho-chu-tich",
    "date": "2023-01-19",
    "category": "event",
    "role": {
      "vi": "Phó Chủ tịch (được bầu)",
      "en": "Elected Vice Chairman"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng được bầu làm Phó Chủ tịch VAYSE nhiệm kỳ 2023–2028",
      "en": "Dr. Chu Duc Hoang elected Vice Chairman of VAYSE for the 2023–2028 term"
    },
    "excerpt": {
      "vi": "Tại Đại hội đại biểu toàn quốc lần thứ III của VAYSE ngày 19/01/2023, TS. Chử Đức Hoàng được bầu là một trong bốn Phó Chủ tịch Hội.",
      "en": "At VAYSE's 3rd National Congress on 19 January 2023, Dr. Chu Duc Hoang was elected one of the association's four Vice Chairmen."
    },
    "keyPoints": {
      "vi": [
        "Đại hội bầu Ban Chấp hành 38 thành viên; PGS.TS Lê Phước Minh được bầu làm Chủ tịch",
        "TS. Chử Đức Hoàng là một trong bốn Phó Chủ tịch nhiệm kỳ 2023–2028",
        "Đại hội thông qua Điều lệ sửa đổi gồm 6 chương, 24 điều",
        "VAYSE tiếp tục hướng tới kết nối trí thức trẻ trong và ngoài nước, gắn sáng tạo với ứng dụng và thương mại công nghệ"
      ],
      "en": [
        "The congress elected a 38-member Executive Committee, with Assoc. Prof. Le Phuoc Minh as Chairman",
        "Dr. Chu Duc Hoang is one of four Vice Chairmen for 2023–2028",
        "Delegates adopted an amended charter of 6 chapters and 24 articles",
        "VAYSE aims to connect young intellectuals at home and abroad, linking creativity with technology application and commercialisation"
      ]
    },
    "body": {
      "vi": [
        "Ngày 19/01/2023, tại Hà Nội, Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam (VAYSE) tổ chức Đại hội đại biểu toàn quốc lần thứ III, nhiệm kỳ 2023–2028. Đại hội thông qua Điều lệ sửa đổi gồm 6 chương, 24 điều, trong đó có quy định về độ tuổi hội viên, và thảo luận việc thành lập chi bộ Đảng của Hội trực thuộc Đảng đoàn Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam.",
        "Đại hội đã bầu Ban Chấp hành gồm 38 thành viên, trong đó Ban Thường vụ 13 người và Ban Kiểm tra 5 người. PGS.TS Lê Phước Minh được bầu làm Chủ tịch Hội nhiệm kỳ III. TS. Chử Đức Hoàng, Chánh Văn phòng Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), được bầu là một trong bốn Phó Chủ tịch, cùng bà Phan Thị Thùy Trâm, ông Lương Hoàng Hưng và ông Lê Phước Kiệm.",
        "Thành lập năm 2004, VAYSE là tổ chức tự nguyện của các tập thể và cá nhân hoạt động trong lĩnh vực nghiên cứu khoa học và công nghệ, ươm tạo công nghệ mới và doanh nghiệp trẻ, hoạt động dựa trên thành tựu khoa học công nghệ cao, gắn kết chặt chẽ sáng tạo với ứng dụng và thương mại hóa công nghệ. Mục đích của Hội là tập hợp, đoàn kết trí thức trẻ Việt Nam trong và ngoài nước để trao đổi kinh nghiệm và nâng cao trình độ chuyên môn.",
        "Vai trò mới tại VAYSE mở rộng hoạt động của TS. Chử Đức Hoàng sang công tác hội, bên cạnh nhiệm vụ chuyên môn tại Quỹ Đổi mới công nghệ quốc gia. Hoạt động kết nối trí thức trẻ, nhà khoa học và doanh nghiệp của Hội phù hợp với định hướng liên kết Nhà nước – nhà khoa học – doanh nghiệp trong phát triển khoa học, công nghệ và đổi mới sáng tạo."
      ],
      "en": [
        "On 19 January 2023 in Hanoi, the Vietnam Association of Young Scientists and Engineers (VAYSE) held its 3rd National Congress for the 2023–2028 term. Delegates adopted an amended charter of 6 chapters and 24 articles, including rules on members' age, and discussed setting up a Party cell under the Party Delegation of the Vietnam Union of Science and Technology Associations.",
        "The congress elected a 38-member Executive Committee, including a 13-member Standing Committee and a 5-member Inspection Committee. Assoc. Prof. Dr. Le Phuoc Minh was elected Chairman for the third term. Dr. Chu Duc Hoang, Chief of Office of the National Technology Innovation Fund (Ministry of Science and Technology), was elected one of four Vice Chairmen, together with Ms. Phan Thi Thuy Tram, Mr. Luong Hoang Hung and Mr. Le Phuoc Kiem.",
        "Founded in 2004, VAYSE is a voluntary organisation of groups and individuals working in scientific and technological research and in incubating new technologies and young companies, operating on the basis of high-tech achievements and closely linking creativity with the application and commercialisation of technology. It aims to bring together young Vietnamese intellectuals in Vietnam and abroad to share experience and raise their professional standards.",
        "The new role extends Dr. Chu Duc Hoang's work into association activities alongside his professional duties at the National Technology Innovation Fund. The association's efforts to connect young intellectuals, scientists and businesses are in line with the policy direction of linking the State, scientists and enterprises in developing science, technology and innovation."
      ]
    },
    "sources": [
      {
        "outlet": "VUSTA",
        "title": "Ông Lê Phước Minh tái đắc cử chủ tịch hội Trí thức khoa học và công nghệ trẻ Việt Nam",
        "url": "https://vusta.vn/ong-le-phuoc-minh-tai-dac-cu-chu-tich-hoi-tri-thuc-khoa-hoc-va-cong-nghe-tre-viet-nam-p91603.html",
        "date": "31/01/2023"
      },
      {
        "outlet": "VnEconomy",
        "title": "VAYSE tiếp tục đẩy mạnh kết nối các nhà trí thức trẻ",
        "url": "https://vneconomy.vn/vayse-tiep-tuc-day-manh-ket-noi-cac-nha-tri-thuc-tre.htm",
        "date": "19/01/2023"
      },
      {
        "outlet": "Tạp chí Sở hữu trí tuệ và Sáng tạo",
        "title": "Hội Trí thức Khoa học và Công nghệ trẻ Việt Nam: Đại hội Đại biểu Toàn quốc lần III (Nhiệm kỳ 2023-2028)",
        "url": "https://sohuutritue.net.vn/hoi-tri-thuc-khoa-hoc-va-cong-nghe-tre-viet-nam-dai-hoi-dai-bieu-toan-quoc-lan-iii-nhiem-ky-2023-2028-d155377.html",
        "date": "19/01/2023"
      }
    ]
  },
  {
    "slug": "2022-08-30-chinh-sach-doanh-nghiep-dan-dat-cong-nghe",
    "date": "2022-08-30",
    "category": "policy",
    "role": {
      "vi": "Chuyên gia bình luận",
      "en": "Expert commentator"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Cần khuyến khích doanh nghiệp dẫn dắt về công nghệ",
      "en": "Dr. Chu Duc Hoang: incentives are needed for technology-leading enterprises"
    },
    "excerpt": {
      "vi": "Trao đổi với báo chí năm 2022, TS. Chử Đức Hoàng cho rằng chính sách KH&CN và đổi mới sáng tạo cần tạo tác động lớn hơn, đặc biệt với các doanh nghiệp dẫn dắt công nghệ.",
      "en": "Speaking to the press in 2022, Dr. Chu Duc Hoang said S&T and innovation policies needed greater impact, especially for technology-leading enterprises."
    },
    "keyPoints": {
      "vi": [
        "Tiềm lực KH&CN và đổi mới sáng tạo của đa số doanh nghiệp còn yếu; chính sách khuyến khích chưa tác động đủ lớn",
        "Nhiều doanh nghiệp chưa nhận thức đầy đủ vai trò của công nghệ và chưa quan tâm trích lập quỹ cho đổi mới",
        "Giai đoạn 2021–2025, doanh nghiệp dẫn dắt công nghệ cần được hỗ trợ về cơ chế, hành lang pháp lý và tín dụng để R&D theo chuỗi giá trị"
      ],
      "en": [
        "Most firms have weak S&T and innovation capacity, and incentive policies have not had enough impact",
        "Many firms do not fully grasp the role of technology and pay little attention to setting aside innovation funds",
        "In 2021–2025, technology-leading firms should receive support through mechanisms, legal frameworks and credit for value-chain R&D"
      ]
    },
    "body": {
      "vi": [
        "Ngày 30/08/2022, báo Hà Nội Mới đăng bài về chính sách cho hoạt động khoa học, công nghệ và đổi mới sáng tạo, tập hợp ý kiến của doanh nghiệp, nhà khoa học và cơ quan quản lý về những điểm cần bổ sung, hoàn thiện. Nội dung tương tự về ý kiến của ông sau đó cũng được Tạp chí VietQ đăng tải (29/09/2022) dưới tiêu đề “Cần cơ chế khuyến khích doanh nghiệp có vai trò dẫn dắt về công nghệ”.",
        "Trong các bài viết, TS. Chử Đức Hoàng (Quỹ Đổi mới công nghệ quốc gia) đưa ra nhận định từ góc độ hỗ trợ doanh nghiệp đổi mới công nghệ.",
        "Theo ông, tiềm lực KH&CN và đổi mới sáng tạo của đa số doanh nghiệp còn yếu, trong khi các chính sách thúc đẩy, khuyến khích chưa tạo tác động đủ lớn. Nhiều doanh nghiệp còn hạn chế trong nhận thức về vai trò của công nghệ, chưa có nhiều kinh nghiệm xây dựng dự án đổi mới công nghệ có hỗ trợ từ ngân sách và chưa quan tâm trích lập quỹ cho hoạt động KH&CN. Các bài viết dẫn khảo sát của Bộ Khoa học và Công nghệ cho thấy doanh nghiệp Việt Nam chỉ chi khoảng 1,6% doanh thu hằng năm cho R&D, thấp hơn Philippines và Malaysia. Ông đề xuất trong giai đoạn 2021–2025, các doanh nghiệp có vai trò dẫn dắt về công nghệ cần được khuyến khích về cơ chế, chính sách, hành lang pháp lý và hỗ trợ tín dụng để nghiên cứu, phát triển và đổi mới công nghệ theo chuỗi giá trị của sản phẩm chủ lực, sản phẩm quốc gia, sản phẩm công nghệ cao, cũng như ươm tạo công nghệ và phát triển mô hình kinh doanh mới.",
        "Đề xuất chú trọng vai trò dẫn dắt của doanh nghiệp tương đồng với định hướng sau này của Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 về hệ thống đổi mới sáng tạo lấy doanh nghiệp làm trung tâm, trong đó có các quy định hỗ trợ phát triển công nghệ chiến lược và doanh nghiệp khoa học và công nghệ."
      ],
      "en": [
        "On 30 August 2022, Hanoi Moi newspaper published an article on policies for science, technology and innovation, gathering views from businesses, scientists and regulators on what needed to be added or improved. Similar content on his views was later carried by VietQ (29 September 2022) under the headline “Incentives needed for technology-leading enterprises”.",
        "In these articles, Dr. Chu Duc Hoang (National Technology Innovation Fund) offered his assessment from the perspective of supporting enterprise technology innovation.",
        "He said most firms had weak S&T and innovation capacity, while promotion and incentive policies had not had enough impact. Many firms still underestimated the role of technology, had little experience preparing state-funded technology innovation projects and paid little attention to setting aside funds for S&T. The articles cited a Ministry of Science and Technology survey showing that Vietnamese firms spent only about 1.6% of annual revenue on R&D, below the Philippines and Malaysia. He proposed that in 2021–2025, technology-leading enterprises should receive incentives through mechanisms, policies, legal frameworks and credit support for research, development and technology innovation along the value chains of key, national and high-tech products, as well as for technology incubation and new business models.",
        "His emphasis on the leading role of enterprises is consistent with the later direction of the 2025 Law on Science, Technology and Innovation, which defines an innovation system with enterprises at its centre and includes provisions supporting strategic technologies and science and technology enterprises."
      ]
    },
    "sources": [
      {
        "outlet": "Hà Nội Mới",
        "title": "Chính sách cho hoạt động khoa học, công nghệ và đổi mới sáng tạo: Cần được bổ sung và hoàn thiện",
        "url": "https://hanoimoi.vn/chinh-sach-cho-hoat-dong-khoa-hoc-cong-nghe-va-doi-moi-sang-tao-can-duoc-bo-sung-va-hoan-thien-11993.html",
        "date": "30/08/2022"
      },
      {
        "outlet": "VietQ (đăng lại trên Cổng thông tin Sở KH&CN Cần Thơ)",
        "title": "Cần cơ chế khuyến khích doanh nghiệp có vai trò dẫn dắt về công nghệ",
        "url": "https://sokhcn.cantho.gov.vn/default.aspx?pid=57&nid=22146",
        "date": "29/09/2022"
      }
    ]
  },
  {
    "slug": "2022-04-27-thuc-day-doi-moi-sang-tao-nut-that-co-che",
    "date": "2022-04-27",
    "category": "policy",
    "role": {
      "vi": "Chuyên gia bình luận",
      "en": "Expert commentator"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng chỉ ra các “nút thắt” cơ chế trong đổi mới sáng tạo",
      "en": "Promoting innovation: Dr. Chu Duc Hoang identifies the mechanism bottlenecks facing enterprises"
    },
    "excerpt": {
      "vi": "Trong loạt bài của Báo Điện tử Chính phủ về hệ sinh thái đổi mới sáng tạo, TS. Chử Đức Hoàng phân tích những vướng mắc về nguồn vốn, quy định chi và mua sắm công nghệ của doanh nghiệp.",
      "en": "In a Government News series on the innovation ecosystem, Dr. Chu Duc Hoang analysed enterprises' difficulties with funding, spending rules and technology procurement."
    },
    "keyPoints": {
      "vi": [
        "Doanh nghiệp chưa có nhiều kinh nghiệm xây dựng, triển khai dự án đổi mới công nghệ có hỗ trợ từ ngân sách",
        "Mức trích lập quỹ KH&CN tối đa 10% thu nhập tính thuế là quá nhỏ với DNNVV, trong khi tín dụng bổ sung khó tiếp cận",
        "Nội dung chi còn thiên về R&D; mua chuyển giao công nghệ vướng Luật Đấu thầu; một số nội dung chi theo Thông tư liên tịch 12/2016 chưa rõ"
      ],
      "en": [
        "Firms have little experience preparing and implementing state-funded technology innovation projects",
        "The 10%-of-taxable-income cap on S&T fund provisions is too small for SMEs, and supplementary credit is hard to obtain",
        "Eligible spending is R&D-centric; buying technology transfer conflicts with the Bidding Law; some items under Joint Circular 12/2016 are unclear"
      ]
    },
    "body": {
      "vi": [
        "Ngày 27/04/2022, Báo Điện tử Chính phủ đăng bài cuối trong loạt bài về thúc đẩy đổi mới sáng tạo, với nhận định hệ sinh thái đổi mới sáng tạo của Việt Nam đang trong giai đoạn hình thành và khung khổ thể chế chưa đầy đủ. Vấn đề đặt ra là vận hành các công cụ, chính sách hiện hành hiệu quả và “trúng đích” hơn.",
        "Góp ý kiến cho loạt bài có ông Chử Đức Hoàng, Phó Trưởng phòng Tài trợ đề tài và Hoạt động đổi mới công nghệ, Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), từ thực tiễn hỗ trợ doanh nghiệp trong hoạt động đổi mới sáng tạo.",
        "Theo ông, doanh nghiệp hiện chưa có nhiều kinh nghiệm xây dựng và triển khai các dự án đầu tư đổi mới công nghệ có hỗ trợ từ ngân sách nhà nước, dẫn tới thủ tục kéo dài. Với mức trích lập tối đa 10% thu nhập tính thuế, quỹ phát triển KH&CN của doanh nghiệp nhỏ và vừa rất hạn chế, trong khi nguồn tín dụng bổ sung hầu như không có hoặc khó tiếp cận. Ông cũng chỉ ra rằng các hướng dẫn về nội dung chi còn tập trung vào nghiên cứu và phát triển, chưa bao quát những hoạt động đổi mới khác như cải tiến quản trị; việc mua chuyển giao công nghệ gặp vướng mắc khi áp dụng Luật Đấu thầu; và một số nội dung chi theo Thông tư liên tịch 12/2016 chưa được hướng dẫn rõ ràng.",
        "Những “nút thắt” này phản ánh yêu cầu hoàn thiện thể chế mà Nghị quyết 57-NQ/TW sau đó xác định là điều kiện tiên quyết. Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 tiếp cận theo hướng khoán chi đến sản phẩm cuối cùng và quản lý chủ yếu theo nguyên tắc hậu kiểm, giải quyết một phần các vấn đề mà giới chuyên môn đã nêu từ giai đoạn này."
      ],
      "en": [
        "On 27 April 2022, the Government News portal (baochinhphu.vn) published the final instalment of its series on promoting innovation, noting that Vietnam's innovation ecosystem was still taking shape and its institutional framework was incomplete. The question was how to operate existing tools and policies more effectively and with better targeting.",
        "Contributing to the series was Mr. Chu Duc Hoang, Deputy Head of the Division of Project and Technology Innovation Activity Funding at the National Technology Innovation Fund (Ministry of Science and Technology), drawing on his practical experience supporting enterprise innovation.",
        "He said firms still had little experience designing and implementing state-funded technology innovation projects, which led to lengthy procedures. With provisions capped at 10% of taxable income, SMEs' S&T development funds were very limited, while supplementary credit was largely unavailable or hard to access. He also noted that guidance on eligible spending focused on research and development and did not cover other forms of innovation such as management improvement; that purchasing technology transfer ran into difficulties under the Bidding Law; and that some spending items under Joint Circular 12/2016 lacked clear guidance.",
        "These bottlenecks reflect the need for institutional reform that Resolution 57-NQ/TW later described as a prerequisite. The 2025 Law on Science, Technology and Innovation adopts lump-sum funding up to the final product and ex-post control as the main management principle, addressing some of the issues experts had raised at this stage."
      ]
    },
    "sources": [
      {
        "outlet": "Báo Điện tử Chính phủ",
        "title": "Bài cuối: Thúc đẩy đổi mới sáng tạo: 'Nút thắt' ở cơ chế?",
        "url": "https://baochinhphu.vn/bai-cuoi-thuc-day-doi-moi-sang-tao-nut-that-o-co-che-10222042710504255.htm",
        "date": "27/04/2022"
      }
    ]
  },
  {
    "slug": "2022-01-14-khoi-nguon-dau-tu-cho-rd",
    "date": "2022-01-14",
    "category": "policy",
    "role": {
      "vi": "Chuyên gia bình luận",
      "en": "Expert commentator"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Hỗ trợ đổi mới sáng tạo cần rộng hơn phạm vi R&D",
      "en": "Dr. Chu Duc Hoang: spending rules for innovation should extend beyond research and development"
    },
    "excerpt": {
      "vi": "Trong bài viết về đầu tư cho R&D của Báo Nhân Dân, TS. Chử Đức Hoàng chỉ ra những rào cản về thủ tục và quy định khiến doanh nghiệp khó tiếp cận nguồn hỗ trợ đổi mới công nghệ.",
      "en": "In a Nhan Dan article on R&D investment, Dr. Chu Duc Hoang pointed to procedural and regulatory barriers that keep firms from accessing technology innovation support."
    },
    "keyPoints": {
      "vi": [
        "NATIF có vốn điều lệ 2.000 tỷ đồng, được giao thực hiện chính sách hỗ trợ doanh nghiệp đổi mới công nghệ và khởi nghiệp sáng tạo",
        "Doanh nghiệp còn thiếu nhận thức và kinh nghiệm với dự án dùng ngân sách, khiến phê duyệt kéo dài so với tiến độ dự án",
        "Hướng dẫn pháp lý tập trung hẹp vào R&D, chưa bao quát các hoạt động đổi mới khác như cải tiến quy trình quản trị",
        "Quy định về đấu thầu gây khó khăn khi doanh nghiệp mua công nghệ, bí quyết công nghệ"
      ],
      "en": [
        "NATIF, with VND 2,000 billion in charter capital, is tasked with policies supporting enterprise technology innovation and innovative startups",
        "Firms lack awareness of and experience with state-funded projects, so approvals lag behind project schedules",
        "Legal guidance focuses narrowly on R&D and does not cover other innovation, such as improving management processes",
        "Procurement rules complicate firms' purchases of technology and technical know-how"
      ]
    },
    "body": {
      "vi": [
        "Ngày 14/01/2022, Báo Nhân Dân (chuyên mục Nhân Dân cuối tuần) đăng bài “Khơi nguồn đầu tư cho R&D”, phân tích thực trạng đầu tư cho nghiên cứu và phát triển của doanh nghiệp Việt Nam. Bài viết ghi nhận chỉ số đổi mới sáng tạo của Việt Nam đã cải thiện đáng kể trong những năm gần đây, nhưng đầu tư cho R&D trong khu vực doanh nghiệp vẫn còn nhiều điểm nghẽn.",
        "Trong bài viết, TS. Chử Đức Hoàng (Bộ Khoa học và Công nghệ) chia sẻ góc nhìn từ thực tiễn hoạt động của Quỹ Đổi mới công nghệ quốc gia (NATIF), đơn vị có vốn điều lệ 2.000 tỷ đồng được giao thực hiện các chính sách hỗ trợ, thúc đẩy doanh nghiệp đổi mới công nghệ và khởi nghiệp sáng tạo.",
        "Theo TS. Chử Đức Hoàng, nhiều doanh nghiệp còn hạn chế về nhận thức và kinh nghiệm trong xây dựng, triển khai dự án có hỗ trợ từ ngân sách nhà nước, khiến quá trình xét chọn, phê duyệt kéo dài, không theo kịp tiến độ dự án. Ông cũng lưu ý các văn bản hướng dẫn chủ yếu tập trung vào nghiên cứu và phát triển theo nghĩa hẹp, trong khi nhu cầu đổi mới của doanh nghiệp rộng hơn, chẳng hạn cải tiến quy trình quản trị. Ngoài ra, việc áp dụng quy định về đấu thầu khiến doanh nghiệp gặp khó khi mua công nghệ hoặc bí quyết công nghệ.",
        "Những kiến nghị về mở rộng phạm vi hỗ trợ và đơn giản hóa thủ tục phù hợp với tinh thần các chính sách sau này. Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 đã đưa đổi mới sáng tạo vào phạm vi điều chỉnh chính, cho phép khoán chi đến sản phẩm cuối cùng và định hướng quản lý chủ yếu theo nguyên tắc hậu kiểm."
      ],
      "en": [
        "On 14 January 2022, Nhan Dan newspaper (weekend edition) published “Unlocking investment in R&D”, an analysis of research and development spending by Vietnamese enterprises. The article noted that Vietnam's innovation index had improved markedly in recent years, but corporate R&D investment still faced many bottlenecks.",
        "In the article, Dr. Chu Duc Hoang (Ministry of Science and Technology) offered a view from the work of the National Technology Innovation Fund (NATIF), which has VND 2,000 billion in charter capital and is tasked with policies to support and promote enterprise technology innovation and innovative startups.",
        "Dr. Hoang said many firms still lacked awareness of and experience with preparing and implementing state-funded projects, so selection and approval took too long to match project timelines. He also noted that guidance documents focused mainly on research and development in a narrow sense, while firms' innovation needs were broader, for example improving management processes. In addition, applying procurement rules made it difficult for firms to buy technology or technical know-how.",
        "His recommendations to widen the scope of support and simplify procedures are in line with the spirit of later policy. The 2025 Law on Science, Technology and Innovation brings innovation into its core scope, allows lump-sum funding up to the final product and sets ex-post control as the main management principle."
      ]
    },
    "sources": [
      {
        "outlet": "Báo Nhân Dân",
        "title": "Khơi nguồn đầu tư cho R&D",
        "url": "https://nhandan.vn/khoi-nguon-dau-tu-cho-rd-post682313.html",
        "date": "14/01/2022"
      }
    ]
  },
  {
    "slug": "2021-12-15-hoi-thao-doi-moi-sang-tao-ket-noi-chinh-sach-doanh-nghiep",
    "date": "2021-12-15",
    "category": "policy",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "location": {
      "vi": "Hà Nội",
      "en": "Hanoi"
    },
    "title": {
      "vi": "Kết nối chính sách đổi mới sáng tạo với doanh nghiệp: góc nhìn từ NATIF",
      "en": "Workshop on connecting innovation policy with Vietnamese enterprises: the National Technology Innovation Fund's view"
    },
    "excerpt": {
      "vi": "Tại hội thảo ngày 15/12/2021, TS. Chử Đức Hoàng phân tích khó khăn của doanh nghiệp nhỏ và vừa trong đổi mới công nghệ và giới thiệu định hướng hỗ trợ của NATIF.",
      "en": "At a workshop on 15 December 2021, Dr. Chu Duc Hoang analysed the difficulties SMEs face in technology innovation and presented NATIF's support direction."
    },
    "keyPoints": {
      "vi": [
        "Doanh nghiệp nội địa, chủ yếu nhỏ và vừa, gặp nhiều khó khăn trong nâng cao năng lực R&D và trích lập quỹ phát triển",
        "Doanh nghiệp còn thiếu kinh nghiệm xây dựng dự án đổi mới công nghệ sử dụng ngân sách, khiến khâu xét chọn, phê duyệt kéo dài",
        "Mức trích lập tối đa 10% thu nhập tính thuế là thấp với DNNVV, trong khi tín dụng bổ sung khó tiếp cận",
        "NATIF định hướng mở rộng hình thức hỗ trợ tài chính và từng bước triển khai bảo lãnh vay vốn bằng công nghệ"
      ],
      "en": [
        "Domestic firms, mostly SMEs, struggle to build R&D capacity and set aside development funds",
        "Firms lack experience preparing state-funded technology innovation projects, which prolongs selection and approval",
        "The 10%-of-taxable-income cap yields little for SMEs, while supplementary credit is hard to access",
        "NATIF planned to broaden its forms of financial support and gradually introduce technology-based loan guarantees"
      ]
    },
    "body": {
      "vi": [
        "Ngày 15/12/2021, Hội thảo “Đổi mới sáng tạo: Kết nối chính sách với doanh nghiệp Việt Nam” do Tạp chí Kinh tế và Dự báo (Bộ Kế hoạch và Đầu tư) tổ chức tại Hà Nội, theo hình thức kết hợp trực tiếp và trực tuyến. Hội thảo có sự tham gia của đại diện Trung tâm Đổi mới sáng tạo quốc gia (NIC), Quỹ Hỗ trợ doanh nghiệp nhỏ và vừa, Cục Phát triển doanh nghiệp, UNDP Việt Nam cùng các chuyên gia, doanh nghiệp.",
        "TS. Chử Đức Hoàng tham dự với tư cách đại diện Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, trình bày góc nhìn từ thực tiễn hỗ trợ doanh nghiệp đổi mới công nghệ.",
        "Theo ông, nhiều doanh nghiệp còn hạn chế trong nhận thức về vai trò của công nghệ và chưa có nhiều kinh nghiệm xây dựng, triển khai dự án đổi mới công nghệ có hỗ trợ từ ngân sách nhà nước, nên việc hoàn thiện hồ sơ xét chọn, phê duyệt thường kéo dài, không theo kịp tiến độ của doanh nghiệp. Tiềm lực KH&CN và đổi mới sáng tạo của đa số doanh nghiệp còn yếu; với mức trích lập tối đa 10% thu nhập tính thuế, quỹ phát triển KH&CN của doanh nghiệp nhỏ và vừa rất nhỏ, trong khi các nguồn tín dụng bổ sung thiếu hoặc khó tiếp cận. Sự đa dạng của hoạt động đổi mới sáng tạo cũng chưa được quy định, hướng dẫn cụ thể. Giới thiệu hoạt động của Quỹ, ông cho biết với vốn điều lệ 2.000 tỷ đồng, NATIF định hướng mở rộng các hình thức hỗ trợ tài chính cho dự án đổi mới công nghệ và từng bước thực hiện bảo lãnh vay vốn bằng công nghệ để doanh nghiệp có thể tiếp cận vốn từ ngân hàng thương mại.",
        "Những phân tích tại hội thảo cho thấy yêu cầu đưa chính sách đến gần hơn với doanh nghiệp, đồng thời đa dạng hóa công cụ tài chính cho đổi mới công nghệ. Đây là hướng tiếp cận tiếp tục được khẳng định trong Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025, với hệ thống đổi mới sáng tạo lấy doanh nghiệp làm trung tâm."
      ],
      "en": [
        "On 15 December 2021, the workshop “Innovation: Connecting Policy with Vietnamese Enterprises”, organised by the Economy and Forecast Review (Ministry of Planning and Investment), was held in Hanoi in a hybrid format. Participants included representatives of the National Innovation Center (NIC), the Vietnam SME Development Fund, the Agency for Enterprise Development and UNDP Vietnam, as well as experts and businesses.",
        "Dr. Chu Duc Hoang attended as the representative of the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, offering a view drawn from the Fund's practical work supporting enterprise technology innovation.",
        "He said many firms still underestimated the role of technology and had little experience preparing and implementing state-funded technology innovation projects, so completing dossiers for selection and approval often took too long to match business timelines. Most firms had weak S&T and innovation capacity; with provisions capped at 10% of taxable income, SMEs' S&T development funds were very small, while supplementary credit was lacking or hard to access. The many forms innovation can take were also not clearly defined in regulations. Introducing the Fund's activities, he said that, with charter capital of VND 2,000 billion, NATIF planned to broaden its forms of financial support for technology innovation projects and gradually introduce technology-based loan guarantees so that firms could borrow from commercial banks.",
        "The discussion highlighted the need to bring policy closer to enterprises and to diversify financial instruments for technology innovation, an approach later reaffirmed in the 2025 Law on Science, Technology and Innovation, which sets out an innovation system with enterprises at its centre."
      ]
    },
    "sources": [
      {
        "outlet": "VietnamPlus",
        "title": "Đổi mới sáng tạo: Kéo ngắn khoảng cách từ chính sách đến doanh nghiệp",
        "url": "https://www.vietnamplus.vn/doi-moi-sang-tao-keo-ngan-khoang-cach-tu-chinh-sach-den-doanh-nghiep-post761009.vnp",
        "date": "15/12/2021"
      },
      {
        "outlet": "VnEconomy",
        "title": "Đổi mới sáng tạo, doanh nghiệp được hưởng những ưu đãi nào?",
        "url": "https://vneconomy.vn/doi-moi-sang-tao-doanh-nghiep-duoc-huong-nhung-uu-dai-nao.htm",
        "date": "15/12/2021"
      },
      {
        "outlet": "Viện Chiến lược và Chính sách KH&CN (nguồn: Thời báo Ngân hàng)",
        "title": "Đổi mới sáng tạo: Để chính sách “ngấm” vào doanh nghiệp",
        "url": "https://itst.gov.vn/tin-tuc/doi-moi-sang-tao-de-chinh-sach-ngam-vao-doanh-nghiep/",
        "date": "05/01/2022"
      },
      {
        "outlet": "Mekong ASEAN",
        "title": "Để chuyển đổi số thành công, doanh nghiệp cần giải “cơn khát vốn”",
        "url": "https://mekongasean.vn/de-chuyen-doi-so-thanh-cong-doanh-nghiep-can-giai-aposcon-khat-vonapos-6151.html",
        "date": "15/12/2021"
      }
    ]
  },
  {
    "slug": "2021-11-25-dien-dan-tri-thuc-tre-toan-cau-chuyen-doi-so",
    "date": "2021-11-25",
    "category": "innovation",
    "role": {
      "vi": "Trưởng nhóm chủ đề “Khơi nguồn sáng tạo”",
      "en": "Lead of the “Sparking Creativity” theme group"
    },
    "location": {
      "vi": "Kết hợp trực tiếp và trực tuyến",
      "en": "Hybrid (in person and online)"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng tại Diễn đàn Trí thức trẻ Việt Nam toàn cầu lần IV",
      "en": "Dr. Chu Duc Hoang at the 4th Global Young Vietnamese Intellectuals Forum on digital transformation"
    },
    "excerpt": {
      "vi": "Tại Diễn đàn Trí thức trẻ Việt Nam toàn cầu lần thứ IV năm 2021, TS. Chử Đức Hoàng phụ trách nhóm chủ đề “Khơi nguồn sáng tạo” và đề xuất hình thành mạng lưới dữ liệu KH&CN của trí thức trẻ.",
      "en": "At the 4th Global Young Vietnamese Intellectuals Forum in 2021, Dr. Chu Duc Hoang led the “Sparking Creativity” theme group and proposed a shared science and technology data network of young intellectuals."
    },
    "keyPoints": {
      "vi": [
        "Chuyển đổi số là xu thế tất yếu mà Việt Nam không thể đứng ngoài",
        "Trí thức trẻ có công trình nghiên cứu, sáng tạo có thể đóng vai trò “đầu tàu”, kết nối và thúc đẩy chuyển đổi số",
        "Đề xuất xây dựng mạng lưới cơ sở dữ liệu KH&CN của trí thức trẻ, sẵn sàng cho chuyển giao và ứng dụng",
        "Các đề xuất tại nhóm chủ đề ngắn gọn, thực tiễn, tập trung vào khởi nghiệp đổi mới sáng tạo và ứng dụng công nghệ"
      ],
      "en": [
        "Digital transformation is an unavoidable global trend that Vietnam cannot stay out of",
        "Young intellectuals with research and creative output can act as a “locomotive” connecting and driving digital transformation",
        "Proposed a shared science and technology database network of young intellectuals, ready for transfer and application",
        "Proposals in his theme group were concise and practical, focused on innovative startups and technology application"
      ]
    },
    "body": {
      "vi": [
        "Ngày 25/11/2021, Diễn đàn Trí thức trẻ Việt Nam toàn cầu lần thứ IV được tổ chức theo hình thức kết hợp trực tiếp và trực tuyến, với chủ đề “Phát huy trí thức trẻ Việt Nam trong công cuộc chuyển đổi số quốc gia”. Theo Báo Nhân Dân, diễn đàn có sự tham gia của 177 đại biểu chính thức và 70 chuyên gia; các đại biểu thảo luận tại bốn phòng chuyên đề: Khơi nguồn sáng tạo; Ứng dụng và chuyển giao; Kết nối trí thức trẻ phát triển nền kinh tế số, nhân lực số quốc gia; Phát triển và thương mại hóa các giải pháp chuyển đổi số.",
        "TS. Chử Đức Hoàng, Quỹ Đổi mới công nghệ quốc gia (Bộ Khoa học và Công nghệ), tham gia diễn đàn với vai trò Trưởng nhóm chủ đề “Khơi nguồn sáng tạo”.",
        "Phát biểu tại diễn đàn, ông cho rằng chuyển đổi số là xu thế tất yếu trên toàn cầu và Việt Nam không thể tách khỏi xu thế này. Đội ngũ trí thức trẻ, đặc biệt là những người có công trình nghiên cứu, sáng tạo, có thể trở thành lực lượng nòng cốt kết nối với nhau để thúc đẩy chuyển đổi số. Ông đề xuất thông qua diễn đàn, trí thức trẻ cùng xây dựng một mạng lưới cơ sở dữ liệu KH&CN sẵn sàng cho chuyển giao và ứng dụng. Trao đổi với Báo Nhân Dân sau đó, ông đánh giá các đề xuất trong nhóm chủ đề đa dạng lĩnh vực như quang học, công nghệ gen, nông nghiệp công nghệ cao, ngắn gọn, thực tiễn và phù hợp với điều kiện chính sách của Việt Nam, tập trung vào hai hướng chính là khởi nghiệp đổi mới sáng tạo và ứng dụng công nghệ hiện đại trong chuyển đổi số. Ông cũng ghi nhận công tác lựa chọn đại biểu năm 2021 được thực hiện kỹ lưỡng hơn các kỳ trước.",
        "Ý tưởng kết nối tri thức và dữ liệu khoa học để phục vụ chuyển giao, ứng dụng gắn với định hướng mà Nghị quyết 57-NQ/TW sau này xác định: khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là đột phá quan trọng hàng đầu, trong đó nhà khoa học là nhân tố then chốt."
      ],
      "en": [
        "On 25 November 2021, the 4th Global Young Vietnamese Intellectuals Forum took place in a hybrid format under the theme “Promoting Vietnamese young intellectuals in national digital transformation”. According to Nhan Dan newspaper, it brought together 177 official delegates and 70 experts, who met in four thematic rooms: Sparking creativity; Application and transfer; Connecting young intellectuals to develop the digital economy and national digital workforce; and Developing and commercialising digital transformation solutions.",
        "Dr. Chu Duc Hoang of the National Technology Innovation Fund (Ministry of Science and Technology) took part as lead of the “Sparking Creativity” theme group.",
        "Speaking at the forum, he said digital transformation was an unavoidable global trend that Vietnam could not stand apart from. Young intellectuals, particularly those with research and creative output, could become a core force connecting with one another to drive the process. He proposed that, through the forum, young intellectuals jointly build a science and technology database network ready for transfer and application. In a later interview with Nhan Dan, he said the proposals in his group spanned fields such as optics, gene technology and high-tech agriculture, and were concise, practical and suited to Vietnam's policy conditions, focusing on innovative startups and the use of modern technology in digital transformation. He also noted that delegate selection in 2021 had been more rigorous than at earlier editions.",
        "The idea of connecting knowledge and scientific data for transfer and application is consistent with the direction later set out in Resolution 57-NQ/TW, which names science, technology, innovation and digital transformation as the most important breakthrough and scientists as a key factor."
      ]
    },
    "sources": [
      {
        "outlet": "Tuổi Trẻ",
        "title": "Chuyển đổi số là chìa khóa vượt khó khăn trong đại dịch COVID-19",
        "url": "https://tuoitre.vn/chuyen-doi-so-la-chia-khoa-vuot-kho-khan-trong-dai-dich-covid-19-20211125192102627.htm",
        "date": "26/11/2021"
      },
      {
        "outlet": "Báo Nhân Dân",
        "title": "Khơi dòng sức mạnh trí thức trẻ trong chuyển đổi số",
        "url": "https://nhandan.vn/khoi-dong-suc-manh-tri-thuc-tre-trong-chuyen-doi-so-post678084.html",
        "date": "13/12/2021"
      }
    ]
  },
  {
    "slug": "2021-10-05-quy-phat-trien-khcn-doanh-nghiep",
    "date": "2021-10-05",
    "category": "policy",
    "role": {
      "vi": "Chuyên gia bình luận",
      "en": "Expert commentator"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng phân tích vướng mắc của Quỹ phát triển KH&CN doanh nghiệp",
      "en": "Dr. Chu Duc Hoang on why enterprises struggle to use their science and technology development funds"
    },
    "excerpt": {
      "vi": "Trao đổi với VnEconomy, TS. Chử Đức Hoàng cho rằng quy định hướng dẫn về Quỹ phát triển KH&CN của doanh nghiệp còn hạn chế và chưa sát thực tế.",
      "en": "Speaking to VnEconomy, Dr. Chu Duc Hoang said the rules guiding enterprises' science and technology development funds were restrictive and out of step with business reality."
    },
    "keyPoints": {
      "vi": [
        "Hoạt động KH&CN trong doanh nghiệp còn hạn chế, nhiều doanh nghiệp thiếu năng lực tổ chức, quản lý",
        "Thông tư liên tịch số 12/2016 có nội dung hạn chế, chưa phù hợp thực tế nên doanh nghiệp e ngại trích lập quỹ",
        "Thủ tục tài chính, kế toán, kiểm toán phức tạp và thiếu hướng dẫn, mô hình mẫu khiến doanh nghiệp chưa mạnh dạn sử dụng quỹ"
      ],
      "en": [
        "S&T activity within enterprises is limited, and many lack the capacity to organise and manage it",
        "Joint Circular 12/2016 is restrictive and ill-suited to business reality, so firms hesitate to set aside the fund",
        "Complex finance, accounting and audit procedures, with little guidance or model examples, discourage firms from using the fund"
      ]
    },
    "body": {
      "vi": [
        "Ngày 05/10/2021, VnEconomy đăng bài phân tích về thực trạng Quỹ phát triển khoa học và công nghệ của doanh nghiệp, một công cụ chính sách cho phép doanh nghiệp trích một phần thu nhập tính thuế để đầu tư cho KH&CN. Theo bài viết, tỷ lệ doanh nghiệp thực hiện trích lập còn rất thấp, và nhiều doanh nghiệp đã trích lập nhưng không sử dụng được nguồn quỹ.",
        "Bình luận về vấn đề này có TS. Chử Đức Hoàng, Phụ trách Phòng Tài trợ Đề tài – Hoạt động, Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, người có kinh nghiệm thực tiễn trong hỗ trợ doanh nghiệp đổi mới công nghệ.",
        "Theo TS. Chử Đức Hoàng, hoạt động KH&CN trong doanh nghiệp nhìn chung còn hạn chế, nhiều doanh nghiệp chưa đủ năng lực tổ chức và quản lý các nhiệm vụ này. Ông nhận định Thông tư liên tịch số 12/2016/TTLT-BKHCN-BTC hướng dẫn quản lý quỹ có nội dung còn hạn chế và chưa phù hợp với thực tế doanh nghiệp, khiến nhiều đơn vị e ngại trích lập. Bên cạnh đó, các thủ tục tài chính, kế toán, kiểm toán phức tạp, trong khi thiếu hướng dẫn cụ thể và các mô hình mẫu để doanh nghiệp tham khảo.",
        "Những vướng mắc về cơ chế tài chính cho KH&CN trong doanh nghiệp mà ông nêu ra tiếp tục là chủ đề được quan tâm trong quá trình hoàn thiện thể chế sau này. Nghị quyết 57-NQ/TW (12/2024) xác định thể chế là điều kiện tiên quyết, và Luật Khoa học, công nghệ và đổi mới sáng tạo năm 2025 hướng tới hệ thống đổi mới sáng tạo lấy doanh nghiệp làm trung tâm, với định hướng quản lý chủ yếu theo nguyên tắc hậu kiểm."
      ],
      "en": [
        "On 5 October 2021, VnEconomy published an analysis of enterprises' science and technology development funds, a policy tool that lets firms set aside part of their taxable income for S&T investment. According to the article, very few enterprises made such provisions, and many that did were unable to use the money.",
        "Among those commenting was Dr. Chu Duc Hoang, Officer in Charge of the Project and Activity Funding Division at the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, who had practical experience supporting enterprises' technology innovation.",
        "Dr. Hoang observed that S&T activity within enterprises was generally limited and many firms lacked the capacity to organise and manage such work. He said Joint Circular 12/2016/TTLT-BKHCN-BTC, which guides the management of these funds, was restrictive and did not fit business realities, so many firms were reluctant to set money aside. Finance, accounting and audit procedures were also complex, while specific guidance and model examples for firms to follow were lacking.",
        "The financing bottlenecks he identified remained on the agenda as Vietnam's institutional framework evolved. Resolution 57-NQ/TW (December 2024) identifies institutions as a prerequisite, and the 2025 Law on Science, Technology and Innovation aims at an innovation system with enterprises at its centre, managed mainly through post-audit (ex-post control)."
      ]
    },
    "sources": [
      {
        "outlet": "VnEconomy",
        "title": "Doanh nghiệp “gặp nạn” vì Quỹ phát triển khoa học và công nghệ",
        "url": "https://vneconomy.vn/doanh-nghiep-gap-nan-vi-quy-phat-trien-khoa-hoc-va-cong-nghe.htm",
        "date": "05/10/2021"
      }
    ]
  },
  {
    "slug": "2021-01-26-tu-y-tuong-den-san-pham-phai-than-toc",
    "date": "2021-01-26",
    "category": "innovation",
    "role": {
      "vi": "Khách mời phỏng vấn",
      "en": "Interviewee"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng: Con đường từ ý tưởng đến sản phẩm công nghệ cần được rút ngắn",
      "en": "Dr. Chu Duc Hoang: the path from idea to technology product must be shortened"
    },
    "excerpt": {
      "vi": "Trả lời Tạp chí Doanh nhân trẻ, TS. Chử Đức Hoàng cho rằng khởi nghiệp đổi mới sáng tạo cần gắn với hệ sinh thái, bám sát thị trường và bảo đảm tính bền vững.",
      "en": "Speaking to Doanh Nhan Tre magazine, Dr. Chu Duc Hoang said innovative startups must be embedded in the ecosystem, follow the market closely and be sustainable."
    },
    "keyPoints": {
      "vi": [
        "Hoạt động đổi mới sáng tạo ở Việt Nam tăng trưởng nhanh nhưng chỉ số so với thế giới còn khiêm tốn",
        "Thời gian từ ý tưởng đến sản phẩm, nhất là trong lĩnh vực công nghệ, phải được rút ngắn đáng kể",
        "Dung lượng thị trường và khả năng đáp ứng nhu cầu quan trọng hơn bản thân ý tưởng; tính bền vững quyết định sự tồn tại của startup",
        "Người trẻ nên tham gia các nhóm khởi nghiệp để tích lũy kiến thức, kỹ năng trước khi tự khởi nghiệp"
      ],
      "en": [
        "Innovation in Vietnam has grown quickly, but its standing remains modest by global comparison",
        "The time from idea to product, especially in technology, must be cut sharply",
        "Market size and the ability to meet demand matter more than the idea itself; sustainability decides whether a startup survives",
        "Young people should join existing startup teams to build knowledge and skills before founding their own"
      ]
    },
    "body": {
      "vi": [
        "Ngày 26/01/2021, Tạp chí Doanh nhân trẻ (Hội Doanh nhân trẻ Việt Nam) đăng bài trao đổi với TS. Chử Đức Hoàng, Phó Trưởng phòng Tài trợ đề tài và Hoạt động đổi mới công nghệ, Quỹ Đổi mới công nghệ quốc gia (NATIF), về con đường từ ý tưởng đến sản phẩm và những điều kiện để khởi nghiệp đổi mới sáng tạo thành công.",
        "Theo TS. Chử Đức Hoàng, hoạt động đổi mới sáng tạo tại Việt Nam những năm gần đây tăng trưởng nhanh, song so với thế giới vẫn còn khoảng cách. Hệ sinh thái trong nước có nhiều yếu tố mới và thay đổi thường xuyên, từ thể chế, chính sách đến nguồn lực hỗ trợ và thị trường. Trong bối cảnh đó, thời gian để hiện thực hóa một ý tưởng công nghệ không còn được tính bằng thập kỷ mà phải được rút ngắn tối đa để theo kịp cạnh tranh.",
        "Ông nhấn mạnh rằng một ý tưởng tốt là chưa đủ; yếu tố quyết định là dung lượng thị trường và khả năng đáp ứng nhu cầu, cả trong nước và quốc tế. Ông dẫn ví dụ năm 2020 có nhiều đơn vị công bố chế tạo được máy thở, nhưng rất ít sản phẩm thực sự ra được thị trường. Ông cũng cho rằng khởi nghiệp phải gắn với hệ sinh thái, và tính bền vững của mô hình kinh doanh là điều kiện sống còn. Với người trẻ, ông khuyên nên tham gia một nhóm khởi nghiệp để tích lũy kiến thức, kỹ năng trước khi tự lập doanh nghiệp, bởi cái giá của thất bại ở quy mô doanh nghiệp lớn hơn nhiều so với ở quy mô một đề tài nghiên cứu.",
        "Những quan điểm này cho thấy cách tiếp cận coi trọng thị trường và thương mại hóa kết quả nghiên cứu, gắn hoạt động khoa học với nhu cầu của doanh nghiệp. Đây cũng là tinh thần được nhấn mạnh trong các định hướng chính sách về khoa học, công nghệ và đổi mới sáng tạo những năm sau đó."
      ],
      "en": [
        "On 26 January 2021, Doanh Nhan Tre magazine, published by the Vietnam Young Entrepreneurs Association, ran an interview with Dr. Chu Duc Hoang, Deputy Head of the Division of Project and Technology Innovation Activity Funding at the National Technology Innovation Fund (NATIF), on the path from idea to product and what it takes for an innovative startup to succeed.",
        "Dr. Hoang noted that innovation activity in Vietnam had grown quickly in recent years, yet a gap with the rest of the world remained. The domestic ecosystem was new and changing often, from institutions and policies to support resources and markets. In this setting, realising a technology idea could no longer take decades; the time to market had to be shortened as much as possible to keep pace with competition.",
        "He stressed that a good idea is not enough: what matters most is the size of the market and the ability to meet demand, both in Vietnam and abroad. He cited 2020, when many organisations announced they had built ventilators but very few products actually reached the market. He also argued that startups must be part of an ecosystem and that a sustainable business model is essential to survival. He advised young people to join a startup team to gain knowledge and skills before founding their own company, since failure costs a business far more than it costs a research project.",
        "These views reflect an approach that values the market and the commercialisation of research results, linking science with the needs of enterprises. The same spirit was emphasised in Vietnam's science, technology and innovation policy direction in the following years."
      ]
    },
    "sources": [
      {
        "outlet": "Tạp chí Doanh nhân trẻ",
        "title": "TS. Chử Đức Hoàng: Từ ý tưởng tạo ra sản phẩm phải “thần tốc”",
        "url": "https://doanhnhantrevietnam.vn/ts-chu-duc-hoang-tu-y-tuong-tao-ra-san-pham-phai-than-toc-d3871.html",
        "date": "26/01/2021"
      }
    ]
  },
  {
    "slug": "2020-12-15-doi-thoai-robot-dich-vu-y-te",
    "date": "2020-12-15",
    "category": "science",
    "role": {
      "vi": "Diễn giả",
      "en": "Speaker"
    },
    "title": {
      "vi": "TS. Chử Đức Hoàng tham gia đối thoại về robot dịch vụ trong các cơ sở y tế",
      "en": "Dr. Chu Duc Hoang joins a dialogue on service robots in healthcare facilities"
    },
    "excerpt": {
      "vi": "Tại cuộc đối thoại về robot dịch vụ y tế tháng 12/2020, TS. Chử Đức Hoàng thông tin về các dự án robot trong nước có khả năng ứng dụng cho ngành y tế đang được hai quỹ tài trợ.",
      "en": "At a December 2020 dialogue on healthcare service robots, Dr. Chu Duc Hoang reported on domestic robotics projects with potential medical use that were being funded by two foundations."
    },
    "keyPoints": {
      "vi": [
        "NATIF và VINIF khi đó đang tài trợ khoảng 10 dự án robot trong nước có khả năng phục vụ ngành y tế",
        "Các quỹ có thể tiếp tục xem xét tài trợ những dự án tương tự trong tương lai",
        "Robot dịch vụ y tế được nhìn nhận là thị trường tiềm năng cần đầu tư cho nghiên cứu và phát triển"
      ],
      "en": [
        "NATIF and VINIF were then funding around 10 domestic robotics projects with potential healthcare applications",
        "The funds might consider supporting similar projects in the future",
        "Healthcare service robots were seen as a promising market that requires investment in R&D"
      ]
    },
    "body": {
      "vi": [
        "Ngày 15/12/2020, cuộc đối thoại chủ đề “Robot dịch vụ trong các cơ sở y tế” do Chương trình Phát triển Liên Hợp Quốc (UNDP) tổ chức đã quy tụ các nhà khoa học, bác sĩ, doanh nghiệp công nghệ và đại diện cơ quan quản lý để bàn về triển vọng phát triển robot phục vụ ngành y tế tại Việt Nam. Tham gia trao đổi có đại diện Bộ Khoa học và Công nghệ, Viện PRATI (Phenikaa) cùng một số doanh nghiệp phát triển robot.",
        "Tại đối thoại, TS. Chử Đức Hoàng tham gia với tư cách cán bộ Phòng Tài trợ Đề tài – Hoạt động thuộc Quỹ Đổi mới công nghệ quốc gia (NATIF), Bộ Khoa học và Công nghệ, đồng thời là chuyên gia của Quỹ Đổi mới sáng tạo Vingroup (VINIF).",
        "Theo thông tin ông chia sẻ, hai quỹ khi đó đang tài trợ khoảng 10 dự án trong nước về robot có khả năng phục vụ ngành y tế, và có thể sẽ tiếp tục xem xét tài trợ cho các dự án tương tự trong thời gian tới. Thông tin này cho thấy nguồn lực tài trợ nghiên cứu đã bắt đầu hướng tới lĩnh vực robot y tế, bên cạnh các cơ chế hỗ trợ mà đại diện Bộ Khoa học và Công nghệ đề cập, như việc đưa robot vào danh mục công nghệ cao được ưu tiên đầu tư phát triển.",
        "Cuộc đối thoại phản ánh mối quan tâm sớm tới việc kết nối nhà khoa học, doanh nghiệp công nghệ và cơ sở y tế trong một lĩnh vực đòi hỏi đầu tư nghiên cứu dài hạn. Với nền tảng đào tạo về kỹ thuật y sinh và kinh nghiệm làm việc trong lĩnh vực tài trợ đổi mới công nghệ, TS. Chử Đức Hoàng góp phần mang góc nhìn của bên tài trợ vào thảo luận về con đường đưa robot y tế từ phòng thí nghiệm đến ứng dụng thực tế."
      ],
      "en": [
        "On 15 December 2020, a dialogue on “Service robots in healthcare facilities”, organised by the United Nations Development Programme (UNDP), brought together scientists, physicians, technology companies and government representatives to discuss the prospects for medical robotics in Vietnam. Participants included representatives of the Ministry of Science and Technology, Phenikaa's PRATI institute and several robotics companies.",
        "Dr. Chu Duc Hoang took part as a staff member of the Project and Activity Funding Division at the National Technology Innovation Fund (NATIF), Ministry of Science and Technology, and as an expert of the Vingroup Innovation Foundation (VINIF).",
        "He reported that the two funds were then supporting around ten domestic robotics projects with potential applications in healthcare, and that they might consider funding similar projects in the future. This indicated that research funding had begun to reach medical robotics, alongside the support mechanisms mentioned by the Ministry's representative, such as listing robots among the high technologies prioritised for investment.",
        "The dialogue reflected early interest in connecting scientists, technology companies and healthcare providers in a field that needs long-term research investment. With a background in biomedical engineering and experience in technology innovation funding, Dr. Chu Duc Hoang brought a funder's perspective to the discussion on moving medical robots from the laboratory into practical use."
      ]
    },
    "sources": [
      {
        "outlet": "Tia Sáng",
        "title": "Robot dịch vụ y tế: Thị trường tiềm năng sắp tới ở Việt Nam?",
        "url": "https://tiasang.com.vn/robot-dich-vu-y-te-thi-truong-tiem-nang-sap-toi-o-viet-nam-5027199.html",
        "date": "18/12/2020"
      }
    ]
  },
  {
    "slug": "2015-10-08-zinmed-may-do-duong-huyet-khong-xam-lan",
    "date": "2015-10-08",
    "category": "science",
    "role": {
      "vi": "Nhà sáng lập, CEO Zinmed",
      "en": "Founder & CEO, Zinmed"
    },
    "title": {
      "vi": "Zinmed nghiên cứu máy đo đường huyết không xâm lấn do nhóm nhà khoa học Việt Nam phát triển",
      "en": "Zinmed develops a non-invasive glucose meter built by a team of Vietnamese researchers"
    },
    "excerpt": {
      "vi": "Trao đổi về dự án máy đo đường huyết không cần chích máu, TS. Chử Đức Hoàng – nhà sáng lập Zinmed – chia sẻ nguyên lý đo bằng cảm biến quang hồng ngoại, những thách thức về độ chính xác và con đường thương mại hóa một sản phẩm y sinh.",
      "en": "Speaking about a needle-free glucose meter, Dr. Chu Duc Hoang, founder of Zinmed, explained its infrared optical sensing principle, the accuracy challenges and the road to commercializing a biomedical product."
    },
    "keyPoints": {
      "vi": [
        "Thiết bị đo gián tiếp bằng cảm biến điện dung và các cặp cảm biến quang hồng ngoại (bước sóng 1495–2105 nm), không cần que thử.",
        "Độ chính xác công bố thời điểm đó đạt 70–80%; nhóm nghiên cứu xác định còn nhiều việc phải làm để cải thiện.",
        "Dữ liệu đồng bộ với điện thoại qua Bluetooth, lưu lịch sử đo và đưa ra khuyến nghị cho người bệnh.",
        "Zinmed đạt giải Nhì Startup Wheel 2015 và nhận tài trợ 30.000 euro từ Chương trình Đối tác Đổi mới sáng tạo (IPP)."
      ],
      "en": [
        "The device measures indirectly using a capacitive sensor and infrared optical sensor pairs (1,495–2,105 nm), with no test strips.",
        "Reported accuracy at the time was 70–80%; the team acknowledged much work remained to improve it.",
        "Readings sync to a smartphone via Bluetooth, keeping a measurement history and giving patients advice.",
        "Zinmed won second prize at Startup Wheel 2015 and received a €30,000 grant from the Innovation Partnership Programme (IPP)."
      ]
    },
    "body": {
      "vi": [
        "Ngày 8/10/2015, trang AloBacsi đăng lại bài viết của báo Trí Thức Trẻ giới thiệu dự án máy đo đường huyết không xâm lấn thuộc giải pháp quản lý điều trị bệnh tiểu đường Zinmed. Dự án do một nhóm khởi nghiệp gồm các nhà nghiên cứu khoa học khởi xướng; công ty được thành lập từ tháng 9/2014.",
        "Trao đổi với phóng viên, TS. Chử Đức Hoàng, Tiến sĩ ngành Kỹ thuật Y sinh, nhà sáng lập kiêm Giám đốc điều hành Zinmed, giải thích: thay vì chích máu và dùng que thử dựa trên phản ứng hóa học như các máy đo phổ biến, thiết bị của Zinmed đo gián tiếp bằng cảm biến điện dung và các cặp cảm biến quang với nhiều bước sóng hồng ngoại, từ đó xác định tương quan giữa chỉ số đường huyết và tín hiệu cảm biến. Cách tiếp cận này hướng tới giảm đau cho người bệnh và tiết kiệm chi phí que thử, vốn có thể lên tới 20.000–30.000 đồng mỗi ngày với người phải đo ba lần.",
        "Ông cũng thẳng thắn chia sẻ những giới hạn: độ chính xác công bố thời điểm đó mới đạt 70–80%, nhóm nghiên cứu đã nhiều lần phải làm lại thiết kế, và bài toán thương mại hóa – từ vốn cho nghiên cứu phát triển, vận hành tới đưa sản phẩm đến người dùng – còn rất dài. Thiết bị được thiết kế để đồng bộ dữ liệu với điện thoại qua Bluetooth, lưu lịch sử đo và đưa ra lời khuyên cho bệnh nhân.",
        "Theo bài báo, Zinmed khi đó đã giành giải Nhì cuộc thi Startup Wheel 2015 (do Trung tâm Hỗ trợ Thanh niên Khởi nghiệp và Hội Doanh nhân trẻ TP.HCM tổ chức), nhận gói tài trợ 30.000 euro từ IPP cùng sự hỗ trợ từ một số tổ chức và doanh nghiệp công nghệ.",
        "Nhìn lại, câu chuyện Zinmed năm 2015 phản ánh rõ con đường của một nhà khoa học khởi nghiệp: đưa kết quả nghiên cứu kỹ thuật y sinh ra thị trường, chấp nhận thử – sai và minh bạch về giới hạn của công nghệ. Đây cũng là nền tảng thực tiễn cho góc nhìn của TS. Chử Đức Hoàng về thương mại hóa kết quả nghiên cứu và hỗ trợ doanh nghiệp đổi mới công nghệ trong các năm sau."
      ],
      "en": [
        "On 8 October 2015, AloBacsi republished a Trí Thức Trẻ article on a non-invasive glucose meter, part of Zinmed's diabetes-management solution. The project was started by a startup team of researchers; the company was founded in September 2014.",
        "Dr. Chu Duc Hoang, a PhD in Biomedical Engineering and Zinmed's founder and CEO, explained that instead of pricking the finger and using chemical test strips like common meters, Zinmed's device measures indirectly with a capacitive sensor and infrared optical sensor pairs, correlating blood-glucose levels with the sensor signals. The aim is to spare patients pain and the cost of strips, which can reach VND 20,000–30,000 a day for someone testing three times daily.",
        "He was candid about the limits: reported accuracy was then only 70–80%, the team had redesigned the device several times, and commercialization — funding R&D, operations and reaching users — still had a long way to go. The device was designed to sync with a smartphone via Bluetooth, keep a history of readings and give patients advice.",
        "According to the article, Zinmed had won second prize at Startup Wheel 2015 (organized by the Business Startup Support Centre and the Ho Chi Minh City Young Business Association) and received a €30,000 grant from IPP, along with support from several technology organizations and companies.",
        "In hindsight, Zinmed's 2015 story shows the path of a scientist-entrepreneur: taking biomedical research to market, accepting trial and error, and being open about a technology's limits. That hands-on experience later informed Dr. Hoang's perspective on commercializing research and supporting enterprise technology innovation."
      ]
    },
    "sources": [
      {
        "outlet": "AloBacsi (theo Trí Thức Trẻ)",
        "title": "Sắp có máy đo tiểu đường không cần chích máu made in Vietnam?",
        "url": "https://alobacsi.com/sap-co-may-do-tieu-duong-khong-can-chich-mau-made-in-vietnam.html",
        "date": "08/10/2015"
      }
    ]
  },
  {
    "slug": "2015-05-28-jfdi-discover-zinmed-diabetes",
    "date": "2015-05-28",
    "category": "innovation",
    "role": {
      "vi": "Đồng sáng lập Zinmed",
      "en": "Co-founder, Zinmed"
    },
    "title": {
      "vi": "Zinmed Diabetes tham gia chương trình JFDI Discover tại Singapore, rèn phương pháp khởi nghiệp tinh gọn",
      "en": "Zinmed Diabetes joins Singapore's JFDI Discover programme to practise lean-startup methods"
    },
    "excerpt": {
      "vi": "Vườn ươm JFDI.Asia (Singapore) giới thiệu Zinmed Diabetes – giải pháp quản lý điều trị tiểu đường do TS. Chử Đức Hoàng và hai cộng sự sáng lập – sau khi nhóm tham gia chương trình JFDI Discover tháng 3/2015.",
      "en": "Singapore accelerator JFDI.Asia featured Zinmed Diabetes, a diabetes-management solution co-founded by Dr. Chu Duc Hoang, after the team joined the JFDI Discover programme in March 2015."
    },
    "keyPoints": {
      "vi": [
        "Zinmed Diabetes cung cấp máy đo, que thử và công cụ theo dõi, nhắc lịch điều trị tự động trên điện thoại và thiết bị đeo.",
        "Ba nhà sáng lập đều tốt nghiệp Đại học Bách khoa Hà Nội, có kinh nghiệm giảng dạy, nghiên cứu, y tế và ươm tạo.",
        "Nhóm đã khảo sát hàng trăm bệnh nhân và hàng chục bác sĩ tại Việt Nam, Mỹ, Anh, Singapore để hiểu nhu cầu thực.",
        "Bài học rút ra: thực hành liên tục, dùng Lean Canvas, tham vấn chuyên gia và phân tích thị trường."
      ],
      "en": [
        "Zinmed Diabetes provides glucometers, test strips and automatic tracking and treatment reminders on smartphones and wearables.",
        "Its three founders are all Hanoi University of Science and Technology graduates with backgrounds in teaching, research, healthcare and incubation.",
        "The team studied hundreds of patients and dozens of doctors in Vietnam, the US, the UK and Singapore.",
        "Lessons learned: practise relentlessly, use the Lean Canvas, consult experts and analyse the market."
      ]
    },
    "body": {
      "vi": [
        "Ngày 28/5/2015, blog của vườn ươm khởi nghiệp JFDI.Asia (Singapore) đăng bài giới thiệu Zinmed Diabetes – startup Việt Nam hỗ trợ người bệnh tiểu đường quản lý quá trình điều trị – sau khi nhóm tham gia chương trình JFDI Discover vào tháng 3/2015.",
        "Theo bài viết, Zinmed Diabetes cung cấp máy đo đường huyết, que thử cùng các công cụ theo dõi sức khỏe và nhắc lịch điều trị tự động gửi tới điện thoại thông minh và thiết bị đeo. Ba nhà sáng lập – TS. Chử Đức Hoàng, Lê Vũ Toàn và Nguyễn Sĩ Dũng – đều tốt nghiệp Đại học Bách khoa Hà Nội, có kinh nghiệm trong giảng dạy, nghiên cứu, y tế và ươm tạo khởi nghiệp. Nhóm đã khảo sát hàng trăm bệnh nhân và hàng chục bác sĩ tại Việt Nam, Hoa Kỳ, Anh và Singapore để xác định nhu cầu thực của người bệnh, từ chi phí theo dõi đường huyết tới việc quên uống thuốc hay khó tìm cơ sở khám phù hợp.",
        "Chia sẻ về chương trình, nhóm cho biết sau khi hoàn thành khóa Topica Founder Institute tại Hà Nội, JFDI Discover giúp họ hoàn thiện mô hình kinh doanh, kết nối với cộng đồng khởi nghiệp và nhà đầu tư quốc tế, cũng như với cơ sở y tế, bác sĩ và bệnh nhân. Bài học được nhấn mạnh là \"thực hành, thực hành và thực hành\": công cụ Lean Canvas giúp nhóm đi đúng hướng, bên cạnh việc tham vấn ý kiến chuyên gia và phân tích thị trường.",
        "Trải nghiệm tại JFDI là một mốc trong hành trình của TS. Chử Đức Hoàng từ nghiên cứu kỹ thuật y sinh tới khởi nghiệp sáng tạo – kinh nghiệm thực tiễn về phương pháp khởi nghiệp tinh gọn mà ông tiếp tục chia sẻ với cộng đồng khởi nghiệp Việt Nam trong các năm sau."
      ],
      "en": [
        "On 28 May 2015, the blog of Singapore accelerator JFDI.Asia featured Zinmed Diabetes, a Vietnamese startup that helps people with diabetes manage their treatment, after the team took part in the JFDI Discover programme in March 2015.",
        "According to the article, Zinmed Diabetes provides glucometers and test strips along with automatic health-tracking tools and treatment reminders sent to smartphones and wearables. Its three founders — Dr. Chu Duc Hoang, Le Vu Toan and Nguyen Si Dung — all graduated from Hanoi University of Science and Technology and have experience in teaching, research, healthcare and incubation. The team studied hundreds of patients and dozens of doctors in Vietnam, the US, the UK and Singapore to pin down real needs, from the cost of glucose monitoring to missed medication and finding suitable clinics.",
        "The team said that, after completing the Topica Founder Institute programme in Hanoi, JFDI Discover helped them refine their business model and connect with global entrepreneurs, investors, medical facilities, doctors and patients. Their key lesson was \"practice, practice and practice\": the Lean Canvas kept them on track, alongside expert advice and market analysis.",
        "The JFDI experience marked a step in Dr. Chu Duc Hoang's journey from biomedical engineering research to innovative entrepreneurship — practical lean-startup know-how he went on to share with Vietnam's startup community in later years."
      ]
    },
    "sources": [
      {
        "outlet": "JFDI.Asia",
        "title": "Practice, Practice, Practice – the only way to learn how to apply lean startup methods",
        "url": "https://www.jfdi.asia/blog/zinmed-discover-feature/",
        "date": "28/05/2015"
      }
    ]
  },
  {
    "slug": "2015-03-02-ictnews-zinmed-startup-y-te",
    "date": "2015-03-02",
    "category": "innovation",
    "role": {
      "vi": "Nhà sáng lập Zinmed",
      "en": "Founder, Zinmed"
    },
    "title": {
      "vi": "ICTNews điểm danh Zinmed trong 6 startup đáng chú ý lĩnh vực y tế, chăm sóc sức khỏe",
      "en": "ICTNews lists Zinmed among six notable healthcare startups"
    },
    "excerpt": {
      "vi": "Zinmed – ứng dụng di động cho cộng đồng người bệnh tiểu đường do TS. Chử Đức Hoàng sáng lập – được ICTNews giới thiệu trong nhóm 6 startup y tế nổi bật, cùng thông tin ông vào nhóm 14 nhà khoa học Việt Nam tham gia chương trình hỗ trợ thương mại hóa kết quả nghiên cứu của Viện Hàn lâm Kỹ thuật Hoàng gia Anh.",
      "en": "Zinmed, a mobile app for people with diabetes founded by Dr. Chu Duc Hoang, was featured by ICTNews among six notable healthcare startups, noting he had been selected among 14 Vietnamese scientists for the UK Royal Academy of Engineering's research-commercialization programme."
    },
    "keyPoints": {
      "vi": [
        "Zinmed là ứng dụng đa nền tảng cho người bệnh tiểu đường: thông tin theo nhóm bệnh, tra cứu dinh dưỡng, tìm và đánh giá phòng khám, bác sĩ.",
        "Ứng dụng kết nối thiết bị theo dõi sức khỏe, phân tích vận động, nhịp tim, huyết áp; hỗ trợ lưu thông tin bệnh nhân lên thẻ NFC.",
        "Zinmed tham gia khóa TFI 3 và đạt giải Nhì cuộc thi phát triển ứng dụng di động do Microsoft và Hiệp hội Internet Việt Nam tổ chức.",
        "TS. Chử Đức Hoàng vào nhóm 14 nhà khoa học Việt Nam tham gia khóa hỗ trợ thương mại hóa kết quả nghiên cứu do Viện Hàn lâm Anh tổ chức."
      ],
      "en": [
        "Zinmed is a cross-platform app for people with diabetes: condition-specific information, nutrition lookup, and finding and rating clinics and doctors.",
        "It connects to health trackers to analyse activity, heart rate and blood pressure, and can store patient data on NFC cards.",
        "Zinmed took part in TFI cohort 3 and won second prize in a mobile-app competition run by Microsoft and the Vietnam Internet Association.",
        "Dr. Chu Duc Hoang was among 14 Vietnamese scientists selected for a research-commercialization course run by the UK's Royal Academy of Engineering."
      ]
    },
    "body": {
      "vi": [
        "Ngày 2/3/2015, ICTNews (VietNamNet) đăng bài \"6 Startup đáng chú ý trong lĩnh vực y tế, chăm sóc sức khỏe\", nhận định khởi nghiệp trong lĩnh vực y tế không chỉ là khởi nghiệp đơn thuần mà còn góp phần giúp việc khám chữa bệnh trở nên thuận tiện hơn, dù số startup mạnh dạn đầu tư vào lĩnh vực nhạy cảm này còn chưa nhiều.",
        "Trong danh sách, Zinmed được giới thiệu là ứng dụng di động đa nền tảng dành cho cộng đồng người bệnh tiểu đường: cung cấp thông tin theo từng nhóm bệnh và đối tượng, hỗ trợ tra cứu dinh dưỡng, thực phẩm, tìm kiếm và đánh giá phòng khám, bác sĩ. Ứng dụng có thể kết nối tự động với thiết bị theo dõi sức khỏe để tổng hợp, phân tích các chỉ số vận động, nhịp tim, huyết áp qua biểu đồ trực quan, đồng thời hỗ trợ lưu thông tin bệnh nhân lên thẻ NFC và thiết bị đeo tay. Khi đó, Zinmed đã có phiên bản chạy thử đầu tiên trên Android và đang tìm nguồn đầu tư để phát triển tiếp.",
        "Bài viết cho biết Zinmed đã tham gia khóa khởi nghiệp Topica Founder Institute (TFI) khóa 3 và đạt giải Nhì cuộc thi phát triển ứng dụng di động do Microsoft và Hiệp hội Internet Việt Nam tổ chức. Đáng chú ý, nhà sáng lập Zinmed – TS. Chử Đức Hoàng – vừa được chọn vào nhóm 14 nhà khoa học Việt Nam tham gia khóa hỗ trợ thương mại hóa kết quả nghiên cứu do Viện Hàn lâm Kỹ thuật Hoàng gia Anh (Royal Academy of Engineering) tổ chức.",
        "Việc tham gia chương trình của Viện Hàn lâm Kỹ thuật Hoàng gia Anh (sau này là mạng lưới Leaders in Innovation Fellowships – LIF) đánh dấu bước chuyển của TS. Chử Đức Hoàng từ nhà nghiên cứu kỹ thuật y sinh sang người thúc đẩy thương mại hóa kết quả nghiên cứu – lĩnh vực ông tiếp tục gắn bó qua mạng lưới LIFVietnam và công tác hỗ trợ đổi mới công nghệ sau này."
      ],
      "en": [
        "On 2 March 2015, ICTNews (VietNamNet) published \"6 notable startups in healthcare\", arguing that healthcare startups do more than build businesses — they make medical care more accessible — even though few startups yet dared to invest in this sensitive field.",
        "Zinmed was introduced as a cross-platform mobile app for people with diabetes: information tailored to conditions and user groups, nutrition and food lookup, and finding and rating clinics and doctors. It could connect automatically to health trackers to aggregate and chart activity, heart rate and blood pressure, and store patient data on NFC cards and wristbands. At the time Zinmed had a first Android test version and was seeking investment.",
        "The article noted that Zinmed had taken part in Topica Founder Institute (TFI) cohort 3 and won second prize in a mobile-app development competition organized by Microsoft and the Vietnam Internet Association. Notably, its founder Dr. Chu Duc Hoang had just been selected among 14 Vietnamese scientists for a research-commercialization course run by the UK's Royal Academy of Engineering.",
        "Joining the Royal Academy of Engineering programme (later the Leaders in Innovation Fellowships network, LIF) marked Dr. Hoang's shift from biomedical engineering researcher to champion of research commercialization — a field he has continued through the LIFVietnam network and his later work supporting technology innovation."
      ]
    },
    "sources": [
      {
        "outlet": "ICTNews (VietNamNet)",
        "title": "6 Startup đáng chú ý trong lĩnh vực y tế, chăm sóc sức khỏe",
        "url": "https://vietnamnet.vn/6-startup-dang-chu-y-trong-linh-vuc-y-te-cham-soc-suc-khoe-i295949.html",
        "date": "02/03/2015"
      },
      {
        "outlet": "Medical Việt Nam (đăng lại)",
        "title": "6 Startup đáng chú ý trong lĩnh vực y tế, chăm sóc sức khỏe",
        "url": "https://medicalvietnam.com.vn/6-startup-dang-chu-y-trong-linh-vuc-y-te-cham-soc-suc-khoe"
      }
    ]
  },
  {
    "slug": "2014-11-25-ung-dung-zinmed-ra-mat",
    "date": "2014-11-25",
    "category": "innovation",
    "role": {
      "vi": "Nhà sáng lập Zinmed",
      "en": "Founder, Zinmed"
    },
    "title": {
      "vi": "Ra mắt ứng dụng Zinmed: nền tảng tư vấn sức khỏe trực tuyến kết nối người dùng với bác sĩ",
      "en": "Zinmed app launches as an online health-advice platform connecting users with doctors"
    },
    "excerpt": {
      "vi": "ICTNews giới thiệu Zinmed – dự án y tế số do TS. Chử Đức Hoàng sáng lập – chính thức ra mắt năm 2014 với mục tiêu xây dựng dịch vụ tư vấn sức khỏe trực tuyến và cầu nối giữa người dùng với bác sĩ, phòng khám.",
      "en": "ICTNews introduced Zinmed, a digital-health project founded by Dr. Chu Duc Hoang, which launched in 2014 aiming to offer online health advice and connect users with doctors and clinics."
    },
    "keyPoints": {
      "vi": [
        "Ba mục tiêu: mạng xã hội hỏi – đáp sức khỏe với đội ngũ chuyên gia; cầu nối người dùng – bác sĩ – phòng khám; dữ liệu lớn về xu hướng bệnh lý của người Việt.",
        "Phát triển đa nền tảng (web, điện thoại, máy tính bảng), miễn phí cho người dùng.",
        "Hợp tác với hơn 10 đối tác, trong đó có một số bệnh viện và dịch vụ y tế tư nhân.",
        "Hoàn thành giai đoạn phát triển sản phẩm đầu tiên, chuẩn bị gọi vốn; nhóm sáng lập tự đầu tư khoảng 10.000 USD ban đầu."
      ],
      "en": [
        "Three goals: a health Q&A community with expert answers; a bridge between users, doctors and clinics; and big data on health trends in Vietnam.",
        "Built cross-platform (web, smartphone, tablet) and free for users.",
        "Partnering with more than ten organizations, including several private hospitals and health services.",
        "First product phase completed and preparing to raise funds; the founding team self-invested about USD 10,000."
      ]
    },
    "body": {
      "vi": [
        "Ngày 25/11/2014, ICTNews (VietNamNet) giới thiệu Zinmed – dự án y tế số đã chính thức ra mắt trong năm 2014 sau thời gian dài ấp ủ, với định hướng trở thành dịch vụ tư vấn sức khỏe trực tuyến và nền tảng kết nối người dùng với bác sĩ. Zinmed là dự án khởi nghiệp do TS. Chử Đức Hoàng, khi đó là giảng viên, nhà nghiên cứu kỹ thuật y sinh tại Đại học Bách khoa Hà Nội, sáng lập.",
        "Theo nhóm phát triển, chăm sóc sức khỏe trực tuyến là thị trường giàu tiềm năng, giúp người dân nhận tư vấn kịp thời, tiết kiệm thời gian, chi phí và góp phần giảm tải cho bệnh viện. Zinmed được xây dựng với ba mục tiêu: tạo cộng đồng tương tác về sức khỏe với đội ngũ chuyên gia giải đáp; làm cầu nối giữa người dùng với bác sĩ, phòng khám tư và thiết bị y tế; và hình thành cơ sở dữ liệu lớn về xu hướng bệnh lý của người Việt Nam.",
        "Bài viết cũng nêu những thách thức: thị trường đã có các đối thủ đi trước, còn người dùng vẫn e ngại dịch vụ y tế trực tuyến. Nhóm lựa chọn phát triển đa nền tảng, miễn phí cho người dùng, tập trung vào giá trị và chất lượng nội dung y khoa để thay đổi thói quen, theo chiến lược \"tiến những bước nhỏ nhưng chắc chắn\". Khi đó, Zinmed đã hợp tác với hơn 10 đối tác, hoàn thành giai đoạn phát triển sản phẩm đầu tiên, chuẩn bị gọi vốn; nhóm sáng lập đã tự đầu tư khoảng 10.000 USD.",
        "Zinmed năm 2014 là điểm khởi đầu cho hành trình hơn một thập kỷ của TS. Chử Đức Hoàng ở giao điểm giữa khoa học và đổi mới sáng tạo: từ ứng dụng y tế số, thiết bị theo dõi tiểu đường đến hướng nghiên cứu quang phổ Raman kết hợp trí tuệ nhân tạo hiện nay."
      ],
      "en": [
        "On 25 November 2014, ICTNews (VietNamNet) introduced Zinmed, a digital-health project that officially launched that year after long preparation, aiming to become an online health-advice service and a platform connecting users with doctors. Zinmed was founded by Dr. Chu Duc Hoang, then a lecturer and biomedical engineering researcher at Hanoi University of Science and Technology.",
        "The team saw online healthcare as a promising market that could give people timely advice, save time and money, and ease pressure on hospitals. Zinmed set three goals: a health community with expert answers; a bridge between users and doctors, private clinics and medical devices; and a big-data base on disease trends among Vietnamese people.",
        "The article also noted the challenges: established competitors and users' reluctance to trust online medical services. The team chose a free, cross-platform product focused on user value and quality medical content to shift habits, following a strategy of \"small but steady steps\". By then Zinmed had more than ten partners, had finished its first product phase and was preparing to raise funds, with the founders having self-invested about USD 10,000.",
        "Zinmed in 2014 was the starting point of Dr. Chu Duc Hoang's decade-long journey at the intersection of science and innovation — from digital-health apps and diabetes monitoring to today's research on Raman spectroscopy combined with artificial intelligence."
      ]
    },
    "sources": [
      {
        "outlet": "ICTNews (VietNamNet)",
        "title": "Ứng dụng Zinmed - đưa y tế đến gần hơn với mọi nhà",
        "url": "https://vietnamnet.vn/ung-dung-zinmed-dua-y-te-den-gan-hon-voi-moi-nha-i389863.html",
        "date": "25/11/2014"
      }
    ]
  }
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
