"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveService = void 0;
const common_1 = require("@nestjs/common");
let notes = [
    {
        id: 52348,
        name: 'George C. Marshall',
        created: '30/7/2022',
        category: 'Quote',
        content: "Don't look back. Look forward to your next objective",
        dates: [],
    },
];
let ArchiveService = class ArchiveService {
    static getAll() {
        return notes;
    }
    static add(note) {
        notes.push(note);
        return notes;
    }
    static remove(id) {
        const note = notes.find((obj) => obj.id === id);
        notes = notes.filter((obj) => obj.id !== id);
        return note;
    }
};
ArchiveService = __decorate([
    (0, common_1.Injectable)()
], ArchiveService);
exports.ArchiveService = ArchiveService;
//# sourceMappingURL=archive.service.js.map