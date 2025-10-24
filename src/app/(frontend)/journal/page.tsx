import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";
import { sanityFetch } from "@/sanity/lib/live";
import { JOURNAL_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: journal } = await sanityFetch({ query: JOURNAL_QUERY });

  return (
    <>
      <PageHeader
        title="Journal"
        position="left"
      >
      <nav>
        <ul className="flex gap-2.5">
          <li>All</li>
          <li className="text-muted-foreground">News</li>
          <li className="text-muted-foreground">Exhibitions</li>
        </ul>
      </nav>
      </PageHeader>
      <PageGrid items={journal} basePath="journal" />
    </>
  );
}
