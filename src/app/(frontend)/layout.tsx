import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
      <SanityLive />
    </>
  );
}
