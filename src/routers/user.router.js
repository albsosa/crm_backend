'use strict'

import Router from 'express'
import { UserHandler } from '../modules/user/handlers/user.handler'
import auth from '../middleware/auth'

const router = new Router()

router.get('/', auth, UserHandler.getUsers)
router.post('/', auth, UserHandler.postUser)
router.post('/auth', UserHandler.authUser)

export { router }
