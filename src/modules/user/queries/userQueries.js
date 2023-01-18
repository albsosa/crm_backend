'use strict'

import mysql from '../../../connections/mysql'

export class UserQueries {
  static async getUsers () {
    const con = await mysql()

    const options = {
      query: `SELECT id, password, userName
      FROM users WHERE deletedAt IS NULL`
    }

    try {
      const result = await con.query(options.query, options.params)
      return result ?? null
    } catch (error) {
      throw new Error(error)
    }
  }

  static async postUser (payload) {
    const { password, userName } = payload
    console.log(payload, 'payload')
    const con = await mysql()
    const options = {
      query: `INSERT INTO users (password, userName)
      VALUES(?, ?);
      `,
      params: [password, userName]
    }
    try {
      const result = await con.query(options.query, options.params)
      return result ?? null
    } catch (error) {
      throw new Error(error)
    } finally {
      con.release()
      con.destroy()
    }
  }

  static async getUserbyUserName (userName) {
    const con = await mysql()
    const options = {
      query: `SELECT id, password, userName
      FROM users WHERE userName = ?`,
      params: [userName]
    }
    try {
      const result = await con.query(options.query, options.params)
      return result ?? null
    } catch (error) {
      throw new Error(error)
    } finally {
      con.release()
      con.destroy()
    }
  }
}
