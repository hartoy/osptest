import React from 'react'
import Section from '../Sections/sections'
import SyllabiFilter from '../Filter/syllabi-filter'

const SyllabiFilterPage = (props) => {
  return (
    <Section forSingletons sinBot>
      <SyllabiFilter />
    </Section>
  )
}

export default SyllabiFilterPage
