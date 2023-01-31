import React from 'react'

import { PoweredStyles, StyledLi, StyledUl, GraphicDiv } from './powered-styles.js'
import { Title } from '../Title/title-styles'
import PoweredBarChart from './PoweredBarChart/index'

const Powered = () => {
  return (
    <PoweredStyles>
      <Title mobile width="300px" textAlign="center">
        POWERED BY THE OS DATASET
      </Title>
      <GraphicDiv>
        <PoweredBarChart />
      </GraphicDiv>
      <StyledUl>
        <Title desktop textAlign="left">
          POWERED BY THE OS DATASET
        </Title>
        <StyledLi>10.2 million syllabi — including 6M from the US, 600K from Canada, and 400K from Australia.</StyledLi>
        <StyledLi>7000 schools — including 500 with more than 3000 syllabi.</StyledLi>
        <StyledLi>9 million titles</StyledLi>
        <StyledLi>22 million assignments</StyledLi>
        <StyledLi>Bi-annual updates</StyledLi>
        <StyledLi>Extending back to the 1990s</StyledLi>
      </StyledUl>
    </PoweredStyles>
  )
}

export default Powered
