import PageGrid from "@/components/shared/page-grid";
import PageHeader from "@/components/shared/page-header";
import { sanityFetch } from "@/sanity/lib/live";
import { JOURNAL_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: journal } = await sanityFetch({ query: JOURNAL_QUERY });

  return (
    <>
      <PageHeader
        title="Journal"
        description="Our latest updates and insights"
      />
      <PageGrid items={journal} />
    </>
  );
}
