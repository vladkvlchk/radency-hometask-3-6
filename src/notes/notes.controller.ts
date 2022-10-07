import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Note, StatsItem } from 'src/helpers/types';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNoteDto: CreateNoteDto) : Note[]{
    return NotesService.create(createNoteDto);
  }

  @Get()
  getAll() : Note[] {
    return NotesService.getAll();
  }

  @Get('/stats')
  getStats() : StatsItem[] {
    return NotesService.getStats();
  }

  @Get(':id')
  getOne(@Param('id') id: string) : Note {
    return NotesService.getOne(+id);
  }

  @Patch(':id')
  update(@Body() updateNoteDto: UpdateNoteDto, @Param('id') id: string) : Note | Boolean{
    return NotesService.update(updateNoteDto, +id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) : Note[] {
    return NotesService.delete(+id);
  }
}
