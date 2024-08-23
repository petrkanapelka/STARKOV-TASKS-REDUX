import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksApi } from '../decks-api'

export const DecksList = () => {
  useEffect(() => {
    decksApi.getDecks()
      .then(res => {
        console.log("🚀 ~ useEffect ~ res ➔", res);
      })
      .catch((error)=>{
        console.error(error);
      })
  })
  return <ul className={s.list}></ul>
}
