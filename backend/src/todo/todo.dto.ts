export interface CreateTodoDto {
  readonly title: string
}

export interface UpdateTodoFieldDto {
  readonly fields: string[]
  readonly value: string | boolean
}
