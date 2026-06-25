const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Stack = require('./models/Stack');

dotenv.config();

const projects = [
  {
    title: "Learning Management System",
    description: "Architected a scalable MERN-based LMS featuring secure user authentication, role-based access control and real-time progress tracking.",
    longDescription: "Established JWT + OTP authentication, role-based access control, admin panel, and comprehensive user profile management. Built a responsive LMS interface with React and Tailwind, improving cross-device user retention. Modeled and optimized a MongoDB database schema to efficiently store and retrieve thousands of student records, course materials, and quiz results.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    imageUrl: "/assets/lms.jpg",
    projectUrl: "https://github.com/LoriyaParth/Learning-Management-System",
    stats: {
      onboarding: "JWT + OTP",
      signups: "many student",
      engagement: "Real-time Tracking"
    },
    category: "Web Application",
    year: "2024"
  },
  {
    title: "Expense Tracker",
    description: "Built a MERN-based expense tracker with secure authentication, categorized logging, and real-time budget monitoring.",
    longDescription: "Implemented JWT authentication to ensure secure login and privacy for personal financial records. Architected a Node.js REST API to manage secure CRUD operations for personal transactions and budget limits. Designed a clean and easy-to-use React dashboard to log daily transactions.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    imageUrl: "/assets/expense.png",
    projectUrl: "https://github.com/LoriyaParth/Expense-Tracker",
    stats: {
      onboarding: "Secure Login",
      signups: "CRUD Operations",
      engagement: "Real-time Monitor"
    },
    category: "Web Application",
    year: "2024"
  }
];

const stacks = [
  // Languages
  { name: "Java", icon: "Coffee", category: "Languages", proficiency: 85 },
  { name: "C", icon: "Binary", category: "Languages", proficiency: 80 },
  { name: "JavaScript", icon: "Code2", category: "Languages", proficiency: 90 },

  // Database
  { name: "MySQL", icon: "Database", category: "Database", proficiency: 82 },
  { name: "MongoDB", icon: "Database", category: "Database", proficiency: 85 },

  // Backend
  { name: "Node.js", icon: "Server", category: "Backend", proficiency: 88 },
  { name: "Express.js", icon: "Terminal", category: "Backend", proficiency: 85 },
  { name: "REST API", icon: "Network", category: "Backend", proficiency: 90 },

  // Frontend
  { name: "React.js", icon: "Layers", category: "Frontend", proficiency: 90 },
  { name: "Next.js", icon: "Globe", category: "Frontend", proficiency: 85 },
  { name: "Redux", icon: "Workflow", category: "Frontend", proficiency: 80 },
  { name: "Tailwind CSS", icon: "Paintbrush", category: "Frontend", proficiency: 95 },
  { name: "Bootstrap", icon: "Layout", category: "Frontend", proficiency: 85 },
  { name: "HTML5", icon: "Html5", category: "Frontend", proficiency: 95 },
  { name: "CSS3", icon: "FileCode", category: "Frontend", proficiency: 90 },

  // Deployment
  { name: "Vercel", icon: "Cloud", category: "Deployment", proficiency: 85 },
  { name: "Render", icon: "Cpu", category: "Deployment", proficiency: 80 },

  // Tools
  { name: "Git", icon: "GitBranch", category: "Tools", proficiency: 90 },
  { name: "GitHub", icon: "Github", category: "Tools", proficiency: 92 },
  { name: "VS Code", icon: "Laptop", category: "Tools", proficiency: 95 },
  { name: "Postman", icon: "Send", category: "Tools", proficiency: 88 },
  { name: "Figma", icon: "PenTool", category: "Tools", proficiency: 80 }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolioDB');
    
    // Clear existing data
    await Project.deleteMany();
    await Stack.deleteMany();
    
    console.log('Old records deleted.');

    // Seed Projects
    await Project.insertMany(projects);
    console.log('Projects seeded successfully.');

    // Seed Stacks
    await Stack.insertMany(stacks);
    console.log('Stacks seeded successfully.');

    mongoose.connection.close();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
