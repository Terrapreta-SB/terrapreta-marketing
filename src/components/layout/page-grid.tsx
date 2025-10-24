import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import type { Slug, Tag } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "@/components/ui/badge"

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
  shortDescription: string | null;
  tag: Tag | null;
  gridDimension: {
    isBig: boolean | null;
  } | null;
};

function GridItem({ name, mainImage, tag, isBig, slug, shortDescription }: GridItemProps) {
  if (!mainImage?.image?.asset) {
    return null;
  }

  return (
    <Link
      href={slug}
      className={`space-y-2.5 h-fit  ${isBig ? "col-span-2" : "col-span-1"}`}
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
          sizes={isBig ? "50vw" : "30vw"}
          quality={75}
          className="object-cover h-full w-full"
        />
      </AspectRatio>
      <hgroup className="space-y-2">
        <Badge variant="">{tag?.name}</Badge>
        <h2 className="text-xl">{name}</h2>
      </hgroup>
      
    </Link>
  );
}

export default function PageGrid({ 
  items, 
  basePath 
}: { 
  items: GridItemProps[];
  basePath: string;
}) {
  return (
    <section className="grid grid-cols-3 max-w-7xl pb-40 mx-auto gap-x-5 gap-y-15 w-full">
      {items.map((item) => (
        <GridItem
          key={item._id}
          name={item?.name}
          shortDescription={item?.shortDescription}
          mainImage={item?.mainImage}
          tag={item?.tag}
          slug={item?.slug?.current ? `/${basePath}/${item.slug.current}` : undefined}
          isBig={item?.gridDimension?.isBig ?? undefined}
        />
      ))}
    </section>
  );
}
