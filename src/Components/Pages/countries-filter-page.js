import React from 'react'
import Section from '../Sections/sections'
import CountriesFilter from '../Filter/countries-filter'

const CountriesFilterPage = (props) => {
  return (
    <Section forSingletons sinBot>
      <CountriesFilter />
    </Section>
  )
}

export default CountriesFilterPage
