"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { type ReactNode } from "react";

export default function ClientBody({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
