"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveController = void 0;
const common_1 = require("@nestjs/common");
const notes_service_1 = require("../notes/notes.service");
const validations_1 = require("../notes/validations");
const archive_service_1 = require("./archive.service");
let ArchiveController = class ArchiveController {
    getAll() {
        return archive_service_1.ArchiveService.getAll();
    }
    toArchive(id) {
        if (!(0, validations_1.checkId)(+id))
            throw new common_1.HttpException("Not founded", 404);
        archive_service_1.ArchiveService.add(notes_service_1.NotesService.getOne(+id));
        notes_service_1.NotesService.delete(+id);
        return archive_service_1.ArchiveService.getAll();
    }
    fromArchive(id) {
        if (!(0, validations_1.checkId)(+id))
            throw new common_1.HttpException("Not founded", 404);
        notes_service_1.NotesService.addFromArchive(archive_service_1.ArchiveService.remove(+id));
        return archive_service_1.ArchiveService.getAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ArchiveController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ArchiveController.prototype, "toArchive", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ArchiveController.prototype, "fromArchive", null);
ArchiveController = __decorate([
    (0, common_1.Controller)('archive')
], ArchiveController);
exports.ArchiveController = ArchiveController;
//# sourceMappingURL=archive.controller.js.map