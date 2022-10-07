import { Note, StatsItem } from "src/helpers/types";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
export declare class NotesController {
    create(createNoteDto: CreateNoteDto): Note;
    getAll(): Note[];
    getStats(): StatsItem[];
    getOne(id: string): Note;
    update(updateNoteDto: UpdateNoteDto, id: string): Note | Boolean;
    delete(id: string): Note[];
}
