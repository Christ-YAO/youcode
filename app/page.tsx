import { LoginButton } from "@/components/features/auth/LoginButton";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/Typography";
import { getAuthSession } from "@/lib/auth";
import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

type Tag = { label: string; variant: BadgeProps["variant"] };

const exampleLessons: ({ name: string } & Tag)[] = [
  { name: "Install Git", label: "Public", variant: "default" },
  { name: "Your first commit", label: "Published", variant: "secondary" },
  { name: "Work with branches", label: "Published", variant: "secondary" },
  { name: "Resolve conflicts", label: "Hidden", variant: "outline" },
];

const sections: {
  tag: string;
  title: string;
  description: string;
  tags: Tag[];
}[] = [
  {
    tag: "<courses />",
    title: "Courses",
    description: "A name, a cover image and a presentation in Markdown.",
    tags: [
      { label: "Cover", variant: "outline" },
      { label: "Markdown", variant: "outline" },
    ],
  },
  {
    tag: "<lessons />",
    title: "Lessons",
    description: "Each lesson has its own state, shown at a glance.",
    tags: [
      { label: "Public", variant: "default" },
      { label: "Published", variant: "secondary" },
      { label: "Hidden", variant: "outline" },
    ],
  },
  {
    tag: "<users />",
    title: "Users",
    description: "See who joined a course and who canceled.",
    tags: [
      { label: "Joined", variant: "secondary" },
      { label: "Canceled", variant: "outline" },
    ],
  },
];

const ExampleCourse = () => {
  return (
    <figure
      aria-label="Example of a course and its lessons"
      className="dark overflow-hidden rounded-lg border bg-card text-foreground shadow-lg"
    >
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <Image src="/images/you-code.svg" width={24} height={17} alt="" />
        <span className="font-mono text-sm">git-basics</span>
        <span className="ml-auto text-xs text-muted-foreground">Example</span>
      </div>
      <ol className="flex flex-col divide-y">
        {exampleLessons.map((lesson, index) => (
          <li key={lesson.name} className="flex items-center gap-3 px-4 py-3">
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 truncate text-sm font-medium">
              {lesson.name}
            </span>
            <Badge className="ml-auto shrink-0" variant={lesson.variant}>
              {lesson.label}
            </Badge>
          </li>
        ))}
      </ol>
    </figure>
  );
};

export default async function Home() {
  const session = await getAuthSession();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0];

  return (
    <div className="flex flex-col">
      <section className="border-b">
        <div className="m-auto grid w-full max-w-5xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col items-start gap-6">
            {user ? (
              <p className="font-mono text-sm text-muted-foreground">
                {firstName ? `Welcome back, ${firstName}` : "Welcome back"}
              </p>
            ) : null}
            <Typography variant="h1">
              Online courses, organized{" "}
              <span className="text-primary dark:text-red-400">
                lesson by lesson.
              </span>
            </Typography>
            <Typography variant="lead">
              Your courses, their lessons and the users who follow them, in one
              dashboard.
            </Typography>
            <div className="flex flex-wrap gap-3">
              {user ? (
                <>
                  <Link href="/admin" className={buttonVariants({ size: "lg" })}>
                    Open dashboard
                  </Link>
                  <Link
                    href="/account"
                    className={buttonVariants({
                      size: "lg",
                      variant: "outline",
                    })}
                  >
                    Your account
                  </Link>
                </>
              ) : (
                <>
                  <LoginButton
                    size="lg"
                    variant="default"
                    label="Sign in with GitHub"
                  />
                  <Link
                    href="#inside"
                    className={buttonVariants({
                      size: "lg",
                      variant: "outline",
                    })}
                  >
                    See what&apos;s inside
                  </Link>
                </>
              )}
            </div>
          </div>
          <ExampleCourse />
        </div>
      </section>

      <section
        id="inside"
        className="m-auto flex w-full max-w-5xl scroll-mt-16 flex-col gap-10 px-4 py-16"
      >
        <Typography variant="h2" className="border-none pb-0">
          What&apos;s inside
        </Typography>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-3 border-t-2 border-primary pt-4"
            >
              <p className="font-mono text-sm text-muted-foreground">
                {section.tag}
              </p>
              <Typography variant="h3" as="h3">
                {section.title}
              </Typography>
              <p className="text-sm leading-6 text-muted-foreground">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <Badge key={tag.label} variant={tag.variant}>
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="m-auto flex w-full max-w-5xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <p className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {SiteConfig.description}
          </p>
          <Link
            href="/admin"
            className={buttonVariants({ size: "lg", variant: "secondary" })}
          >
            Open dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}
