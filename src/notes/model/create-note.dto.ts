import { IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  question: string;

  @IsNotEmpty()
  shortAnswer: string;

  @IsNotEmpty()
  longAnswer: string;
}
