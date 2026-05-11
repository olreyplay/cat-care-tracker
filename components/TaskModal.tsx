"use client";

import { useState } from "react";

type TaskModalProps = {
  onClose: () => void;
  onAddTask: (title: string) => void;
};

export default function TaskModal({ onClose, onAddTask }: TaskModalProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask(title);
    setTitle("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 px-6">
      <div className="w-full max-w-md rounded-4xl bg-white p-8 shadow-xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              New Task
            </p>

            <h2 className="mt-3 text-3xl font-bold">Add Care Task</h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-stone-500 transition hover:bg-orange-100"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <label className="text-sm font-semibold text-stone-500">
            Task Name
          </label>

          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Brush Fur"
            className="mt-3 w-full rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 outline-none transition focus:border-orange-400"
          />

          <button className="mt-6 w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-600">
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
}
