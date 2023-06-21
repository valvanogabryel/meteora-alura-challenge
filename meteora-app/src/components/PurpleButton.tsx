import { ReactNode } from "react";

export function PurpleButton({
  children,
  width,
}: {
  children: ReactNode;
  width?: string;
}) {
  const widthClass = width ? `w-[${width}%]` : "";

  return (
    <button
      className={`bg-meteora-light-purple text-white font-medium py-2 transition-all duration-300 pr-4 pl-[18px] col-span-3 hover:bg-[#8960B4] ${widthClass}`}
    >
      {children}
    </button>
  );
}
