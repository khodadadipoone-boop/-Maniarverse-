import Sidebar from "@/components/main/sideBar";
import DashboardShell from "@/components/dashboard/dashboardShell";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen min-w-0">
      <Sidebar />
      <DashboardShell>{children}</DashboardShell>
    </div>
  );
}
