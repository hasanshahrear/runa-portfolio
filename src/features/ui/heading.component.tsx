"use client"

import { cn } from "@/lib/utils";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-heading" });

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export function Heading({ children, className }: TProps) {
  return (
    <h2 className={cn(`${oxanium.className} font-semibold text-[50px] text-primary`, className)}>
      {children}
    </h2>
  );
}
