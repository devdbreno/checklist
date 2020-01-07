require('dotenv/config')

module.exports = {
  dialect: process.env.DATABASE_DIALECT || 'mysql',

  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'checklistdb',

  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  define: {
    timestamps: true
  }
}
