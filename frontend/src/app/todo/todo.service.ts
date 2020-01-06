import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { SocketIoConfig, Socket } from 'ngx-socket-io'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { ReceivedTodo, Todo, UpdatedTodo } from './todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = 'http://localhost:3000/todo'

  constructor(private http: HttpClient, private socket: Socket) {}

  findAllTodos() {
    return this.http.get<Todo[]>(this.baseUrl)
  }

  createTodo(todo: Todo) {
    return this.http.post<ReceivedTodo>(this.baseUrl, todo)
  }

  onCreateTodo() {
    return this.socket.fromEvent<Todo>('onCreateTodo')
  }

  onDeleteTodo() {
    return this.socket.fromEvent<number>('onDeleteTodo')
  }

  onUpdateTodo() {
    return this.socket.fromEvent<{ todo: Todo; index: number; fields: string }>('onUpdateTodo')
  }

  deleteTodo(id: number) {
    return this.http.delete<ReceivedTodo>(`${this.baseUrl}/${id}`)
  }

  updateTodo(id: number, updatedTodo: UpdatedTodo) {
    return this.http.patch<ReceivedTodo>(`${this.baseUrl}/${id}`, updatedTodo)
  }

  filterPath(path: string, todo: Todo): boolean {
    if (path === 'completas' || path === 'ativas') {
      const isCompleted = path === 'completas'
      return todo.isDone === isCompleted
    } else {
      return true
    }
  }

  timeToDisplay(date: string): string {
    const formatedTime = formatDistance(new Date(date), new Date(), {
      locale: ptBR,
      addSuffix: true
    })
    return `Criada ${formatedTime}`
  }
}
