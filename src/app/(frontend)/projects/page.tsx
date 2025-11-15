import type { Metadata } from "next";
import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadata";

export const metadata: Metadata = generateMetadataHelper({
  title: "Projects",
  description: "Explore our latest projects.",
  url: "/projects",
});

export default function Page() {
  return (
    <>
      <PageHeader description="Showing our latest projects" title="Projects" />
      <PageGrid basePath="projects" items={[]} />
    </>
  );
}
