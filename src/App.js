import './App.css';
import {useGlobalContext} from './contexts/globalContext'
import Loading from './components/Loading'
import Modal from './components/Modal'
import SetupForm from './components/SetupForm'

function App() {
  const {waiting, loading, questions, index, correct} = useGlobalContext()
  console.log("Waising is", waiting)
  console.log("Loading is", loading)

  if(waiting) {
    return <SetupForm/>
  }
  if(loading) {
    return <Loading/>
  }
  return (
    <div className="App">
      <p>quizz app</p>
    </div>
  )

}

export default App;
