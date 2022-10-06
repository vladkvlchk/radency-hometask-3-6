export declare class UpdateNoteDto {
    readonly name: string;
    readonly category: 'Task' | 'Random Thought' | 'Idea' | 'Quote';
    readonly content: string;
}
