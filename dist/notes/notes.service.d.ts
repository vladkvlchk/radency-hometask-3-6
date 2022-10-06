import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesService {
    static getAll(): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    }[];
    static getOne(id: number): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    };
    static create(createNoteDto: CreateNoteDto): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    }[];
    static getStats(): any[];
    static update(updateNoteDto: UpdateNoteDto, id: number): false | {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    };
    static delete(id: number): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: string[];
    }[];
    static addFromArchive(note: any): void;
}
