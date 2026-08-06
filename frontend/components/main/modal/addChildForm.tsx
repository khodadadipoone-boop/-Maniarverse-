// AddChildForm.tsx
"use client";

import { useState } from "react";
import { AVATARS } from "./../../avatars/Avatars";
import { CHILD_ENDPOINTS } from "@/lib/appConfig";
import { getParentId } from "@/lib/tokenStorage"

export interface ChildResponse {
  id: number;
  parent_id: number;
  name: string;
  birth_date: string | null;
  avatar_url: string | null;
  created_at: string;
}

interface AddChildFormProps {
  onSave: (data: ChildResponse) => void;
}

const AddChildForm = ({ onSave }: AddChildFormProps) => {
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [avatarId, setAvatarId] = useState<string>(AVATARS[0].id);

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const parentId = getParentId();

    if (!parentId) {
      setError("Could not identify logged-in user. Please log in again.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(CHILD_ENDPOINTS.addChild, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_id: parentId,
          name: name.trim(),
          birth_date: birthDate || null,
          avatar_url: avatarId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const message = Array.isArray(data.detail)
          ? data.detail.map((item: { msg: string }) => item.msg).join(" | ")
          : typeof data.detail === "string"
          ? data.detail
          : "Failed to add child.";

        setError(message);
        setSubmitting(false);
        return;
      }

      onSave(data as ChildResponse);

      // ریست کردن فرم بعد از موفقیت
      setName("");
      setBirthDate("");
      setAvatarId(AVATARS[0].id);
    } catch (err) {
      console.error("Add child error:", err);
      setError("Could not connect to the server. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-900">Add a child</h2>

      {error && (
        <p className="text-red-500 font-bold text-sm text-center bg-red-50 rounded-lg py-2">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Choose Avatar
        </label>
        <div className="flex flex-wrap gap-2">
          {AVATARS.map((avatar) => {
            const isSelected = avatarId === avatar.id;
            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() => setAvatarId(avatar.id)}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={100}
          className="w-full rounded-xl border-2 border-transparent bg-teal-50 px-4 py-2.5 text-gray-900 focus:outline-none focus:border-teal-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">birth date</label>
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="w-full rounded-xl border-2 border-transparent bg-teal-50 px-4 py-2.5 text-gray-900 focus:outline-none focus:border-teal-500 transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-full rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 py-2.5 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "sending..." : "send"}
      </button>
    </form>
  );
};

export default AddChildForm;
