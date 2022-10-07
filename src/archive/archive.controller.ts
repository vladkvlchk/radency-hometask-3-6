import { Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { Note } from 'src/helpers/types';
import { NotesService } from 'src/notes/notes.service';
import { checkId } from 'src/notes/validations';
import { ArchiveService } from './archive.service';

@Controller('archive')
export class ArchiveController {
  @Get()
  getAll() : Note[] {
    return ArchiveService.getAll();
  }

  @Post(':id')
  toArchive(@Param('id') id: string) : Note[] {
    if(!checkId(+id)) throw new HttpException("Not founded", 404);
    ArchiveService.add(NotesService.getOne(+id));
    NotesService.delete(+id);
    return ArchiveService.getAll();
  }

  @Delete(':id')
  fromArchive(@Param('id') id: string) : Note[]{
    if(!checkId(+id)) throw new HttpException("Not founded", 404);
    NotesService.addFromArchive(ArchiveService.remove(+id));
    return ArchiveService.getAll();
  }
}
