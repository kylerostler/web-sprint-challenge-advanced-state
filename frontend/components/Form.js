import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    const { value, id } = evt.target
    props.inputChange(value, id)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz(props.form)
    props.resetForm()
  }

  const onDisabled = () => {
    if(props.form.newQuestion.trim().length > 0 && props.form.newTrueAnswer.trim().length > 0 && props.form.newFalseAnswer.trim().length > 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value={props.form.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input value={props.form.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={props.form.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={onDisabled()} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(state => state, actionCreators)(Form)
