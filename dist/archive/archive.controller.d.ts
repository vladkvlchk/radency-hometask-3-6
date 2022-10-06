export declare class ArchiveController {
    getAll(): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: any[];
    }[];
    toArchive(id: string): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: any[];
    }[];
    fromArchive(id: string): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: any[];
    }[];
}
