import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<ResponseType>('/v2/decks')
  },
  createDeck(name: string) {
    return instance.post<ItemType>('/v1/decks', { name })
  },
}

export type ResponseType = {
  items: ItemType[]
  pagination: PaginationType
}

export type AuthorType = {
  id: string
  name: string
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type ItemType = {
  isFavorite: true
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type PostResponseType = {
  id: string
  userId: string
  name: string
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: number
}
