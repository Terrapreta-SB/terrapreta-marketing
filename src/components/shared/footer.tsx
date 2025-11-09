import Image from "next/image";
import Link from "next/link";
import Mark from "@/components/brand/mark";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { UN_GOALS_QUERY } from "@/sanity/lib/queries";
import type { UN_GOALS_QUERYResult } from "@/sanity/types";

export default async function Footer() {
  const { data: unGoals } = await sanityFetch({ query: UN_GOALS_QUERY });

  const unGoalLogos =
    unGoals
      ?.filter(
        (
          goal
        ): goal is UN_GOALS_QUERYResult[number] & {
          logoNegative: { asset: { url: string } };
        } =>
          Boolean(
            goal.logoNegative?.asset?.url &&
              goal.logoNegative.asset.url !== null
          )
      )
      .map((goal) => (
        <Image
          alt={goal.name || "UN Goal"}
          blurDataURL={urlFor(goal.logoNegative)
            .quality(5)
            .width(24)
            .height(24)
            .auto("format")
            .url()}
          className="h-18 w-auto object-contain"
          height={144}
          key={goal._id}
          placeholder="blur"
          quality={75}
          sizes="20vw"
          src={urlFor(goal.logoNegative)
            .width(144)
            .height(144)
            .quality(75)
            .auto("format")
            .url()}
          width={160}
        />
      )) || [];
  return (
    <div className="mt-40 flex w-full justify-center border-stone-800 border-t">
      <footer className="container-site flex flex-col justify-start gap-10 py-20">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-3 flex flex-col gap-5">
            <div className="h-6 w-fit">
              <Mark />
            </div>
            <div className="flex flex-col gap-7.5">
              <p className="text-balance">
                Our mission is to regenerate one million hectares of land by
                2031 via Soil-based Solutions.
              </p>
              {unGoalLogos.length > 0 && (
                <div className="flex flex-wrap items-center gap-4">
                  {unGoalLogos}
                </div>
              )}
              <Button asChild className="w-fit" variant="outline">
                <Link href="/contacts">Let's talk</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-stone-400">Terrapreta</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/s1">service1</Link>
              </li>
              <li>
                <Link href="/services/s1">service2</Link>
              </li>
              <li>
                <Link href="/services/s1">service3</Link>
              </li>
              <li>
                <Link href="/services/s1">service4</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-stone-400">Follow us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/terrapreta-it/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/terrapreta_it/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.are.na/terrapreta"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Are.na
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@terrapreta.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-stone-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="">Impressum</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li>
                <Link href="">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-stone-800 border-t pt-10 text-xs">
          <p>Terrapreta SRL Società Benefit</p>
          <ul className="space-y-1.5 text-stone-400">
            <li>© Terrapreta SRL SB, Via Valparaiso 11, 20144 Milan, Italy</li>
            <li>VAT Number IT13083330962, REA number MI 2702314</li>
            <li>Contributed capital €10,000.00 fully paid-in</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
