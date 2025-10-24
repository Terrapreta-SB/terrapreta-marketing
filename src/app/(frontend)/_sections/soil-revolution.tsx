import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { type StaticImageData } from "next/image";
import heroImage from "@/public/images/terrapreta_hero.webp";

type SoilCardProps = {
  title: string;
  image: StaticImageData | string;
};

function SoilCard({ title, image }: SoilCardProps) {
  return (
    <div className="flex flex-col gap-5">
      <AspectRatio className="relative w-full h-full rounded" ratio={4 / 5}>
        <Image
          fill
          quality={75}
          src={image}
          alt={title}
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <h3 className="text-lg">{title}</h3>
    </div>
  );
}

export default function SoilRevolution() {
  return (
    <div
      id="soil-revolution"
      className="w-full max-w-7xl mx-auto py-10 scroll-mt-16 gap-10 flex  flex-col items-start  "
    >
      <h2 className="text-3xl">Leading the soil revolution</h2>
      <div className="grid w-full grid-cols-3 gap-5">
        <SoilCard
          title="Replacing unsustainable management with regenerative practices to heal our soil."
          image={heroImage}
        />
        <SoilCard
          title="Safeguarding life on Earth by restoring the fundamental health of our soil."
          image={heroImage}
        />
        <SoilCard
          title="Unlocking the immense ecological and economic value that high-quality, living soil provides."
          image={heroImage}
        />
      </div>
    </div>
  );
}
