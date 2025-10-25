import Link from "next/link";
import Mark from "../brand/mark";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="flex w-full justify-center border-stone-800 border-t">
      <footer className="container-site mx-auto grid w-full grid-cols-3 justify-start gap-5 py-20">
        <div className="flex flex-col gap-10">
          <div className="h-6 w-fit">
            <Mark />
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-balance">
              Our mission is to regenerate one million hectares of land by 2031
              via Soil-based Solutions.
            </p>
            <Button className="w-fit" variant="outline">
              Discover How
            </Button>
          </div>
        </div>
        <div className="col-span-2 flex items-start justify-end gap-10">
          <div>
            <h3>Services</h3>
            <ul>
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
          <div>
            <h3>Stay in touch</h3>
            <ul>
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
        </div>
      </footer>
    </div>
  );
}
