import {
  Home,
  Star,
  Folder,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Dashboard",
  },
  {
    icon: Star,
    title: "Favorites",
  },
  {
    icon: Folder,
    title: "Categories",
  },
  {
    icon: Settings,
    title: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-800 bg-slate-900 md:block">
      <div className="p-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-800"
            >
              <Icon size={18} />

              {item.title}
            </button>
          );
        })}
      </div>
    </aside>
  );
}