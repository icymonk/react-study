import React from 'react'
import styled from 'styled-components'

const InputCover = styled.View`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`

const Input = styled.TextInput`
  flex: 1;
  font-size: 24px;
  border: 1px solid grey;
  border-radius: 100;
  padding-left: 16px;
`

const InputButton = styled.Button`
  flex: 1;
  font-size: 24px;
  background-color: grey;
`

const TodoInput = ({ input, onInsert, onChange }) => (
  <InputCover>
    <Input value={input} onChangeText={onChange} placeholder='할 일을 입력해주세요'/>
    <InputButton onPress={onInsert} title='추가'></InputButton>
  </InputCover>
)

export default TodoInput
