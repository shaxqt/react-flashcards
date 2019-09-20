import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Input = ({ name, label, value, setValue }) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <InputStyled
        id={name}
        name={name}
        onChange={event => setValue(event.target.value)}
        value={value}
      />
    </>
  )
}
const InputStyled = styled.input`
  padding: ${props => props.padding || '10px'};
`
export default Input
