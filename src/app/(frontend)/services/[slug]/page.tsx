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

      <article className="container-article space-y-20 py-20">
        {/* Clients */}
        {service?.clients && (
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-2xl">Our Clients</h3>
            <div className="flex flex-row items-center justify-center gap-5">
              {service?.clients
                ?.filter(
                  (
                    client
                  ): client is {
                    _id: string;
                    name: string;
                    logoDark: { asset: { url: string } };
                  } => Boolean(client.name && client.logoDark?.asset?.url)
                )
                .map((client) => {
                  const logoImage = client.logoDark.asset;
                  return (
                    <div key={client._id}>
                      <Image
                        alt={client.name}
                        blurDataURL={urlFor(logoImage)
                          .width(24)
                          .height(24)
                          .quality(5)
                          .auto("format")
                          .url()}
                        height={100}
                        src={urlFor(logoImage).quality(75).auto("format").url()}
                        width={100}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Capabilities */}
        <div className="flex flex-col items-start justify-center space-y-5">
          <h3 className="text-2xl">Our Capabilities</h3>
          <div className="flex flex-row flex-wrap items-start justify-start gap-x-2.5 gap-y-3">
            {service?.capabilities
              ?.filter(
                (capability): capability is { _id: string; name: string } =>
                  Boolean(capability.name)
              )
              .map((capability) => (
                <div
                  className="rounded-full border border-stone-400 px-3 py-1.5"
                  key={capability._id}
                >
                  {capability.name}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-center space-y-5 text-2xl">
          {service?.content && <PortableText value={service.content} />}
        </div>
      </article>
    </>
  );
}
