"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ObfuscatedEmailProps = {
  local: string;
  domain: string;
  display?: string;
  className?: string;
};

export function ObfuscatedEmail({
  local,
  domain,
  display,
  className,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(`${local}@${domain}`);
  }, [local, domain]);

  const obfuscatedDisplay = `${local} [at] ${domain.replace(/\./g, " [dot] ")}`;
  const displayText = display ?? obfuscatedDisplay;

  if (!email) {
    return <span className={className}>{displayText}</span>;
  }

  return (
    <Link className={className} href={`mailto:${email}`}>
      {displayText}
    </Link>
  );
}
