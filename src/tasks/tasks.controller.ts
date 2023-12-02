import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Task } from './task.model';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async findAll(@Request() req): Promise<Task[]> {
    const userId = req.user.userId;
    return this.tasksService.findAll(userId);
  }

  @Post()
  async create(@Request() req, @Body() task: Task): Promise<Task> {
    const userId = req.user.userId;
    task.userId = userId;
    return this.tasksService.create(task);
  }
}
