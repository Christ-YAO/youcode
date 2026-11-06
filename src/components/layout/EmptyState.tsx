import type { LucideIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

export type EmptyStateProps = PropsWithChildren<{
  icon: LucideIcon;
  title: string;
  description: string;
}>;

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  children,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
      <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Icon size={22} />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
};
