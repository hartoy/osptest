import React from 'react'
import { IconStyles } from './styled-icons'

import { Icon1Footer } from './Icon1Footer.js'
import { Icon2Footer } from './Icon2Footer.js'
import { OpenTextFooter } from './OpenTextFooter.js'
import { ImgWhoBilding } from './ImgWhoBilding.js'
import { ImgWhoCarpeta } from './ImgWhoCarpeta.js'
import { NavbarBurger } from './NavbarBurger.js'
import { NavbarImg } from './NavbarImg.js'
import { NavbarMan } from './NavbarMan.js'
import { ExploreAuthors } from './ExploreAuthors.js'
import { ExploreCountries } from './ExploreCountries.js'
import { ExploreFields } from './ExploreFields.js'
import { ExplorePublishers } from './ExplorePublishers.js'
import { ExploreSchools } from './ExploreSchools.js'
import { ExploreSyllabi } from './ExploreSyllabi.js'
import { ExploreTitles } from './ExploreTitles.js'
import { NavbarWhiteImg } from './NavbarWhiteImg.js'
import { PoweredGraphic } from './PoweredGraphic.js'
import { TableGreenIcon } from './TableGreenIcon.js'
import { TableGreyIcon } from './TableGreyIcon.js'
import { SingletonRank } from './SingletonRank.js'

const Icons = (props) => {
  const handleSvg = (name) => {
    switch (name) {
      case 'OpenTextFooter':
        return <OpenTextFooter />
      case 'Icon1Footer':
        return <Icon1Footer />
      case 'Icon2Footer':
        return <Icon2Footer />
      case 'ImgWhoBilding':
        return <ImgWhoBilding />
      case 'ImgWhoCarpeta':
        return <ImgWhoCarpeta />
      case 'NavbarBurger':
        return <NavbarBurger />
      case 'NavbarImg':
        return <NavbarImg />
      case 'NavbarMan':
        return <NavbarMan />
      case 'authors':
        return <ExploreAuthors />
      case 'countries':
        return <ExploreCountries />
      case 'fields':
        return <ExploreFields />
      case 'publishers':
        return <ExplorePublishers />
      case 'schools':
        return <ExploreSchools />
      case 'syllabi':
        return <ExploreSyllabi />
      case 'titles':
        return <ExploreTitles />
      case 'NavbarWhiteImg':
        return <NavbarWhiteImg />
      case 'PoweredGraphic':
        return <PoweredGraphic />
      case 'TableGreenIcon':
        return <TableGreenIcon />
      case 'TableGreyIcon':
        return <TableGreyIcon />
      case 'SingletonRank':
        return <SingletonRank />
      default:
        return ''
    }
  }
  return (
    <IconStyles
      onClick={props.onClick}
      height={props.height}
      width={props.width}
      marginRight={props.marginRight}
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
      forMobile={props.forMobile}
      forDesktop={props.forDesktop}
      marginBottom={props.marginBottom}
      padding={props.padding}
      who={props.who}
    >
      {handleSvg(props.name)}
    </IconStyles>
  )
}

export default Icons
