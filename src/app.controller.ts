import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controllers are responsible for handling incoming requests and returning responses to the client.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
