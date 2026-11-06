import {
  Layout,
  LayoutBackLink,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuthSession } from "@/lib/auth";

export default async function Page() {
  const session = await getAuthSession();
  const user = session?.user;

  if (!user) {
    throw new Error("User is not authenticated");
  }

  return (
    <Layout className="max-w-2xl">
      <LayoutBackLink href="/account">Account</LayoutBackLink>
      <LayoutHeader>
        <LayoutTitle>Account settings</LayoutTitle>
        <LayoutDescription>Theme and profile.</LayoutDescription>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Appearance</CardTitle>
            <CardDescription>
              Switch between light and dark mode.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center flex-row-reverse justify-between gap-4">
              <Avatar className="mr-2 size-10">
                <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                {user.image && (
                  <AvatarImage
                    src={user.image}
                    alt={user.name ?? "user picture"}
                  />
                )}
              </Avatar>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-lg">Profile</CardTitle>
                <CardDescription>
                  Profile editing is not available yet.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <fieldset disabled className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={user?.name ?? ""}
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user?.email ?? ""}
                  placeholder="you@example.com"
                />
              </div>
            </fieldset>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
