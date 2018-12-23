import React, { Component } from 'react';
import './App.css';
import InputBox from './containers/InputBox'
import StatusBar from './containers/StatusBar'

class App extends Component {
  state = {
    status: '0',
  }

  inputValue = (event) => {
    console.log(event.target.textContent)
    this.setState({
      status: this.state.status !== '0' ? this.state.status + event.target.textContent : event.target.textContent
    })
  }

  calc = () => {
    try {
      const result = String(eval(this.state.status))
      this.setState({
        status: result
      })
    } catch (error) {
      alert('잘못된 수식')
      console.error(error)
    }
  }

  clear = () => {
    this.setState({
      status: '0'
    })
  }
  keyList =[
    42,
    43,
    45,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
  ]
  handleKeyPress = (event) => {
    if(event.charCode === 13 || event.charCode === 61) return this.calc()
    if (this.keyList.indexOf(event.charCode) !== -1) {
      const result = this.state.status !== '0' ? this.state.status + String.fromCharCode(event.charCode) : String.fromCharCode(event.charCode) 
      this.setState({
        status: result
      })
    }
  } 

  render() {
    return (
      <div className="App" onKeyPress={this.handleKeyPress}>
        <StatusBar status={this.state.status}></StatusBar>
        <InputBox inputValue={this.inputValue} calc={this.calc} clear={this.clear}></InputBox>
      </div>
    );
  }
}

export default App;
