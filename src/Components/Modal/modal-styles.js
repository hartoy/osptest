import styled, { css } from 'styled-components'

const ModalWrapper = styled.div`
  background: white;
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 55px;
  font-family: Roboto, sans-serif;

  ${(props) =>
    props.small &&
    css`
      position: fixed;
      top: 0px;
      left: 0px;
      height: 100vh;
      width: 100vw;
      z-index: 5;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      background: rgba(169, 180, 192, 0.75);
      padding: 0px;
    `}
`

export { ModalWrapper }
