import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl w-full px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
