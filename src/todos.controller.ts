import { Controller, Get, UseGuards } from '@nestjs/common';
import { of } from 'rxjs';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

@Controller('todos')
@UseGuards(new IsAuthenticatedGuard())
export class TodosController {
  @Get()
  getTodos() {
    return of([
      {
        id: 'TODO_0',
        title: 'Learn TypeScript',
      },
      {
        id: 'TODO_1',
        title: 'Learn Angular',
      },
    ]);
  }
}
