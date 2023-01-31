import React from 'react'

import Section from '../Sections/sections'
import Head from '../Head/index'
import Search from '../Search/index'
import Explore from '../Explore/index'
import TableComp from '../Table/index'
import imgHead from '../Head/header-bg.png'
import { Link } from 'react-router-dom'

const Revisions = () => {
  return (
    <>
      <Section height="372px" center backgroundImage={imgHead}>
        <Head height="372px" title="Welcome to Open Syllabus Analytics!" />
      </Section>
      <Section special>
        <Search />
        <Explore />
      </Section>
      <Section special>
        <TableComp field />
        <TableComp workTable alignEnd marginMob />
      </Section>
    </>
  )
}

export default Revisions
