import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './model/create-note.dto';
import { Notes } from './notes.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly service: NotesService) {}

  @Post('/note')
  createNote(@Body() createNoteDto: CreateNoteDto): Promise<Notes> {
    return this.service.create(createNoteDto);
  }

  @Get('/notes')
  getNotes(): Promise<Notes[]> {
    return this.service.getAll();
  }
}
