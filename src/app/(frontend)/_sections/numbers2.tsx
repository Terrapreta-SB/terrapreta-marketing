import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TagTitle from "@/components/ui/tag-title";
import { urlFor } from "@/sanity/lib/image";

type NumberCardProps = {
  title: string;
  description: string;
  image: string;
};

function NumberCard({ title, description, image }: NumberCardProps) {
  return (
    <div className="flex flex-col justify-start rounded-lg border border-stone-700">
      <div className="relative">
        <div className="absolute right-0 bottom-0 left-0 z-1 h-[50%] w-full bg-linear-to-t from-stone-800 to-transparent" />
        <AspectRatio className="relative w-full rounded" ratio={3 / 2}>
          <Image
            alt="Why? Our Soil needs help."
            blurDataURL={urlFor(image)
              .width(24)
              .height(24)
              .quality(5)
              .auto("format")
              .url()}
            className="h-full w-full rounded object-cover object-center"
            fill
            placeholder="blur"
            quality={75}
            src={urlFor(image).quality(75).auto("format").url()}
          />
        </AspectRatio>
      </div>
      <hgroup className="space-y-2.5 bg-linear-to-b from-stone-800 to-transparent px-5 pt-5 pb-6">
        <h3 className="text-5xl">{title}</h3>
        <p className="text-balance text-stone-300 text-xl">{description}</p>
      </hgroup>
    </div>
  );
}
export default function Numbers2() {
  return (
    <div className="container-site flex flex-col items-start gap-10">
      <hgroup className="flex h-full flex-col justify-between gap-2">
        <TagTitle tag="Why" title="Soil needs our help" />
        <p className="text-balance text-stone-300 text-xl">
          The conditions of soil in the European Union (and worldwide) are
          worrying, causing problems for the environment and human health.
        </p>
      </hgroup>

      <div className="grid grid-cols-3 gap-5">
        <NumberCard
          description="Of contaminated sites to be recoverd, only in the EU."
          image="https://cdn.sanity.io/images/wj2okvbq/production/05956bbe8b5b11c2c1fec5a7cd315971cfcc509b-1500x1125.webp"
          title="3 million"
        />
        <NumberCard
          description="Percentage of degraded soils in the EU."
          image="https://cdn.sanity.io/images/wj2okvbq/production/73f468c87925b92b5c0140bdab8125267f4b6bb2-1500x1186.webp"
          title="Over 60%"
        />
        <NumberCard
          description="The loss of ecosystem benefits cause by soil degradetion."
          image="https://cdn.sanity.io/images/wj2okvbq/production/90180c6a849b692f747bac16dd81abffbda0c52a-2000x1500.webp"
          title="€50 bn/year"
        />
        {/*     <NumberCard
          description="2030 fast growing market of NbS, the most cost-effective solutions to face climate change"
          title="€18 bn/year"
        /> */}
      </div>
    </div>
  );
}
