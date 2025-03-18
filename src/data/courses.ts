
export interface Course {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  category: "tech" | "business" | "art";
  image: string;
  duration: string;
  students: number;
  instructor?: string;
  instructorTitle?: string;
  instructorBio?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  learningOutcomes?: string[];
  modules?: { title: string; lessons: number }[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the core concepts of web development including HTML, CSS, and JavaScript to build responsive websites.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    duration: "8 weeks",
    students: 1250,
    level: "Beginner",
    modules: [
      { title: "HTML Structure and Elements", lessons: 5 },
      { title: "CSS Styling and Layouts", lessons: 6 },
      { title: "JavaScript Basics", lessons: 7 },
      { title: "Responsive Design", lessons: 4 },
      { title: "Final Project", lessons: 2 }
    ]
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning using Python and its powerful libraries.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    duration: "12 weeks",
    students: 980,
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    description: "Develop effective digital marketing campaigns using the latest tools and techniques to grow your business online.",
    category: "business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    duration: "6 weeks",
    students: 1560,
    level: "Beginner"
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build native mobile applications for iOS and Android platforms using modern frameworks like React Native.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    duration: "10 weeks",
    students: 875,
    level: "Intermediate"
  },
  {
    id: 5,
    title: "Business Leadership & Management",
    description: "Develop essential leadership skills to effectively manage teams and drive organizational success.",
    category: "business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    duration: "8 weeks",
    students: 1100,
    level: "Advanced"
  },
  {
    id: 6,
    title: "Graphic Design Fundamentals",
    description: "Learn the principles of visual communication and design while mastering industry-standard tools like Adobe Creative Suite.",
    category: "art",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    duration: "8 weeks",
    students: 1420,
    level: "Beginner"
  },
  {
    id: 7,
    title: "Cloud Computing & DevOps",
    description: "Master cloud platforms like AWS and learn DevOps practices to deploy and manage scalable applications.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1603695762547-fba0fda8f98f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    duration: "10 weeks",
    students: 760,
    level: "Advanced"
  },
  {
    id: 8,
    title: "Financial Planning & Analysis",
    description: "Learn how to analyze financial data, create business forecasts, and make strategic financial decisions.",
    category: "business",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1426&q=80",
    duration: "6 weeks",
    students: 890,
    level: "Intermediate"
  },
  {
    id: 9,
    title: "Digital Illustration & Art",
    description: "Develop your artistic skills using digital tools to create stunning illustrations and artwork.",
    category: "art",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    duration: "8 weeks",
    students: 1050,
    level: "Intermediate"
  }
];
