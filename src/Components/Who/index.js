import React from 'react'
import { WhoStyles } from './who-styles.js'
import Icon from '../Icons'

const Who = () => {
  return (
    <WhoStyles>
      <h1>WHO IS OPEN SYLLABUS ANALYTICS FOR?</h1>
      <ul>
        <li>
          <Icon name="ImgWhoBilding" height="55px" marginBottom="20px" who />
          <p>Publishers and similar providers of educational materials</p>
        </li>
        <li>
          <Icon name="ImgWhoCarpeta" height="55px" marginBottom="30px" who />
          <p>University units and offices</p>
        </li>
      </ul>
      <p>Open Syllabus Analytics is not available for the general public at the moment.</p>
    </WhoStyles>
  )
}

export default Who
