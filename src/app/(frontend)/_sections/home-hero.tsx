import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/images/terrapreta_hero.webp";

export default function HomeHero() {
  return (
    <div className="h-[90vh] w-full">
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="z-10 flex flex-col items-center justify-center gap-8">
          <hgroup className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-balance font-bold text-6xl">
              Regenerating ecosystems from the soil up.
            </h1>
            <p className="text-pretty text-2xl">
              Growing equitable places for nature, people and climate.
            </p>
          </hgroup>
          <Button asChild variant={"brand"}>
            <Link href="#soil-revolution">Learn More</Link>
          </Button>
        </div>
        <div className="absolute right-0 bottom-0 left-0 z-10 flex animate-bounce flex-col items-center justify-center gap-2.5 pb-5">
          <p>Scroll to learn more</p>
          <ArrowDownIcon className="h-4 w-4" />
        </div>
        <div className="absolute inset-0 z-1 h-full w-full bg-stone-950/30" />
        <Image
          alt="Hero"
          className="z-0 h-full w-full object-cover"
          fill
          placeholder="blur"
          priority
          quality={75}
          sizes="100vw"
          src={heroImage}
        />
      </div>
    </div>
  );
}
