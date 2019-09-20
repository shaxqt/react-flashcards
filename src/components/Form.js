import React from 'react'
import GridStyled from './GridStyled'

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <GridStyled gridGap="15px" autoFlow="row">
        {children}
      </GridStyled>
    </form>
  )
}
export default Form
