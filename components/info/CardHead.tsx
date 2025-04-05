import React, { ReactNode } from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
interface CardHeadProps {
  title: string;
  description: string;
  children: ReactNode;
}

function CardHead({ title, description, children }: CardHeadProps) {
  return (
    <CardHeader className="w-full">
      <CardTitle>
        {title} | {description}
      </CardTitle>
      {children}
    </CardHeader>
  );
}

export default CardHead;
