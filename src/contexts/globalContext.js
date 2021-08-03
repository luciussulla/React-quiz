import React, { useContext } from 'react'
import {AppContext} from './context'

export const useGlobalContext = ()=> {
  // console.log("Global context returning")

  return useContext(AppContext)
}