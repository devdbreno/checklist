import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets'
import { Logger } from '@nestjs/common'
import { Server, Socket } from 'socket.io'

import { Todo } from './todo/todo.entity'

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server
  private logger: Logger = new Logger('AppGateway')

  async handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`)
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`)
  }

  @SubscribeMessage('onUpdateTodo')
  async onUpdateTodo(client: Socket, updatedTodo) {
    client.broadcast.emit('onUpdateTodo', updatedTodo)
  }

  @SubscribeMessage('onDeleteTodo')
  async onDeleteTodo(client: Socket, index: number) {
    client.broadcast.emit('onDeleteTodo', index)
  }

  @SubscribeMessage('onCreateTodo')
  async onCreateTodo(client: Socket, todo: Todo) {
    client.broadcast.emit('onCreateTodo', todo)
  }
}
