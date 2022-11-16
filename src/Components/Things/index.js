import React from 'react'
import { ThingsStyles, StyledLi, StyledUl, Graficos } from './things-styles.js'
import { Title } from '../Title/title-styles'
import ThingsGraphics from './ThingsGraphics/index'

import img1 from './things-graphic1.svg'
import img2 from './things-graphic2.svg'
import img3 from './things-graphic3.svg'
import img4 from './things-graphic4.svg'
import img5 from './things-graphic5.svg'

const Things = () => {
  return (
    <ThingsStyles>
      <Title mobile width="300px" textAStyledLign="center">
        THINGS YOU CAN DO WITH OS ANALYTICS
      </Title>

      <Graficos>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </Graficos>

      <StyledUl>
        <Title desktop>THINGS YOU CAN DO WITH OS ANALYTICS</Title>
        <StyledLi>Explore book and article adoption across fields and within schools.</StyledLi>
        <StyledLi>Explore patterns of adoption of OA and OER materials.</StyledLi>
        <StyledLi>Understand curricular coverage and trends at your own school or compared to other schools.</StyledLi>
        <StyledLi>Help faculty take credit for work with teaching appStyledLications.</StyledLi>
        <StyledLi>Identify pubStyledLishing gaps and opportunities.</StyledLi>
      </StyledUl>
    </ThingsStyles>
  )
}

export default Things
