import { navigationData } from "@/lib/navigation";
import Link from "next/link";

export default function NavigationMobile() {
  return (
    <nav className="md:hidden flex flex-col space-y-4">
      {navigationData.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
