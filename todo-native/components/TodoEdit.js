import React, { Component } from 'react'
import styled from 'styled-components'

const ItemCover = styled.View`
`

const EditText = styled.TextInput`
`

const Save = styled.Button`
`

const Cancel = styled.Button`
`

class TodoItem extends Component {
  state = {
    input: this.props.todo.text
  }
  
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      input: value,
    })
  }

  
  render() {
    const { todo, onSave, onCancel } = this.props
    const { input } = this.state
    const {
      handleChange,
    } = this
    
    const handleSave = () => {
      onSave(todo.id, input)
      onCancel()
    }

    const handleKeyPress = (e) => {
      if(e.key === 'Enter') handleSave()
    }

    return (
      <ItemCover>
        <EditText value={input} onChange={handleChange} onKeyPress={handleKeyPress}></EditText>
        <Cancel onClick={onCancel}>취소</Cancel>
        <Save onClick={handleSave}>저장</Save>
      </ItemCover>
    )
  }
}

export default TodoItem
