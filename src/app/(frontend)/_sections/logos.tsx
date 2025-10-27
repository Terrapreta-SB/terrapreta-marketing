import { Ticker } from "motion-plus/react";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";

const ORGANIZATIONS_QUERY = defineQuery(`*[_type == "organization"]{
  _id,
  name,
  type,
  logoDark{
    _type,
    asset->{
      _id,
      url,
    }
  },
}`);

export default async function Logos() {
  const { data: logos } = await sanityFetch({ query: ORGANIZATIONS_QUERY });

  const logoItems =
    logos?.map(
      (logo: {
        _id: string;
        name: string;
        logoDark: { asset: { url: string } };
      }) => (
        <div className="flex items-center justify-center px-8" key={logo._id}>
          <Image
            alt={logo.name}
            blurDataURL={urlFor(logo.logoDark).quality(5).auto("format").url()}
            className="h-12 w-auto object-contain"
            height={48}
            placeholder="blur"
            quality={75}
            sizes="20vw"
            src={urlFor(logo.logoDark).quality(75).auto("format").url()}
            width={120}
          />
        </div>
      )
    ) || [];

  return (
    <div className="container-site flex w-full flex-col items-center justify-center space-y-20">
      <hgroup className="flex max-w-prose flex-col items-center justify-center gap-2.5 text-center">
        <h2 className="text-3xl">A solid Network of Partners</h2>
        <p className="text-balance text-xl">
          We are proud to work with a network of partners who share our vision
          and commitment to regenerate Soil.
        </p>
      </hgroup>
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-linear-to-r from-stone-950 to-transparent" />

        {/* Right fade */}
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l from-stone-950 to-transparent" />

        <Ticker hoverFactor={0.5} items={logoItems} />
      </div>
    </div>
  );
}
