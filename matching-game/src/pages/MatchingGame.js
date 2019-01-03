import React, { Component } from 'react'
import CardList from '../containers/CardList'

export default class MatchingGame extends Component {
  state = {
    cards: [],
    selectedIndex: -1 
  }

  shuffle = () => {
    const result = []
    const cardData = [
      { id: 0, color: 'red', front: false, done: false },
      { id: 1, color: 'red', front: false, done: false },
      { id: 2, color: 'green', front: false, done: false },
      { id: 3, color: 'green', front: false, done: false },
      { id: 4, color: 'blue', front: false, done: false },
      { id: 5, color: 'blue', front: false, done: false },
      { id: 6, color: 'skyblue', front: false, done: false },
      { id: 7, color: 'skyblue', front: false, done: false },
      { id: 8, color: 'pink', front: false, done: false },
      { id: 9, color: 'pink', front: false, done: false },
      { id: 10, color: 'yellow', front: false, done: false },
      { id: 11, color: 'yellow', front: false, done: false },
    ]

    for (let index = 0; index < cardData.length;) {
      const rIndex = Math.floor(Math.random() * cardData.length)
      result.push(...cardData.splice(rIndex, 1))
    }
    this.setState({
      cards: [
        ...result,
      ]
    })
  }

  show = () => {
    const { cards } = this.state
    const frontCards = cards.map(card => ({ ...card, front: true}))

    this.setState({
      cards: [...frontCards]
    }, () => setTimeout(() => this.setState({
      cards: [...cards],
    }), 3000))
  }

  handleClick = (id) => {
    const { cards, selectedIndex } = this.state
    const index = cards.findIndex(card => card.id === id)

    if (selectedIndex === index || cards[index].front) return

    const toggled = {
      ...cards[index],
      front: !cards[index].front
    }

    this.setState({
      cards: [
        ...cards.slice(0, index),
        toggled,
        ...cards.slice(index + 1, cards.length),
      ],
    }, () => setTimeout(() => this.checkMatch(cards[index]), 500))

  }

  checkMatch = (clickedCard) => {
    const { cards, selectedIndex } = this.state
    const clickedIndex = cards.findIndex(card => card.id === clickedCard.id)
    if (selectedIndex === -1) {
      return this.setState({
        selectedIndex: clickedIndex,
      })
    }

    const isSameColor = cards[selectedIndex].color === clickedCard.color

    const firstIndex = selectedIndex < clickedIndex ? selectedIndex : clickedIndex
    const secondIndex = selectedIndex < clickedIndex ? clickedIndex : selectedIndex

    const firstCard = {
      ...cards[firstIndex],
      front: isSameColor,
      done: isSameColor,
    }
    const secondCard = {
      ...cards[secondIndex],
      front: isSameColor,
      done: isSameColor,
    }

    this.setState({
      cards: [
        ...cards.slice(0, firstIndex),
        firstCard,
        ...cards.slice(firstIndex + 1, secondIndex),
        secondCard,
        ...cards.slice(secondIndex + 1, cards.length)
      ],
      selectedIndex: -1,
    })
    this.checkResult()
  }

  checkResult = () => {
    const { cards } = this.state
    const isDone = cards.every(card => card.done)

    if (isDone) {
      alert('성공')
      this.shuffle()
    }
  }

  componentDidMount() {
    this.shuffle()
    setTimeout(() => this.show(), 1000)
  }

  render() {
    const { cards } = this.state
    const { handleClick } = this
    return (
      <div>
        <CardList onClick={handleClick} cards={cards}></CardList>
      </div>
    )
  }
}
