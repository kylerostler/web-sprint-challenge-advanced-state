import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'

export function Quiz(props) {
  const { quiz, selectedAnswer } = props
  // need to get rid of useEffect and replace it with an 
  // if else statement for if quiz is loaded
  useEffect(() => {
    props.fetchQuiz()
  }, [])


  function onDisabled() {
    if(selectedAnswer){
      return false
    } else {
      return true
    }
  }

  return (
    <div id="wrapper">
    { quiz ? <h2>{quiz.question}</h2> : <></>}
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          quiz.answers.map(answer => {
            return (
              (selectedAnswer===answer.answer_id ? (<>
                <div className="answer selected" key={answer.answer_id}>
                {answer.text}
                <button onClick={() => props.selectAnswer(answer.answer_id)}>
                  SELECTED
                </button>
                </div>
               </>)
               :
               (<>
                <div className="answer" key={answer.answer_id}>
                  {answer.text}
                  <button onClick={() => props.selectAnswer(answer.answer_id)}>
                    Select
                  </button>
                </div>
               </>))
            )
          })
        )
        : 'Loading next quiz...'
      }
      { quiz ? <button id="submitAnswerBtn" disabled={onDisabled()} onClick={() => props.postAnswer(quiz.quiz_id, selectedAnswer)}>Submit answer</button>
 : <></>}
    </div>
  )
}

export default connect(state => state, actionCreators)(Quiz)