import { Badge, type BadgeProps } from '@/components/ui/badge';
import { Lesson, LessonState } from '@prisma/client';
import { BookOpen } from 'lucide-react';

export type LessonItemProps = {
  lesson: Lesson;
};

const lessonStates: Record<
  LessonState,
  { label: string; variant: BadgeProps['variant'] }
> = {
  PUBLIC: { label: 'Public', variant: 'default' },
  PUBLISHED: { label: 'Published', variant: 'secondary' },
  HIDDEN: { label: 'Hidden', variant: 'outline' },
};

export const LessonItem = (props: LessonItemProps) => {
  const state = lessonStates[props.lesson.state];

  return (
    <div className="flex items-center gap-3 rounded-md border bg-card px-4 py-3 transition-colors hover:bg-accent">
      <BookOpen size={16} className="shrink-0 text-muted-foreground" />
      <p className="min-w-0 truncate font-medium capitalize">
        {props.lesson.name}
      </p>
      <Badge className="ml-auto shrink-0" variant={state.variant}>
        {state.label}
      </Badge>
    </div>
  );
};
