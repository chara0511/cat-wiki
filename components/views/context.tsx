import { createContext, FC, useContext, useMemo, useReducer } from 'react'

export interface BreedModel {
  // eslint-disable-next-line camelcase
  alt_names: string
  description: string
  id: string
  image: { url: string }
  name: string
}

export interface Breeds {
  breeds: BreedModel[] | []
  fourBreeds: BreedModel[] | []
}

const initialState: Breeds = {
  breeds: [],
  fourBreeds: [],
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

const ViewsContext = createContext<Breeds | any>(initialState)

const ViewsProvider: FC = (props) => {
  const [state, dispatch] = useReducer(viewReducer, initialState)

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
