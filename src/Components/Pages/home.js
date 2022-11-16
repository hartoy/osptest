import React from 'react'

import Head from '../Head/index'
import Powered from '../Powered/index'
import Things from '../Things/index'
import Who from '../Who/index'
import AccounTiers from '../AccounTiers/index'
import Section from '../Sections/sections'

import imgHead from '../Head/header-bg.png'
import { TextHome } from '../utils'
const Home = () => {
  return (
    <>
      <Section backgroundImage={imgHead}>
        <Head title={TextHome.title} firstText={TextHome.firstText} secondText={TextHome.secondText} button={true} />
      </Section>
      <Section>
        <Powered />
      </Section>
      <Section bgColor="rgb(244, 245, 249)">
        <Things />
      </Section>
      <Section>
        <Who />
      </Section>
      <Section sinBot bgColor="rgb(244, 245, 249)">
        <AccounTiers />
      </Section>
    </>
  )
}

export default Home
