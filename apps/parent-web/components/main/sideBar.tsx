"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { items } from "@/components/header/navData";
import ProfileMenu from "./profileMenu";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-16 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white md:w-64">
      <div className="flex items-center justify-center border-b border-slate-100 px-3 py-4 md:justify-start md:px-6 md:py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 md:hidden">
          M
        </span>
        <span className="hidden text-xl font-bold text-slate-800 md:inline">
          Maniarverse
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2 py-4 md:px-3">
        {items.map((item) => {
          const { name, href, icon: Icon } = item;
          const isActive =
            href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              aria-label={name}
              className={`flex items-center justify-center gap-3 rounded-xl px-2 py-2.5 text-sm font-semibold transition-colors duration-200 md:justify-start md:px-3 ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <Icon size={20} className="shrink-0" />
              <span className="hidden md:inline">{name}</span>
            </Link>
          );
        })}
      </nav>

      <ProfileMenu />
    </aside>
  );
};

export default Sidebar;
