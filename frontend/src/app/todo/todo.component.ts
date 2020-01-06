import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Socket } from 'ngx-socket-io'
import FuzzySearch from 'fuzzy-search'

import { TodoService } from './todo.service'
import { Todo, UpdatedTodo } from './todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[]
  newTodo: string
  path: string

  constructor(private todoService: TodoService, private socket: Socket, private route: ActivatedRoute) {}

  findAllTodos(path: string = 'todas', value: string = '') {
    return this.todoService.findAllTodos().subscribe(data => {
      const searcher = new FuzzySearch(data, ['title'])
      const result = searcher.search(value)

      this.todos = result.filter(todo => {
        todo.timeToDisplay = this.todoService.timeToDisplay(todo.createdAt)
        return this.todoService.filterPath(path, todo)
      })
    })
  }

  createTodo() {
    const todo = new Todo()

    if (!this.newTodo) {
      return
    }

    todo.title = this.newTodo

    this.todoService.createTodo(todo).subscribe(toDo => {
      const { data: newTodo } = toDo

      newTodo.timeToDisplay = this.todoService.timeToDisplay(newTodo.createdAt)

      if (this.path !== 'completas') {
        this.todos.unshift(newTodo)
      }
      this.newTodo = ''

      this.socket.emit('onCreateTodo', newTodo)
    })
  }

  deleteTodo(id: number, index: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos.splice(index, 1)

      this.socket.emit('onDeleteTodo', index)
    })
  }

  updateTodo(todo: Todo, updatedTodo: UpdatedTodo, index: number) {
    return this.todoService.updateTodo(todo.id, updatedTodo).subscribe(() => {
      todo[updatedTodo.fields[0]] = updatedTodo.value

      setTimeout(() => {
        if (this.path !== 'todas' && updatedTodo.fields[0] !== 'title') {
          this.todos.splice(index, 1)
        }
      }, 200)

      this.socket.emit('onUpdateTodo', { todo, fields: updatedTodo.fields[0], index })
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params.stts
      this.findAllTodos(this.path)
    })

    this.todoService.onCreateTodo().subscribe(toDo => {
      if (this.path !== 'completas') {
        this.todos.unshift(toDo)
      }
    })

    this.todoService.onDeleteTodo().subscribe(index => {
      this.todos.splice(index, 1)
    })

    this.todoService.onUpdateTodo().subscribe(data => {
      const { todo, index, fields } = data

      this.todos[index] = todo

      setTimeout(() => {
        if (this.path !== 'todas' && fields !== 'title') {
          this.todos.splice(index, 1)
        }
      }, 200)
    })
  }
}
