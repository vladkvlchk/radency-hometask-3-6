import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotesService } from 'src/notes/notes.service';
import { ArchiveService } from './archive.service';

@Controller('archive')
export class ArchiveController {
  @Get()
  getAll() {
    return ArchiveService.getAll();
  }

  @Post(':id')
  toArchive(@Param('id') id: string) {
    ArchiveService.add(NotesService.getOne(+id));
    NotesService.delete(+id);
    return ArchiveService.getAll();
  }

  @Delete(':id')
  fromArchive(@Param('id') id: string) {
    NotesService.addFromArchive(ArchiveService.remove(+id));
    return ArchiveService.getAll();
  }
}
