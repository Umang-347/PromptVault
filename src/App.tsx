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

  function addPrompt(prompt: Prompt) {
  setPrompts((prev) => [prompt, ...prev]);
}

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <main className="max-w-5xl mx-auto p-8 space-y-6">
        <AddPromptForm onAdd={addPrompt} />
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