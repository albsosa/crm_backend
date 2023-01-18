import { UserQueries } from '../queries/userQueries'

export class UserService {
  static async getUsers () {
    try {
      const getList = await UserQueries.getUsers()
      return getList ?? null
    } catch (error) {
      console.log('Error from userService - getUsers', error)
      return { error: true, message: 'Could not get user list', status: 500 }
    }
  }

  static async postUser (payload) {
    try {
      const result = await UserQueries.postUser(payload)
      return result ?? null
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getUserbyUserName (userName) {
    try {
      const result = await UserQueries.getUserbyUserName(userName)
      return result[0] ?? null
    } catch (error) {
      throw new Error(error)
    }
  }
}
