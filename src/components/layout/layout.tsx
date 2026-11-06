import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';
import { Typography } from '../ui/Typography';

export const Layout = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'max-w-5xl flex-wrap w-full flex items-end gap-x-4 gap-y-6 m-auto px-4 py-8 md:py-10',
        props.className
      )}
    />
  );
};

export const LayoutHeader = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]',
        props.className
      )}
    />
  );
};

export const LayoutTitle = (props: ComponentPropsWithoutRef<'h1'>) => {
  return (
    <Typography
      {...props}
      variant="h2"
      className={cn('border-none pb-0', props.className)}
    />
  );
};

export const LayoutDescription = (props: ComponentPropsWithoutRef<'p'>) => {
  return (
    <Typography
      {...props}
      className={cn('text-muted-foreground', props.className)}
    />
  );
};

export const LayoutActions = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div {...props} className={cn('flex items-center gap-2', props.className)} />
  );
};

export const LayoutContent = (props: ComponentPropsWithoutRef<'div'>) => {
  return <div {...props} className={cn('w-full', props.className)} />;
};

export const LayoutBackLink = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) => {
  return (
    <div className="-mb-3 w-full">
      <Link
        {...props}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground',
          className
        )}
      >
        <ArrowLeft size={14} />
        {children}
      </Link>
    </div>
  );
};
