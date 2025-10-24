import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import type { Slug } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

type GridItemProps = {
  _id: string;
  name: string | null;
  mainImage: {
    _type: "imageObject";
    image: {
      _type: "image";
      asset: {
        _id: string;
        url: string;
      };
    };
  } | null;
  isBig?: boolean;
  slug: Slug | null;
  gridDimension: {
    isBig: boolean | null;
  } | null;
};

function GridItem({ name, mainImage, isBig, slug }: GridItemProps) {
  if (!mainImage?.image?.asset) {
    return null;
  }

  return (
    <Link
      href={slug}
      className={`space-y-5 ${isBig ? "col-span-2" : "col-span-1"}`}
    >
      <AspectRatio className="realative" ratio={3 / 2}>
        <Image
          src={urlFor(mainImage.image).quality(75).auto("format").url()}
          alt={name || ""}
          fill
          placeholder="blur"
          blurDataURL={urlFor(mainImage.image)
            .width(24)
            .height(24)
            .quality(10)
            .auto("format")
            .url()}
          sizes="30vw"
          quality={75}
          className="object-cover h-full w-full"
        />
      </AspectRatio>
      <h2>{name}</h2>
    </Link>
  );
}

export default function PageGrid({ items }: { items: GridItemProps[] }) {
  return (
    <section className="grid grid-cols-3 max-w-7xl pb-40 mx-auto gap-x-5 gap-y-15 w-full">
      {items.map((item) => (
        <GridItem
          key={item._id}
          name={item?.name}
          mainImage={item?.mainImage}
          slug={item?.slug?.current}
          isBig={item?.gridDimension?.isBig}
        />
      ))}
    </section>
  );
}
