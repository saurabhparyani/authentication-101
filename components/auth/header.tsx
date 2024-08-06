import { outfit } from "@/lib/fonts";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={`text-3xl font-semibold text-[#210203] ${outfit.className}`}
      >
        Authomatic
      </h1>
      <p className="text-lg text-muted-foreground font-semibold">{label}</p>
    </div>
  );
};
