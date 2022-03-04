import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Quiz(props) {
  const { quiz, selectedAnswer } = props

  useEffect(() => {
    if(quiz){
      return null
    }else {
      props.fetchQuiz()
    }
  }, [])


  function onDisabled() {
    if(selectedAnswer){
      return false
    } else {
      return true
    }
  }

  // function shuffleAnswers(array) {
  //   let i = array.length -1;
  //   for(; i > 0; i--) {
  //     const j = (Math.floor.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }

  // const shuffledAnswersArray = shuffleAnswers(quiz.answers)
  
  return (
    <div id="wrapper" key="quizWrapper">
    { quiz ? <h2 key="quizQuestion">{quiz.question}</h2> : <></>}
      {
        quiz ? (
          quiz.answers.map(answer => {
            return (
              (selectedAnswer===answer.answer_id ? (
                <div className="answer selected" key={answer.answer_id}>
                {answer.text}
                <button onClick={() => props.selectAnswer(answer.answer_id)}>
                  SELECTED
                </button>
                </div>
               )
               :
               (
                <div className="answer" key={answer.answer_id}>
                  {answer.text}
                  <button onClick={() => props.selectAnswer(answer.answer_id)}>
                    Select
                  </button>
                </div>
               ))
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