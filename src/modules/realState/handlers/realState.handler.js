'use strict'

import { isNil } from 'lodash'
import { RealStateService } from '../services/realState.service'

export class RealStateHandler {
  static async getRealStates (request, response) {
    try {
      const result = await RealStateService.getRealStates()
      return response.status(200).json(result)
    } catch (error) {
      console.log('Error from realStateHandler - getRealStates', error)
      const message = 'Could not get realState list'
      return response.status(500).json(message)
    }
  }

  static async getRealState (request, response) {
    const { id } = request.params
    if (isNil(id)) return response.status(400).json({ message: 'Bad request, missing id' })
    try {
      const result = await RealStateService.getRealState(id)
      return response.status(200).json(result)
    } catch (error) {
      console.log('Error from realStateHandler - getRealState', error)
      const message = `Could not get realState for id: ${id}`
      return response.status(500).json(message)
    }
  }

  static async postRealState (request, response) {
    const payload = request.body
    console.log(request.body, 'payload')
    if (isNil(payload.description)) return response.status(400).json({ message: 'Bad request, missing description' })
    try {
      await RealStateService.postRealState(payload)
      return response.json({ status: 201, message: 'The real estate record was created successfully' })
    } catch (error) {
      console.log('Error from realStateHandler - postRealStates', error)
      const message = 'Failed to create record in real estate'
      return response.status(500).json(message)
    }
  }

  static async putRealState (request, response) {
    const { params: { id }, body: payload } = request
    if (isNil(id)) return response.status(400).json({ message: 'Bad request, missing id' })
    try {
      await RealStateService.putRealState(id, payload)
      return response.status(200).json({ message: 'The real estate record was updated successfully' })
    } catch (error) {
      console.log('Error from realStateHandler - putRealState', error)
      const message = 'Failed to update record in real estate'
      return response.status(500).json(message)
    }
  }

  static async deleteRealState (request, response) {
    const { id } = request.params
    if (isNil(id)) return response.status(400).json({ message: 'Bad request, missing id' })
    try {
      await RealStateService.deleteRealState(id)
      return response.status(200).json({ message: 'The real estate record was deleted successfully' })
    } catch (error) {
      console.log('Error from realStateHandler - deleteRealState', error)
      const message = 'Failed to delete record in real estate'
      return response.status(500).json(message)
    }
  }
}
