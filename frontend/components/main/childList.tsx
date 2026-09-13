// childList.tsx
"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import Modal from "./modal/modal";
import AddChildForm from "./modal/addChildForm";
import type { ActiveChildId, Child, ChildCreateInput } from "./Data";
import { AVATARS } from "../avatars/Avatars";

interface ChildListProps {
  childrenList: Child[];
  activeId: ActiveChildId;
  onSelect: (id: ActiveChildId) => void;
  onAddChild: (data: ChildCreateInput) => Promise<void>;
}

const ChildList = ({
  childrenList,
  activeId,
  onSelect,
  onAddChild,
}: ChildListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveChild = async (data: ChildCreateInput) => {
    await onAddChild(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col pb-2 animate-dropdown-in">
        <button
          onClick={() => onSelect("all-stories")}
          className={`w-full flex items-center gap-3 pl-10 pr-6 py-3 transition-colors duration-200 cursor-pointer ${
            activeId === "all-stories"
              ? "bg-teal-50 text-teal-700 border-r-4 border-teal-500"
              : "text-gray-700 hover:bg-cyan-50/60"
          }`}
        >
          <span className="font-semibold">All Stories</span>
        </button>

        {childrenList.map((child) => {
          const avatar =
            AVATARS.find((a) => a.id === child.avatar_url) ?? AVATARS[0];
          return (
            <button
              key={child.id}
              onClick={() => onSelect(child.id)}
              className={`w-full flex items-center gap-3 pl-10 pr-6 py-3 transition-colors duration-200 cursor-pointer ${
                activeId === child.id
                  ? "bg-teal-50 text-teal-700 border-r-4 border-teal-500"
                  : "text-gray-700 hover:bg-cyan-50/60"
              }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full text-base ${avatar.bg}`}
              >
                {avatar.emoji}
              </span>
              <span className="font-semibold">{child.name}</span>
            </button>
          );
        })}

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full flex items-center gap-3 pl-10 pr-6 py-3 text-cyan-600 hover:bg-cyan-50/60 transition-colors duration-200 cursor-pointer"
        >
          <HiPlus size={18} />
          <span className="font-semibold">Add a child</span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddChildForm onSave={handleSaveChild} />
      </Modal>
    </>
  );
};

export default ChildList;
