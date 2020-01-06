require('dotenv/config')

module.exports = {
  dialect: process.env.DATABASE_DIALECT || 'mysql',
  database: process.env.DATABASE_NAME || 'checklistdb',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  port: parseInt(process.env.DATABASE_PORT) || 3306,
  define: {
    timestamps: true
  }
}
