"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex w-full gap-x-2 items-center">
      <Button className="w-full" size={"lg"} variant={"outline"}>
        <FcGoogle size={24} />
      </Button>
      <Button className="w-full" size={"lg"} variant={"outline"}>
        <FaGithub size={24} />
      </Button>
    </div>
  );
};
