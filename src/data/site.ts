import type {
  GithubRepository,
  NavItem,
  Project,
  SiteMeta,
  SiteProfile,
  TimelineItem,
} from "@/types/site";

export const siteMeta: SiteMeta = {
  siteUrl: "https://yxggla.cn",
  siteName: "董一孝",
  defaultTitle: "董一孝 | AI 工程与前端开发",
  defaultDescription:
    "董一孝的个人网站，聚焦 AI 工程、前端开发、数字内容创作与项目实践。",
  defaultImage: "/MyAvatar.JPG",
};

export const navItems: NavItem[] = [
  { href: "/", label: "主页" },
  { href: "/about", label: "关于" },
  { href: "/projects", label: "项目" },
  { href: "/experience", label: "经历" },
  { href: "/practice", label: "实践" },
];

export const projects: Project[] = [
  {
    title: "Automated-Health-Workout-Insight-CMS",
    link: "https://github.com/Yxggla/Automated-Health-Workout-Insight-CMS",
    imgUrl: "/Automated-Health-Workout-Insight-CMS.png",
  },
  {
    title: "python-crypto-price-predict",
    link: "https://github.com/Yxggla/python-crypto-price-predict",
    imgUrl: "/python-crypto-price-predict.png",
  },
  {
    title: "vegetable-web",
    link: "https://github.com/Yxggla/vegetable-web",
    imgUrl: "/vegetable-web.png",
  },
  {
    title: "React-前端-类 ChatGPT 项目",
    link: "https://github.com/Yxggla/DeepSeekAPI-ViteTsReact",
    imgUrl: "/react-web.png",
  },
  {
    title: "Node.js-后端-类 ChatGPT 项目",
    link: "https://github.com/Yxggla/DeepSeekAPI--Web-backend",
    imgUrl: "/backend-web.png",
  },
  {
    title: "Flutter-财票通 App",
    link: "https://github.com/Yxggla/cptapp",
    imgUrl: "/FlutterCPT.png",
  },
  {
    title: "Flutter-宋韵 App",
    link: "https://github.com/Yxggla/FlutterSy",
    imgUrl:
      "https://github.com/user-attachments/assets/4184f1e1-d4ec-4ef6-b4ca-316a6f147893",
  },
  {
    title: "Flutter-健身记录 App",
    link: "https://github.com/Yxggla/FlutterJs",
    imgUrl: "/FlutterJs.png",
  },
  {
    title: "交互动画-OpenAI 的人工智能技术简介",
    link: "https://github.com/Yxggla/-OpenAI-interactive-animation/",
    imgUrl: "/OpenAI-interactive-animation.png",
  },
  {
    title: "Unity-SteamVR 小游戏",
    link: "https://github.com/Yxggla/Unity-VR",
    imgUrl: "/UnityVR.png",
  },
  {
    title: "Unity-逃生太空站小游戏",
    link: "https://github.com/Yxggla/Unity-last-and-least",
    imgUrl: "/Unity-1.png",
  },
  {
    title: "Blender-空间站",
    link: "https://github.com/Yxggla/BlenderKJZ",
    imgUrl: "/BlenderKJZ1.jpg",
  },
  {
    title: "微电影《海憩渔韵》",
    link: "https://github.com/Yxggla/Sea-Recreation-and-Fishing-Rhyme-2023",
    imgUrl:
      "https://github.com/user-attachments/assets/87863fed-deb1-41bb-8e99-f5a688c2d976",
  },
  {
    title: "A 类竞赛省二-微电影《黎明曙光》",
    link: "https://github.com/Yxggla/Dawn-and-light-2022",
    imgUrl:
      "https://github.com/user-attachments/assets/bc058929-10a8-4b5d-b182-a19979420d69",
  },
  {
    title: "A 类竞赛省三-纪录片《畲·裕》",
    link: "https://github.com/Yxggla/She-Yu-2022",
    imgUrl:
      "https://github.com/user-attachments/assets/17fa4890-46e6-42be-8b04-b4e5c66dd428",
  },
  {
    title: "B 类竞赛国三-短片《连接你我、连通世界》",
    link: "https://github.com/Yxggla/Connect-you-and-me-connect-the-world-2023",
    imgUrl:
      "https://github.com/user-attachments/assets/068fe281-5941-4415-8675-8dc005d353c6",
  },
  {
    title: "B 类竞赛国三-短片《你好 未来》",
    link: "https://github.com/Yxggla/Hello-future-2022",
    imgUrl:
      "https://github.com/user-attachments/assets/24afcd77-2a1e-4848-8ffd-acf97692ce6d",
  },
];

export const featuredProjects = projects.slice(3, 6);

export const fallbackRepositories: GithubRepository[] = [
  {
    id: 1,
    name: "DeepSeekAPI-ViteTsReact",
    description: "React + TypeScript 的类 ChatGPT 前端项目，聚焦对话体验与工程化组织。",
    html_url: "https://github.com/Yxggla/DeepSeekAPI-ViteTsReact",
    homepage: null,
    stargazers_count: 0,
    language: "TypeScript",
    updated_at: "2026-04-01T00:00:00.000Z",
  },
  {
    id: 2,
    name: "DeepSeekAPI--Web-backend",
    description: "Node.js 后端项目，为对话式产品提供服务端能力与接口支撑。",
    html_url: "https://github.com/Yxggla/DeepSeekAPI--Web-backend",
    homepage: null,
    stargazers_count: 0,
    language: "JavaScript",
    updated_at: "2026-03-25T00:00:00.000Z",
  },
  {
    id: 3,
    name: "cptapp",
    description: "Flutter 应用项目，面向财票通场景的移动端产品实践。",
    html_url: "https://github.com/Yxggla/cptapp",
    homepage: null,
    stargazers_count: 0,
    language: "Dart",
    updated_at: "2026-03-10T00:00:00.000Z",
  },
];

export const profile: SiteProfile = {
  githubUsername: "Yxggla",
  name: "董一孝",
  designation: "AI 工程 / 前端开发 / 数字内容",
  avatarUrl: "/MySelf.JPG",
  email: "yxggzhk@gmail.com",
  phone: "+86 13957495770",
  address: "杭州市, 浙江省, 中国",
  resumeUrl: "https://github.com/user-attachments/files/25030549/2026.pdf",
  heroRoles: ["Developer", "AI Builder", "Filmmaker", "Adventurer"],
  aboutTitle: "人工智能与数码方向研究生，从影像创作转向前端开发，再走向 AI 工程。",
  aboutDescription: [
    "我叫董一孝，北师香港浸会大学在读研究生，<strong>人工智能与数码媒体</strong>专业。在大模型与生成式 AI 快速发展的背景下，我持续关注 AI 在内容生成、交互系统与数字产品中的工程化落地，并以 AI 工程师的视角进行实践与探索。",
    "我最初从<strong>摄影与影像创作</strong>进入数字媒体领域，这一经历让我对<strong>内容如何被生产、表达与感知</strong>产生了长期兴趣。本科阶段，我参与并完成了多项影像与数字内容项目，逐渐意识到<strong>技术</strong>正在成为内容创作中不可或缺的核心能力。",
    "在学习深入的过程中，我将重心转向<strong>前端与应用开发</strong>，并开始系统性地结合<strong>人工智能技术</strong>进行实践。我熟悉 JavaScript、TypeScript 等工程语言，熟练使用 React 框架，并将其作为 AI 能力的承载与放大器。",
    "随着研究生阶段的学习推进，我进一步理解模型原理、数据流程与应用边界，并尝试将<strong>AI 能力</strong>以产品化、系统化的方式落地到实际项目中，例如智能问答、内容生成与交互式 Agent 等方向。",
    "我认为，当下的开发者正逐步向<strong>AI 工程师</strong>转变，不仅需要理解模型，更要持续学习、关注行业前沿，并将 AI 能力落地到真实场景中，构建具有实际价值的智能系统。",
  ],
  undergraduateCourses: [
    {
      title: "计算机基础",
      items: [
        "计算机系统",
        "计算机网络",
        "数据结构与算法",
        "游戏中的数学和物理",
        "计算数学",
        "软件工程",
      ],
    },
    {
      title: "前端开发",
      items: ["HTML5 程序设计", "前端高级程序设计"],
    },
    {
      title: "图像与视觉",
      items: ["深度学习与计算机视觉", "数字图像处理", "计算机图形学", "数字音视频编码"],
    },
    {
      title: "游戏开发与视频制作",
      items: ["游戏设计与开发", "游戏场景设计", "虚拟现实与数字交互", "视频制作原理与技术"],
    },
    {
      title: "交互技术",
      items: ["互联网产品交互设计", "交互动画技术"],
    },
    {
      title: "数据库",
      items: ["数据库系统设计基础"],
    },
  ],
  graduateCourses: [
    {
      title: "硕士阶段课程",
      items: [
        "传播学理论基础",
        "数据科学编程基础",
        "动态网络与手机程式编写",
        "推荐系统与数码媒体",
        "大数据管理与分析",
        "数码媒体中的人工智能",
        "人工智能与数码媒体工作坊",
        "数据挖掘与知识发现",
        "算法文化",
        "数码媒体研究",
      ],
    },
  ],
  skills: [
    {
      title: "Web 框架",
      items: ["React", "Next.js", "Remix", "Flutter"],
    },
    {
      title: "工程体系",
      items: ["TypeScript", "Tailwind CSS", "Sass", "Vite", "ESLint"],
    },
    {
      title: "AI 与服务端",
      items: ["Node.js", "Agent Prompt Design", "内容生成系统", "BFF"],
    },
    {
      title: "内容与交互",
      items: ["交互动画", "视频制作", "数字媒体", "计算机视觉"],
    },
  ],
  socialLinks: {
    github: "https://github.com/Yxggla",
  },
};

export const practiceItems: TimelineItem[] = [
  {
    title: "杭州亚运会志愿者",
    company: "杭州第 19 届亚运会志愿者，志愿时长 161.83h。荣获校级“优秀志愿者”“突出贡献志愿者”等荣誉。",
    year: "2023-09-07 ~ 10-07",
    imgUrl:
      "https://github.com/user-attachments/assets/e0e3b894-a50d-46d8-8622-d257b304db94",
    companyLink: "https://www.hangzhou2022.cn/",
    desc: "参与大型国际赛事志愿服务，负责现场支持与组织协同。",
  },
  {
    title: "象山石浦沙塘湾村社会实践",
    company: "宁波象山石浦沙塘湾村社会实践",
    year: "2023-08",
    imgUrl:
      "https://github.com/user-attachments/assets/a1756e02-1d89-41b8-80a8-ae2d41344119",
    companyLink: "https://github.com/Yxggla/Sea-Recreation-and-Fishing-Rhyme-2023",
    desc: "调研乡村振兴并拍摄微电影，完成采访、脚本与影像制作。",
  },
  {
    title: "杭州亚残运会测试赛",
    company: "亚残运会测试赛培训志愿服务活动",
    year: "2023-05-22 ~ 05-27",
    imgUrl:
      "https://github.com/user-attachments/assets/9e26d41b-f904-4e34-b1c1-82f9e6ca7e5b",
    companyLink:
      "https://baike.baidu.com/item/%E5%85%A8%E5%9B%BD%E6%AE%8B%E7%96%BE%E4%BA%BA%E7%94%B0%E5%BE%84%E9%94%A6%E6%A0%87%E8%B5%9B/63018278",
    desc: "累计志愿时长 64.68h，参与赛事支持与培训服务。",
  },
  {
    title: "西溪湿地志愿者服务",
    company: "西溪湿地“小柿子”志愿者服务",
    year: "2023-04-02",
    imgUrl:
      "https://github.com/user-attachments/assets/925fa104-773b-443b-8b7f-72b0993595bc",
    companyLink: "http://www.xixiwetland.com.cn/",
    desc: "提供现场协助与游客引导服务。",
  },
  {
    title: "反诈达人秀",
    company: "“平安亚运 全民反诈——反诈达人秀（杭州）”公益活动",
    year: "2023-03-29",
    imgUrl:
      "https://github.com/user-attachments/assets/6ac67106-2a46-4474-90e6-caa05f353b13",
    companyLink: "https://mp.weixin.qq.com/s/txKcSReGuVR5l6Q0qdpaFA",
    desc: "受邀进行现场访谈与作品展示，分享多媒体竞赛项目经验。",
  },
  {
    title: "博物院咨询引导志愿服务",
    company: "浙江省自然博物院安吉馆",
    year: "2021-11-20",
    imgUrl:
      "https://github.com/user-attachments/assets/5b804368-bada-4f62-9c8c-9d2a2d84007f",
    companyLink: "https://www.zmnh.cn/",
    desc: "完成咨询引导与观众接待工作。",
  },
];

export const experienceItems: TimelineItem[] = [
  {
    title: "硕士研究生",
    company: "北师香港浸会大学",
    year: "2025-2026",
    companyLink: "https://uic.edu.cn/",
    desc: "理工科技学院，人工智能与数码媒体专修。GPA 3.8/4.0，二等奖学金。",
  },
  {
    title: "大学本科",
    company: "浙江科技大学",
    year: "2021-2025",
    companyLink: "https://www.zust.edu.cn/",
    desc: "信息与电子工程学院，数字媒体技术专业。班长，中共党员，GPA 3.62，绩点专业前 10%，综测连续两年第一。",
  },
  {
    title: "软件工程师",
    company: "杭州迪萌科技有限公司",
    year: "2024-12 ~ 2025-10",
    companyLink: "https://deamoy.ai/",
    desc: "Deamoy — AI 驱动的网站与应用构建平台，支持自然语言生成并可视化编辑。<br />1. 负责 Figma to Deamoy 与 HTML to Deamoy 两个插件的开发与维护，实现设计稿与 HTML 页面一键转换为 Deamoy 平台可编辑结构。<br />2. 基于 Tailwind CSS 响应式断点体系，重构平台变体实现逻辑。<br />3. 参与平台底层样式系统重构，推动默认样式方案迁移为 Tailwind Token 设计体系。<br />4. 参与 AI Agent Prompt 重构，优化节点生成、响应式与样式 Token 约束。<br />5. 基于 Remix 框架开发迭代 Deamoy 官方网站，提升官网性能与多设备适配性。",
  },
  {
    title: "视频拍剪实习生",
    company: "杭州鲸遇科技有限公司",
    year: "2024-11 ~ 12",
    desc: "参与拍摄蚂蚁集团“光合作用”“蚂蚁 20 周年”等活动内容。",
  },
  {
    title: "中国共产党正式党员",
    company: "浙江科技大学数媒专业学生党支部",
    year: "2024-12",
    companyLink: "https://itee.zust.edu.cn/djgz/zzjg.htm",
    desc: "在预备期间担任班长，表现突出，成功选举为中国共产党正式党员。",
  },
  {
    title: "前端开发实习生（AIGC）",
    company: "时代涌现信息科技（南京）有限公司",
    year: "2024-03 ~ 09",
    companyLink: "https://www.fancy.tech/",
    desc: "参与 Remotion 视频模板、海外官网与后台模板库开发。主要技术栈包括 React、TypeScript、Tailwind、Sass、Axios、Zustand 与 Antd。",
  },
  {
    title: "中国共产党预备党员",
    company: "浙江科技大学数媒专业学生党支部",
    year: "2023-12",
    companyLink: "https://itee.zust.edu.cn/djgz/zzjg.htm",
    desc: "在校期间担任班长，表现突出，成功选举为中国共产党预备党员。",
  },
  {
    title: "微电影《海憩渔韵》",
    company: "微电影 队长",
    year: "2023-07",
    companyLink: "https://github.com/Yxggla/Sea-Recreation-and-Fishing-Rhyme-2023",
    desc: "以象山石浦为背景的宣传短片，聚焦海上日出与地域文化表达。",
  },
  {
    title: "蓝桥杯大赛（B 类）",
    company: "视觉艺术设计赛 队长",
    year: "2023-06",
    companyLink: "https://github.com/Yxggla/Connect-you-and-me-connect-the-world-2023",
    desc: "作品《连接你我、连通世界》荣获全国总决赛视频设计类三等奖。",
  },
  {
    title: "浙江省大学生多媒体作品设计竞赛（A 类）",
    company: "微电影赛道 队长",
    year: "2022-12",
    companyLink: "https://github.com/Yxggla/Dawn-and-light-2022",
    desc: "《黎明曙光》获第二十一届浙江省大学生多媒体作品设计竞赛二等奖。",
  },
  {
    title: "浙江省大学生摄影竞赛（A 类）",
    company: "微视频商业类赛道 队长",
    year: "2022-10",
    companyLink: "https://github.com/Yxggla/She-Yu-2022",
    desc: "作品《畲·裕》荣获第十届浙江省大学生摄影竞赛三等奖。",
  },
  {
    title: "获得证书",
    company: "工业和信息化部人才交流中心",
    year: "2022-08-09",
    companyLink:
      "https://github.com/user-attachments/assets/820d9ed1-6495-4807-90c4-22b1753ef837",
    desc: "人工智能计算机视觉架构师中级证书。",
  },
  {
    title: "信息中心助理实习生",
    company: "浙江方圆检测集团有限公司",
    year: "2022-07 ~ 08",
    companyLink: "https://www.fytest.com/",
    desc: "参与帆软智慧大脑优化与在线预约开放实验室系统宣传视频制作。",
  },
  {
    title: "蓝桥杯大赛（B 类）",
    company: "视觉艺术设计赛 队长",
    year: "2022-06",
    companyLink: "https://github.com/Yxggla/Hello-future-2022",
    desc: "作品《你好 未来》荣获全国总决赛视频设计类三等奖。",
  },
];
