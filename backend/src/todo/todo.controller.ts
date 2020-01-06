import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common'

import { CreateTodoDto, UpdateTodoFieldDto } from './todo.dto'
import { TodoService } from './todo.service'
import { Todo } from './todo.entity'

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto)
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll()
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() updatedTodoFieldDto: UpdateTodoFieldDto) {
    return await this.todoService.updateById(id, updatedTodoFieldDto)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    return await this.todoService.deleteById(id)
  }
}
