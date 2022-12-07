import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  display: Flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 65vh;

  @media (min-width: 1000px) {
    height: 70vh;
  }
`

const NumberNotFound = styled.h1`
  color: rgb(55, 117, 185);
  font-size: 70px;

  @media (min-width: 1000px) {
    font-size: 170px;
  }
`

const NotFoundText = styled.h1`
  color: rgb(55, 117, 185);

  @media (min-width: 1000px) {
  }
`

const NotFoundResource = styled.h2`
  color: black;

  @media (min-width: 1000px) {
  }
`

export { NotFoundWrapper, NumberNotFound, NotFoundText, NotFoundResource }
