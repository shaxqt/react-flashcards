import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Navigation from './Navigation'
import HomePage from './HomePage'
import GlobalStyles from './GlobalStyles'
import SettingsPage from './SettingsPage'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!'
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!'
    }
  ])

  function renderPage() {
    console.log('activepage ' + activeIndex)
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: (
        <SettingsPage
          cards={cards}
          setCards={setCards}
          setActiveIndex={setActiveIndex}
        />
      )
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <>
      <GlobalStyles />
      <AppStyled>
        {renderPage()}
        <Navigation
          buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
          onClick={setActiveIndex}
        />
      </AppStyled>
    </>
  )
}
const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`

export default App
