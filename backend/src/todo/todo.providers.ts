import { Todo } from './todo.entity'

export const todoProviders = [{ provide: 'TODO_REPOSITORY', useValue: Todo }]
