import { ArchiveService } from "src/archive/archive.service";
import { NotesService } from "src/notes/notes.service";


export function sumOfCategory(category : "Task" | "Random Thought" | "Idea" | "Quote"){
    const items = NotesService.getAll();
    const archive = ArchiveService.getAll();

    const active = items.reduce((count : number, current : any) => {
        return current.category === category ? count + 1 : count
    }, 0);
    const archived = archive.reduce((count : number, current : any) => {
        return current.category === category ? count + 1 : count
    }, 0);
            
    return {category, active, archived}
}