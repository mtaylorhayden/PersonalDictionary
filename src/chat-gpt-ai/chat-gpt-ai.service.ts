import { Injectable } from '@nestjs/common';
import {
  Configuration,
  CreateCompletionRequest,
  CreateCompletionResponseChoicesInner,
  OpenAIApi,
} from 'openai';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

const DEFAULT_MODEL_ID = 'text-davinci-003';
const DEFAULT_TEMPERATURE = 1;

@Injectable()
export class ChatGptAiService {
  private readonly openAiApi: OpenAIApi;
  private selectedModelId: string | undefined;

  constructor() {
    const configuration = new Configuration({
      organization: process.env.ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openAiApi = new OpenAIApi(configuration);
  }

  setModelId(modelId: string) {
    this.selectedModelId = this.cleanModelId(modelId);
  }

  cleanModelId(modelId: string) {
    if (modelId.includes(':')) {
      return modelId.replace(':', '/');
    }
    return modelId;
  }

  cleanResponse(response: CreateCompletionResponseChoicesInner[]): string {
    console.log('cleanResponse ', response);
    if (response.length) {
      return response[0].text.split('"')[1];
    }
  }

  async listModels() {
    const models = await this.openAiApi.listModels();
    return models.data;
  }

  async getModelAnswer(input: GetAiModelAnswer) {
    try {
      const { question, temperature, modelId } = input;
      let model = DEFAULT_MODEL_ID;

      if (modelId) {
        model = modelId;
      } else if (this.selectedModelId) {
        model = this.selectedModelId;
      }

      const params: CreateCompletionRequest = {
        prompt: question,
        model: this.cleanModelId(model),
        temperature:
          temperature != undefined ? temperature : DEFAULT_TEMPERATURE,
        max_tokens: 2048,
      };

      const response = await this.openAiApi.createCompletion(params);

      const { data } = response;

      if (data.choices.length) {
        return data.choices;
      }

      return response.data;
    } catch (error) {}
  }
}
