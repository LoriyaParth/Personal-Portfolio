const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn('API error, using mock projects:', error);
    return [
      {
        _id: 'mock1',
        title: "Learning Management System",
        description: "Architected a scalable MERN-based LMS featuring secure user authentication, role-based access control and real-time progress tracking.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
        imageUrl: "/assets/lms.jpg",
        projectUrl: "https://github.com/LoriyaParth/Learning-Management-System",
        stats: { onboarding: "JWT + OTP", signups: "many student", engagement: "Real-time Tracking" },
        category: "Web Application",
        year: "2024"
      },
      {
        _id: 'mock2',
        title: "Expense Tracker",
        description: "Built a MERN-based expense tracker with secure authentication, categorized logging, and real-time budget monitoring.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        imageUrl: "/assets/expense.png",
        projectUrl: "https://github.com/LoriyaParth/Expense-Tracker",
        stats: { onboarding: "Secure Login", signups: "CRUD Operations", engagement: "Real-time Monitor" },
        category: "Web Application",
        year: "2024"
      }
    ];
  }
};

export const fetchStacks = async () => {
  try {
    const res = await fetch(`${API_BASE}/stacks`);
    if (!res.ok) throw new Error('Failed to fetch stack');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn('API error, using mock stack:', error);
    return [
      { name: "React", icon: "Code2", category: "Frontend" },
      { name: "Tailwind CSS", icon: "Paintbrush", category: "Frontend" },
      { name: "JavaScript", icon: "Cpu", category: "Frontend" },
      { name: "Node.js", icon: "Server", category: "Backend" },
      { name: "MongoDB", icon: "Database", category: "Backend" },
      { name: "Figma", icon: "PenTool", category: "Tools" }
    ];
  }
};

export const submitContact = async (data) => {
  const res = await fetch(`${API_BASE}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorJson = await res.json().catch(() => ({}));
    throw new Error(errorJson.error || 'Failed to submit message');
  }
  return await res.json();
};
