import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  fetchAllTasks(): Promise<string> {
    return new Promise<string>((resolve) => {
      resolve('All Tasks');
    });
  }
}
