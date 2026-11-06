/* eslint-disable @next/next/no-img-element */
import { EmptyState } from '@/components/layout/EmptyState';
import {
  Layout,
  LayoutBackLink,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from '@/components/layout/layout';
import { Card, CardContent } from '@/components/ui/card';
import { getRequiredAuthSession } from '@/lib/auth';
import { BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getCourseLessons } from './lessons.query';
import { LessonItem } from './LessonItem';

export default async function CourseLessonsPage({
  params,
}: {
  params: {
    courseId: string;
  };
}) {
  const session = await getRequiredAuthSession();

  const course = await getCourseLessons({
    courseId: params.courseId,
    // userId: session.user.id,
  });

  if (!course) {
    notFound();
  }

  return (
    <Layout className="max-w-3xl">
      <LayoutBackLink href={`/admin/courses/${course.id}`}>
        Back to course
      </LayoutBackLink>
      <LayoutHeader>
        <LayoutTitle>Lessons</LayoutTitle>
        <LayoutDescription>
          <span className="capitalize">{course.name}</span> ·{' '}
          {course.lessons.length}{' '}
          {course.lessons.length === 1 ? 'lesson' : 'lessons'}
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          {course.lessons.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="No lessons yet"
              description="Lessons of this course will appear here."
            />
          ) : (
            <CardContent className="flex flex-col gap-2 p-4">
              {course.lessons.map((lesson) => (
                <LessonItem key={lesson.id} lesson={lesson} />
              ))}
            </CardContent>
          )}
        </Card>
      </LayoutContent>
    </Layout>
  );
}
