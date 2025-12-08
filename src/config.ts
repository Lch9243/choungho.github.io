export const siteConfig = {
  name: "Ryan Fitzgerald",
  title: "Senior Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Hi Im Leechoungho",
  skills: ["Javascript", "React", "Node.js", "Python"],
  projects: [
    {
      name: "Air Pollution Inquiry Mashup",
      description:
        "공공 데이터의 대기오염 API를 이용해서 선택한 지역의 실시간 미세먼지·오존 농도를 지도와 함께 조회할 수 있는 Mashup 서비스입니다.",
      link: "https://2022810059ch23.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript", "OpenAPI"],
    },
    {
      name: "서울시 문화행사 알리미 PWA",
      description:
        "서울시 문화행사 OpenAPI를 활용하여 기간·지역별 문화행사를 검색하고, 홈 화면 추가가 가능한 PWA 형태로 제공하는 웹 애플리케이션입니다.",
      link: "https://202281005924-2.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript", "PWA", "OpenAPI"],
    },
    {
      name: "서울시 공공도서관 검색 Mashup",
      description:
        "서울시 공공도서관 OpenAPI와 지도 서비스를 연동하여 구·키워드별 도서관 위치와 상세 정보를 지도 위에서 한눈에 확인할 수 있는 Mashup 서비스입니다.",
      link: "https://2022810059ch22.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript", "Kakao Map", "OpenAPI"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
