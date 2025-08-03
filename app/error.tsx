"use client";

import { LoginButton } from "@/components/features/auth/LoginButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Error() {
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardHeader>
        <CardTitle> You need to be logged in to view this page</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginButton />
      </CardContent>
    </Card>
  );
}
