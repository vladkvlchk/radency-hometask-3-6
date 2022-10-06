export class CreateNoteDto {
    readonly name: string
    readonly category: 'Task' | 'Random Thought' | 'Idea' | 'Quote'
    readonly content: string
}