import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 16px;
  background: white;
  border: 1px solid #ddd;
  font-size: 16px;
  color: white;
  cursor: pointer;
  padding: 15px;
  border: none;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  ${props => props.round && `
    border-radius: 8px;
  `}
`
