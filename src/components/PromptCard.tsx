import type { Prompt } from "../types/prompt";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700">
      <h2 className="text-2xl font-bold text-white">
        {prompt.title}
      </h2>

      <p className="mt-3 text-slate-300">
        {prompt.content}
      </p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="bg-violet-600 px-3 py-1 rounded-full text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}