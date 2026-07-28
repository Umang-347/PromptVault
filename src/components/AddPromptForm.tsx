import { useState } from "react";
import type { Prompt } from "../types/prompt";
import { v4 as uuid } from "uuid";

interface Props {
  onAdd: (prompt: Prompt) => void;
}

export default function AddPromptForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    onAdd({
      id: uuid(),
      title,
      content,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      favorite: false,
    });

    setTitle("");
    setContent("");
    setTags("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 rounded-xl p-6 space-y-4"
    >
      <input
        className="w-full p-3 rounded bg-slate-700 text-white"
        placeholder="Prompt title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 rounded bg-slate-700 text-white"
        placeholder="Prompt..."
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-slate-700 text-white"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button
        className="bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-lg text-white"
      >
        Add Prompt
      </button>
    </form>
  );
}