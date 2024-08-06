import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#D3B99F] to-[#BFACC8]">
      {children}
    </div>
  );
};

export default AuthLayout;
