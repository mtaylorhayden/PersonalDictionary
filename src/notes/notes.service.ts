import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './model/create-note.dto';
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

  getAll(): Promise<Notes[]> {
    return this.notesRepository.find({ where: { isDeleted: false } });
  }

  async deleteNote(id: number): Promise<void> {
    let note = await this.notesRepository.findOne({ where: { id } });
    note.isDeleted = true;
    this.notesRepository.save(note);
    console.log('deleteNote ', note);
  }
}
