import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../ui/Typography";

const links = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cgu", label: "CGU" },
  { href: "/courses", label: "Courses" },
  { href: "/admin", label: "Admin" },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="m-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/you-code.svg" width={28} height={20} alt="" />
            <Typography variant="base" as="span" className="font-semibold">
              {SiteConfig.title}
            </Typography>
          </Link>
          <Typography variant="muted">{SiteConfig.description}</Typography>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {links.map((link) => (
              <Link
                key={link.href}
                className="transition-colors hover:text-foreground"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} YouCode
          </Typography>
        </div>
      </div>
    </footer>
  );
};
