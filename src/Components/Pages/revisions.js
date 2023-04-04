import React, { useState, useEffect } from 'react'
import { getWorkSearch, getFieldSearch } from '../../services/index.js'

import Section from '../Sections/sections'
import Head from '../Head/index'
import Search from '../Search/index'
import Explore from '../Explore/index'
import TableComp from '../Table/index'
import imgHead from '../Head/header-bg.png'
import { Link } from 'react-router-dom'

const Revisions = () => {
  const [dataFields, setDataFields] = useState([])
  const [dataWork, setDataWork] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('access')
    // console.log(token)
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    getFieldSearch(10, config)
      .then((resp) => {
        setDataFields(resp.fields)
      })
      .catch((error) => console.error(error))

    getWorkSearch(config)
      .then((resp) => {
        setDataWork(resp.works)
      })
      .catch((error) => console.error(error))
  }, [])

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
        <TableComp field tableData={dataFields} deskTitle marginRight="35px" />
        <TableComp workTable tableData={dataWork} alignEnd marginMob marginLeft="35px" />
      </Section>
    </>
  )
}

export default Revisions
