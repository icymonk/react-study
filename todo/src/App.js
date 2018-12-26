import React, { Component } from 'react'
import Todo from './pages/Todo'

class App extends Component {
  render() {
    return <Todo initialNumber={10}/>
  }
}

export default App;
