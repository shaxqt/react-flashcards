import React, { useState } from 'react'
import PageStyled from './PageStyled'
import Form from './Form'
import Button from './Button'
import Input from './Input'

const SettingsPage = ({ cards, setCards, setActiveIndex }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    setCards(...cards, {
      title: newTitle,
      question: newQuestion,
      answer: newAnswer
    })
  }

  return (
    <>
      <PageStyled>
        <Form onSubmit={handleSubmit}>
          <Input
            value={newTitle}
            setValue={setNewTitle}
            label="Titel"
            name="title"
          />
          <Input
            value={newQuestion}
            setValue={setNewQuestion}
            label="Frage"
            name="question"
          />
          <Input
            value={newAnswer}
            setValue={setNewAnswer}
            label="Antwort"
            name="answer"
          />
          <Button text="Karte erstellen"></Button>
        </Form>
      </PageStyled>
    </>
  )
}

export default SettingsPage
