// AddChildForm.tsx
"use client";

import { useState } from "react";
import type { Child } from "../Data";
import { AVATARS } from "./../../avatars/Avatars"

interface AddChildFormProps {
  onSave: (data: Omit<Child, "id">) => void;
}

const AddChildForm = ({ onSave }: AddChildFormProps) => {
  const [formData, setFormData] = useState<Omit<Child, "id">>({
    name: "",
    age: "",
    interests: "",
    avatarId: AVATARS[0].id,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-900">Add a child</h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Choose Avatar
        </label>
        <div className="flex flex-wrap gap-2">
          {AVATARS.map((avatar) => {
            const isSelected = formData.avatarId === avatar.id;
            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, avatarId: avatar.id }))
                }
                className={`flex items-center justify-center w-11 h-11 rounded-full text-xl cursor-pointer transition-all duration-150 ${
                  avatar.bg
                } ${
                  isSelected
                    ? "ring-2 ring-teal-500 ring-offset-2 scale-110"
                    : "hover:scale-105"
                }`}
              >
                {avatar.emoji}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border-2 border-transparent bg-teal-50 px-4 py-2.5 text-gray-900 focus:outline-none focus:border-teal-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          min={0}
          className="w-full rounded-xl border-2 border-transparent bg-teal-50 px-4 py-2.5 text-gray-900 focus:outline-none focus:border-teal-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">favorites</label>
        <textarea
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border-2 border-transparent bg-teal-50 px-4 py-2.5 text-gray-900 focus:outline-none focus:border-teal-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 py-2.5 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors cursor-pointer"
      >
        send
      </button>
    </form>
  );
};

export default AddChildForm;
