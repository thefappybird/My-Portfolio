import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function SharedCard({
  title,
  content,
  index,
}: {
  title: string;
  content: React.ReactNode;
  index: number;
}) {
  return (
    <Card className={`${index === 0 ? "md:col-span-2 lg:col-span-1" : ""} `}>
      <CardHeader>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">{content}</CardContent>
    </Card>
  );
}

export default SharedCard;
