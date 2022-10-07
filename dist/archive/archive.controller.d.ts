import { Note } from 'src/helpers/types';
export declare class ArchiveController {
    getAll(): Note[];
    toArchive(id: string): Note[];
    fromArchive(id: string): Note[];
}
