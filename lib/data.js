export const personalInfo = {
  name: "Muhamad Habibie Raysyah Toha",
  title: "Full Stack Developer",
  subtitle: "Crafting digital experiences with precision & passion",
  bio: "Seorang full-stack developer dengan passion mendalam terhadap arsitektur sistem yang bersih dan pengalaman pengguna yang intuitif. Saya percaya bahwa kode yang baik adalah seni — terstruktur, elegan, dan bertujuan.",
  bio2: "Sebagai pelajar yang fokus di bidang pengembangan web, saya aktif membangun berbagai proyek untuk mengasah kemampuan teknis dan problem solving, dengan pendekatan yang terukur dan kreatif di setiap pengembangan.",
  location: "Bogor, Indonesia",
  email: "habibieresya@gmail.com",
  github: "HabibieRaysyah",
  linkedin: "HabibieRaysyah",
  instagram: "m.habibieresya",
  availability: "Open to opportunities",
  photo: null,
};

export const skills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Language" },
  { name: "TypeScript", level: 85, category: "Language" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Node.js", level: 82, category: "Backend" },
  { name: "Python", level: 75, category: "Language" },
  { name: "PostgreSQL", level: 78, category: "Database" },
  { name: "MongoDB", level: 72, category: "Database" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "Git", level: 92, category: "Tools" },
  { name: "Laravel", level: 90, category: "Full-Stack" },
];

export const techStack = [
  { name: "React", icon: "⚛", color: "#61DAFB", desc: "UI Library" },
  { name: "Next.js", icon: "▲", color: "#ffffff", desc: "Framework" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", desc: "Language" },
  { name: "Node.js", icon: "⬡", color: "#339933", desc: "Runtime" },
  { name: "Python", icon: "🐍", color: "#3776AB", desc: "Language" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", desc: "Database" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", desc: "Database" },
  { name: "Git", icon: "⎇", color: "#F05032", desc: "Version Control" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4", desc: "CSS Framework" },
  { name: "Laravel", icon: "🇱", color: "#F05032", desc: "FrameWork" },
];

export const projects = [
  {
    id: 1,
    title: "Ibysuks",
    description:
      "Ibsyuks adalah suatu platform yang di mana kita dapat melihat jadwal sholat dari seluruh wilayah yang ada di indonesia , Ibsyuks ini juga adalah project yang menjadi penilaian terakhir di pembelajaran react saya",
    techStack: ["React js"],
    github: "https://github.com/HabibieRaysyah/IBSYUKS",
    demo: null,
    featured: false,
    status: "Open Source",
    year: "2026",
  },
  {
    id: 2,
    title: "Arena Time",
    description:
      "Arena Time adalah suatu platform yang di mana kita dapat membooking lapangan lewat online , Arena Time ini juga adalah project akhir dari pembelajaran Laravel Saya",
    techStack: ["Laravel"],
    github: "https://github.com/HabibieRaysyah/ArenaTime",
    demo: null,
    featured: false,
    status: "Open Source",
    year: "2025",
  },
  {
    id: 3,
    title: "Fake Store",
    description:
      "Fake Store ini adalah bahan belajar saya untuk menggunakan react js",
    techStack: ["React js"],
    github: "https://github.com/HabibieRaysyah/Fake-Store",
    demo: null,
    featured: false,
    status: "Open Source",
    year: "2026",
  },
  {
    id: 4,
    title: "TixId-Project",
    description:
      "Tix-id adalah suatu platform yang di mana kita dapat memesan tiket secara online , ini adalah bahan belajar saat saya berada di kelas xi semester awal",
    techStack: ["Node.js", "TypeScript", "Commander.js", "Ink"],
    github: "https://github.com/alexraditya/cli-toolkit",
    demo: null,
    featured: false,
    status: "Open Source",
    year: "2025",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Data Analys FundaMental",
    issuer: "MySkill",
    date: "2025",
    credentialId: "271363-DTA-LM-08-2025",
    color: "#FF9900",
    initials: "AWS",
    img: "/sertifikat/data.jpg",
  },
  {
    id: 2,
    title: "Junior Web Programmer",
    issuer: "Digiup",
    date: "2024",
    credentialId: "-",
    color: "#0668E1",
    initials:"DD",
    img: "/sertifikat/junior.jpg",
  },
  {
    id: 3,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding",
    date: "2025",
    credentialId: "07Z267WD12PQR",
    color: "#4285F4",
    initials: "DD",
    img: "/sertifikat/aws.jpg",
  },
  {
    id: 4,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "2025",
    credentialId: "10P8JQGOVPQK",
    color: "#47A248",
    initials: "DD",
    img: "/sertifikat/dasar.jpg",
  },
  {
    id: 5,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    date: "2025",
    credentialId: "RVZKO872QZD5",
    color: "#2496ED",
    initials: "DD",
    img: "/sertifikat/fe.jpg",
  },
  {
    id: 6,
    title: "Belajar Membuat APlikasi Web dengan React",
    issuer: "Dicodng",
    date: "2025",
    credentialId: "1RXYW178QZVM",
    color: "#E53E3E",
    initials: "DD",
    img: "/sertifikat/react.jpg",
  },
];

export const experiences = [
  {
    id: 1,
    role: "SMPN 1 Megamendung",
    company: "SMP",
    period: "2022 — 2024",
    type: "Siswa",
    description:
      "Memulai ketertarikan di dunia teknologi dengan belajar dasar komputer dan logika pemrograman secara mandiri. Di fase ini, saya mulai mengenal bagaimana sebuah aplikasi bekerja dan membangun rasa ingin tahu terhadap dunia software development.",
    highlights: [""],
  },
  {
    id: 2,
    role: "SMK Wikrama Bogor",
    company: "SMK Wikrama",
    period: "2025-2027",
    type: "Full-time",
    description:
      "Berpengalaman mengerjakan beberapa project seperti sistem booking online dan website portofolio pribadi, dengan fokus pada struktur code, performa, dan pengalaman pengguna.",
    highlights: [
      "Pernah Mengikuti Lomba Website KBOF",
      "Membangun project sistem booking berbasis web",
      "Aktif belajar backend development (Node.js & database)",
    ],
  },
];
