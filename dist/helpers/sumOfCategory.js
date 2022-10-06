"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfCategory = void 0;
const archive_service_1 = require("../archive/archive.service");
const notes_service_1 = require("../notes/notes.service");
function sumOfCategory(category) {
    const items = notes_service_1.NotesService.getAll();
    const archive = archive_service_1.ArchiveService.getAll();
    const active = items.reduce((count, current) => {
        return current.category === category ? count + 1 : count;
    }, 0);
    const archived = archive.reduce((count, current) => {
        return current.category === category ? count + 1 : count;
    }, 0);
    return { category, active, archived };
}
exports.sumOfCategory = sumOfCategory;
//# sourceMappingURL=sumOfCategory.js.map