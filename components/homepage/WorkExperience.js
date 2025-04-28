import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export default function WorkExperience({ experiences }) {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 ">Work Experience</h2>
      
      <div className="flex flex-col justify-between">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-row justify-between items-center gap-4 mb-6">
            <Image
              className="w-18 h-18 rounded-full border  border-indigo-300 object-contain"
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={300}
              height={300}
            />

            <div className="flex flex-row items-center justify-between  w-full">
              <div className="">
                <p className="font-semibold">
                  {experience.company}
                </p>
                <p className="text-sm ">{experience.role}</p>
                
                {experience.skills && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge 
                      key={skillIndex} 
                      // variant={skill.category}
                    >
                      <span>{skill}</span>
                      {/* <span className="text-xs px-2 py-0.5 rounded-full bg-white/30">{skill.level}</span> */}
                    </Badge>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground"> {experience.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 