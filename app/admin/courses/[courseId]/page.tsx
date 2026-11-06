import { CourseImage } from "@/components/features/courses/CourseImage";
import { EmptyState } from "@/components/layout/EmptyState";
import {
  Layout,
  LayoutActions,
  LayoutBackLink,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { BookOpen, Pencil, UsersRound } from "lucide-react";
import Link from "next/link";
import { getCourse } from "./course.query";
import { buttonVariants } from "@/components/ui/button";
import CoursePaginationButton from "../../../../src/pagination/PaginationButton";

export default async function CoursePage({
  params,
  searchParams,
}: {
  params: { courseId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page ?? 0);

  const session = await getRequiredAuthSession();

  const course = await getCourse({
    courseId: params.courseId,
    userId: session.user.id,
    userPage: page,
  });

  const stats = [
    { icon: UsersRound, label: "Users", value: course._count?.users },
    { icon: BookOpen, label: "Lessons", value: course._count?.lessons },
  ];

  return (
    <Layout>
      <LayoutBackLink href="/admin/courses">Courses</LayoutBackLink>
      <LayoutHeader>
        <LayoutTitle className="capitalize">{course.name}</LayoutTitle>
      </LayoutHeader>
      <LayoutActions>
        <Link
          href={`/admin/courses/${course.id}/edit`}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          <Pencil size={14} className="mr-2" />
          Edit
        </Link>
        <Link
          href={`/admin/courses/${course.id}/lessons`}
          className={buttonVariants()}
        >
          <BookOpen size={14} className="mr-2" />
          Edit lessons
        </Link>
      </LayoutActions>
      <LayoutContent className="flex flex-col items-start gap-4 lg:flex-row">
        <Card className="w-full min-w-0 lg:flex-[2]">
          <CardHeader>
            <CardTitle className="text-lg">Users</CardTitle>
            <CardDescription>People registered to this course.</CardDescription>
          </CardHeader>
          <CardContent>
            {course.users?.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {course.users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="w-full max-w-0">
                        <div className="flex min-w-0 items-center gap-3">
                          <Avatar className="size-8">
                            <AvatarFallback className="text-xs uppercase">
                              {user.email?.[0]}
                            </AvatarFallback>
                            {user.image && (
                              <AvatarImage
                                src={user.image}
                                alt={user.email ?? ""}
                              />
                            )}
                          </Avatar>
                          <Typography
                            as={Link}
                            className="min-w-0 truncate font-medium hover:underline"
                            href={`/admin/users/${user.id}`}
                          >
                            {user.email}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant={user.canceled ? "outline" : "secondary"}>
                          {user.canceled ? "Canceled" : "Active"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <EmptyState
                icon={UsersRound}
                title="No users yet"
                description="Users registered to this course will appear here."
              />
            )}
            {(course._count?.users ?? 0) > 5 && (
              <CoursePaginationButton
                baseUrl={`/admin/courses/${course.id}`}
                page={page}
                totalPage={course._count?.users ?? 0 / 5}
              />
            )}
          </CardContent>
        </Card>
        <Card className="w-full overflow-hidden lg:flex-1">
          <CourseImage name={course.name} image={course.image} />
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md border p-3">
                  <stat.icon size={16} className="text-muted-foreground" />
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            {course.presentation && (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Presentation</p>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                  {course.presentation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
