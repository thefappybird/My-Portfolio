import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../../ui/card";

import TechStack from "./TechStack";
import CardHead from "../CardHead";

function PrimaryInfo() {
  return (
    <Card className="gap-2.5 max-h-fit">
      <div className="flex justify-between">
        <CardHead
          title="Alexander A. Banaag III"
          description="Front-End Developer"
        >
          <CardDescription className="flex flex-col">
            <p>+971 50 240 7012</p>
            <p>{process.env.EMAIL_ADDRESS}</p>
          </CardDescription>
        </CardHead>
      </div>
      <CardContent>
        <p>
          I’m a web developer with experience in Next.js, Angular, Vue, React, etc. I enjoy building scalable applications and continuously learning new technologies.
        </p>
      </CardContent>
      <TechStack />
    </Card>
  );
}

export default PrimaryInfo;
