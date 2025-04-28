"use client";

import { Badge } from "@/components/ui/badge"

// Create a dictionary of skills with their categories
const skillsData = [
  {
    name: "JavaScript",
    category: "frontend",
    // level: "Advanced"
  },
  {
    name: "React",
    category: "frontend",
    // level: "Advanced"
  },
  {
    name: "Flutter",
    category: "mobile",
    // level: "Advanced"
  },
  {
    name: "Dart",
    category: "mobile",
    // level: "Advanced"
  },
  {
    name: "Python",
    category: "backend", 
    // level: "Intermediate"
  },
  {
    name: "PHP",
    category: "backend",
    // level: "Intermediate"
  },
  {
    name: "Laravel",
    category: "backend",
    // level: "Intermediate"
  },
  {
    name: "Node.js",
    category: "backend",
    // level: "Intermediate"
  },
  {
    name: "HTML/CSS",
    category: "frontend",
    level: "Advanced"
  },
  {
    name: "Git",
    category: "tools",
    // level: "Intermediate"
  }
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

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="frontend" className="px-3 py-1">Frontend</Badge>
          <Badge variant="backend" className="px-3 py-1">Backend</Badge>
          <Badge variant="mobile" className="px-3 py-1">Mobile</Badge>
          <Badge variant="tools" className="px-3 py-1">Tools</Badge>
        </div>
      </div>
    </div>
  );
} 