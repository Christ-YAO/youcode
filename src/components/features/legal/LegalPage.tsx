import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { LegalConfig } from "@/lib/legal-config";
import type { PropsWithChildren } from "react";

export const LegalValue = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  if (value) {
    return <>{value}</>;
  }

  return (
    <mark className="rounded-sm bg-muted px-1 font-medium text-foreground">
      [À compléter : {label}]
    </mark>
  );
};

export const LegalPage = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <Layout className="max-w-2xl" lang="fr">
      <LayoutHeader>
        <LayoutTitle>{title}</LayoutTitle>
        <LayoutDescription>
          Dernière mise à jour :{" "}
          <LegalValue value={LegalConfig.lastUpdated} label="date" />
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-8">{children}</LayoutContent>
    </Layout>
  );
};

export const LegalSection = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <section className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground [&_li]:ml-5 [&_li]:list-disc">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
};
