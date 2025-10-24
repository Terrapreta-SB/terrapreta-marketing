import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";

export default function Page() {
  return (
    <>
      <PageHeader title="Projects" description="Showing our latest projects" />
      <PageGrid items={[]} basePath="projects" />
    </>
  );
}
