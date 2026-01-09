import React from "react";
import ProjectCard from "../../gallery/project-card";
import {
  Azure,
  MySQL,
  NodeJS,
  ReactJS,
  Tailwind,
  TypeScript,
  Vercel,
} from "../../shared/Badges";
import { userLogsImages } from "@/lib/exports";

function UserLogs() {
  return (
    <ProjectCard
      title="User Tracker | Audit Log Tracker with User Controls"
      description="This was part of a company interview. This was completed in 3 days to match their criteria of a full stack application using React and Node.js with a MySQL server."
      images={userLogsImages}
      repos={[
        {
          linkTitle: "Website",
          link: "https://github.com/thefappybird/User-Profile-Frontend",
        },
        {
          linkTitle: "Backend API",
          link: "https://github.com/thefappybird/User-Profile_Backend",
        },
      ]}
      link={"https://user-profile-frontend-livid.vercel.app"}
    >
      <div className="flex gap-2 flex-wrap">
        <ReactJS />
        <NodeJS />
        <Tailwind />
        <TypeScript />
        <MySQL />
        <Vercel />
        <Azure />
      </div>
    </ProjectCard>
  );
}

export default UserLogs;
