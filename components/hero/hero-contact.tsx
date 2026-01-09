"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import HeroInfo from "./hero-info";
import { emailAddress, phoneNumber, phoneNumberLink } from "@/lib/exports";

export interface contactInfo {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
  value: string;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/thefappybird",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/alexander-banaag",
  },
];

export function HeroContact() {
  const contactInfo = [
    {
      name: "Email",
      icon: Mail,
      url: `mailto:${emailAddress}`,
      value: emailAddress,
    },
    {
      name: "WhatsApp",
      icon: Phone,
      url: phoneNumberLink,
      value: phoneNumber,
    },
  ];
  return (
    <Card className="border-none shadow-background bg-transparent">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <Button key={link.name} variant="outline" size="lg" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="h-5 w-5 mr-2" />
              {link.name}
            </a>
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground">Prefer to contact me directly?</p>
        <div className="flex items-center flex-col md:flex-row gap-2 justify-center">
          {contactInfo.map((contact) => (
            <HeroInfo key={contact.name} contact={contact} />
          ))}
        </div>
      </div>
    </Card>
  );
}
