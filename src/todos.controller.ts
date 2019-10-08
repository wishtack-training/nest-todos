import { Controller, Get, UseGuards } from '@nestjs/common';
import { of } from 'rxjs';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { Todo } from './todo';

@Controller('todos')
@UseGuards(new IsAuthenticatedGuard())
export class TodosController {
  @Get()
  @ApiOkResponse({type: Todo, isArray: true})
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
