import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    create(createNoteDto: CreateNoteDto): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    }[];
    getAll(): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    }[];
    getStats(): any[];
    getOne(id: string): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    };
    update(updateNoteDto: UpdateNoteDto, id: string): false | {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    };
    delete(id: string): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    }[];
}
