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
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNoteDto: CreateNoteDto) {
    return NotesService.create(createNoteDto);
  }

  @Get()
  getAll() {
    return NotesService.getAll();
  }

  @Get('/stats')
  getStats() {
    return NotesService.getStats();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return NotesService.getOne(+id);
  }

  @Patch(':id')
  update(@Body() updateNoteDto: UpdateNoteDto, @Param('id') id: string) {
    return NotesService.update(updateNoteDto, +id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return NotesService.delete(+id);
  }
}
