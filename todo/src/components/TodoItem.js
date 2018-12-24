import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from '../styles/main'

const ItemCover = styled(Flex)`
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  &:nth-last-child(1) {
    border-bottom: 1px solid grey;
  }
`

const CheckBox = styled.input.attrs({
  type: 'checkbox',
  readOnly: true
})`
  margin: 18px;
`

const Text = styled.div`
  flex: 1;
  font-size: 24px;
  padding: 10px;
  ${props => props.done && `
    text-decoration: line-through;
  `}
`

const Delete = styled.div`
  color: red;
  cursor: pointer;
  padding: 15px;
`

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done
  }

  render() {
    const { done, children, onToggle, onRemove } = this.props

    return (
      <ItemCover onClick={onToggle}>
        <CheckBox checked={done} />
        <Text done={done}>{children}</Text>
        <Delete onClick={(e) => { onRemove(); e.stopPropagation() } }>[지우기]</Delete>
      </ItemCover>
    )
  }
}

export default TodoItem
