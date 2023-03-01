import React from 'react'
import Section from '../Sections/sections'
import SingletonBox from '../Singleton/index'

const FieldSingletonPage = (props) => {
  return (
    <Section forSingletons sinBot>
      <SingletonBox fields />
    </Section>
  )
}

export default FieldSingletonPage
