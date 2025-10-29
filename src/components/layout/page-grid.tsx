import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/lib/image";
import type {
  JOURNAL_QUERYResult,
  PROJECTS_QUERYResult,
  Slug,
} from "@/sanity/types";

type GridItemProps = Partial<
  Omit<JOURNAL_QUERYResult[0] | PROJECTS_QUERYResult[0], "slug">
> & {
  _id: string;
  name: string | null;
  shortDescription: string | null;
  mainImage: {
    _type: "imageObject";
    image: {
      _type: "image";
      asset: {
        _id: string;
        url: string | null;
      } | null;
    } | null;
  } | null;
  isBig?: boolean;
  publishingDate?: string | null;
  slug: string;
  tag?: { _id: string; name: string | null } | null;
};

type GridItemInput = Omit<GridItemProps, "slug"> & {
  slug: Slug | null | string;
};

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
  items: GridItemInput[];
  basePath: string;
}) {
  return (
    <section className="container-site mx-auto grid w-full grid-cols-3 gap-x-5 gap-y-15 pb-40">
      {items.map((item) => {
        let slugValue: string | null = null;
        if (item.slug) {
          if (typeof item.slug === "object" && "current" in item.slug) {
            slugValue = item.slug.current || null;
          } else if (typeof item.slug === "string") {
            slugValue = item.slug;
          }
        }

        return (
          <GridItem
            {...item}
            isBig={item?.gridDimension?.isBig ?? undefined}
            key={item._id}
            publishingDate={item?.publishingDate ?? undefined}
            slug={slugValue ? `/${basePath}/${slugValue}` : "#"}
          />
        );
      })}
    </section>
  );
}
