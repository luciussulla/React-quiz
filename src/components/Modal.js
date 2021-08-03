import React from 'react'
import { useGlobalContext } from '../contexts/globalContext'

export default function Modal() {
  const {isModalOpen, closeModal, correct, questions} = useGlobalContext()

  return (
    <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className="modal-content">
        <h2>Congrats</h2>
        <p>You guessed {correct} of {questions.length}</p>
        <button className='next-question play-again'
                onClick={closeModal} 
        >
          play again
        </button>
      </div>
    </div>
  )
}
