import React from 'react'
import styled from 'styled-components/macro'

const Button = ({ text, type = 'submit' }) => {
  text = text ? text : 'no text given'
  return <ButtonStyled type={type}>{text}</ButtonStyled>
}

const ButtonStyled = styled.button`
  padding: ${props => props.padding || '10px'};
  background: linear-gradient(21deg, #10abff, #1beabd);
  border-radius: 9999em;
  font-size: 1.15rem;
  color: white;
  font-weight: bold;
`
export default Button
