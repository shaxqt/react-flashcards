import React, { useState } from 'react'
import PageStyled from './PageStyled'
import Form from './Form'
import Button from './Button'
import Input from './Input'

const SettingsPage = ({ onFormSubmit }) => {
  const [newTitle, setNewTitle] = useState('')
  const [errorTitle, setErrorTitle] = useState('')
  const [newQuestion, setNewQuestion] = useState('')
  const [errorQuestion, setErrorQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')
  const [errorAnswer, setErrorAnswer] = useState('')

  /* onst [
    { newTitle, newQuestion, newAnswer },
    { setNewTitle, setNewQuestion, setNewAnswer }
  ] = useState({ newTitle: '', newAnswer: '', newQuestion }, setNewValues) */

  const handleSubmit = event => {
    event.preventDefault()
    newTitle.length || setErrorTitle('Bitte geben Sie einen Titel ein')
    console.log('1')
    newQuestion.length || setErrorQuestion('Bitte geben Sie eine Frage ein')
    console.log('2')
    newAnswer.length || setErrorAnswer('Bitte geben Sie eine Antwort ein')
    console.log('3')
    if (newTitle.length && newQuestion.length && newAnswer.length) {
      console.log('form valid')
      onFormSubmit({
        title: newTitle,
        question: newQuestion,
        answer: newAnswer
      })
    }
  }

  return (
    <>
      <PageStyled>
        <Form onSubmit={handleSubmit}>
          <Input
            value={newTitle}
            setValue={setNewTitle}
            label="Titel"
            errorText={errorTitle}
            setErrorText={setErrorTitle}
          />
          <Input
            value={newQuestion}
            setValue={setNewQuestion}
            label="Frage"
            errorText={errorQuestion}
            setErrorText={setErrorQuestion}
          />
          <Input
            value={newAnswer}
            setValue={setNewAnswer}
            label="Antwort"
            errorText={errorAnswer}
            setErrorText={setErrorAnswer}
          />
          <Button text="Karte erstellen"></Button>
        </Form>
      </PageStyled>
    </>
  )
}

export default SettingsPage
