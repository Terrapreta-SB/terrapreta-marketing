"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logotype from "@/components/brand/logotype";
import { Button } from "@/components/ui/button";
import Navigation from "./navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHalfScrolled, setIsHalfScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      if (isHomePage) {
        setIsHalfScrolled(window.scrollY > window.innerHeight * 0.5);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const buttonVariant = isHomePage && !isHalfScrolled ? "default" : "brand";

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-center py-4 transition-all duration-100 ${
        isScrolled ? "border-stone-900 border-b bg-stone-950" : "bg-transparent"
      }`}
    >
      <header className="flex w-full max-w-7xl items-center justify-between">
        <Link className="h-6 w-fit" href="/">
          <Logotype />
        </Link>
        <Navigation />
        <Button
          onClick={() => {
            const email = "mail@terrapreta.com".split("").reverse().join("");
            window.location.href = `mailto:${email.split("").reverse().join("")}`;
          }}
          size={"sm"}
          variant={buttonVariant}
        >
          Contact Us
        </Button>
      </header>
    </div>
  );
}
