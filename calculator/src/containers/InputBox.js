import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Button from '../components/Button'
import './InputBox.css';

class InputBox extends Component {
  static defaultProps = {
    inputValue: () => {},
    calc: () => {},
    clear: () => {},
  }

  static propTypes = {
    inputValue: PropTypes.func,
    calc: PropTypes.func,
    clear: PropTypes.func,
  }

  state = {
    buttonList: [
      { text: '7', type: 'number' },
      { text: '8', type: 'number' },
      { text: '9', type: 'number' },
      { text: '+', type: 'number' },

      { text: '4', type: 'number' },
      { text: '5', type: 'number' },
      { text: '6', type: 'number' },
      { text: '-', type: 'number' },

      { text: '1', type: 'number' },
      { text: '2', type: 'number' },
      { text: '3', type: 'number' },
      { text: '*', type: 'number' },
      
      { text: '0', type: 'number' },
      { text: '=', type: 'calc' },
      { text: 'C', type: 'clear' },
      { text: '/', type: 'number' },
    ],
  }

  buildButtons() {
    return this.state.buttonList.map((button, index) => (
      <Button
        onClick={button.type === 'number' ? this.props.inputValue : button.type === 'calc' ? this.props.calc : this.props.clear}
        text={button.text}
        key={index}
        large={button.large}
      />
    ))
  }

  render() {
    return (
      <div className='container'>
        {this.buildButtons()}
      </div>
    );
  }
}


export default InputBox;
