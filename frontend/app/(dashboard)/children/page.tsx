"use client";

import { HiCalendarDays, HiSparkles } from "react-icons/hi2";
import { AVATARS } from "@/components/avatars/Avatars";
import EmptyState from "@/components/main/emptyState";
import { useChildrenContext } from "@/components/main/childrenContext";

const ChildrenPage = () => {
  const { childrenList, activeId } = useChildrenContext();
  const selectedChild =
    activeId === "all-stories"
      ? null
      : childrenList.find((child) => child.id === activeId);

  if (!selectedChild) {
    return (
      <div className="pb-8">
        <h1 className="mb-6 text-xl font-bold text-slate-800">Children</h1>
        <EmptyState />
      </div>
    );
  }

  const avatar =
    AVATARS.find((a) => a.id === selectedChild.avatarId) ?? AVATARS[0];

  return (
    <div className="pb-8">
      <h1 className="mb-6 text-xl font-bold text-slate-800">Children</h1>

      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full text-3xl ${avatar.bg}`}
          >
            {avatar.emoji}
          </div>
          <h2 className="text-xl font-bold text-slate-900">{selectedChild.name}</h2>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
            <HiCalendarDays size={18} className="text-amber-600" />
          </div>
          <span className="font-medium text-slate-700">
            {selectedChild.age} years old
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100">
            <HiSparkles size={18} className="text-cyan-600" />
          </div>
          <span className="font-medium text-slate-700">
            {selectedChild.interests || "No interests listed yet"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChildrenPage;
