import { Dispatch } from 'redux'
import { decksApi } from './decks-api'
import { setDecksAC } from './decks-reducer'

export const fetchDecksTC = (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}
