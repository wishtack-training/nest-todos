import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { of } from 'rxjs';

@Controller('todos')
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
