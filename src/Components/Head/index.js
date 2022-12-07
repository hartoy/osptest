import React from 'react'
import { Header } from './head-styles'
import { useNavigate } from 'react-router-dom'

const Head = (props) => {
  const navigate = useNavigate()

  return (
    <Header height={props.height}>
      {props.title ? <h1>{props.title}</h1> : ''}
      {props.firstText ? <p>{props.firstText}</p> : ''}
      {props.secondText ? (
        <p>
          {props.secondText}
          {props.button ? <button onClick={() => navigate('/')}>CREATE A FREE TRIAL ACCOUNT</button> : ''}
        </p>
      ) : (
        ''
      )}
    </Header>
  )
}

export default Head
