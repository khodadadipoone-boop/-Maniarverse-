"use client";

import DashboardHeader from "./dashboardHeader";
import ChildrenRow from "./childrenRow";

const DashboardShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen min-w-0 flex-1 flex-col overflow-y-auto px-4 py-5 md:px-8 md:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <DashboardHeader />
        <ChildrenRow />
        {children}
      </div>
    </main>
  );
};

export default DashboardShell;
