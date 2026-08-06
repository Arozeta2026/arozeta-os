"use client";

import { SidebarProvider } from "@/hooks/useSidebar";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}