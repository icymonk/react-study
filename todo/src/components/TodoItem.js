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

const Edit = styled.div`
  color: green;
  cursor: pointer;
  padding: 15px;
`

const Delete = styled.div`
  color: red;
  cursor: pointer;
  padding: 15px;
`

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done || this.props.children !== nextProps.children
  }

  render() {
    const { done, children, onToggle, onRemove, onOpenEditor } = this.props

    return (
      <ItemCover onClick={onToggle}>
        <CheckBox checked={done} />
        <Text done={done}>{children}</Text>
        <Edit onClick={onOpenEditor}>[수정]</Edit>
        <Delete onClick={(e) => { onRemove(); e.stopPropagation() } }>[지우기]</Delete>
      </ItemCover>
    )
  }
}

export default TodoItem
