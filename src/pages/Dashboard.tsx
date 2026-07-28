import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import PromptCard from "../components/PromptCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Prompt } from "../types/prompt";
import { onboardingPrompts } from "../data/onboardingPrompts";

export default function Dashboard() {
  const [prompts, setPrompts] = useLocalStorage<Prompt[]>("prompts", onboardingPrompts);
  const [search, setSearch] = useState("");

  const filteredPrompts = prompts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
      p.content.toLowerCase().includes(search.toLowerCase())
  );

  function addPrompt(p: Prompt) {
      setPrompts([...prompts, p]);
  }

  function deletePrompt(id: string) {
      setPrompts(prompts.filter(p => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar onAdd={addPrompt} />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <input
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredPrompts.map(p => <PromptCard key={p.id} prompt={p} onDelete={deletePrompt} />)}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
              No prompts found.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}