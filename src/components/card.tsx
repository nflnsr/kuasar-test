import { cn } from "../helper/utils";
import { ReactNode } from "react";

function Card({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "ring-1 ring-gray-400 p-4 min-w-60 w-52 min-h-40  rounded-lg shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Card };
