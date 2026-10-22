// childData.tsx
"use client";

import { HiCalendarDays } from "react-icons/hi2";
import { AVATARS } from "../avatars/Avatars";
import EmptyState from "./emptyState";
import { useChildrenContext } from "./childrenContext";

const formatBirthDate = (birthDate: string | null) => {
  if (!birthDate) return "Birth date not set";
  const parsed = new Date(birthDate);
  if (Number.isNaN(parsed.getTime())) return birthDate;
  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ChildData = () => {
  const { childrenList, activeId } = useChildrenContext();
  const selectedChild =
    activeId === "all-stories"
      ? null
      : childrenList.find((child) => child.id === activeId);

  if (!selectedChild) {
    return <EmptyState />;
  }

  const avatar =
    AVATARS.find((a) => a.id === selectedChild.avatar_url) ?? AVATARS[0];

  return (
    <div className="w-sm rounded-2xl bg-white shadow-md overflow-hidden p-6 flex flex-col gap-5 border border-teal-100">
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-14 h-14 rounded-full text-3xl ${avatar.bg}`}
        >
          {avatar.emoji}
        </div>
        <h2 className="text-xl font-bold text-gray-900">
          {selectedChild.name}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 shrink-0">
          <HiCalendarDays size={18} className="text-amber-600" />
        </div>
        <span className="text-gray-700 font-medium">
          {formatBirthDate(selectedChild.birth_date)}
        </span>
      </div>
    </div>
  );
};

export default ChildData;
