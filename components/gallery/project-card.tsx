import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LinkTo from "../shared/LinkTo";
import { ImageGallery } from "./image-gallery";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  repos: { linkTitle: string; link: string }[]; // Add repos prop
  link: string | null;
  children: React.ReactNode;
}

function ProjectCard({
  title,
  description,
  images,
  repos, // Destructure repos
  link,
  children,
}: ProjectCardProps) {
  return (
    <Card className="md:col-span-2 ">
      <CardHeader className={`${images.length > 0 ? "border-b" : ""}`}>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription className="flex flex-col gap-3 ">
          <p>{description}</p>
          <h1 className="font-bold text-foreground text-xl">Tech Stack</h1>
          {children}
        </CardDescription>

        <div className="flex flex-col md:flex-row gap-2 w-full pt-4">
          {link && (
            <Button
              variant="outline"
              size="lg"
              asChild
              title="View Live Project"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                      stroke="currentColor"
                      className="transition-colors group-hover:stroke-blue-700"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <h1 className="font-bold">View Live Project</h1>
              </a>
            </Button>
          )}
          {repos.map((repo, index) => (
            <Button
              key={index}
              variant="ghost"
              size="lg"
              asChild
              className="border"
            >
              <a
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                title={repo.linkTitle}
              >
                <Github />
                <h1 className="font-bold">{repo.linkTitle} Repo</h1>
              </a>
            </Button>
          ))}
        </div>
      </CardHeader>
      {images.length > 0 && (
        <CardContent>
          <ImageGallery images={images} />
        </CardContent>
      )}
    </Card>
  );
}

export default ProjectCard;
