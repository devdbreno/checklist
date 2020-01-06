import { Inject, Injectable, HttpStatus } from '@nestjs/common'

import { Todo } from './todo.entity'
import { CreateTodoDto, UpdateTodoFieldDto } from './todo.dto'

@Injectable()
export class TodoService {
  constructor(@Inject('TODO_REPOSITORY') private readonly todoRepository: typeof Todo) {}

  async create(createTodoDto: CreateTodoDto): Promise<object> {
    let todo = new Todo()

    todo.title = createTodoDto.title
    todo.isDone = false

    todo = await todo.save()

    return { status: HttpStatus.CREATED, data: todo }
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.findAll<Todo>({ order: [['createdAt', 'DESC']] })
  }

  async findById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findByPk<Todo>(id)

    if (!todo) {
      return null
    }

    return todo
  }

  async updateById(id: number, updateTodoFieldDto: UpdateTodoFieldDto): Promise<Todo | object> {
    const todo = await this.findById(id)

    if (!todo) {
      return { message: 'ToDo not found!', status: HttpStatus.NOT_FOUND }
    }

    const { fields, value } = updateTodoFieldDto

    await todo.update({ [fields[0]]: value }, { fields })

    return { data: todo, status: HttpStatus.OK }
  }

  async deleteById(id: number): Promise<object | object> {
    const todo = await this.findById(id)

    if (!todo) {
      return { message: 'ToDo not found!', status: HttpStatus.NOT_FOUND }
    }

    await todo.destroy()

    return { data: todo, status: HttpStatus.ACCEPTED }
  }
}
