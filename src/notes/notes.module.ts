import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './notes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notes])],
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}
