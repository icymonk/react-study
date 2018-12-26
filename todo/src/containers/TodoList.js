import React, { Component, Fragment } from 'react'
import TodoItem from '../components/TodoItem'
import TodoEdit from '../components/TodoEdit'

class TodoList extends Component {
  state = {
    editing: false,
    editingTodo: {
      id: null,
      text: '',
      done: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos || this.state.editing !== nextState.editing
  }

  handleOpenEditor = (todo) => {
    this.setState({
      editing: true,
      editingTodo: {
        id: todo.id,
        text: todo.text,
        done: todo.done,
      },
    })
  }

  handleCloseEditor = () => {
    this.setState({
      editing: false,
      editingTodo: {
        id: null,
        text: '',
        done: false,
      }
    })
  }

  handleEditChange = (e) => {
    const { value } = e.target
    const { editingTodo } = this.state

    this.setState({
      editingTodo: {
        ...editingTodo,
        text: value,
      },
    })
  }

  render() {
    const { onToggle, onRemove, onSave } = this.props
    const { editing, editingTodo } = this.state
    const {
      handleOpenEditor,
      handleCloseEditor,
      handleEditChange,
    } = this

    const todoList = this.props.todos.map(todo => 
      <TodoItem
        todo={todo}
        key={todo.id}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        onOpenEditor={() => handleOpenEditor(todo)}
        done={todo.done}
      >
        {todo.text}
      </TodoItem>
    )
    const todoEdit = editing &&
      <TodoEdit
        todo={editingTodo}
        onChange={handleEditChange}
        onSave={onSave}
        onCancel={handleCloseEditor}
      />

    return (
      <Fragment>
        {todoEdit}
        {todoList}
      </Fragment>
    )
  }
}

export default TodoList
