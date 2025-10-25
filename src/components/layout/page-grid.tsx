import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/lib/image";
import type { JOURNAL_QUERYResult, PROJECTS_QUERYResult } from "@/sanity/types";

type GridItemProps = JOURNAL_QUERYResult[0] | PROJECTS_QUERYResult[0];

const BLUR_QUALITY = 5;
const BLUR_SIZE = 24;
const IMAGE_QUALITY = 75;
const ASPECT_RATIO = 3 / 2;

function GridItem({
  name,
  mainImage,
  tag,
  isBig,
  slug,
  publishingDate,
}: GridItemProps) {
  if (!mainImage?.image?.asset) {
    return null;
  }

  return (
    <Link
      className={`h-fit space-y-2.5 ${isBig ? "col-span-2" : "col-span-1"}`}
      href={slug}
    >
      <AspectRatio className="realative" ratio={ASPECT_RATIO}>
        <Image
          alt={name || ""}
          blurDataURL={urlFor(mainImage.image)
            .width(BLUR_SIZE)
            .height(BLUR_SIZE)
            .quality(BLUR_QUALITY)
            .auto("format")
            .url()}
          className="h-full w-full object-cover"
          fill
          placeholder="blur"
          quality={IMAGE_QUALITY}
          sizes={isBig ? "50vw" : "30vw"}
          src={urlFor(mainImage.image)
            .quality(IMAGE_QUALITY)
            .auto("format")
            .url()}
        />
      </AspectRatio>
      <hgroup className="space-y-2">
        <span className="flex items-center gap-2.5">
          <Badge variant="secondary">{tag?.name}</Badge>
          {publishingDate && (
            <time
              className="text-muted-foreground text-sm"
              dateTime={publishingDate}
            >
              {publishingDate
                ? new Date(publishingDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : ""}
            </time>
          )}
        </span>
        <h2 className="text-xl">{name}</h2>
      </hgroup>
    </Link>
  );
}

export default function PageGrid({
  items,
  basePath,
}: {
  items: GridItemProps[];
  basePath: string;
}) {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-x-5 gap-y-15 pb-40">
      {items.map((item) => (
        <GridItem
          isBig={item?.gridDimension?.isBig ?? undefined}
          key={item._id}
          mainImage={item?.mainImage}
          name={item?.name}
          publishingDate={item?.publishingDate}
          shortDescription={item?.shortDescription}
          slug={
            item?.slug?.current
              ? `/${basePath}/${item.slug.current}`
              : undefined
          }
          tag={item?.tag}
        />
      ))}
    </section>
  );
}
