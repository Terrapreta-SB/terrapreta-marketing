import type { Metadata } from "next";
import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/lib/live";
import { JOURNAL_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = generateMetadataHelper({
  title: "Journal",
  description: "Read our latest journal entries.",
  url: "/journal",
});

export default async function Page() {
  const { data: journal } = await sanityFetch({ query: JOURNAL_QUERY });

  const validJournal =
    journal?.filter(
      (item): item is typeof item & { slug: { current: string } } =>
        Boolean(item.slug?.current)
    ) ?? [];

  const transformedJournal = validJournal.map((item) => ({
    ...item,
    slug: item.slug.current,
  }));

  /* FIXME links to pages are not working */
  return (
    <>
      <PageHeader position="left" title="Journal" />
      <PageGrid basePath="journal" items={transformedJournal} />
    </>
  );
}
