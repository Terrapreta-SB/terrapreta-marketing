import Link from "next/link";
import Mark from "../brand/mark";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="w-full border-t border-stone-900 flex justify-center">
      <footer className=" w-full grid grid-cols-3 gap-5 justify-start py-20 max-w-7xl mx-auto">
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
        <div className="flex items-start justify-end col-span-2 gap-10">
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
