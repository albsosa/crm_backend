import { RealStateQueries } from '../queries/realStateQueries'

export class RealStateService {
  static async getRealStates () {
    try {
      const result = await RealStateQueries.getRealStates()
      return result ?? null
    } catch (error) {
      console.log('Error from realStateService - getRealStates', error)
      return { error: true, message: 'Could not get realStates list', status: 500 }
    }
  }

  static async getRealState (id) {
    try {
      const result = await RealStateQueries.getRealState(id)
      return result[0] ?? null
    } catch (error) {
      console.log('Error from realStateService - getRealState', error)
      return { error: true, message: `Could not get realState for id: ${id}`, status: 500 }
    }
  }

  static async postRealState (payload) {
    try {
      const result = await RealStateQueries.postRealStates(payload)
      return result ?? null
    } catch (error) {
      console.log('Error from realStateService - postRealStates', error)
      return { error: true, message: 'Failed to create record in real estate', status: 500 }
    }
  }

  static async putRealState (id, payload) {
    try {
      const result = await RealStateQueries.putRealState(id, payload)
      return result ?? null
    } catch (error) {
      console.log('Error from realStateService - putRealState', error)
      return { error: true, message: `Could not updated realState for id: ${id}`, status: 500 }
    }
  }

  static async deleteRealState (id) {
    try {
      const result = await RealStateQueries.deleteRealState(id)
      return result ?? null
    } catch (error) {
      console.log('Error from realStateService - deleteRealState', error)
      return { error: true, message: `Could not deleted realState for id: ${id}`, status: 500 }
    }
  }
}
