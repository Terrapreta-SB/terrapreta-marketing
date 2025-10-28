import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";
import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY });

  return (
    <>
      <PageHeader position="center" title="Services" />
      <PageGrid basePath="services" items={services} />
    </>
  );
}
