import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './containers/TodoList'
import { Container } from './styles/main'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`

const initialTodos = (num) => new Array(num).fill(0).map(
  (foo, index) => ({ id: index, text: `일정 ${index}`, done: false })
)

const initialNumber = 10

class App extends Component {
  state = {
    input: '',
    todos: initialTodos(initialNumber),
  }

  id = initialNumber
  getId = () => this.id++

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }

  handleInsert = () => {
    const { todos, input } = this.state

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
      <Container>
        <Title>일정 관리</Title>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
        <TodoList  todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </Container>
    );
  }
}

export default App;