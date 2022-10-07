import { Injectable } from "@nestjs/common";
import { sumOfCategory } from "src/helpers/sumOfCategory";
import { Note, StatsItem } from "src/helpers/types";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";

let notes: Note[] = [
  {
    id: 1,
    name: "Shopping list",
    created: "20/7/2021",
    category: "Task",
    content: "Tomatoes, bread",
    dates: [],
  },
  {
    id: 2,
    name: "The Theory of Evolution",
    created: "27/7/2021",
    category: "Random Thought",
    content:
      "The Theory of Evolution is one of the best-substantiated theories in the history of science",
    dates: [],
  },
  {
    id: 3,
    name: "New Feature",
    created: "5/4/2021",
    category: "Idea",
    content: "Implement new features on POS terminals",
    dates: [],
  },
  {
    id: 4,
    name: "William Gaddis",
    created: "7/4/2021",
    category: "Quote",
    content:
      "Power doesn't come to those who were born strongest, or fastest, or smartest. No. It comes to those who will do anything to achieve it",
    dates: [],
  },
  {
    id: 5,
    name: "Books",
    created: "15/4/2021",
    category: "Task",
    content: "The Lean Startup",
    dates: [],
  },
  {
    id: 6,
    name: "Dentist",
    created: "3/5/2021",
    category: "Task",
    content:
      "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 7/8/2022",
    dates: ["3/5/2021", "7/8/2022"],
  },
  {
    id: 7,
    name: "Motivation",
    created: "31/5/2022",
    category: "Quote",
    content: "The World belongs to those who show up",
    dates: [],
  },
];

@Injectable()
export class NotesService {
  static getAll() : Note[] {
    return notes;
  }

  static getOne(id: number) : Note {
    return notes.find((obj) => obj.id === id);
  }

  static create(createNoteDto: CreateNoteDto):Note[]{
    const date = new Date();
    const created = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const dates: string[] = [];

    for (let i = 0; i < createNoteDto.content.length; i++) {
      // looking for dates
      const match = createNoteDto.content
        .slice(i)
        .match(/([0-3]?[0-9][/.][0-3]?[0-9][/.][1-9][0-9][0-9][0-9])/);

      if (match) {
        dates.push(match[0]);
        i += match.index + 7;
      } else {
        break;
      }
    }

    notes.push({
      id: Math.floor(Math.random() * 100000),
      ...createNoteDto,
      created: created,
      dates: [],
    });

    return notes;
  }

  static getStats() : StatsItem[]{
    let stats: StatsItem[] = [];

    stats.push(sumOfCategory("Task"));
    stats.push(sumOfCategory("Random Thought"));
    stats.push(sumOfCategory("Idea"));
    stats.push(sumOfCategory("Quote"));

    stats = stats.filter((obj) => obj.active || obj.archived);

    return stats;
  }

  static update(updateNoteDto: UpdateNoteDto, id: number) : Note | Boolean{
    const note = {
      id: id,
      name: updateNoteDto.name,
      created: "",
      category: updateNoteDto.category,
      content: updateNoteDto.content,
      dates: [],
    };

    for (let i = 0; i < note.content.length; i++) {
      // looking for dates
      const match = note.content
        .slice(i)
        .match(/([0-3]?[0-9][/.][0-3]?[0-9][/.][1-9][0-9][0-9][0-9])/);

      if (match) {
        note.dates.push(match[0]);
        i += (match.index || 1) + 7;
      } else {
        break;
      }
    }

    const oldNote : Note = notes.find((obj) => obj.id === note.id);
    if (!oldNote) return false;

    notes = notes.filter((obj) => obj.id !== oldNote.id);

    notes.push({
      id: oldNote.id,
      name: note.name,
      created: oldNote.created,
      category: note.category,
      content: note.content,
      dates: note.dates,
    });

    return notes.find((obj: any) => obj.id === oldNote.id);
  }

  static delete(id: number) : Note[] {
    return (notes = notes.filter((obj: any) => obj.id !== id));
  }

  static addFromArchive(note: Note) : void {
    notes.push(note);
  }
}
