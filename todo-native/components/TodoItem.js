import React, { Component } from 'react'
import styled from 'styled-components'

const ItemCover = styled.View`
  flex: 1;
  border: 1px solid grey;
  border-radius: 100;
  margin: 8px 0;
  padding: 8px;
  flex-direction: row;
  background: ${props => props.done ? 'grey' : 'white'}
`

const Text = styled.Text`
  flex: 1;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  color: ${props => props.done ? 'white' : 'black'}
`

const Delete = styled.Button`
  font-size: 24px;
`

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todo.done !== nextProps.todo.done
  }

  render() {
    const { todo: { done, text }, onToggle, onRemove } = this.props

    return (
      <ItemCover done={done}>
        <Text onPress={onToggle} done={done}>{text}</Text>
        <Delete onPress={onRemove} title='[지우기]' color={done ? 'white' : 'red'}></Delete>
      </ItemCover>
    )
  }
}

export default TodoItem
