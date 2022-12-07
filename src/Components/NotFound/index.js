import React from 'react'
import { NotFoundWrapper, NumberNotFound, NotFoundText, NotFoundResource } from './notfound-styles.js'

const NotFound = (props) => {
  return (
    <NotFoundWrapper>
      <NumberNotFound>404</NumberNotFound>
      <NotFoundText> Not Found</NotFoundText>
      <NotFoundResource>The resource requested could not be found on this server!</NotFoundResource>
    </NotFoundWrapper>
  )
}

export default NotFound
