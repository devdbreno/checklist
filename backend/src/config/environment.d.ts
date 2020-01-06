import { Dialect } from 'sequelize/types'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_DIALECT: Dialect
      DATABASE_NAME: string
      DATABASE_USERNAME: string
      DATABASE_PASSWORD: string
      DATABASE_PORT: string

      PORT: string
    }
  }
}
