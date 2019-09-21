import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Input = ({ label, value, setValue, errorText, setErrorText }) => {
  return (
    <InputRowStyled>
      {label && <label htmlFor={label}>{label}</label>}
      <SpanInputStyled label={label}>
        <input id={label} onChange={onChange} value={value} />
        <span></span>
      </SpanInputStyled>
      <ErrorStyled errorText={errorText}>{errorText}</ErrorStyled>
    </InputRowStyled>
  )
  function onChange(event) {
    event.preventDefault()
    setValue(event.target.value)
    setErrorText(event.target.value.length ? '' : errorText)
  }
}

const ErrorStyled = styled.div`
  display: ${props => (props.errorText ? 'block' : 'none')};
  background-color: hsl(0, 100%, 80%);
  color: darkred;
  position: relative;
  margin-top: 8px;
  border-radius: 6px;
  padding: 10px;
  border-radius: 9999em;
  &:after {
    content: '';
    border: 8px solid transparent;
    border-bottom-color: hsl(0, 100%, 80%);
    position: absolute;
    left: 20px;
    top: 0;
    transform: translateY(-15px);
  }
`
const InputRowStyled = styled.section`
  display: flex;
  flex-direction: column;
`

const SpanInputStyled = styled.span`
  margin-top: ${props => (props.label ? '20px' : '0')};
  position: relative;
  font-size: 1.5em;
  background: linear-gradient(21deg, #10abff, #1beabd);
  padding: 3px;
  display: inline-block;
  border-radius: 9999em;

  *:not(span) {
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 5px;
    z-index: 1;

    &:focus + span {
      opacity: 1;
      transform: scale(1);
    }
  }

  span {
    transform: scale(0.993, 0.94);
    transition: transform 2s, opacity 0.25s;
    opacity: 0;

    position: absolute;
    z-index: 0;
    margin: 4px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none;

    box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,
      -3px 3px 30px #10abff;
  }
`
export default Input
