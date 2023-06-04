import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './model/createNote.dto';
import { Notes } from './notes.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesRepository: Repository<Notes>,
  ) {}

  create(createNoteDto: CreateNoteDto): Promise<Notes> {
    const notes = new Notes();
    notes.question = createNoteDto.question;
    notes.shortAnswer = createNoteDto.shortAnswer;
    notes.longAnswer = createNoteDto.longAnswer;

    console.log('NOTES OBJECT ', notes);

    return this.notesRepository.save(createNoteDto);
  }
}
