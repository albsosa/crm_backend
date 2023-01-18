'use strict'

import Router from 'express'
import { router as UserRouter } from './user.router.js'
import { router as RealStateRouter } from './real-state.router'
const router = new Router()

router.use('/user', UserRouter)
router.use('/real-state', RealStateRouter)

export default router
