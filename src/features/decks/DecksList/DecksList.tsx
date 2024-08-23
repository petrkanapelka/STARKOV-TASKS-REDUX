import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'
import { useAppSelector, useAppDispatch } from '../../../app/store'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const decks = useAppSelector(state => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    decksApi.getDecks()
      .then(res => {
        dispatch(setDecksAC(res.data.items))
      })
      .catch((error) => {
        console.error(error);
      })
  })

  const decksUI = decks.map((d) => {
    return <DeckItem key={d.id} deck={d} />
  })
  return <ul className={s.list}>{decksUI}</ul>
}
