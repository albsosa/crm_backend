'use strict'

import mysql from '../../../connections/mysql'

export class RealStateQueries {
  static async getRealStates () {
    const con = await mysql()
    const options = {
      query: `SELECT id, description, field, construction, address, contactPhone, contactMail, bathrooms, bedrooms, parkingLots
      FROM real_state_list WHERE deletedAt IS NULL`
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

  static async getRealState (id) {
    const con = await mysql()
    const options = {
      query: 'SELECT * FROM real_state_list WHERE id = ?',
      params: [id]
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

  static async postRealStates (payload) {
    const { description, field, construction, address, contactPhone, contactMail, bathrooms, bedrooms, parkingLots } = payload
    const con = await mysql()
    const options = {
      query: `INSERT INTO real_state_list
      (description, field, construction, address, contactPhone, contactMail, bathrooms, bedrooms, parkingLots)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      params: [description, field, construction, address, contactPhone, contactMail, bathrooms, bedrooms, parkingLots]
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

  static async putRealState (id, payload) {
    const { description, field, construction, address, contactPhone, contactMail, bathrooms, bedrooms, parkingLots } = payload
    const con = await mysql()
    const options = {
      query: `UPDATE real_state_list
      SET description=?, field=?, construction=?, address=?, contactPhone=?, contactMail=?, bathrooms=?, bedrooms=?, parkingLots=?
      WHERE id=?`,
      params: [description, field, construction, address, contactPhone, contactMail, bathrooms, bedrooms, parkingLots, id]
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

  static async deleteRealState (id) {
    const con = await mysql()
    const options = {
      query: 'UPDATE real_state_list SET deletedAt=CURRENT_TIMESTAMP WHERE id=?',
      params: [id]
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
