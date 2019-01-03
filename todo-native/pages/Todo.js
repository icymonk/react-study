import React, { Component } from 'react'
import { View } from 'react-native'
import TodoInput from '../components/TodoInput'
import TodoList from '../containers/TodoList'
import styled from 'styled-components'

const Title = styled.Text`
  font-size: 48px;
  margin-top: 80px;
  text-align: center;
`

const initialTodos = (num) => new Array(num).fill(0).map(
  (foo, index) => ({ id: index, text: `일정 ${index}`, done: false })
)

class Todo extends Component {
  static defaultProps = {
    initialNumber: 0,
  }

  state = {
    input: '',
    todos: initialTodos(this.props.initialNumber),
  }

  id = this.props.initialNumber
  getId = () => this.id++

  handleChange = (text) => {
    this.setState({
      input: text
    })
  }

  handleInsert = () => {
    const { todos, input } = this.state

    if (!input.trim()) return

    const newTodo ={
      text: input,
      done: false,
      id: this.getId()
    }

    this.setState({
      todos: [...todos, newTodo],
      input: '',
    })
  }

  handleToggle = (id) => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    console.log(id, todos[index])

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)

    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length),
      ]
    })
  }

  render() {
    const { input, todos } = this.state
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove,
    } = this

    return (
      <View style={{ marginTop: 22 }}>
        <View>
          <Title>일정 관리</Title>
          <TodoInput input={input} onChange={handleChange} onInsert={handleInsert} />
        </View>
        <TodoList onToggle={handleToggle} onRemove={handleRemove} todos={todos} />
      </View>
    );
  }
}

export default Todo;
