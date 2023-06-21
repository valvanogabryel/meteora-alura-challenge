import { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-medium text-3xl text-meteora-dark text-center">
      {children}
    </h3>
  );
}
