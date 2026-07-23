import { useState } from "react";
import Navbar from "./components/Navbar";
import PromptCard from "./components/PromptCard";
import AddPromptForm from "./components/AddPromptForm";
import { samplePrompts } from "./data/samplePrompts";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Prompt } from "./types/prompt";

function App() {
  const [prompts, setPrompts] = useLocalStorage<Prompt[]>(
    "prompts",
    samplePrompts
  );

  const [search, setSearch] = useState("");

  function addPrompt(prompt: Prompt) {
    setPrompts((prev) => [prompt, ...prev]);
  }

  function deletePrompt(id: string) {
    setPrompts((prev) =>
      prev.filter((prompt) => prompt.id !== id)
    );
  }

  const filteredPrompts = prompts.filter((prompt) => {
    const query = search.toLowerCase();

    return (
      prompt.title.toLowerCase().includes(query) ||
      prompt.content.toLowerCase().includes(query) ||
      prompt.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      )
    );
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <main className="max-w-5xl mx-auto p-8 space-y-6">

        <input
          type="text"
          placeholder="🔍 Search prompts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
        />

        <AddPromptForm onAdd={addPrompt} />

        {filteredPrompts.length === 0 ? (
          <div className="text-center text-slate-400 py-10">
            No prompts found.
          </div>
        ) : (
          filteredPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              onDelete={deletePrompt}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;