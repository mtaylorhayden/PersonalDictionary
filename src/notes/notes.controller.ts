import { Body, Controller, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './model/createNote.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly service: NotesService) {}

  @Post('/note')
  createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.service.create(createNoteDto);
  }
}
