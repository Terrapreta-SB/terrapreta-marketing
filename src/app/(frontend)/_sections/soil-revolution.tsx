import Image, { type StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import heroImage from "@/public/images/terrapreta_hero.webp";

type SoilCardProps = {
  title: string;
  image: StaticImageData | string;
};

function SoilCard({ title, image }: SoilCardProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <AspectRatio className="relative h-full w-full rounded" ratio={4 / 5}>
        <Image
          alt={title}
          className="h-full w-full rounded-md object-cover"
          fill
          quality={75}
          src={image}
        />
      </AspectRatio>
      <h3 className="text-balance text-xl">{title}</h3>
    </div>
  );
}

export default function SoilRevolution() {
  return (
    <div
      className="container-site mx-auto flex w-full scroll-mt-16 flex-col items-start gap-10"
      id="soil-revolution"
    >
      <h2 className="text-3xl">Leading the soil revolution</h2>
      <div className="grid w-full grid-cols-3 gap-5">
        <SoilCard
          image={heroImage}
          title="Replacing unsustainable management with regenerative practices to heal our soil."
        />
        <SoilCard
          image={heroImage}
          title="Safeguarding life on Earth by restoring the fundamental health of our soil."
        />
        <SoilCard
          image={heroImage}
          title="Unlocking the immense ecological and economic value that high-quality, living soil provides."
        />
      </div>
    </div>
  );
}
