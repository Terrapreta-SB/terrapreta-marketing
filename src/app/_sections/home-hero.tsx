import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/images/terrapreta_hero.webp";

export default function HomeHero() {
  return (
    <div className=" w-full h-screen">
      <div className="h-[90vh] relative flex flex-col items-center justify-center">
        <div className="z-10 flex flex-col gap-8 items-center justify-center">
          <hgroup className="flex flex-col max-w-3xl text-center text-balance gap-4 mx-auto items-center justify-center">
            <h1 className="text-5xl font-bold">
              Regenerating ecosystems from the soil up
            </h1>
            <p>Growing equitable places for nature, people and climate.</p>
          </hgroup>
          <Button>Learn More</Button>
        </div>
        <div className="absolute w-full z-1 h-full bg-stone-950/20 inset-0" />
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
      <div className="h-[10vh] flex flex-col items-center justify-center">
        <p>Scroll Down</p>
        <ArrowDownIcon className="w-4 h-4" />
      </div>
    </div>
  );
}
