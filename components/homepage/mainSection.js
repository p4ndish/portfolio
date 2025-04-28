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
        period: "2022 - Present",
        description: "Working as part-time remote Flutter mobile app development.",
        logo: "https://a2sv.org/logos/logo-blue.svg",
        skills: ["Flutter", "Dart", "Mobile Development", "Remote Work"]
    },
    {
        company: "Tibeb Tutorials",
        role: "Backend Developer",
        period: "2025/02 - Present",
        description: "Working as part-time remote Flutter mobile app development.",
        logo: "/images/yekolotemari-logo.png",
        skills: ["Laravel", "PHP", "Swagger"]
    },
    {
        company: "Yekolo Temari Community",
        role: "Web Security Educator / Developer",
        period: "2021 - Present",
        description: "Developed a web application to help users upskill their knowledge about web security by designing different web-based challenges.",
        logo: "/images/yekolotemari-logo.png", 
        skills: ["Web Security", "Education", "Web Development"]
    },
    {
        company: "Melmet Trading",
        role: "Odoo Developer",
        period: "2024/07 - Present",
        description: "Working as Odoo ERP developer for different companies.",
        logo: "/images/melmet-icon-1.png", 
        skills: ["Odoo", "ERP", "Python", "JavaScript"]
    }
    // Add more experiences as needed
];

// Create a dictionary of projects
const projectsData = [
  {
    title: "Yekolo Temari Community",
    description: "A web application to help users upskill their knowledge about web security by designing different web-based challenges.",
    videoSrc: "/videos/yekolotemari-demo.mp4",
    technologies: ["Wordpress", "PHP", "Web Security"],
    link: "https://yekolotemari.org"
  },
  {
    title: "Ethiopian Immigration and Citizenship Services (ICS) Telegram Bot",
    description: "A telegram bot built for ethiopian citizens to get information about their passport status.",
    videoSrc: "/videos/icsbot-vid.mov",
    technologies: ["Python", "Telegram Bot API"],
    link: "#"
  },
  {
    title: "Ethiopian Tailored CTF platform",
    description: "A web application to help users upskill their knowledge about web security by designing different web-based challenges.",
    videoSrc: "/videos/yekolotemari-ctf-demo-vid.mp4",
    technologies: ["Laravel", "PHP", "Web Security"],
    link: "#"
  },
];

export default function MainSection() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Simulate loading time for skeleton
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-8">
            <div className="w-full max-w-3xl flex flex-col border rounded-lg shadow-md p-6">
                <h1 className="text-xl font-bold underline mb-5">
                    Educational Background
                </h1>

                <div className="flex flex-row justify-between gap-8">
                    <div className="flex flex-col">
                        <span className="font-semibold tracking-tight">St. Mary University of Ethiopia</span>
                        <span className="leading-none text-sm text-muted-foreground">
                            Bachelor of Science in Computer Science
                        </span>
                        <span className="leading-none text-sm text-muted-foreground">2021 - 2025</span>
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

            <div className="w-full max-w-3xl border rounded-lg shadow-md p-6">
                <WorkExperience experiences={workExperiences} />
            </div>
            
            <div className="w-full max-w-3xl border rounded-lg shadow-md p-6">
                <Skills />
            </div>
            
            <div className="w-full max-w-3xl border rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Projects</h2>
                <div className="flex flex-col md:flex-row flex-wrap gap-8">
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
                        // Actual project cards
                        projectsData.map((project, index) => (
                            <Card key={index} className="overflow-hidden basis-1/3 h-1/2 flex flex-col flex-grow">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-video">
                                        {project.videoSrc.endsWith('.gif') ? (
                                            <Image
                                                src={project.videoSrc}
                                                alt={project.title}
                                                className="w-full h-full object-contain"
                                                width={600}
                                                height={400}
                                                priority
                                            />
                                        ) : (
                                            <Video 
                                                src={project.videoSrc} 
                                                alt={project.title}
                                                className="w-full h-full object-contain"
                                                width={600}
                                                height={400}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 flex-grow">
                                    <CardTitle className="text-lg">{project.title}</CardTitle>
                                    <CardDescription className="mt-2">{project.description}</CardDescription>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge 
                                                key={techIndex}
                                            >
                                                <span>{tech}</span>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>

            <div className="w-full max-w-3xl border rounded-lg shadow-md p-6">
                <Achievements />
            </div>
        </div>
    );
}
