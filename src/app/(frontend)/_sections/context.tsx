import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TagTitle from "@/components/ui/tag-title";

export default function Context() {
  return (
    <section className="flex items-center justify-center border-stone-500 border-y bg-linear-to-b from-stone-700 to-stone-900 py-30">
      <div className="container-site flex flex-col items-start gap-10">
        <hgroup className="flex h-full flex-col justify-between gap-2">
          <TagTitle
            tag="Context"
            title="Our Mission in Europe's Soil Health Revolution"
          />
          <p className="max-w-prose text-balance text-stone-200 text-xl">
            Europe is taking unprecedented action to reverse soil degradation
            and contamination, guided by the EU Soil Strategy for 2030 and
            groundbreaking laws like the Soil Monitoring Law. These initiatives
            target clean, healthy soils across the continent, requiring
            restoration and innovative approaches to achieve a toxic-free
            environment by 2050.
          </p>
        </hgroup>
        <div className="grid h-fit w-full grid-cols-3 gap-5">
          <AspectRatio className="relative h-[500px] rounded" ratio={4 / 5}>
            <Image
              alt="Context"
              className="rounded object-cover"
              fill
              quality={75}
              src="https://cdn.sanity.io/images/wj2okvbq/production/bf5359dbaaabe2a723a66fd982db42a7196a52af-2400x1600.webp"
            />
          </AspectRatio>
          <AspectRatio className="relative h-[500px] rounded" ratio={4 / 5}>
            <Image
              alt="Context"
              className="rounded object-cover"
              fill
              quality={75}
              src="https://cdn.sanity.io/images/wj2okvbq/production/bf5359dbaaabe2a723a66fd982db42a7196a52af-2400x1600.webp"
            />
          </AspectRatio>
          <AspectRatio className="relative h-[500px] rounded" ratio={4 / 5}>
            <Image
              alt="Context"
              className="rounded object-cover"
              fill
              quality={75}
              src="https://cdn.sanity.io/images/wj2okvbq/production/bf5359dbaaabe2a723a66fd982db42a7196a52af-2400x1600.webp"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
