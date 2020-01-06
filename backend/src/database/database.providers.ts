import { Sequelize } from 'sequelize-typescript'

import config from '../config/config'

import { Todo } from '../todo/todo.entity'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(config.database)

      sequelize.addModels([Todo])

      return sequelize
    }
  }
]
