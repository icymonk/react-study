import React, { Component } from 'react'
import TodoItem from '../components/TodoItem'
import styled from 'styled-components'

const TodoScroll = styled.ScrollView`
`

class TodoList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos || this.props.todos.done !== nextProps.todos.done
  }

  render() {
    const { onToggle, onRemove } = this.props

    const todoList = this.props.todos.map(todo => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      )
    })

    return (
      <TodoScroll>
        {todoList}
      </TodoScroll>
    )
  }
}

export default TodoList
