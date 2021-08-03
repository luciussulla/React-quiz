import React, {useState, useContext, useEffect, createContext} from 'react'
import axios from 'axios'

const table = {
  sports: 21, 
  history: 23, 
  politics: 24, 
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'
const url =''
const tempUrl = `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`

const AppContext = createContext()

export default function AppProvider({children}) {
  console.log("App provider called")
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions,setQuestions] = useState([{"How many qubas":1}])
  const [correct, setCorrect] = useState(0)
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchQuestions = async (newUrl)=> {
    console.log("Fetch questions run")
    setWaiting(false)
    setLoading(true)
    const response = await axios(newUrl).catch(error => console.log(error))
    console.log("Resposne is: ",response)
    if(response) {
      const data = response.data.results
      console.log("Data fetched is: ", data)
      if(data.length) {
        setQuestions(data)
        setLoading(false)
        setWaiting(false)
        setError(false)
      } else {
        console.log("fetched data array length is", response.data.length)
        setWaiting(true)
        setError(true)
      }
    } else {
      setWaiting(true)
      console.log("Response returned as", response)
    }
  }

  useEffect(()=> {
    console.log("fetch questions run")
    fetchQuestions(tempUrl)
  }, [])

  return (
    <AppContext.Provider value={{
      waiting, 
      loading, 
      questions, 
      correct, 
      index, 
      error, 
      isModalOpen,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider} 
