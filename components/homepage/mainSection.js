"use client";

import Image from "next/image";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Achievements from "./Achievements";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "@/components/ui/video";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

// Create a dictionary of work experiences
const workExperiences = [
  {
    company: "Tibeb Tutorials",
    role: "Backend Developer",
    period: "02/2025 - Present",
    description:
      "Designed and maintained production RESTful APIs using Laravel and MySQL for a tutoring platform with multiple user roles and content delivery workflows. Structured backend using service layer architecture, optimized database queries and Eloquent relationships, and coordinated API design with frontend developers.",
    logo: "/images/tibeb-logo.png",
    skills: ["Laravel", "PHP", "MySQL", "RESTful API", "Swagger"],
  },
  {
    company: "Melmet Trading",
    role: "Odoo Developer | Part-Time",
    period: "07/2024 - 05/2025",
    description:
      "Customized and deployed Odoo ERP modules for multiple enterprise clients covering procurement, inventory, and accounting workflows.",
    logo: "/images/melmet-icon-1.png",
    skills: ["Odoo", "ERP", "Python", "JavaScript"],
  },
  {
    company: "Yekolo Temari Community",
    role: "Web Security Educator / Developer",
    period: "2021 - Present (Freelance)",
    description:
      "Built a web platform hosting interactive CTF-style security challenges to teach hands-on web security to university students. Designed challenges covering XSS, SQL injection, CSRF, authentication bypass, and session management vulnerabilities. Delivered educational sessions on secure web development practices.",
    logo: "/images/yekolotemari-logo.png",
    skills: ["Web Security", "CTF", "Education", "PHP", "Laravel"],
  },
  {
    company: "Upwork Freelancing",
    role: "Freelance Developer",
    period: "2024/02 - Present (Freelance)",
    description:
      "Delivered web/backend development, Telegram bot development, and automation projects for clients as an independent contractor. Managed full project lifecycle from requirement gathering through delivery working directly with clients.",
    logo: "/images/upwork-logo.png",
    skills: [
      "Python",
      "Telegram Bot",
      "Flutter",
      "Automation",
      "Web Development",
    ],
  },
  {
    company: "A2SV (Africa to Silicon Valley)",
    role: "Flutter Developer | Apprenticeship",
    period: "2022 - 04/2025",
    description:
      "Learned about data structures and algorithms through year-long intensive training and built different problem-solving projects. Worked on mobile app development projects using Flutter.",
    logo: "https://a2sv.org/logos/logo-blue.svg",
    skills: [
      "Flutter",
      "Dart",
      "Mobile Development",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    company: "Bug Bounty Hunter (HackerOne Platform)",
    role: "Security Researcher",
    period: "2022 - Present (Freelance)",
    description:
      "Performed ethical hacking and vulnerability research on real-world applications.",
    logo: "/images/h1_mark_black.png",
    skills: [
      "Cybersecurity",
      "Bug Bounty",
      "Penetration Testing",
      "Vulnerability Research",
    ],
  },
];

// Create a dictionary of projects
const projectsData = [
  {
    title: "Yekolo Temari Community",
    subtitle: "Web Security Learning Platform",
    description:
      "A web application to help users upskill their knowledge about web security by designing different web-based challenges.",
    thumbnailSrc: "/images/projects/yekolo-temari.png",
    videoSrc: "/videos/yekolotemari-demo.mp4",
    technologies: ["Wordpress", "PHP", "Web Security"],
    link: "https://yekolotemari.org",
  },
  {
    title: "Ethiopian Immigration and Citizenship Services (ICS) Telegram Bot",
    subtitle: "Telegram Automation Bot",
    description:
      "A telegram bot built for ethiopian citizens to get information about their passport status.",
    thumbnailSrc: "/images/projects/ics-bot.png",
    videoSrc: "/videos/icsbot-vid.mov",
    technologies: ["Python", "Telegram Bot API"],
    link: "#",
  },
  {
    title: "Ethiopian Tailored CTF platform",
    subtitle: "CTF / Security Challenges",
    description:
      "A web application to help users upskill their knowledge about web security by designing different web-based challenges.",
    thumbnailSrc: "/images/projects/ctf-platform.png",
    videoSrc: "/videos/yekolotemari-ctf-demo-vid.mp4",
    technologies: ["Laravel", "PHP", "Web Security"],
    link: "#",
  },
];

// Open Source Projects
const openSourceProjects = [
  {
    title: "Afromessage Python SDK",
    subtitle: "Python SDK for AfroMessage SMS API",
    description:
      "Built and published a Python SDK wrapping the AfroMessage SMS API covering single SMS, bulk SMS, OTP generation, and code verification. Available on PyPI for easy integration.",
    thumbnailSrc: "/images/projects/afromessage-sdk.png",
    technologies: ["Python", "API Wrapper", "SMS Integration", "PyPI"],
    link: "https://github.com/p4ndish/afromessage",
    github: "https://github.com/p4ndish/afromessage",
  },
  {
    title: "SantimPay Laravel SDK",
    subtitle: "Laravel SDK for SantimPay Payment Gateway",
    description:
      "Built a Laravel SDK wrapping the SantimPay payment gateway API. Provides easy integration for Ethiopian payment processing in Laravel applications.",
    thumbnailSrc: "/images/projects/santimpay-sdk.png",
    technologies: ["Laravel", "PHP", "Payment Gateway", "Composer"],
    link: "https://github.com/p4ndish/santimpay-sdk",
    github: "https://github.com/p4ndish/santimpay-sdk",
  },
];

export default function MainSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate loading time for skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      {/* Education */}
      <div
        id="education"
        className="w-full max-w-5xl bg-muted dark:bg-gray-800/70 flex flex-col border rounded-lg shadow-md p-6"
      >
        <h1 className="text-xl font-bold underline mb-5">
          Educational Background
        </h1>

        <div className="flex flex-row justify-between gap-8 ">
          <div className="flex flex-col ">
            <span className="font-semibold tracking-tight">
              Saint Mary University of Ethiopia
            </span>
            <span className="leading-none text-sm text-muted-foreground">
              Bachelor of Science in Computer Science
            </span>
            <span className="leading-none text-sm text-muted-foreground">
              05/2021 - 02/2026 · Graduated 2026
            </span>
          </div>
          <Image
            className="w-26 h-26 object-contain"
            src="/images/stmarylogo.png"
            alt="@smuc"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Work Experience */}
      <div
        id="work-experience"
        className="w-full max-w-5xl bg-muted dark:bg-gray-800/60 border rounded-lg shadow-md p-6"
      >
        <WorkExperience experiences={workExperiences} />
      </div>

      {/* Skills */}
      <div
        id="skills"
        className="w-full max-w-5xl bg-muted dark:bg-gray-800/70 border rounded-lg shadow-md p-6"
      >
        <Skills />
      </div>

      {/* Open Source Projects */}
      <div
        id="open-source"
        className="w-full max-w-5xl bg-muted dark:bg-gray-800/70 border rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl text-center font-bold mb-6">
          Open Source Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on GitHub
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div
        id="projects"
        className="w-full max-w-5xl bg-muted dark:bg-gray-800/70 border rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Projects</h2>
        <div className="flex flex-col max-w-5xl md:flex-row flex-wrap gap-18">
          {isLoading
            ? // Skeleton loaders for projects
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <Card key={`skeleton-${index}`} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Skeleton className="w-full aspect-video" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6 mb-4" />
                      <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-14" />
                      </div>
                    </CardContent>
                  </Card>
                ))
            : projectsData.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden w-full md:w-auto md:basis-1/3 flex flex-col flex-grow cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSelectedProject(project);
                  }}
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={project.thumbnailSrc}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        width={900}
                        height={506}
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-white font-semibold leading-tight">
                          {project.title}
                        </div>
                        <div className="text-white/80 text-xs mt-1">
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project details"
        >
          <div
            className="w-full max-w-3xl bg-background rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">{selectedProject.title}</div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-3 py-1 rounded-md hover:bg-muted"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {selectedProject.videoSrc ? (
                <div className="w-full max-h-[45vh]">
                  <Video
                    src={selectedProject.videoSrc}
                    alt={selectedProject.title}
                    className="w-full max-h-[45vh] rounded-md object-contain"
                    width={900}
                    height={506}
                    controls
                    playsInline
                  />
                </div>
              ) : null}

              <div className="text-sm text-muted-foreground">
                {selectedProject.description}
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex}>
                    <span>{tech}</span>
                  </Badge>
                ))}
              </div>

              {selectedProject.link && selectedProject.link !== "#" ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center underline text-sm"
                >
                  Visit project
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {/* Achievements */}
      <div
        id="achievements"
        className="w-full bg-muted dark:bg-gray-800/40 max-w-5xl border rounded-lg shadow-md p-6"
      >
        <Achievements />
      </div>
    </div>
  );
}
