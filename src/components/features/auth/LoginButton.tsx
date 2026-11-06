"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export type LoginButtonProps = Pick<ButtonProps, "size" | "variant"> & {
  label?: string;
};

export function LoginButton({
  size = "sm",
  variant = "outline",
  label = "Login",
}: LoginButtonProps) {
  const iconSize = size === "lg" ? 16 : 12;
  const mutation = useMutation({
    // mutationKey: "signIn",
    mutationFn: async () => signIn(),
    // onSuccess: () => window.location.reload(),
    onError: () => window.location.reload(),
  });
  return (
    <Button
      variant={variant}
      size={size}
      disabled={mutation.isPending}
      onClick={() => {
        mutation.mutate();
      }}
    >
      {mutation.isPending ? (
        <Loader className="mr-2" size={iconSize} />
      ) : (
        <LogIn className="mr-2" size={iconSize} />
      )}
      {label}
    </Button>
  );
}
