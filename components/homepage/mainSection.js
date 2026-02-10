"use client"

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
  } from "@/components/ui/card"
import { Video } from "@/components/ui/video";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { useState, useEffect } from "react";

// Create a dictionary of work experiences
const workExperiences = [
    {
        company: "A2SV (Africa to Silicon Valley)",
        role: "Flutter Developer",
        period: "2022 - 04/2025",
        description: "Working as part-time remote Flutter mobile app development.",
        logo: "https://a2sv.org/logos/logo-blue.svg",
        skills: ["Flutter", "Dart", "Mobile Development", "Remote Work"]
    },
    {
        company: "Tibeb Tutorials",
        role: "Backend Developer",
        period: "2025/02 - Present",
        description: "Working as part-time remote Flutter mobile app development.",
        logo: "/images/tibeb-logo.png",
        skills: ["Laravel", "PHP", "Swagger", "API"]
    },
    {
        company: "Yekolo Temari Community",
        role: "Web Security Educator / Developer",
        period: "2021 - Present ( Freelance ) ",
        description: "Developed a web application to help users upskill their knowledge about web security by designing different web-based challenges.",
        logo: "/images/yekolotemari-logo.png", 
        skills: ["Web Security", "Education", "Web Development"]
    },
    {
        company: "Melmet Trading",
        role: "Odoo Developer",
        period: "2024/07 - 05/2025",
        description: "Working as Odoo ERP developer for different companies.",
        logo: "/images/melmet-icon-1.png", 
        skills: ["Odoo", "ERP", "Python", "JavaScript"]
    },
    {
        company: "Upwork Freelancing",
        role: "",
        period: "2024/02 - Present ( Freelance ) ",
        description: "Working on different projects related to python, telegram bot, Flutter.",
        logo: "/images/upwork-logo.png", 
        skills: ["Python", "Telegram Bot", "Flutter", "Automation"]
    },
    {
        company: "Bug Bounty Hunter (HackerOne Platform)",
        role: "",
        period: "2022 - Present ( Freelance )",
        description: "Performed ethical hacking and vulnerability research on real-world applications.",
        logo: "/images/h1_mark_black.png", 
        skills: ["cybersecurity", "bug bounty", "hacking", "vulnerability research"]
    }

    // Add more experiences as needed
];

// Create a dictionary of projects
const projectsData = [
  {
    title: "Yekolo Temari Community",
    subtitle: "Web Security Learning Platform",
    description: "A web application to help users upskill their knowledge about web security by designing different web-based challenges.",
    thumbnailSrc: "/images/projects/yekolo-temari.png",
    videoSrc: "/videos/yekolotemari-demo.mp4",
    technologies: ["Wordpress", "PHP", "Web Security"],
    link: "https://yekolotemari.org"
  },
  {
    title: "Ethiopian Immigration and Citizenship Services (ICS) Telegram Bot",
    subtitle: "Telegram Automation Bot",
    description: "A telegram bot built for ethiopian citizens to get information about their passport status.",
    thumbnailSrc: "/images/projects/ics-bot.png",
    videoSrc: "/videos/icsbot-vid.mov",
    technologies: ["Python", "Telegram Bot API"],
    link: "#"
  },
  {
    title: "Ethiopian Tailored CTF platform",
    subtitle: "CTF / Security Challenges",
    description: "A web application to help users upskill their knowledge about web security by designing different web-based challenges.",
    thumbnailSrc: "/images/projects/ctf-platform.png",
    videoSrc: "/videos/yekolotemari-ctf-demo-vid.mp4",
    technologies: ["Laravel", "PHP", "Web Security"],
    link: "#"
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
            <div className="w-full max-w-3xl bg-gray-800/70 flex flex-col border rounded-lg shadow-md p-6">
                <h1 className="text-xl font-bold underline mb-5">
                    Educational Background
                </h1>

                <div className="flex flex-row justify-between gap-8 ">
                    <div className="flex flex-col ">
                        <span className="font-semibold tracking-tight">St. Mary University of Ethiopia</span>
                        <span className="leading-none text-sm text-muted-foreground">
                            Bachelor of Science in Computer Science
                        </span>
                        <span className="leading-none text-sm text-muted-foreground">2021 - 2026</span>
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

            <div className="w-full max-w-3xl bg-gray-800/60 border rounded-lg shadow-md p-6">
                <WorkExperience experiences={workExperiences} />
            </div>
            
            <div className="w-full max-w-3xl bg-gray-800/70 border rounded-lg shadow-md p-6">
                <Skills />
            </div>
            
            <div className="w-full max-w-5xl bg-gray-800/70 border rounded-lg shadow-md p-6">
                <h2 className="text-2xl text-center font-bold mb-6">Projects</h2>
                <div className="flex flex-col max-w-5xl  md:flex-row flex-wrap gap-18">
                    {isLoading ? (
                        // Skeleton loaders for projects
                        Array(4).fill(0).map((_, index) => (
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
                    ) : (
                        projectsData.map((project, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden basis-1/3 h-1/2 flex flex-col flex-grow cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedProject(project)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") setSelectedProject(project);
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
                                            <div className="text-white font-semibold leading-tight">{project.title}</div>
                                            <div className="text-white/80 text-xs mt-1">{project.subtitle}</div>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))
                    )}
                </div>
            </div>

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

                            <div className="text-sm text-muted-foreground">{selectedProject.description}</div>

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

            <div className="w-full bg-gray-800/40  max-w-none border rounded-lg shadow-md p-6">
                <Achievements />
            </div>
        </div>
    );
}
