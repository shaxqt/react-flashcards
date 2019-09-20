import React from 'react'
import styled from 'styled-components/macro'

const Button = ({ text, type = 'submit' }) => {
  text = text ? text : 'no text given'
  return <ButtonStyled type={type}>{text}</ButtonStyled>
}

const ButtonStyled = styled.button`
  padding: ${props => props.padding || '10px'};
`
export default Button
