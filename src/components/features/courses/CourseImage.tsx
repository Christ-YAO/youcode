import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type CourseImageProps = {
  name?: string | null;
  image?: string | null;
  className?: string;
};

// Radix Avatar falls back to the initial when a remote image fails to load.
export const CourseImage = ({ name, image, className }: CourseImageProps) => {
  return (
    <Avatar className={cn("h-36 w-full rounded-none", className)}>
      <AvatarFallback className="rounded-none text-3xl font-semibold uppercase text-muted-foreground">
        {name?.[0]}
      </AvatarFallback>
      {image && (
        <AvatarImage
          src={image}
          alt={name ?? ""}
          className="aspect-auto object-cover"
        />
      )}
    </Avatar>
  );
};
