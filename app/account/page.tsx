import { LogoutButton } from '@/components/features/auth/LogoutButton';
import { Layout } from '@/components/layout/layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { ChevronRight, LayoutDashboard, Settings } from 'lucide-react';
import Link from 'next/link';

const links = [
  { href: '/account/settings', label: 'Settings', icon: Settings },
  { href: '/admin', label: 'Admin', icon: LayoutDashboard },
];

export default async function AccountPage() {
  const session = await getAuthSession();

  if (!session) {
    throw new Error('No session found');
  }

  return (
    <Layout className="max-w-lg">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Avatar className="size-14">
            <AvatarFallback className="uppercase">
              {session.user.email?.[0]}
            </AvatarFallback>
            {session.user.image && (
              <AvatarImage src={session.user.image} alt="user image" />
            )}
          </Avatar>
          <div className="flex min-w-0 flex-col gap-1">
            <CardTitle className="truncate text-xl">
              {session.user.name ?? session.user.email}
            </CardTitle>
            <CardDescription className="truncate">
              {session.user.email}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-md border px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <link.icon size={16} className="text-muted-foreground" />
              {link.label}
              <ChevronRight
                size={16}
                className="ml-auto text-muted-foreground"
              />
            </Link>
          ))}
        </CardContent>
        <CardFooter className="justify-end">
          <LogoutButton />
        </CardFooter>
      </Card>
    </Layout>
  );
}
