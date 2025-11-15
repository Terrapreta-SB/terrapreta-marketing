import type { Metadata } from "next";
import PageGrid from "@/components/layout/page-grid";
import PageHeader from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Projects — Terrapreta",
  description: "Explore our latest projects.",
};

export default function Page() {
  return (
    <>
      <PageHeader description="Showing our latest projects" title="Projects" />
      <PageGrid basePath="projects" items={[]} />
    </>
  );
}
