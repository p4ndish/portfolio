import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function WorkExperience({ experiences }) {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-card dark:bg-gray-700/50 rounded-md p-4 flex flex-row items-start gap-3"
          >
            <Image
              className="w-14 h-14 rounded-full border bg-white dark:bg-gray-300 p-1.5 border-indigo-300 dark:border-indigo-500/30 object-contain shrink-0"
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={300}
              height={300}
            />

            <div className="flex flex-col w-full min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold text-sm leading-tight truncate">
                    {experience.company}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {experience.role}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                  {experience.period}
                </p>
              </div>

              <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                {experience.description}
              </p>

              {experience.skills && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="text-[10px] px-1.5 py-0">
                      <span>{skill}</span>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
