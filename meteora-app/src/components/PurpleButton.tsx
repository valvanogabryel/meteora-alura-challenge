import { ReactNode } from "react";

export function PurpleButton({
  children,
  width,
}: {
  children: ReactNode;
  width?: string;
}) {
  const widthValue = width;

  return (
    <button
      className={`bg-meteora-light-purple text-white font-medium py-2 pr-4 pl-[18px] col-span-3 ${
        width && `w-[${widthValue}%]`
      }`}
    >
      {children}
    </button>
  );
}
