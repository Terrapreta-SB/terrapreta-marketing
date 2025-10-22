import { navigationData } from "@/lib/navigation";
import Link from "next/link";

export default function NavigationDesktop() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationData.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
