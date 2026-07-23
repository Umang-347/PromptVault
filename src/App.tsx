import { useState } from "react";
import Navbar from "./components/Navbar";
import PromptCard from "./components/PromptCard";
import { samplePrompts } from "./data/samplePrompts";
import type { Prompt } from "./types/prompt";

function App() {
  const [prompts] = useState<Prompt[]>(samplePrompts);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <main className="max-w-5xl mx-auto p-8 space-y-6">
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
          />
        ))}
      </main>
    </div>
  );
}

export default App;