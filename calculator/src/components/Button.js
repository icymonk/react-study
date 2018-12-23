import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Button.css';

class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: () => {}
  }

  render() {
    const { text, onClick, large } = this.props

    return (
      <button className={`inputButton ${large ? 'large' : ''}`} onClick={onClick}>
        {text}
      </button>
    );
  }
}


export default Button;
