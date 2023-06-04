import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChatGptAiService } from './chat-gpt-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';
import { SetSelectedModel } from './model/set-selected-model';

@Controller('chat-gpt-ai')
export class ChatGptAiController {
  constructor(private readonly service: ChatGptAiService) {}

  @Post('/message')
  @UsePipes(ValidationPipe)
  getModelAnswer(@Body() data: GetAiModelAnswer) {
    return this.service.getModelAnswer(data);
  }

  @Get('/models')
  getListModels() {
    return this.service.listModels();
  }

  @Post('/model')
  @UsePipes(ValidationPipe)
  setModel(@Body() data: SetSelectedModel) {
    return this.service.setModelId(data.modelId);
  }
}
