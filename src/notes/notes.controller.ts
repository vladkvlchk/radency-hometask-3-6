import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { Note, StatsItem } from "src/helpers/types";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { NotesService } from "./notes.service";
import { checkId, validationCreate } from "./validations";

@Controller("notes")
export class NotesController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNoteDto: CreateNoteDto): Note {
    if(!validationCreate(createNoteDto)) throw new HttpException("Invalid note", 400);
    return NotesService.create(createNoteDto);
  }

  @Get()
  getAll(): Note[] {
    return NotesService.getAll();
  }

  @Get("/stats")
  getStats(): StatsItem[] {
    return NotesService.getStats();
  }

  @Get(":id")
  getOne(@Param("id") id: string): Note {
    if(!checkId(+id)) throw new HttpException("Not founded", 404);
    return NotesService.getOne(+id);
  }

  @Patch(":id")
  update(
    @Body() updateNoteDto: UpdateNoteDto,
    @Param("id") id: string
  ): Note | Boolean {
    if(!validationCreate(updateNoteDto)) throw new HttpException("Invalid note", 400);
    if(!checkId(+id)) throw new HttpException("Not founded", 404);
    return NotesService.update(updateNoteDto, +id);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Note[] {
    if(!checkId(+id)) throw new HttpException("Not founded", 404);
    return NotesService.delete(+id);
  }
}
