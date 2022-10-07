import { Injectable } from '@nestjs/common';
import { Note } from 'src/helpers/types';

let notes : Note[] = [
  {
    id: 52348,
    name: 'George C. Marshall',
    created: '30/7/2022',
    category: 'Quote',
    content: "Don't look back. Look forward to your next objective",
    dates: [],
  },
];

@Injectable()
export class ArchiveService {
  static getAll() : Note[] {
    return notes;
  }
  static add(note: any) : Note[]{
    notes.push(note);
    return notes;
  }

  static remove(id: number) : Note {
    const note = notes.find((obj) => obj.id === id);
    notes = notes.filter((obj) => obj.id !== id);
    return note
  }
}
