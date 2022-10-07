"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkId = exports.validationCreate = void 0;
const notes_service_1 = require("./notes.service");
const validationCreate = (note) => {
    if (note.name &&
        note.name.length > 0 &&
        note.name.length < 30 &&
        note.category &&
        (note.category === "Task" ||
            note.category === "Random Thought" ||
            note.category === "Idea" ||
            note.category === "Quote") &&
        note.content &&
        note.content.length > 0)
        return true;
    return false;
};
exports.validationCreate = validationCreate;
const checkId = (id) => {
    if (notes_service_1.NotesService.getOne(id))
        return true;
    return false;
};
exports.checkId = checkId;
//# sourceMappingURL=validations.js.map