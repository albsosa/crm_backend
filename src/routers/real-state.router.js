'use strict'

import Router from 'express'
import { RealStateHandler } from '../modules/realState/handlers/realState.handler'
import auth from '../middleware/auth'
const router = Router()

router.get('/', auth, RealStateHandler.getRealStates)
router.get('/:id', auth, RealStateHandler.getRealState)
router.post('/', auth, RealStateHandler.postRealState)
router.put('/:id', auth, RealStateHandler.putRealState)
router.delete('/:id', auth, RealStateHandler.deleteRealState)

export { router }
