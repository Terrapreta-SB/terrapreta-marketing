import Link from "next/link";
import Mark from "../brand/mark";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="flex w-full justify-center border-stone-800 border-t">
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
              <Button className="w-fit" variant="outline">
                Let's talk
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
                <Link href="">LinkedIn</Link>
              </li>
              <li>
                <Link href="">Instagram</Link>
              </li>
              <li>
                <Link href="">Email</Link>
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
