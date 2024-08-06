"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/auth/login");
  };

  // Come back to this later
  if (mode == "modal") {
    return "TODO: IMPLEMENT MODAL";
  }

  return <span onClick={handleOnClick}>{children}</span>;
};
