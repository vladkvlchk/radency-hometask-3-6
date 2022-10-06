import { Injectable } from '@nestjs/common';

let notes = [
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
  static getAll() {
    return notes;
  }
  static add(note: any) {
    notes.push(note);
    return notes;
  }

  static remove(id: number) {
    const note = notes.find((obj: any) => obj.id === id);
    notes = notes.filter((obj: any) => obj.id !== id);
    return note
  }
}
