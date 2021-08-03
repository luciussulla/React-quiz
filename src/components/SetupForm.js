
import React from 'react'
import { useGlobalContext } from '../contexts/globalContext'

export default function SetupForm() {
  const {quiz, handleChange, handleSubmit, error} = useGlobalContext()

  return (
    <main>
      <section className="quiz quiz-small">
        <form action="" className="setup-form">
          <h2>Setup Quiz</h2>
          {/* {amount} */}
          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>
            <input type="number" name="amount" id="amount"
                   value={quiz.amount}
                   onChange={handleChange}
                   className="form-input"
                   min={1}
                   max={10}
            />
         
          </div>
          {/*category*/}
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" 
                  value={quiz.category}
                  onChange={handleChange}
                  className="form-input"
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
           {/*diff*/}
           <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select name="difficulty" id="difficulty" 
                  value={quiz.difficulty}
                  onChange={handleChange}
                  className="form-input"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
        </form>
        {error && <p className="error">can't generate questions try other options</p>}
            <button type="submit" onClick={handleSubmit} className="next-question play-again">
              start
            </button>
      </section>
    </main>
  )
}