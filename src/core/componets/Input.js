import React, { useState } from 'react'
import styled from 'styled-components'

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`

// Creating a custom hook
function useInput (defaultValue) {
  const [value, setValue] = useState(defaultValue)
  function onChange (e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange
  }
}

function Input () {
  const inputProps = useInput()
  return (
    <StyledInput
      {...inputProps}
      placeholder="Type in here"
    />
  )
}

export default Input
