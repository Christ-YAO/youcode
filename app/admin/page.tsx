import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ChevronRight, Plus, Settings } from "lucide-react";
import Link from "next/link";

const shortcuts = [
  {
    href: "/admin/courses",
    icon: BookOpen,
    title: "Courses",
    description: "Browse your courses, their users and their lessons.",
  },
  {
    href: "/admin/courses/new",
    icon: Plus,
    title: "New course",
    description: "Start a new course from scratch.",
  },
  {
    href: "/account/settings",
    icon: Settings,
    title: "Settings",
    description: "Manage your account preferences.",
  },
];

export default async function CoursesPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Dashboard</LayoutTitle>
        <LayoutDescription>
          Your courses and account.
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent className="grid gap-4 md:grid-cols-3">
        {shortcuts.map((shortcut) => (
          <Link key={shortcut.href} href={shortcut.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50 group-hover:bg-accent/50">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <shortcut.icon size={20} />
                </div>
                <CardTitle className="flex items-center justify-between text-lg">
                  {shortcut.title}
                  <ChevronRight
                    size={16}
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  />
                </CardTitle>
                <CardDescription>{shortcut.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </LayoutContent>
    </Layout>
  );
}
