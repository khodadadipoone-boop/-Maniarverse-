"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronUpDown } from "react-icons/hi2";
import { items } from "@/components/header/navData";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-16 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white md:w-64">
      <div className="flex items-center justify-center border-b border-slate-100 px-3 py-4 md:justify-start md:px-6 md:py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 md:hidden">
          M
        </span>
        <span className="hidden text-xl font-bold text-slate-800 md:inline">
          Minaverse
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2 py-4 md:px-3">
        {items.map((item) => {
          const { name, href, icon: Icon } = item;
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

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

      <div className="border-t border-slate-100 p-2 md:p-3">
        <button
          type="button"
          aria-label="User profile"
          className="flex w-full items-center justify-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-slate-50 md:justify-start md:px-3 md:text-left"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-lg">
            👩
          </div>
          <div className="hidden min-w-0 flex-1 md:block">
            <p className="truncate text-sm font-bold text-slate-800">Sarah</p>
            <p className="text-xs text-slate-500">Parent</p>
          </div>
          <HiChevronUpDown
            size={18}
            className="hidden shrink-0 text-slate-400 md:block"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
