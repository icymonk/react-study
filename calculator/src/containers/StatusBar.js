import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './StatusBar.css';



class StatusBar extends Component {
  static propTypes = {
    status: PropTypes.string,
  }

  render() {
    const { status } = this.props
    
    return (
      <div>
        <input className='statusBar' value={status} readOnly/>
      </div>
    );
  }


}


export default StatusBar;
