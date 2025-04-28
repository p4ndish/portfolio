import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center border-2  py-14 ">
            <div className="flex flex-col justify-center items-center md:items-start p-4" > 
        
                <h1 className="text-4xl  font-bold text-center mb-1" > Hi, i am Dagim 👋</h1>
                <h2 className="text-md font-semibold text-center " >A Software Engineer and Security Engineer</h2>
                <div className="mt-4 flex flex-row justify-center md:justify-start gap-3">
                    <Button asChild size="sm" variant="outline">
                        <Link href="/resume" className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            View Resume
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col   p-4" > 
                <h1 className="text-xl font-bold underline mb-4">
                    About Me
                </h1>
                <div className="text-sm dark:text-white text-gray-700  ">
                    I am a Software Engineer and Security Engineer. 
                    <b className="text-black dark:text-yellow-500"> I am 4'th year computer science student, </b>
                    deeply interested in cybersecurity, data structures, algorithms, and programming. 
                    From childhood to now I have been learning transforming obstacles into stepping stones. 
                    <p className=" text-black dark:text-yellow-500">I have gained alot of experience in working with different <u><a href="https://www.upwork.com/freelancers/~01926fda7bddb21983">clients</a></u> , <u><a href="https://a2sv.com">A2SV(African to Silicon Valley)</a></u>, <u> <a href="https://melmettrading.com">Melmet Trading PLC</a></u>, <u><a href="https://hackerone.com/p4ndish">Hackerone</a></u>... etc. <br></br></p>
                    <br></br>
                    My ultimate aspiration is to be able to contribute to a larger cause, impacting the lives of millions.
                </div>
            </div>
            
        </div>

    );
}
