export type Note = {
  id: number;
  name: string;
  created: string;
  category: "Task" | "Random Thought" | "Quote" | "Idea";
  content: string;
  dates: string[];
};

export type StatsItem = {
  category: "Task" | "Random Thought" | "Quote" | "Idea";
  active: number;
  archived: number;
};
