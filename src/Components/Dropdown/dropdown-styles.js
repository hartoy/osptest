import styled, { css } from 'styled-components'

const DropdownContainer = styled.div`
  width: 115px;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
  box-sizing: border-box;
  border: 1px solid rgb(149, 153, 158);
  padding: 10px 10px;
`

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DropBody = styled.div``

const DropItem = styled.div`
  cursor: pointer;
  padding-top: 10px;
`

const DropSpan = styled.span`
  opacity: 0;
  color: #91a5be;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
  }
`
export { DropdownContainer, DropdownHeader, DropBody, DropItem, DropSpan }
