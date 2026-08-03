"use client";

import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi2";
import Modal from "@/components/main/modal/modal";
import AddChildForm from "@/components/main/modal/addChildForm";
import { useChildrenContext } from "@/components/main/childrenContext";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const DashboardHeader = () => {
  const { handleAddChild } = useChildrenContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveChild = (data: Parameters<typeof handleAddChild>[0]) => {
    handleAddChild(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">
            {getGreeting()}, Sarah ☀️
          </h1>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Here&apos;s what&apos;s happening with your family today.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="relative rounded-xl bg-white p-2 text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 sm:p-2.5"
            aria-label="Notifications"
          >
            <HiOutlineBell size={22} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            + Add child
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddChildForm onSave={handleSaveChild} />
      </Modal>
    </>
  );
};

export default DashboardHeader;
