import React from 'react'
import Section from '../Sections/sections'
import SingletonBox from '../Singleton/index'

const SingletonPage = (props) => {
  return (
    <Section forSingletons sinBot>
      <SingletonBox titles />
    </Section>
  )
}

export default SingletonPage
