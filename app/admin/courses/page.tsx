import { CourseImage } from "@/components/features/courses/CourseImage";
import { EmptyState } from "@/components/layout/EmptyState";
import {
  Layout,
  LayoutActions,
  LayoutBackLink,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRequiredAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { BookOpen, Plus } from "lucide-react";
import Link from "next/link";

export default async function CoursesPage() {
  const session = await getRequiredAuthSession();

  const courses = await prisma.course.findMany({
    where: {
      creatorId: session.user.id,
    },
  });

  return (
    <Layout>
      <LayoutBackLink href="/admin">Dashboard</LayoutBackLink>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
        <LayoutDescription>The courses you created.</LayoutDescription>
      </LayoutHeader>
      <Link href={"/admin/courses/new"} className={buttonVariants()}>
        <Plus size={16} className="mr-2" />
        New course
      </Link>
      <LayoutContent>
        {courses.length === 0 ? (
          <Card>
            <EmptyState
              icon={BookOpen}
              title="No courses yet"
              description="Create your first course to start adding lessons."
            >
              <Link
                href={"/admin/courses/new"}
                className={buttonVariants({ variant: "outline" })}
              >
                Create a course
              </Link>
            </EmptyState>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/admin/courses/${course.id}`}
                className="group"
              >
                <Card className="flex h-full flex-col overflow-hidden transition-colors group-hover:border-primary/50">
                  <CourseImage name={course.name} image={course.image} />
                  <CardHeader className="flex-1 p-4">
                    <CardTitle className="line-clamp-1 text-lg capitalize">
                      {course.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.presentation}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                    Created on {format(course.createdAt, "MMM d, yyyy")}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </LayoutContent>
    </Layout>
  );
}
