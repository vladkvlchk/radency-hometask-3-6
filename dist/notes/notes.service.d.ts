import { Note, StatsItem } from "src/helpers/types";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
export declare class NotesService {
    static getAll(): Note[];
    static getOne(id: number): Note | undefined;
    static create(createNoteDto: CreateNoteDto): Note;
    static getStats(): StatsItem[];
    static update(updateNoteDto: UpdateNoteDto, id: number): Note | Boolean;
    static delete(id: number): Note[];
    static addFromArchive(note: Note): void;
}
