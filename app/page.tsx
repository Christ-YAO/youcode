import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";
import { BookOpen, Presentation, UsersRound } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Presentation,
    title: "Courses",
    description: "A name, a cover image and a presentation in Markdown.",
  },
  {
    icon: BookOpen,
    title: "Lessons",
    description: "Each lesson is hidden, published or public.",
  },
  {
    icon: UsersRound,
    title: "Users",
    description: "See who joined a course and who canceled.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="border-b">
        <div className="m-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center md:py-24">
          <Typography variant="h1">
            Online courses, organized lesson by lesson.
          </Typography>
          <Typography variant="lead" className="max-w-xl">
            Sign in with GitHub, then manage your courses, lessons and users
            from one dashboard.
          </Typography>
          <Link href="/admin" className={buttonVariants({ size: "lg" })}>
            Open dashboard
          </Link>
        </div>
      </section>
      <section className="m-auto grid w-full max-w-5xl gap-4 px-4 py-12 md:grid-cols-3 md:py-16">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary dark:text-red-400">
                <feature.icon size={20} />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
