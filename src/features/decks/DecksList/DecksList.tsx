import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'
import { useAppSelector, useAppDispatch } from '../../../app/store'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'
import { fetchDecksTC } from '../decks-thunks'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  useEffect(() => {
    dispatch(fetchDecksTC)
  }, [dispatch])

  const decksUI = decks.map((d) => {
    return <DeckItem key={d.id} deck={d} />
  })
  return <ul className={s.list}>{decksUI}</ul>
}
