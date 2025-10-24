"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Navigation from "./navigation";
import Logotype from "../brand/logotype";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  const buttonVariant = isHomePage
    ? isHalfScrolled
      ? "brand"
      : "default"
    : "brand";

  return (
    <div
      className={`fixed py-4 top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-100 ${
        isScrolled ? "bg-stone-950 border-b border-stone-900" : "bg-transparent"
      }`}
    >
      <header className=" max-w-7xl w-full flex items-center justify-between">
        <Link className="h-6 w-fit" href="/">
          <Logotype />
        </Link>
        <Navigation />
        <Button variant={buttonVariant} size={"sm"}>
          Contact Us
        </Button>
      </header>
    </div>
  );
}
