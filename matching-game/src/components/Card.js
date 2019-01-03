import React, { Component } from 'react'
import styled from 'styled-components'

const CardCover = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  text-align: center;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.background && `background: ${props.background};`}
  ${props => props.height && `line-height: ${props.height};`}

`

const CardContent = styled.div`
  color: white;
`

export default class Card extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.card.front !== nextProps.card.front || this.props.card.done !== nextProps.card.done
  }

  render() {
    const { card, width, height, background, onClick } = this.props
    return (
      <CardCover onClick={() => onClick(card.id)} card={card} width={width} height={height} background={card.front ? card.color : background}>
        <CardContent>{card.color}</CardContent>
      </CardCover>
    )
  }
}
