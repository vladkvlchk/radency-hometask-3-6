import { IsString, MaxLength } from "class-validator"

export class CreateNoteDto {
    @IsString()
    @MaxLength(30, {
        message: 'Title is too long'
    })
    name: string

    @IsString()
    readonly category: 'Task' | 'Random Thought' | 'Idea' | 'Quote'

    @IsString()
    @MaxLength(400, {
        message: 'Content is too long'
    })
    readonly content: string
}