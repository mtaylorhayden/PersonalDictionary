import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class GetAiModelAnswer {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsOptional()
  modelId: string;

  @IsNumber()
  @IsOptional()
  temperature: number;
}
