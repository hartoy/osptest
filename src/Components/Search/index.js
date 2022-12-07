import React, { useState, useEffect } from 'react'

import { SearchStyles, MobileSearch, DeskSearch } from './search-styles'
import Icon from '../Icons'
import { RevisionsTitle } from '../Title/title-styles'
import { getDataSearch } from '../../services/index.js'

const Search = (props) => {
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    getDataSearch()
      .then((resp) => setSearchData(resp))
      .catch((error) => console.error(error))
  }, [])

  function nameIconMarker(key) {
    return key
  }

  return (
    <>
      <SearchStyles>
        <MobileSearch>
          <RevisionsTitle mobile marginLeft="10px" marginTop="10px">
            Search
          </RevisionsTitle>
          <ul style={{ marginTop: '24px' }}>
            {Object.entries(searchData).map(([key, value]) => {
              return (
                <li key={key}>
                  <Icon name={nameIconMarker(key)} height="100%" />
                  <span>{key}</span>
                </li>
              )
            })}
          </ul>
        </MobileSearch>
        <DeskSearch>
          <RevisionsTitle desktop marginBottom="10px" paddingTop="25px" paddingLeft="40px">
            Search
          </RevisionsTitle>
          <ul>
            {Object.entries(searchData).map(([key, value]) => {
              return (
                <li key={key}>
                  <Icon name={nameIconMarker(key)} marginRight="18px" />
                  <p>
                    {key}
                    <span>{value.toLocaleString()}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        </DeskSearch>
      </SearchStyles>
    </>
  )
}

export default Search
