import React, { useState, useEffect } from 'react'
import { AccountStyles, Wrapper } from './accountiers-styles.js'
import { Title } from '../Title/title-styles'
import Card from '../Card/index.js'
import { getData } from '../../services/index.js'

const AccounTiers = () => {
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    getData()
      .then((resp) => setCardsData(resp))
      .catch((error) => console.error(error))
  }, [])

  return (
    <Wrapper>
      <Title desktop textAlign="center">
        ACCOUNT TIERS
      </Title>
      <Title mobile textAlign="center">
        ACCOUNT TIERS
      </Title>
      <AccountStyles>
        {cardsData.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.name}
              description={card.description}
              months={card.months_subscription}
              seats={card.seats}
              price={card.amount}
            />
          )
        })}
        <p>If you would like to discuss a custom subscription, please email us at</p>
      </AccountStyles>
    </Wrapper>
  )
}

export default AccounTiers

{
  /* <CardComponent data={card} /> */
}
