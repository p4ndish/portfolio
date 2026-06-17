import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center border-2 border-border py-14"
    >
      <div className="flex flex-col justify-center items-center md:items-start p-4">
        <h1 className="text-4xl font-bold text-center mb-1">
          Hi, i am Dagim 👋
        </h1>
        <h2 className="text-md font-semibold text-center ">
          A Software Engineer and Security Engineer
        </h2>
        <div className="mt-4 flex flex-row justify-center md:justify-start gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href="/resume" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              View Resume
            </Link>
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col   p-4">
        <h1 className="text-xl font-bold underline mb-4">About Me</h1>
        <div className="text-sm dark:text-white text-gray-700  ">
          Backend developer with solid production experience building Laravel
          systems served in real-world environments including ERP deployments
          and RESTful API platforms.
          <b className="text-black dark:text-yellow-500">
            Graduated with a BSc in Computer Science from Saint Mary University
          </b>{" "}
          and trained at A2SV in data structures and algorithms. Comfortable
          working on complex systems involving multiple user roles, structured
          workflows, and layered business logic. Strong foundation in database
          design with MySQL and PostgreSQL. National cybersecurity CTF champion
          with a practical understanding of secure system design. Actively uses
          AI-assisted development tools in daily workflow and adapts quickly to
          new codebases and architectural patterns.
          <p className=" text-black dark:text-yellow-500 mt-3">
            Experienced working with{" "}
            <u>
              <a href="https://www.upwork.com/freelancers/~01926fda7bddb21983">
                Upwork clients
              </a>
            </u>
            ,{" "}
            <u>
              <a href="https://a2sv.com">A2SV</a>
            </u>
            ,{" "}
            <u>
              <a href="https://melmettrading.com">Melmet Trading</a>
            </u>
            , and{" "}
            <u>
              <a href="https://hackerone.com/p4ndish">HackerOne</a>
            </u>
            .
          </p>
          <br></br>
          My ultimate aspiration is to be able to contribute to a larger cause,
          impacting the lives of millions.
        </div>
      </div>
    </div>
  );
}
