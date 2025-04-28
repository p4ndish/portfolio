import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "lucide-react";

// Sample achievements data - replace with your actual achievements
const achievementsData = [
  {
    title: "Cybersecurity National CTF Winner",
    organization: "CyberTalents",
    date: "2023",
    description: "Won 1st place in Sub-Saharan Africa Regional Cybersecurity CTF that was organized Online by CyberTalents on 7th October 2023.",
    skills: ["Cybersecurity", "CTF", "Team Leadership"]
  },
];

export default function Achievements() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Achievements 🏆 </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievementsData.map((achievement, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {achievement.date}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="underline flex gap-2">
                    <Link className="w-4 h-4" />
                    <a href="https://x.com/Cyber_Talents/status/1711421446663078106" target="_blank" rel="noopener noreferrer">{achievement.organization}</a>
                    </span>
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">{achievement.description}</p>
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 