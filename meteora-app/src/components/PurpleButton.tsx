import { ReactNode } from "react";

export function PurpleButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`${className} tracking-[0.02856rem] bg-meteora-light-purple text-white font-medium py-2 transition-all duration-300 pr-4 pl-[18px] col-span-3 hover:bg-[#8960B4] `}
    >
      {children}
    </button>
  );
}
