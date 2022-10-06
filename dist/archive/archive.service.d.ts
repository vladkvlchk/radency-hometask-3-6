export declare class ArchiveService {
    static getAll(): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: any[];
    }[];
    static add(note: any): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: any[];
    }[];
    static remove(id: number): {
        id: number;
        name: string;
        created: string;
        category: string;
        content: string;
        dates: any[];
    };
}
