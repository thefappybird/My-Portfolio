import React, { useState } from "react";
import { Button } from "../ui/button";
import { contactInfo } from "./hero-contact";
import { Copy } from "lucide-react";

function HeroInfo({ contact }: { contact: contactInfo }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };
  return (
    <Button
      size="lg"
      asChild
      onClick={() => {
        handleCopy(contact.value);
      }}
      title={`Copy ${contact.name}`}
      className="max-w-[250px] cursor-pointer"
    >
      <a
        href={contact.url}
        target="_blank"
        className="flex items-center w-full"
      >
        <contact.icon className="h-5 w-5" />

        <span className="flex-1 text-center">
          {copied ? `Copied ${contact.name}!` : contact.value}
        </span>

        <Copy className="h-5 w-5" />
      </a>
    </Button>
  );
}

export default HeroInfo;
