import React, { useState, useEffect, useCallback } from 'react'
import { useToggle } from 'react-use'

import {
  Wrapper,
  Column,
  BlueBox,
  TableHeader,
  TableTitle,
  BlueList,
  BlueListItem,
  LinkTo,
  Box,
  FilterText,
  BoxWrapper,
  FillterButton,
  ButtonDiv,
  SelectWrapper,
} from './filterpage-styles'
import TableComp from '../Table/index'
import { getFieldSearch, getCountries, getFieldsByQuery, testDinamic } from '../../services/index.js'
import Icon from '../Icons'
import SelectDropwDown from '../Select/select'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = []

const FieldFilter = () => {
  const [data, setData] = useState([])
  const [list, toggleList] = useToggle(false)
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState([])
  const [hideFilter, toggleHideFilter] = useToggle(true)
  const [forQuery, setForQuery] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState('')
  const [query, setQuery] = useState({
    countries: [],
    field_query: null,
  })

  const getApiConfig = () => {
    const token = localStorage.getItem('access')
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  }

  useEffect(() => {
    getCountries(getApiConfig())
      .then((resp) => {
        setCountries(resp.countries)
      })
      .catch((error) => console.error(error))
  }, [])

  const BlueHandler = () => {
    toggleList()
  }

  const HideFilter = () => {
    toggleHideFilter()
  }

  const countrySelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      countries: value,
    }))
  }, [])

  useEffect(() => {
    const isEmpty = Object.values(query).every(
      (value) =>
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
        (typeof value !== 'object' && value === '')
    )

    if (!isEmpty) {
      console.log('llamando por que hay pais', query.countries)
      console.log('llamando por que hay query_field', query.field_query)

      // crea una nueva copia del objeto state query
      const newQuery = { ...query }

      const countryIds = query.countries.map((country) => country.id)
      const countryNames = query.countries.map((country) => country.display_name)
      const fieldQuery = query.field_query?.value || ''

      console.log('countryNames', countryNames)
      console.log('countryIds', countryIds)
      console.log('fieldQuery', fieldQuery)

      // actualiza el objeto state query con los nuevos valores
      setQuery(newQuery)

      // llama al servicio testDinamic con los parámetros adecuados
      testDinamic(getApiConfig(), {
        country_query: countryNames,
        institution_country_codes: countryIds,
        field_query: fieldQuery,
      })
        .then((resp) => {
          setForQuery(true)
          setData(resp.fields)
          setTotal(resp.field_total)
          console.log('fields con algo', resp)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('no hay pais seleccionado')
      getFieldSearch(50, getApiConfig())
        .then((resp) => {
          setForQuery(false)
          setData(resp.fields)
          setTotal(resp.field_total)
          console.log('fields sin nadal', resp)
        })
        .catch((error) => console.error(error))
    }
  }, [query.countries, query.field_query])

  // FUNCION PARA LIMPIAR LA BUSQUEDA ///////////////////////

  const handleClearFilter = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState,
      countries: [],
    }))
  }
  // FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    setIsLoading(true)

    console.log('valor inputvalue', inputValue)

    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      field_query: {
        value: inputValue,
        label: inputValue,
      },
    }))

    getFieldsByQuery(getApiConfig(), newOption.value).then((resp) => {
      console.log('query resp', resp)
      setForQuery(true)
      setData(resp.fields)
      setIsLoading(false)
    })
  }

  // useEffect(() => {
  //   if (query.field_query === null || '') {
  //     console.log('field_query es "" o null ', query.field_query)
  //     setData(originalData)
  //     console.log('tabla original')
  //     setForQuery(false)
  //     setOptions([])
  //     setQuery((prev) => ({
  //       ...prev,
  //       field_query: {
  //         value: '',
  //         label: '',
  //       },
  //     }))
  //   }
  // }, [query.field_query])

  return (
    <Wrapper>
      <Column width="30%">
        <BlueBox onClick={BlueHandler} list={list}>
          <BlueListItem sinB>
            <LinkTo>
              <Icon flex name="SingletonRank" marginRight="25px" />
              FIELDS
            </LinkTo>
          </BlueListItem>
          {list && (
            <BlueList>
              <BlueListItem>
                <LinkTo href="/syllaby">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  SYLLABI
                </LinkTo>
              </BlueListItem>
              <BlueListItem>
                <LinkTo href="/titles">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  TITLES
                </LinkTo>
              </BlueListItem>
              <BlueListItem>
                <LinkTo href="/authors">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  AUTHORS
                </LinkTo>
              </BlueListItem>
              <BlueListItem>
                <LinkTo href="/schools">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  SCHOOLS
                </LinkTo>
              </BlueListItem>
              <BlueListItem>
                <LinkTo href="/countries">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  COUNTRIES
                </LinkTo>
              </BlueListItem>
              <BlueListItem sinB>
                <LinkTo href="/publishers">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  PUBLISHERS
                </LinkTo>
              </BlueListItem>
            </BlueList>
          )}
        </BlueBox>
        <Box>
          <BoxWrapper onClick={HideFilter}>
            Filter Syllaby
            <FilterText>Expand</FilterText>
          </BoxWrapper>
          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={countries}
              isMulti
              getOptionLabel={(countries) => countries.country}
              getOptionValue={(countries) => countries.id}
              onChange={countrySelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.countries}
              style={{ padding: '24px 20px' }}
              placeholder="by Countries"
            />
          </SelectWrapper>
          {query.countries !== 0 && (
            <ButtonDiv>
              <FillterButton onClick={handleClearFilter}>Clear Filter</FillterButton>
            </ButtonDiv>
          )}
        </Box>
      </Column>
      <Column white boxShadow width="67%">
        <TableHeader>
          <TableTitle>
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Fields
          </TableTitle>

          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                field_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.field_query}
            placeholder={'Search Fields'}
          />
        </TableHeader>
        {forQuery ? (
          <TableComp tableData={data} field flexTable bigTable forQuery />
        ) : (
          <TableComp tableData={data} field flexTable bigTable />
        )}
      </Column>
    </Wrapper>
  )
}

export default FieldFilter
