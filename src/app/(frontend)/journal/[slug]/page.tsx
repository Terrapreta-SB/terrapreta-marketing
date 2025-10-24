import { sanityFetch } from "@/sanity/lib/live";
import { JOURNAL_ITEM_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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


    <article className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center pt-15 mt-17">

    <hgroup className="flex flex-col text-center pb-5 text-balance gap-2.5 items-center justify-center">
            <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/journal">Journal</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/journal">{journalItem?.tag?.name}</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
            <h1 className="text-5xl">
              {journalItem?.name}
            </h1>
      </hgroup>

<AspectRatio className="relative" ratio={3 / 2}>
          <Image
          src={urlFor(journalItem.mainImage.image).quality(75).auto("format").url()}
          alt={journalItem.name || ""}
          width={600}
          height={400}
          placeholder="blur"
          blurDataURL={urlFor(journalItem.mainImage.image)
            .width(24)
            .height(24)
            .quality(10)
            .auto("format")
            .url()}
          quality={75}
          className="object-cover w-full h-full z-0"
        />
        </AspectRatio>



      <Link href="/journal">&larr; Return Journal</Link>

      </article>

  );
}