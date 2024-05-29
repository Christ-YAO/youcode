import { prisma } from '@/lib/prisma';

export const getCourseLessons = async ({
  courseId,
  // Ce userId fait en sorte que seul le créateur de la lesson puisse y avoir accès
  // userId,
}: {
  courseId: string;
  // userId: string;
}) => {
  return await prisma.course.findFirst({
    where: {
      id: courseId,
      // creatorId: userId,
    },
    select: {
      id: true,
      name: true,
      lessons: true,
    },
  });
};