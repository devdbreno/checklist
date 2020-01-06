import { config } from 'dotenv'

config()

import { Options } from 'sequelize'

const database: Options = {
  dialect: process.env.DATABASE_DIALECT || 'mysql',
  database: process.env.DATABASE_NAME || 'checklistdb',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || 'root',
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  define: {
    timestamps: true
  }
}

const app = {
  port: parseInt(process.env.PORT, 10) || 3333
}

export default {
  database,
  app
}
