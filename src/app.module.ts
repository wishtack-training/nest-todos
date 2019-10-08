import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TokensController } from './token.controller';

@Module({
  controllers: [TodosController, TokensController],
})
export class AppModule {}
