export declare class CreateNoteDto {
    name: string;
    readonly category: 'Task' | 'Random Thought' | 'Idea' | 'Quote';
    readonly content: string;
}
