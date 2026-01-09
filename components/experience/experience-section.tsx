import { Briefcase, GraduationCap } from "lucide-react";
import SharedSection from "../shared/shared-section";
import { Card } from "../ui/card";
const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Accenture",
    period: "Nov 2024 — Nov 2025",
    description:
      "Led end-to-end development and deployment of enterprise web applications, designing responsive frontend interfaces and scalable backend APIs, collaborating with cross-functional teams in Agile sprints, and successfully delivering major production releases.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "AccessSoft Solutions, Inc.",
    period: "Feb 2023 — Nov 2024",
    description:
      " Designed and implemented scalable RESTful APIs and backend services using .NET (C#) with secure database models, while building dynamic, responsive front-end interfaces using Angular and Next.js to support core business workflows.",
  },
  {
    type: "education",
    title: "Bachelor's Degree in Computer Science",
    organization: "University of Southern Philippines Foundation",
    period: "2022 — 2024",
    description:
      "Specialized in software engineering, web development, and database management, completing coursework in algorithms, data structures, and system design while actively participating in coding competitions and tech clubs.",
  },
  {
    type: "work",
    title: "Software Developer Intern",
    organization: "Sykes Enterprises, Inc. (now Sitel Group)",
    period: "December 2021 — July 2022",
    description:
      "Contributed to the development and enhancement of React components, implementing UI improvements and ensuring responsive, user-friendly pages across the company website.",
  },
  {
    type: "education",
    title: "Undergraduate | Bachelor in Science in Computer Science",
    organization: "University of San Carlos",
    period: "2018 — 2021",
    description:
      "Learned foundational concepts in computer science including programming, data structures, and algorithms, while engaging in various projects and extracurricular activities to enhance practical skills.",
  },
];

function ExperienceSection() {
  return (
    <SharedSection
      id="experience-section"
      title="Work & Experience"
      bg="bg-muted/20"
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 bg-card/50 backdrop-blur">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SharedSection>
  );
}

export default ExperienceSection;
