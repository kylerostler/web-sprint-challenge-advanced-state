import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'

export function Quiz(props) {
  const { quiz } = props
  console.log(quiz)
  // useEffect to get the initial quiz
  useEffect(() => {
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      console.log(res)
      props.setQuiz(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

              {/* {selected?<div className="answer selected">
                {quiz.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>
              :
              <div className="answer">
                {quiz.answers[0].text}
                <button>
                  Select
                </button>
              </div>}

              {selected?<div className="answer selected">
                {quiz.answers[1].text}
                <button>
                  SELECTED
                </button>
              </div>
              :
              <div className="answer">
                {quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>} */}

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(state => state, actionCreators)(Quiz)