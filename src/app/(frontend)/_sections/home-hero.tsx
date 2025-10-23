import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/terrapreta_hero.webp";

export default function HomeHero() {
  return (
    <div className=" w-full h-[90vh]">
      <div className="h-full relative flex flex-col items-center justify-center">
        <div className="z-10 flex flex-col gap-8 items-center justify-center">
          <hgroup className="flex flex-col max-w-3xl text-center text-balance gap-4 mx-auto items-center justify-center">
            <h1 className="text-6xl font-bold">
              Regenerating ecosystems from the soil up
            </h1>
            <p>Growing equitable places for nature, people and climate.</p>
          </hgroup>
          <Button asChild variant={"brand"}>
            <Link href="#soil-revolution">Learn More</Link>
          </Button>
        </div>
        <div className="absolute animate-bounce bottom-0 left-0 z-10 pb-5 gap-2.5 right-0 flex flex-col items-center justify-center">
          <p>Scroll to learn more</p>
          <ArrowDownIcon className="w-4 h-4" />
        </div>
        <div className="absolute w-full z-1 h-full bg-stone-950/30 inset-0" />
        <Image
          src={heroImage}
          alt="Hero"
          className="object-cover w-full h-full z-0"
          fill
          sizes="100vw"
          quality={75}
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
