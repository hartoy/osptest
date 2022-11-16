import React from 'react'
import { ExploreStyles, ExploreCard, CardBottom, CardTitle, CardButton } from './explore-styles.js'
import Icon from '../Icons'
import img1 from './explore-card-img1.png'
import img2 from './explore-card-img2.png'
import img3 from './explore-card-img3.png'

import { RevisionsTitle } from '../Title/title-styles'

const Explore = () => {
  return (
    <ExploreStyles>
      <RevisionsTitle mobile marginLeft="27px" marginBottom="23px">
        Explore
      </RevisionsTitle>
      <RevisionsTitle desktop marginLeft="50px" marginBottom="23px">
        Explore
      </RevisionsTitle>
      <ExploreCard>
        <img src={img1} alt="" />
        <CardBottom>
          <CardTitle>
            <Icon name="schools" width="21px" height="12px" />
            <h2>keyword trends</h2>
          </CardTitle>
          <p>Track the frequency over time of specific keywords and concepts in the dataset.</p>
          <CardButton>Go!</CardButton>
        </CardBottom>
      </ExploreCard>
      <ExploreCard>
        <img src={img2} alt="" />
        <CardBottom>
          <CardTitle>
            <Icon name="ImgWhoCarpeta" width="21px" height="20px" />
            <h2>oer uptake</h2>
          </CardTitle>
          <p>Track the update of OER texts across different institutions and fields.</p>
          <CardButton>Go!</CardButton>
        </CardBottom>
      </ExploreCard>
      <ExploreCard>
        <img src={img3} alt="" />
        <CardBottom>
          <CardTitle>
            <Icon name="ImgWhoCarpeta" width="21px" height="12px" />
            <h2>topic search</h2>
          </CardTitle>
          <p>Filter syllabi by arbitrary keywords, and see the top assigned titles in the matching courses.</p>
          <CardButton>Go!</CardButton>
        </CardBottom>
      </ExploreCard>
    </ExploreStyles>
  )
}

export default Explore
