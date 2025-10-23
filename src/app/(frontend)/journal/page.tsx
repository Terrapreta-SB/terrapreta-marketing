import PageGrid from "@/components/shared/page-grid";
import PageHeader from "@/components/shared/page-header";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Journal"
        description="Our latest updates and insights"
      />
      <PageGrid />
    </>
  );
}
