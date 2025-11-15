import { Minus } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PortableImage } from "@/components/ui/portable-image";
import SocialShare from "@/components/ui/social-share";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { JOURNAL_ITEM_QUERY } from "@/sanity/lib/queries";

const ASPECT_RATIO = 16 / 9;
const IMAGE_QUALITY = 75;
const BLUR_QUALITY = 5;
const BLUR_SIZE = 24;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: journalItem } = await sanityFetch({
    query: JOURNAL_ITEM_QUERY,
    params: await params,
  });

  if (!journalItem?.mainImage?.image) {
    notFound();
  }

  return (
    <article className="container-site flex flex-col items-center justify-center gap-5 pt-30 pb-20 md:pt-40">
      <hgroup className="flex starting:translate-y-2 translate-y-0 flex-col items-center justify-center gap-5 text-balance pb-5 text-center starting:opacity-0 transition-all duration-400">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/journal">Journal</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/journal">
                {journalItem?.tag?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
          {journalItem?.name}
        </h1>
        <p className="max-w-[70ch] text-pretty text-lg text-stone-400 md:text-xl lg:text-2xl">
          {journalItem?.shortDescription}
        </p>
      </hgroup>

      <AspectRatio
        className="relative blur-none starting:blur-xl transition-all duration-400"
        ratio={ASPECT_RATIO}
      >
        <Image
          alt={journalItem.name || ""}
          blurDataURL={urlFor(journalItem.mainImage.image)
            .width(BLUR_SIZE)
            .height(BLUR_SIZE)
            .quality(BLUR_QUALITY)
            .auto("format")
            .url()}
          className="z-0 h-full w-full object-cover"
          fill
          placeholder="blur"
          priority
          quality={IMAGE_QUALITY}
          sizes="100vw"
          src={urlFor(journalItem.mainImage.image)
            .quality(IMAGE_QUALITY)
            .auto("format")
            .url()}
        />
      </AspectRatio>

      <div className="container-article space-y-4 py-20">
        <ul className="flex items-center gap-2 text-lg text-muted-foreground">
          <li>{journalItem?.location}</li>
          <Minus size={16} />
          <li>
            {journalItem?.publishingDate
              ? new Date(journalItem.publishingDate).toLocaleDateString(
                  undefined,
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )
              : ""}
          </li>
        </ul>
        {journalItem?.contentObject && (
          <section className="space-y-7.5 text-pretty text-lg md:text-xl lg:text-2xl">
            <PortableText
              components={{
                types: {
                  imageObject: PortableImage,
                },
              }}
              value={journalItem.contentObject}
            />
          </section>
        )}
      </div>

      <SocialShare />
    </article>
  );
}
