import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import image from "@/public/images/terrapreta_hero.webp";

type GridItemProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isBig?: boolean;
};

function GridItem({ title, description, image, isBig = false }: GridItemProps) {
  return (
    <div className={`space-y-5 ${isBig ? "col-span-2" : "col-span-1"}`}>
      <AspectRatio ratio={3 / 2}>
        <Image
          src={image}
          alt="Title"
          fill
          className="object-cover h-full w-full"
        />
      </AspectRatio>
      <hgroup>
        <h2>{title}</h2>
        <p>{description}</p>
      </hgroup>
    </div>
  );
}

export default function PageGrid() {
  return (
    <section className="grid grid-cols-3 max-w-7xl pb-40 mx-auto gap-x-5 gap-y-15 w-full">
      <GridItem title="Napoli Nord" description="Description" image={image} />
      <GridItem
        title="Osservatorio La Goccia"
        isBig
        description="Description"
        image={image}
      />
      <GridItem
        title="Impact-Baden Powell Park"
        description="Description"
        image={image}
      />
      <GridItem
        title="Campazzino District"
        description="Description"
        image={image}
      />
      <GridItem title="A2A Garden" description="Description" image={image} />
    </section>
  );
}
