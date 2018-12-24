import React, { Component, Fragment } from 'react'
import TodoItem from '../components/TodoItem'

class TodoList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos
  }

  render() {
    const { onToggle, onRemove } = this.props
    const todoList = this.props.todos.map(todo => (
      <TodoItem
        todo={todo}
        key={todo.id}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        done={todo.done}
      >
        {todo.text}
      </TodoItem>
    ))

    return (
      <Fragment>
        {todoList}
      </Fragment>
    )
  }
}

export default TodoList
