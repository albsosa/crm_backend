'use strict'

import config from '../config'
import mysql from 'promise-mysql'

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  connectionLimit: config.mysql.connectionLimit
}

export default async () => {
  try {
    let pool
    let con
    if (pool) con = pool.getConnection()
    else {
      pool = await mysql.createPool(dbConfig)
      con = pool.getConnection()
    }
    return con
  } catch (ex) {
    console.log(ex)
    throw ex
  }
}
