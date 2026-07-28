import { Plus } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddPromptForm from "../AddPromptForm";
import type { Prompt } from "../../types/prompt";

interface Props {
  onAdd: (prompt: Prompt) => void;
}

export default function Navbar({ onAdd }: Props) {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <div>
          <h1 className="text-xl font-bold">
            🚀 PromptVault
          </h1>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium transition hover:bg-violet-500">
              <Plus size={18} />
              New Prompt
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Prompt</DialogTitle>
            </DialogHeader>
            <AddPromptForm onAdd={onAdd} />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}