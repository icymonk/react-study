import React, { Component } from 'react'
import Card from '../components/Card'

export default class CardList extends Component {
  state = {
    width: this.props.width || '100px',
    height: this.props.height || '150px',
    background: this.props.background || 'grey',
  }
  render() {
    const { width, height, background } = this.state
    const { onClick, cards} = this.props
    const CardList = cards.map(card =>
      <Card
        onClick={onClick}
        card={card}
        key={card.id}
        width={width}
        height={height}
        background={background}
      />
    )
    return (
      <div>
        {CardList}
      </div>
    )
  }
}
