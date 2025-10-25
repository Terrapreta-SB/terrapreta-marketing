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

  if (!journalItem) {
    notFound();
  }

  return (
    <article className="container-site mx-auto mt-17 flex flex-col items-center justify-center gap-5 pt-15 pb-20">
      <hgroup className="flex flex-col items-center justify-center gap-5 text-balance pb-5 text-center">
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
        <h1 className="text-6xl">{journalItem?.name}</h1>
        <p className="max-w-prose text-pretty text-2xl">
          {journalItem?.shortDescription}
        </p>
      </hgroup>

      <AspectRatio className="relative" ratio={ASPECT_RATIO}>
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
            {new Date(journalItem?.publishingDate).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )}
          </li>
        </ul>
        <section className="space-y-7.5 text-pretty text-2xl">
          <PortableText value={journalItem?.contentObject} />
        </section>
      </div>

      <SocialShare />
    </article>
  );
}
