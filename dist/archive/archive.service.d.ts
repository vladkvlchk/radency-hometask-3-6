import { Note } from 'src/helpers/types';
export declare class ArchiveService {
    static getAll(): Note[];
    static add(note: any): Note[];
    static remove(id: number): Note;
}
