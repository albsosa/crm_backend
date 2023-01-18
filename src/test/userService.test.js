'use strict'

import { UserService } from '../modules/user/services/user.service'
// jest.mock('request')

describe('Endpoints', () => {
  describe('Users', () => {
    it('should create', async () => {
      const fakeUser = {
        id: 13,
        userName: 'genesis21'
      }
      const obj = {
        userName: 'genesis21',
        password: '123456'
      }
      const user = await UserService.postUser(obj)
      expect(user).toEqual(fakeUser)
    })
  })
})
