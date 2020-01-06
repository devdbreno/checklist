import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { TodoService } from './todo.service'
import { todoProviders } from './todo.providers'
import { TodoController } from './todo.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [TodoService, ...todoProviders]
})
export class TodoModule {}
