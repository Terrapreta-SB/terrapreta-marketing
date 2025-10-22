import Link from "next/link";
import { Button } from "../ui/button";
import Navigation from "./navigation";
import Logotype from "../brand/logotype";

export default function Header() {
  return (
    <div className="bg-stone-950 fixed py-4 top-0 left-0 right-0 z-50 flex items-center border-b border-stone-700 justify-center">
      <header className=" max-w-7xl w-full flex items-center justify-between">
        <Link className="h-6 w-fit" href="/">
          <Logotype />
        </Link>

        <Navigation />

        <Button size={"sm"}>Contact Us</Button>
      </header>
    </div>
  );
}
