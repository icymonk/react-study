import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 24px;
  width: 100%;
  height: 50px;
  text-indent: 20px;
  margin: 20px 0;
`

const TodoInput = ({ value, onInsert, onChange }) => {
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') onInsert()
  }
  
  return <Input value={value} onChange={onChange} onKeyPress={handleKeyPress} />
}

export default TodoInput
