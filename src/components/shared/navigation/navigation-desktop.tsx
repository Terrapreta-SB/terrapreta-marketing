import Link from "next/link";
import { navigationData } from "@/lib/navigation";

export default function NavigationDesktop() {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {navigationData.map((item) => (
        <Link
          className="font-medium text-foreground text-sm transition-colors hover:text-primary"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
