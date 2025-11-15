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
} from "@/components/ui/breadcrumb";
import { PortableImage } from "@/components/ui/portable-image";
import SocialShare from "@/components/ui/social-share";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_ITEM_QUERY } from "@/sanity/lib/queries";

const ASPECT_RATIO = 16 / 9;
const IMAGE_QUALITY = 75;
const BLUR_QUALITY = 5;
const BLUR_SIZE = 24;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: projectItem } = await sanityFetch({
    query: PROJECT_ITEM_QUERY,
    params: await params,
  });

  if (!projectItem?.mainImage?.image) {
    notFound();
  }

  return (
    <article className="container-site flex flex-col items-center justify-center gap-5 pt-30 pb-20 md:pt-40">
      <hgroup className="flex starting:translate-y-2 translate-y-0 flex-col items-center justify-center gap-5 text-balance pb-5 text-center starting:opacity-0 transition-all duration-400">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
          {projectItem?.name}
        </h1>
        <p className="max-w-[70ch] text-pretty text-lg text-stone-400 md:text-xl lg:text-2xl">
          {projectItem?.shortDescription}
        </p>
      </hgroup>

      <AspectRatio
        className="relative blur-none starting:blur-xl transition-all duration-400"
        ratio={ASPECT_RATIO}
      >
        <Image
          alt={projectItem.name || ""}
          blurDataURL={urlFor(projectItem.mainImage.image)
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
          src={urlFor(projectItem.mainImage.image)
            .quality(IMAGE_QUALITY)
            .auto("format")
            .url()}
        />
      </AspectRatio>

      <div className="container-article space-y-4 py-20">
        <ul className="flex items-center gap-2 text-lg text-muted-foreground">
          {projectItem?.location && (
            <>
              <li>{projectItem.location}</li>
              {projectItem?.status && <Minus size={16} />}
            </>
          )}
          {projectItem?.status && (
            <li className="capitalize">
              {projectItem.status.replace("-", " ")}
            </li>
          )}
        </ul>
        {projectItem?.pageContent?.content && (
          <section className="space-y-7.5 text-pretty text-lg md:text-xl lg:text-2xl">
            <PortableText
              components={{
                types: {
                  imageObject: PortableImage,
                },
              }}
              value={projectItem.pageContent.content}
            />
          </section>
        )}
      </div>

      <SocialShare />
    </article>
  );
}
