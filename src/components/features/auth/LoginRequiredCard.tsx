import { Layout } from "@/components/layout/layout";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import { LoginButton } from "./LoginButton";

export const LoginRequiredCard = () => {
  return (
    <Layout className="max-w-md py-16">
      <Card className="w-full text-center">
        <CardHeader className="items-center">
          <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Lock size={20} />
          </div>
          <CardTitle>You need to be logged in</CardTitle>
          <CardDescription>
            Sign in with your account to view this page.
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-center">
          <LoginButton />
        </CardFooter>
      </Card>
    </Layout>
  );
};
