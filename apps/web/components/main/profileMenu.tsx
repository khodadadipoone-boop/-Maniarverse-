"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { clearToken } from "@/lib/tokenStorage";

const ProfileMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLogout = () => {
    clearToken();
    setIsOpen(false);
    router.push("/login");
  };

  return (
    <div className="relative border-t border-slate-100 p-2 md:p-3">
      <button
        ref={triggerRef}
        type="button"
        aria-label="User profile"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-slate-50 md:justify-start md:px-3 md:text-left"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-lg">
          👩
        </div>
        <div className="hidden min-w-0 flex-1 md:block">
          <p className="truncate text-sm font-bold text-slate-800">Sarah</p>
          <p className="text-xs text-slate-500">Parent</p>
        </div>
        {isOpen ? (
          <HiChevronUp
            size={18}
            className="hidden shrink-0 text-slate-400 md:block"
          />
        ) : (
          <HiChevronDown
            size={18}
            className="hidden shrink-0 text-slate-400 md:block"
          />
        )}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          className="absolute bottom-full left-0 z-50 mb-2 min-w-40 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-md md:w-full"
        >
          {/* TODO: add other menu items here (e.g. account settings) if needed */}
          <button
            type="button"
            role="menuitem"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 px-3 py-2.5 text-sm cursor-pointer font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            <HiOutlineArrowRightOnRectangle size={18} />
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
