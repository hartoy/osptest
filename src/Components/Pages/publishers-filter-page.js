import React from 'react'
import Section from '../Sections/sections'
import PublishersFilter from '../Filter/publishers-filter'

const PublishersFilterPage = (props) => {
  return (
    <Section forSingletons sinBot>
      <PublishersFilter />
    </Section>
  )
}

export default PublishersFilterPage
