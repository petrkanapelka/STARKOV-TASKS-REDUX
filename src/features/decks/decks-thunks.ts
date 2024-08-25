import { Dispatch } from 'redux'
import { decksApi } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'

export const fetchDecksTC = (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
  decksApi.createDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
