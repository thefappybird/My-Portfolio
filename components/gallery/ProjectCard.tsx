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
  children: React.ReactNode;
}

function ProjectCard({
  title,
  description,
  images,
  repos, // Destructure repos
  children,
}: ProjectCardProps) {
  return (
    <CardContent>
      <Card className="md:col-span-2 ">
        <CardHeader className="border-b">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <p>{description}</p>
            <div className="flex gap-2 flex-wrap">
              <p>Repos for:</p>
              {repos.map((repo, index) => (
                <LinkTo
                  key={index}
                  linkTitle={repo.linkTitle}
                  link={repo.link}
                />
              ))}
            </div>
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
