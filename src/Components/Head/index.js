import React from 'react'
import { Header } from './head-styles'

const Head = (props) => {
  return (
    <Header height={props.height}>
      {props.title ? <h1>{props.title}</h1> : ''}
      {props.firstText ? <p>{props.firstText}</p> : ''}
      {props.secondText ? (
        <p>
          {props.secondText}
          {props.button ? <button>CREATE A FREE TRIAL ACCOUNT</button> : ''}
        </p>
      ) : (
        ''
      )}
    </Header>
  )
}

export default Head
