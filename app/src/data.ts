export const C = {
  bg: "#e3f8c0",
  navy: "#0F172A",
  gray: "#475569",
  grayLight: "#E2E8F0",
  grayXLight: "#F8FAFC",
  navBg: "rgba(255, 255, 255, 0.85)",
} as const;

export const NAV_LINKS = [
  "About", "Experience", "Education", "Projects", "Skills", "Contact",
] as const;

export const SKILLS: Record<string, string[]> = {
  "Soft Skills": ["Teamwork", "Adaptability", "Time Management"],
  Networking: ["Basic Networking", "Basic Computer Hardware Troubleshooting"],
  "Technical Support": ["Computer & Technical Support", "Hardware & Software Troubleshooting"],
  "Office Tools": ["Document Creation", "Presentations", "Digital Records Organization"],
};

export interface Job { company: string; role: string; period: string; location: string; points: string[]; }
export const EXPERIENCE: Job[] = [{
  company: "DAZ Training Center Inc.", role: "IT Intern / OJT Trainee", period: "Jan 2026 – Apr 2026", location: "Makati City",
  points: ["Assisted with computer and technical support for staff and trainees.", "Helped maintain and organize digital records.", "Assisted in creating documents, presentations, and training materials.", "Provided basic troubleshooting for hardware and software issues."],
}];

export interface School { school: string; degree: string; period: string; location: string; }
export const EDUCATION: School[] = [
  { school: "Rizal Technological University", degree: "Bachelor of Science in Information Technology", period: "2023 – Present", location: "Mandaluyong City" },
  { school: "Andres Bonifacio Integrated School", degree: "TVL – ICT Computer System Servicing", period: "2021 – 2023", location: "Mandaluyong City" },
];

export interface Cert { year: string; title: string; }
export const CERTIFICATIONS: Cert[] = [
  { year: "2026", title: "National Certificate II – Construction Painting" },
  { year: "2026", title: "National Certificate II – Tiles Setting" },
  { year: "2023", title: "National Certificate II – Computer System Servicing" },
];

export interface Project { name: string; tag: string; desc: string; }
export const PROJECTS: Project[] = [
  { name: "MagkaKnow?", tag: "Gamified App · Financial Literacy", desc: "A gamified digital application aimed at improving price awareness and financial literacy among young adults. Contributed to backend support and Game Design Document (GDD)." },
  { name: "TransparaTrack", tag: "Government Monitoring · Web", desc: "Transparency and monitoring system focused on government-funded projects. Contributed to backend support and research documentation." },
];

export const CONTACT_ITEMS = [
  { label: "Email", value: "benaldoshamel@gmail.com", href: "mailto:benaldoshamel@gmail.com" },
  { label: "Phone", value: "+639-949-592-678", href: "tel:+639949592678" },
  { label: "Address", value: "535 Blk 32, Narra St., Mandaluyong City", href: "#" },
] as const;
