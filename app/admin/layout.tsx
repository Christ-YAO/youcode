import { getRequiredAuthSession } from "@/lib/auth";
import React, { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getRequiredAuthSession();

  if (!session) {
    return;
  }
  return <>{children}</>;
}
