import React from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper } from './modal-styles'

function Modal({ children, small }) {
  return ReactDOM.createPortal(<ModalWrapper small={small}>{children}</ModalWrapper>, document.getElementById('modal'))
}

export default Modal
