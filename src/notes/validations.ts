import { NotesService } from "./notes.service";

export const validationCreate = (note: any): Boolean => {
  if (
    note.name &&
    note.name.length > 0 &&
    note.name.length < 30 &&
    note.category &&
    (note.category === "Task" ||
      note.category === "Random Thought" ||
      note.category === "Idea" ||
      note.category === "Quote") &&
    note.content &&
    note.content.length > 0
  )
    return true;

  return false;
};

export const checkId = (id: number): Boolean => {
  if (NotesService.getOne(id)) return true;

  return false;
};
