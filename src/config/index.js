'use strict'

require('dotenv').config()

const config = {
  environment: process.env.ENVIRONMENT,
  mysql: {
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT || 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    gamificationDatabase: process.env.MYSQL_GAMIFICATION_DB || '',
    port: process.env.MYSQL_PORT
  }
}

export default config
