import { Module } from '@nestjs/common'

import { TodoModule } from './todo/todo.module'
import { AppGateway } from './app.gateway'

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [AppGateway]
})
export class AppModule {}
