import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TagTitle from "@/components/ui/tag-title";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { CUSTOMERS_QUERY } from "@/sanity/lib/queries";
import type { CUSTOMERS_QUERYResult } from "@/sanity/types";

export default async function Customers() {
  const { data: customers } = await sanityFetch({
    query: CUSTOMERS_QUERY,
  });

  const validCustomers =
    customers?.filter(
      (
        customer
      ): customer is CUSTOMERS_QUERYResult[number] & {
        mainImage: NonNullable<CUSTOMERS_QUERYResult[number]["mainImage"]>;
        name: string;
      } =>
        customer.mainImage !== null &&
        customer.mainImage.asset !== null &&
        customer.name !== null
    ) ?? [];

  return (
    <div
      className="container-site flex flex-col items-start gap-10"
      id="soil-revolution"
    >
      <hgroup className="flex h-full flex-col justify-between gap-2">
        <TagTitle
          tag="Customers"
          title="Helping our customers to make the difference"
        />
        <p className="w-1/2 text-stone-300 text-xl">abc</p>
      </hgroup>
      <div className="grid w-full grid-cols-3 gap-5">
        {validCustomers.map((customer) => (
          <div className="flex flex-col gap-2.5" key={customer._id}>
            <AspectRatio className="relative rounded" ratio={5 / 4}>
              <Image
                alt={customer.name}
                className="rounded object-cover"
                fill
                quality={75}
                src={urlFor(customer.mainImage)
                  .quality(75)
                  .auto("format")
                  .url()}
              />
            </AspectRatio>
            <h3 className="text-lg">{customer.name}</h3>
            {customer.shortDescription && (
              <p className="text-sm">{customer.shortDescription}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
