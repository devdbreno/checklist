export class Todo {
  id: number

  title: string
  isDone: boolean

  timeToDisplay: string

  createdAt: string
  updatedAt: string
  deletedAt: string

  constructor(values: object = {}) {
    Object.assign(this, values)
  }
}

export class ReceivedTodo {
  status: number
  data: Todo
}

export class UpdatedTodo {
  fields: string
  value: boolean | string
}
