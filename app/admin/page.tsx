import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Book, Presentation, UserRound } from "lucide-react";
import Link from "next/link";

export default async function CoursesPage() {
  return (
    <Layout>
      <div className="flex w-full items-center justify-between">
        <LayoutHeader>
          <LayoutTitle>Courses</LayoutTitle>
        </LayoutHeader>
        <Link
          href={"/admin/courses"}
          className={cn(buttonVariants({ variant: "destructive" }), "")}
        >
          Courses
        </Link>
      </div>
      <LayoutContent>
        <Card>
          <CardHeader className="font-bold">Quick stats</CardHeader>
          <CardContent className="space-y-1 text-muted-foreground">
            <p className="flex items-center gap-2">
              <UserRound size={16} /> users
            </p>
            <p className="flex items-center gap-2">
              <Book size={16} /> lessons
            </p>
            <p className="flex items-center gap-2">
              <Presentation size={16} /> courses
            </p>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
