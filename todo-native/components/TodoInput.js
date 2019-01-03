import React from 'react'
import styled from 'styled-components'

const InputCover = styled.View``

const Input = styled.TextInput`
  font-size: 24px;
  margin: 20px 0;
  border: 1px solid grey;
  width: 350;
`
const InputButton = styled.Button``

const TodoInput = ({ input, onInsert, onChange }) => {
  const handleKeyPress = () => {
    onInsert()
  }
  
  return (
    <InputCover>
      <Input value={input} onChangeText={onChange}/>
      <InputButton onPress={handleKeyPress} title='추가'></InputButton>
    </InputCover>
  )
}

export default TodoInput
