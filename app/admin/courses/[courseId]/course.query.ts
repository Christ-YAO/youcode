import { prisma } from "@/lib/prisma";

export const getCourse = async ({
  courseId,
  userId,
  userPage,
}: {
  courseId: string;
  userId: string;
  userPage: number;
}) => {
  const courses = await prisma.course.findUnique({
    where: {
      // Cette ligne est une sécurité pour que seul le créateur de la leçon puisse y accéder
      // creatorId: userId,
      id: courseId,
    },
    select: {
      id: true,
      image: true,
      name: true,
      presentation: true,
      users: {
        take: 5,
        skip: Math.max(0, userPage * 5),
        select: {
          canceledAt: true,
          id: true,
          user: {
            select: {
              id: true,
              email: true,
              image: true,
            },
          },
        },
      },
      _count: {
        select: {
          lessons: true,
          users: true,
        },
      },
    },
  });

//   const totalUsers = await prisma.courseOnUser.count({
//     where: {
//       courseId: courseId,
//     },
//   })

  const users = courses?.users.map((user) => {
    return {
      canceled: user.canceledAt ? true : false,
      ...user.user,
      image: user.user.image ? user.user.image : null,
    };
  });

  return {
    ...courses,
    users,
    // totalUsers,
  };
};
