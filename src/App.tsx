import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <main className="p-10 text-white">
        <h2 className="text-4xl font-bold">
          Welcome to PromptVault
        </h2>

        <p className="mt-3 text-slate-400">
          Store and organize all your AI prompts.
        </p>
      </main>
    </div>
  );
}

export default App;