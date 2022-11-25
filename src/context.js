import React, {  useContext, useReducer,  } from 'react'
import {data} from './database'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
icons: data
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
 

  return (
    <AppContext.Provider
      value={{ 
        ...state,
        remove,       
      }}
      >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
