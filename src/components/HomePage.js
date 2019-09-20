import React from 'react'
import Card from './Card'
import PageStyled from './PageStyled'

const HomePage = ({ cards }) => {
  return (
    <PageStyled>
      <h1>Homepage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </PageStyled>
  )
}

export default HomePage
