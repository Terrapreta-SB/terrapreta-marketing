import Image, { type StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TagTitle from "@/components/ui/tag-title";
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
    <div className="container-site flex flex-col items-start gap-10">
      <hgroup className="flex h-full flex-col justify-between gap-2">
        <TagTitle tag="How" title="Leading the Soil revolution" />
        <p className="w-2/3 text-pretty text-stone-300 text-xl">
          We are architects and innovators, working with a wide team of
          scientists to address the complexity of nature interactions for
          leading the Soil Reveloution.
        </p>
      </hgroup>
      <div className="grid w-full grid-cols-3 gap-5">
        <SoilCard
          image={heroImage}
          title="Replacing unsustainable management with regenerative practices to heal our soil."
        />
        <SoilCard
          image={heroImage}
          title="Remediating contaminated soils through low-impact bioremediation solutions."
        />
        <SoilCard
          image={heroImage}
          title="Unlocking the immense ecological and economic value that high-quality, living soil provides."
        />
      </div>
    </div>
  );
}
