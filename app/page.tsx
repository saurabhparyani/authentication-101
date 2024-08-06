import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { outfit } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#D3B99F] to-[#BFACC8]">
      <div className="space-y-6 text-center">
        <h1
          className={`text-6xl text-[#210203] ${outfit.className} font-semibold drop-shadow-md`}
        >
          Authomatic
        </h1>
        <p className="text-2xl text-[#4D0407] drop-shadow-md font-medium">
          A simple authentication service
        </p>
        <div className="space-x-4">
          <LoginButton>
            <Button
              className="font-bold bg-[#210203] text-white tracking-wider hover:bg-[#4D0407]"
              variant={"secondary"}
              size={"lg"}
            >
              Start Today!
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
