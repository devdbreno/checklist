import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Todo extends Model<Todo> {
  @Column
  title: string

  @Column
  isDone: boolean

  @Column
  createdAt: Date

  @Column
  updatedAt: Date
}
