import React from 'react'
import { CardWrapper, CardBottom, Line, Price } from './card-styles.js'

const Card = ({ title, description, seats, months, price }) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p> {description} </p>
      <Line />
      <ul>
        <li> {seats} seats</li>
        <li> {months} months subscription</li>
      </ul>
      <CardBottom>
        <Price>$ {price} </Price>
      </CardBottom>
    </CardWrapper>
  )
}

export default Card
