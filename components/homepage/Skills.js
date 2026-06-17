"use client";

import { Badge } from "@/components/ui/badge";

// Create a dictionary of skills with their categories
const skillsData = [
  // Backend
  {
    name: "Laravel",
    category: "backend",
  },
  {
    name: "PHP",
    category: "backend",
  },
  {
    name: "MySQL",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    category: "backend",
  },
  {
    name: "Supabase",
    category: "backend",
  },
  {
    name: "Node.js",
    category: "backend",
  },
  {
    name: "Python",
    category: "backend",
  },
  {
    name: "RESTful APIs",
    category: "backend",
  },
  // Frontend
  {
    name: "JavaScript",
    category: "frontend",
  },
  {
    name: "React",
    category: "frontend",
  },
  {
    name: "HTML/CSS",
    category: "frontend",
  },
  // Mobile
  {
    name: "Flutter",
    category: "mobile",
  },
  {
    name: "Dart",
    category: "mobile",
  },
  // Tools & Others
  {
    name: "Git",
    category: "tools",
  },
  {
    name: "Docker",
    category: "tools",
  },
  {
    name: "Linux",
    category: "tools",
  },
  {
    name: "Odoo",
    category: "tools",
  },
  {
    name: "Web Security",
    category: "tools",
  },
  {
    name: "Cloud Setup",
    category: "tools",
  },
];

export default function Skills() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skillsData.map((skill, index) => (
          <Badge
            key={index}
            // variant={skill.category}
          >
            <span>{skill.name}</span>
            {/* <span className="text-xs px-2 py-0.5 rounded-full bg-white/30">{skill.level}</span> */}
          </Badge>
        ))}
      </div>
    </div>
  );
}
