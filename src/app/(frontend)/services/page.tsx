import type { Metadata } from "next";
import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = generateMetadataHelper({
  title: "Services",
  description: "Discover our services.",
  url: "/services",
});
export default async function Page() {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY });

  return (
    <>
      <PageHeader position="left" title="Services" />
      <PageGrid basePath="services" items={services} />
    </>
  );
}
