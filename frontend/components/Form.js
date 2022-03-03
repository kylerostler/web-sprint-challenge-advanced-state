import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  console.log(props)
  const onChange = evt => {
    const { value, id } = evt.target
    props.inputChange(value, id)
    console.log(evt.target)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz();
  }

  // const onDisabled = () => {
  //   if(props.form.newQuestion.trim().length > 0 && props.form.newTrueAnswer.trim().length > 0 && props.form.newFalseAnswer.trim().length > 0) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button  id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(state => state, actionCreators)(Form)
