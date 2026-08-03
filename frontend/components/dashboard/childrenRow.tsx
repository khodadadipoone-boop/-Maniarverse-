"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { AVATARS } from "@/components/avatars/Avatars";
import Modal from "@/components/main/modal/modal";
import AddChildForm from "@/components/main/modal/addChildForm";
import { useChildrenContext } from "@/components/main/childrenContext";

const ChildrenRow = () => {
  const { childrenList, activeId, setActiveId, handleAddChild } =
    useChildrenContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveChild = (data: Parameters<typeof handleAddChild>[0]) => {
    handleAddChild(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap items-end gap-6">
        <button
          type="button"
          onClick={() => setActiveId("all-stories")}
          className="flex flex-col items-center gap-2"
        >
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl transition-all ${
              activeId === "all-stories"
                ? "ring-2 ring-blue-500 ring-offset-2"
                : "hover:ring-2 hover:ring-slate-200 hover:ring-offset-2"
            }`}
          >
            👨‍👩‍👧
          </div>
          <span
            className={`text-xs font-semibold ${
              activeId === "all-stories" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            All Children
          </span>
        </button>

        {childrenList.map((child) => {
          const avatar =
            AVATARS.find((a) => a.id === child.avatarId) ?? AVATARS[0];
          const isSelected = activeId === child.id;

          return (
            <button
              key={child.id}
              type="button"
              onClick={() => setActiveId(child.id)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl ${avatar.bg} transition-all ${
                  isSelected
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : "hover:ring-2 hover:ring-slate-200 hover:ring-offset-2"
                }`}
              >
                {avatar.emoji}
              </div>
              <span
                className={`max-w-16 truncate text-xs font-semibold ${
                  isSelected ? "text-blue-600" : "text-slate-600"
                }`}
              >
                {child.name}
              </span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center gap-2"
          aria-label="Add a child"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-slate-300 text-slate-400 transition-colors hover:border-blue-400 hover:text-blue-500">
            <HiPlus size={24} />
          </div>
          <span className="text-xs font-semibold text-slate-500">Add</span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddChildForm onSave={handleSaveChild} />
      </Modal>
    </>
  );
};

export default ChildrenRow;
