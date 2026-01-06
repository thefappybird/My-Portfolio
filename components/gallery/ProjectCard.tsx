import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LinkTo from "../shared/LinkTo";
import { ImageGallery } from "./ImageGallery";

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
    <CardContent>
      <Card className="md:col-span-2 ">
        <CardHeader className="border-b">
          <CardTitle>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-1 items-center hover:text-blue-700 transition-colors"
                title={link}
              >
                <h2>{title}</h2>
                <svg
                  className="w-5 h-5"
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
              </a>
            ) : (
              <h2>{title}</h2>
            )}
          </CardTitle>
          <CardDescription>
            <p>{description}</p>
            {link && (
              <div className="flex gap-2 flex-wrap">
                <p>Deployed Website:</p>
                <LinkTo linkTitle={title} link={link} />
              </div>
            )}
            {repos.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                <p>Repos:</p>
                {repos.map((repo, index) => (
                  <LinkTo
                    key={index}
                    linkTitle={repo.linkTitle}
                    link={repo.link}
                  />
                ))}
              </div>
            )}
          </CardDescription>
          {children}
        </CardHeader>
        <CardContent>
          <ImageGallery images={images} />
        </CardContent>
      </Card>
    </CardContent>
  );
}

export default ProjectCard;
