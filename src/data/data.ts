import {
  Showcase1,
  Showcase2,
  Showcase3,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  JavascriptIcon,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  ChromeIcon,
  GithubIcon,
} from "@/assets";

export const portfolioProjects = [
  {
    company: "Maxing Us",
    year: "2024",
    title: "AI-Powered Personal Improvement App - Coming soon",
    results: [
      { title: "Improved facial scan accuracy by 45% through AI optimizations" },
      { title: "Increased daily active users by 30% with gamified streaks and rewards" },
      { title: "Reduced churn rate by 25% through consistent course progression" },
    ],
    link: "https://www.maxingus.com/",
    image: Showcase3,
  },
  {
    company: "Luxeol",
    year: "2022 - 2024",
    title: "Front-end Developper",
    results: [
      { title: "Built responsive web applications using React, and Redux, improving client retention rates" },
      { title: "Integrated third-party APIs and services to extend product functionalities" },
      { title: "Refactored legacy codebases, reducing technical debt and improving maintainability" },
    ],
    link: "https://luxeol.com/",
    image: Showcase2,
  },
  {
    company: "Orange",
    year: "2020 - 2022",
    title: "Full-stack Developer",
    results: [
      { title: "Improved application performance, reducing server response time by 35%" },
      { title: "Collaborated with cross-functional teams for seamless feature integration" },
      { title: "Enhanced user experience through close collaboration with UX/UI teams" },
    ],
    link: "https://boutique.orange.fr/internet/offres-fibre",
    image: Showcase1,
  },
];

export const tapeWords = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "usable",
  "Reliable",
];

export const testimonials = [
  {
    name: "Jean Dupont",
    position: "Product Owner @ Orange",
    text: "Bilal's expertise in full-stack development was critical in optimizing our web applications. His ability to enhance performance while collaborating effectively with the team made a significant impact.",
    avatar: Avatar1,
  },
  {
    name: "Sophie Martin",
    position: "CTO @ SophiaTech Solutions",
    text: "Bilal is a talented developer who greatly improved our product's technical infrastructure. His work on refactoring our codebase helped us reduce technical debt and improve maintainability.",
    avatar: Avatar2,
  },
  {
    name: "David Lefèvre",
    position: "Project Manager @ EURECOM",
    text: "Bilal played a key role in developing our internal tools. His backend expertise and attention to detail ensured that our services ran smoothly and efficiently. He was a pleasure to work with.",
    avatar: Avatar3,
  },
  {
    name: "Marie Laurent",
    position: "Lead UX Designer @ Orange",
    text: "Bilal’s collaborative spirit and frontend development skills significantly enhanced the user experience on our platform. He always delivered clean and efficient code, making our designs come to life.",
    avatar: Avatar4,
  },
  {
    name: "Luc Moreau",
    position: "Lead Developer @ SophiaTech Solutions",
    text: "Working with Bilal was seamless. His expertise in integrating APIs and improving our web app’s responsiveness was essential to the success of our projects.",
    avatar: Avatar5,
  },
];


export const toolBoxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

export const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "🥾", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋️‍♀️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
];
