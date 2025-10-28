import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_QUERY } from "@/sanity/lib/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: service } = await sanityFetch({
    query: SERVICE_QUERY,
    params: await params,
  });

  return (
    <>
      {/*  <div className="container-site mt-17 flex flex-col items-center justify-center gap-5 pt-15 pb-20">  */}
      <div className="relative flex h-[60vh] min-h-[800px] w-full flex-col items-center justify-center gap-5">
        <div className="container-site absolute">
          <div className="relative flex w-1/2 flex-col items-start justify-center gap-5 pr-5">
            <h1 className="text-4xl">{service?.name}</h1>
            <p className="max-w-prose text-pretty text-foreground-muted text-md">
              {service?.shortDescription}
            </p>
            <Button>
              <Link href="/discovery-call">Book a Discovery Call</Link>
            </Button>
          </div>

          {/*    <div className="relative bottom-0 left-0 flex flex-col items-start justify-center py-20">
            <h3>ORGANIZATIONS WE WORK WITH</h3>
            <div className="flex flex-row items-center justify-center gap-5">
              {service?.clients?.map(
                (client: {
                  _id: string;
                  name: string;
                  logoDark: { asset: { url: string } };
                }) => (
                  <div key={client._id}>
                    <Image
                      alt={client.name || ""}
                      blurDataURL={urlFor(client.logoDark)
                        .width(24)
                        .height(24)
                        .quality(5)
                        .auto("format")
                        .url()}
                      height={100}
                      src={urlFor(client.logoDark)
                        .quality(75)
                        .auto("format")
                        .url()}
                      width={100}
                    />
                  </div>
                )
              )}
            </div>
          </div> */}
        </div>
        <hgroup className="flex h-full w-full items-center justify-center gap-5 text-balance bg-linear-to-r from-stone-800 to-transparent">
          <div className="relative h-full w-1/2" />
          <div className="relative h-full w-1/2">
            {service?.mainImage?.image && (
              <Image
                alt={service?.name || ""}
                blurDataURL={urlFor(service.mainImage.image)
                  .width(24)
                  .height(24)
                  .quality(5)
                  .auto("format")
                  .url()}
                className="z-0 h-full w-full object-cover object-center"
                fill
                placeholder="blur"
                quality={75}
                src={urlFor(service.mainImage.image)
                  .quality(75)
                  .auto("format")
                  .url()}
              />
            )}
          </div>
        </hgroup>
      </div>

      <article className="container-article">
        <div className="flex flex-col items-start justify-center space-y-5 py-20">
          <h3 className="font-bold text-2xl">Our Capabilities</h3>
          <div className="flex flex-row items-center justify-center gap-5">
            {service?.capabilities?.map(
              (capability: { _id: string; name: string }) => (
                <div
                  className="rounded-full bg-stone-700 px-5 py-2"
                  key={capability._id}
                >
                  {capability.name}
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col items-start justify-center space-y-5 py-20 text-2xl">
          <PortableText value={service?.content} />
        </div>
      </article>
    </>
  );
}
