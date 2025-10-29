import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TagTitle from "@/components/ui/tag-title";
import { urlFor } from "@/sanity/lib/image";

const pilotProjectImage =
  "https://cdn.sanity.io/images/wj2okvbq/production/bf5359dbaaabe2a723a66fd982db42a7196a52af-2400x1600.webp";

export default function PilotProject() {
  return (
    <div className="container-site flex h-full items-start justify-center gap-5">
      <div className="relative h-full w-1/2 rounded">
        <AspectRatio ratio={5 / 4}>
          <Image
            alt="Pilot Project Image"
            blurDataURL={urlFor(pilotProjectImage)
              .width(24)
              .height(24)
              .quality(5)
              .auto("format")
              .url()}
            className="h-full w-full rounded object-cover object-center"
            fill
            placeholder="blur"
            quality={75}
            src={urlFor(pilotProjectImage).quality(75).auto("format").url()}
          />
        </AspectRatio>
      </div>

      <div className="h-full w-1/2 space-y-8">
        <TagTitle tag="Our Pilot Project" title="Osservatorio La Goccia" />
        <div className="space-y-4 text-lg">
          <p>
            Osservatorio La Goccia is an open-air laboratory that aims to
            validate innovative bioremediation solutions to regenerate the soils
            of the former Gasworks of Bovisa, protecting biodiversity and
            enhancing the ecosystem benefits provided by the spontaneous forest
            that has grown there over several decades of abandonment.
          </p>
        </div>
        {/*  <Button>Explore the Pilot Project</Button> */}
      </div>
    </div>
  );
}
