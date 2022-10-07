"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const sumOfCategory_1 = require("../helpers/sumOfCategory");
let notes = [
    {
        id: 1,
        name: "Shopping list",
        created: "20/7/2021",
        category: "Task",
        content: "Tomatoes, bread",
        dates: [],
    },
    {
        id: 2,
        name: "The Theory of Evolution",
        created: "27/7/2021",
        category: "Random Thought",
        content: "The Theory of Evolution is one of the best-substantiated theories in the history of science",
        dates: [],
    },
    {
        id: 3,
        name: "New Feature",
        created: "5/4/2021",
        category: "Idea",
        content: "Implement new features on POS terminals",
        dates: [],
    },
    {
        id: 4,
        name: "William Gaddis",
        created: "7/4/2021",
        category: "Quote",
        content: "Power doesn't come to those who were born strongest, or fastest, or smartest. No. It comes to those who will do anything to achieve it",
        dates: [],
    },
    {
        id: 5,
        name: "Books",
        created: "15/4/2021",
        category: "Task",
        content: "The Lean Startup",
        dates: [],
    },
    {
        id: 6,
        name: "Dentist",
        created: "3/5/2021",
        category: "Task",
        content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 7/8/2022",
        dates: ["3/5/2021", "7/8/2022"],
    },
    {
        id: 7,
        name: "Motivation",
        created: "31/5/2022",
        category: "Quote",
        content: "The World belongs to those who show up",
        dates: [],
    },
];
let NotesService = class NotesService {
    static getAll() {
        return notes;
    }
    static getOne(id) {
        return notes.find((obj) => obj.id === id);
    }
    static create(createNoteDto) {
        const date = new Date();
        const created = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const dates = [];
        for (let i = 0; i < createNoteDto.content.length; i++) {
            const match = createNoteDto.content
                .slice(i)
                .match(/([0-3]?[0-9][/.][0-3]?[0-9][/.][1-9][0-9][0-9][0-9])/);
            if (match) {
                dates.push(match[0]);
                i += match.index + 7;
            }
            else {
                break;
            }
        }
        const id = Math.floor(Math.random() * 100000);
        notes.push(Object.assign(Object.assign({ id: id }, createNoteDto), { created: created, dates: [] }));
        return notes.find((obj) => obj.id === id);
    }
    static getStats() {
        let stats = [];
        stats.push((0, sumOfCategory_1.sumOfCategory)("Task"));
        stats.push((0, sumOfCategory_1.sumOfCategory)("Random Thought"));
        stats.push((0, sumOfCategory_1.sumOfCategory)("Idea"));
        stats.push((0, sumOfCategory_1.sumOfCategory)("Quote"));
        stats = stats.filter((obj) => obj.active || obj.archived);
        return stats;
    }
    static update(updateNoteDto, id) {
        const note = {
            id: id,
            name: updateNoteDto.name,
            created: "",
            category: updateNoteDto.category,
            content: updateNoteDto.content,
            dates: [],
        };
        for (let i = 0; i < note.content.length; i++) {
            const match = note.content
                .slice(i)
                .match(/([0-3]?[0-9][/.][0-3]?[0-9][/.][1-9][0-9][0-9][0-9])/);
            if (match) {
                note.dates.push(match[0]);
                i += (match.index || 1) + 7;
            }
            else {
                break;
            }
        }
        const oldNote = notes.find((obj) => obj.id === note.id);
        if (!oldNote)
            return false;
        notes = notes.filter((obj) => obj.id !== oldNote.id);
        notes.push({
            id: oldNote.id,
            name: note.name,
            created: oldNote.created,
            category: note.category,
            content: note.content,
            dates: note.dates,
        });
        return notes.find((obj) => obj.id === oldNote.id);
    }
    static delete(id) {
        return (notes = notes.filter((obj) => obj.id !== id));
    }
    static addFromArchive(note) {
        notes.push(note);
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)()
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map