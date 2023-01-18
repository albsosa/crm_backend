'use strict'

import { isNil } from 'lodash'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserService } from '../services/user.service'

export class UserHandler {
  static async getUsers (request, response) {
    try {
      const result = await UserService.getUsers()
      return response.status(200).json(result)
    } catch (error) {
      console.log('Error from userHandler - getUsers', error)
      const message = 'Could not get user list'
      return response.status(500).json(message)
    }
  }

  static async postUser (request, response) {
    const payload = request.body
    if (isNil(payload.userName) || isNil(payload.password)) return response.status(400).json({ message: 'Bad request, missing description' })
    try {
      payload.password = await bcrypt.hash(payload.password, 12)
      const result = await UserService.postUser(payload)
      return response.status(201).json({ id: result.insertId, userName: payload.userName })
    } catch (error) {
      console.log('Error from UserHandler - postUser', error)
      const message = 'Failed to create record in users'
      return response.status(500).json(message)
    }
  }

  static async authUser (request, response) {
    const { userName, password } = request.body
    if (isNil(userName) || isNil(password)) return response.status(400).json({ message: 'Bad request' })
    const user = await UserService.getUserbyUserName(userName)
    if (!user) return response.status(401).json('This user does not exist')
    if (!bcrypt.compareSync(password, user.password)) return response.status(401).json('Wrong password')
    const token = jwt.sign({
      userName: user.userName,
      id: user.id
    },
    'LLAVESECRETA',
    {
      expiresIn: '4h'
    })
    // retornar el TOKEN
    response.json({ token })
  }
}
