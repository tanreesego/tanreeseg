import * as React from "react";

import { Sidebar } from "../Sidebar";

export function SiteLayout({ children }) {
  return (
    <main className="relative flex h-full min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-1">{children}</div>
    </main>
  );
}
