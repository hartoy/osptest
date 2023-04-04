import React from 'react'
import Section from '../Sections/sections'
import SchoolsFilter from '../Filter/schools-filter'

const SchoolsFilterPage = (props) => {
  return (
    <Section forSingletons sinBot>
      <SchoolsFilter />
    </Section>
  )
}

export default SchoolsFilterPage
