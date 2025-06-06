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
          <CardTitle>{title}</CardTitle>
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
