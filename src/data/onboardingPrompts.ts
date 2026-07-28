import type { Prompt } from "../types/prompt";

export const onboardingPrompts: Prompt[] = [
  {
    id: "welcome-1",
    title: "👋 Welcome to PromptVault!",
    content: "This is a prompt card. PromptVault is a tool to save and organize your favorite AI instructions. Try creating a new prompt by clicking the \"New Prompt\" button at the top right!",
    tags: ["tutorial", "getting-started"],
    favorite: false
  },
  {
    id: "welcome-2",
    title: "💡 Pro Tip: Quick Search",
    content: "Use the search bar above to instantly filter prompts by their title, tags, or content. Try searching for \"getting-started\" right now to see only the welcome prompt!",
    tags: ["tips", "search"],
    favorite: false
  }
];
