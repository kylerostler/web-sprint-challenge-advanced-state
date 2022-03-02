import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'

export function Quiz(props) {
  const { quiz, selectedAnswer } = props
  console.log(props)
  // need to get rid of useEffect and replace it with an 
  // if else statement for if quiz is loaded
  useEffect(() => {
    props.fetchQuiz()
  }, [])

  // const onSelect = evt => {
  //   console.log(props)
  //   const option = props.quiz.answers.answer_id
  //   props.selectAnswer()
  // }

  console.log(props)

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
        // (
        //   <>
        //     <h2>{quiz.question}</h2>

        //       {props.selectedAnswer?<div className="answer selected">
        //         {quiz.answers[0].text}
        //         <button>
        //           SELECTED
        //         </button>
        //       </div>
        //       :
              // <div className="answer">
              //   {quiz.answers[0].text}
              //   <button onClick={() => onSelect()}>
              //     Select
              //   </button>
              // </div>}

        //       {props.selectedAnswer?<div className="answer selected">
        //         {quiz.answers[1].text}
        //         <button>
        //           SELECTED
        //         </button>
        //       </div>
        //       :
        //       <div className="answer">
        //         {quiz.answers[1].text}
        //         <button onClick={() => onSelect()}>
        //           Select
        //         </button>
        //       </div>}

        //     <button id="submitAnswerBtn">Submit answer</button>
        //   </>
        // ) 
        : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(state => state, actionCreators)(Quiz)