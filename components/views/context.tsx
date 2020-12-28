/* eslint-disable camelcase */
import { createContext, FC, useContext, useEffect, useMemo, useReducer } from 'react'

export interface BreedModel {
  alt_names: string
  description: string
  id: string
  image: { url: string }
  name: string
  temperament: string
  origin: string
  life_span: string
  adaptability: number
  affection_level: number
  child_friendly: number
  grooming: number
  intelligence: number
  health_issues: number
  social_needs: number
  stranger_friendly: number
}

export interface Breed {
  breeds: BreedModel[]
  url: string
}

export interface Breeds {
  breeds: BreedModel[] | []
  fourBreeds: BreedModel[] | []
  breed: Breed | any
}

const initialState: Breeds = {
  breeds: [],
  fourBreeds: [],
  breed: [],
}

type Action = { type: 'GET_BREEDS'; payload: BreedModel[] }

const viewReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return { ...state, breeds: [...action.payload] }

    default:
      throw new Error()
  }
}

const persistedState: string | null = 'breeds'

const init = () => {
  let preloadedState
  try {
    preloadedState = JSON.parse(window.localStorage.getItem(persistedState) || '')
  } catch (e) {
    // ignore
  }
  return preloadedState || initialState
}

const ViewsContext = createContext<Breeds | any>(initialState)

const ViewsProvider: FC = (props) => {
  const [state, dispatch] = useReducer(viewReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('breeds', JSON.stringify(state))
  }, [state])

  const getBreeds = (breeds: BreedModel[]) => dispatch({ type: 'GET_BREEDS', payload: breeds })

  const value = useMemo(() => ({ ...state, getBreeds }), [state])

  return <ViewsContext.Provider value={value} {...props} />
}

export const useViewsContext = () => {
  const context = useContext(ViewsContext)

  if (context === undefined) {
    throw new Error('useViewsContext must be used within a ViewsProvider')
  }

  return context
}

export const ManagedViewsContext: FC = ({ children }) => <ViewsProvider>{children}</ViewsProvider>
