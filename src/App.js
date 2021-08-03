import './App.css';
import {useGlobalContext} from './contexts/globalContext'
import Loading from './components/Loading'
import Modal from './components/Modal'
import SetupForm from './components/SetupForm'

function App() {
  const {waiting, loading, questions, index, correct} = useGlobalContext()
  // console.log("Waising is", waiting)
  // console.log("Loading is", loading)
  console.log("Questions provided to APP are", questions)
  console.log("Question is:", questions[0])

  if(waiting) {
    return <SetupForm/>
  }

  if(loading) {
    return <Loading/>
  }


  const {question, incorrect_answers, correct_answer} = questions[index]
  const answers = [...incorrect_answers, correct_answer]

  return (
    <main className="wrapper">
      <Modal/>
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}}/>

          { answers.map((answer, index) => {
            return <button 
              key={index} 
              className="answer-btn"
              dangerouslySetInnerHTML={{__html: answer}}
            />
          })}
        </article>
        <button className="next-question">Next Question</button>
      </section>
    </main>
  )
}

export default App;
