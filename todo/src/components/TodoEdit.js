import React, { Component } from 'react'
import styled from 'styled-components'

const ItemCover = styled.div`
  background: white;
  text-algin: center;
  border: 1px solid black;
  border-radius: 16px;
  position: absolute;
  width: 300px;
  height: 150px;
  top: calc(50% - 150px);
  left: calc(50% - 75px);
`

const EditText = styled.input.attrs({
  autoFocus: true,
})`
  font-size: 24px;
  margin: 20px;
  width: calc(100% - 40px);
`

const Save = styled.button`
  background: white;
  border: 1px solid grey;
  border-radius: 8px;
  color: red;
  cursor: pointer;
  margin: 8px;
  padding: 16px;
  float: right;
`

const Cancel = styled.button`
  background: white;
  border: 1px solid grey;
  border-radius: 8px;
  color: red;
  cursor: pointer;
  margin: 8px;
  padding: 16px;
  float: right;
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
