import { ReactNode } from "react";

export function PurpleButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} tracking-[0.02856rem] bg-meteora-light-purple text-white font-medium py-2 transition-all duration-300 pr-4 pl-[18px] col-span-3 hover:bg-[#4d0c92] `}
    >
      {children}
    </button>
  );
}
