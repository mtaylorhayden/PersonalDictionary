import { Module } from '@nestjs/common';
import { ChatGptAiModule } from './chat-gpt-ai/chat-gpt-ai.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { Notes } from './notes/notes.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ChatGptAiModule,
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.LOCAL_DATABASE_PASSWORD,
      database: 'test_db',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Notes],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
