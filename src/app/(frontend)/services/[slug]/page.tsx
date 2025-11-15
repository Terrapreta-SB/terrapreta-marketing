import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import { PortableImage } from "@/components/ui/portable-image";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { data: service } = await sanityFetch({
    query: SERVICE_QUERY,
    params: await params,
  });

  if (!service?.name) {
    return {
      title: "Services — Terrapreta",
      description: "Discover our services.",
    };
  }

  return {
    title: `${service.name} — Terrapreta`,
    description: service.shortDescription || "Discover our services.",
  };
}

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
      <div className="flex w-full flex-col items-center justify-center gap-20 bg-stone-800 py-40">
        <div className="container-site grid grid-cols-1 gap-20 lg:grid-cols-[40%_60%] lg:gap-5">
          <div className="flex flex-col items-start justify-center gap-10">
            <hgroup className="flex w-full flex-col items-start justify-center gap-1.5">
              <h1 className="font-bold text-4xl">{service?.name}</h1>
              <p className="max-w-prose text-pretty text-lg text-stone-300">
                {service?.shortDescription}
              </p>
            </hgroup>
            <Button>
              <Link href="/contacts">Book a Discovery Call</Link>
            </Button>
          </div>
          <div className="container-site relative aspect-3/2 rounded-md">
            {service?.mainImage?.image && (
              <Image
                alt={service?.name || ""}
                blurDataURL={urlFor(service.mainImage.image)
                  .width(24)
                  .height(24)
                  .quality(5)
                  .auto("format")
                  .url()}
                className="z-0 aspect-4/5 h-full w-full rounded-md object-cover object-center"
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
        </div>
      </div>

      <article className="container-article container-site space-y-20 py-20">
        {/* Clients */}
        {service?.clients && (
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-2xl">Our Clients</h3>
            <div className="flex flex-row items-center justify-center gap-5">
              {service?.clients
                ?.filter(
                  (client: {
                    _id: string;
                    name: string | null;
                    logoDark: {
                      asset: {
                        _id: string;
                        _type: "sanity.imageAsset";
                        url: string | null;
                      } | null;
                    } | null;
                  }): client is {
                    _id: string;
                    name: string;
                    logoDark: {
                      asset: {
                        _id: string;
                        _type: "sanity.imageAsset";
                        url: string;
                      };
                    };
                  } => Boolean(client.name && client.logoDark?.asset?._id)
                )
                .map(
                  (client: {
                    _id: string;
                    name: string;
                    logoDark: {
                      asset: {
                        _id: string;
                        _type: "sanity.imageAsset";
                        url: string;
                      };
                    };
                  }) => {
                    const logoAsset = client.logoDark.asset;
                    return (
                      <div key={client._id}>
                        <Image
                          alt={client.name}
                          blurDataURL={urlFor(logoAsset)
                            .width(24)
                            .height(24)
                            .quality(5)
                            .auto("format")
                            .url()}
                          height={100}
                          src={urlFor(logoAsset)
                            .quality(75)
                            .auto("format")
                            .url()}
                          width={100}
                        />
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        )}

        {/* Capabilities */}
        <div className="flex flex-col items-start justify-center space-y-2.5">
          <h3 className="font-bold text-2xl">Our Capabilities</h3>
          <div className="flex flex-row flex-wrap items-start justify-start gap-x-2.5 gap-y-3">
            {service?.capabilities
              ?.filter(
                (capability: {
                  _id: string;
                  name: string | null;
                }): capability is { _id: string; name: string } =>
                  Boolean(capability.name)
              )
              .map((capability: { _id: string; name: string }) => (
                <div
                  className="rounded-full border border-stone-500 px-3 py-1.5 text-stone-100"
                  key={capability._id}
                >
                  {capability.name}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-center space-y-5 text-lg md:text-xl lg:text-2xl">
          {service?.content && (
            <PortableText
              components={{
                types: {
                  imageObject: PortableImage,
                },
              }}
              value={service.content}
            />
          )}
        </div>
      </article>
    </>
  );
}
