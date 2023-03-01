import styled, { css } from 'styled-components'

const DropdownContainer = styled.div`
  width: 115px;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
  box-sizing: border-box;
  border: 1px solid rgb(149, 153, 158);

  @media (max-width: 1000px) {
    position: absolute;
    top: 35px;
  }
`

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3775b9;
  padding: 10px 10px;
  border-bottom: 0.2px solid rgb(149, 153, 158);
`

const DropBody = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
`

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
