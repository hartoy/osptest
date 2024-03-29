import React from 'react'

import { Spin, SpinnerWrapper } from './spinner-styles.js'

export default function LoadingSpinner(props) {
  return (
    <SpinnerWrapper height={props.height}>
      <Spin forLogin={props.forLogin} />
    </SpinnerWrapper>
  )
}
