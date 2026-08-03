// Modal.tsx
"use client";

import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 bg-teal-950/30 backdrop-blur-sm ${
          isOpen ? "animate-backdrop-in" : "animate-backdrop-out"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-sm rounded-2xl bg-white shadow-md overflow-hidden mx-4 border border-teal-100 ${
          isOpen ? "animate-modal-in" : "animate-modal-out"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
        >
          <HiXMark size={22} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
