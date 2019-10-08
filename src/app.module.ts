import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TokensController } from './tokens.controller';

@Module({
  controllers: [TodosController, TokensController],
})
export class AppModule {}
