/* eslint-disable @next/next/no-img-element */
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/Typography";
import { getRequiredAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
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
      <div className="flex w-full items-center justify-between">
        <LayoutHeader>
          <LayoutTitle>Courses</LayoutTitle>
        </LayoutHeader>
        <Link
          href={"/admin/courses/new"}
          className={cn(buttonVariants({ variant: "secondary" }), "")}
        >
          New course
        </Link>
      </div>
      <LayoutContent>
        <Card>
          <CardContent className="mt-4">
            {courses.length === 0 ? (
              <p className="text-muted-foreground">
                No courses yet. Create one!
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                </TableHeader>
                <TableBody>
                  <>
                    {courses.map((course) => (
                      <TableRow>
                        <TableCell>
                          <Avatar className="rounded">
                            <AvatarFallback>{course.name[0]}</AvatarFallback>
                            {course.image && (
                              <AvatarImage
                                src={course.image}
                                alt={course.name}
                              />
                            )}
                          </Avatar>
                        </TableCell>
                        <TableCell>
                          <Typography
                            as={Link}
                            variant="large"
                            href={`/admin/courses/${course.id}`}
                          >
                            {course.name}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
