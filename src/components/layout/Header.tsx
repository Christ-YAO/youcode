// src/components/layout/Header.
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../ui/Typography";
import { ThemeToggle } from "../theme/ThemeToggle";
import { SiteConfig } from "@/lib/site-config";
import { AuthButton } from "../features/auth/AuthButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="m-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/you-code.svg" width={32} height={22} alt="" />
          <Typography variant="h3" as="span">
            {SiteConfig.title}
          </Typography>
        </Link>

        <nav className="flex items-center gap-1">
          <AuthButton />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
