export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🚀 PromptVault</h1>

      <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg">
        New Prompt
      </button>
    </nav>
  );
}