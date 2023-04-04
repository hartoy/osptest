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
import { getCountries, FilterCountriesDinamic, getFieldSearch } from '../../services/index.js'
import Icon from '../Icons'
import SelectDropwDown from '../Select/select'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = []

const getApiConfig = () => {
  const token = localStorage.getItem('access')
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

const CountriesFilter = () => {
  const [data, setData] = useState([])
  const [hideFilter, toggleHideFilter] = useToggle(true)
  const [list, toggleList] = useToggle(false)
  const [fields, setFields] = useState([])
  const [filterValue, setFilterValue] = useState([])
  const [forCountriesFilter, setforCountriesFilter] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState('')
  const [query, setQuery] = useState({
    fields: [],
    countries_query: null,
  })

  useEffect(() => {
    getFieldSearch(50, getApiConfig())
      .then((resp) => {
        setFields(resp.fields)
        console.log('respuesta de fields search', resp.fields)
      })
      .catch((error) => console.error(error))
  }, [])

  const BlueHandler = () => {
    toggleList()
  }

  const HideFilter = () => {
    toggleHideFilter()
  }

  const fieldSelect = useCallback((value) => {
    console.log('que llega a fieldSelect', value)
    setQuery((prevQuery) => ({
      ...prevQuery,
      fields: value,
    }))
  }, [])

  useEffect(() => {
    console.log('query', query)

    const isEmpty = Object.values(query).every(
      (value) =>
        value === null ||
        value === undefined ||
        (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
        (typeof value !== 'object' && value === '')
    )

    if (isEmpty) {
      console.log('no hay field seleccionado')
      getCountries(getApiConfig(), 50)
        .then((resp) => {
          setforCountriesFilter(false)
          setData(resp.countries)
          setTotal(resp.country_total)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('tiene algo')
      const fieldsIds = query.fields.map((field) => field.id)
      const fieldsNames = query.fields.map((field) => field.display_name)
      const countryQuery = query.countries_query?.value || ''

      console.log('fieldsIds', fieldsIds)
      console.log('fieldsNames', fieldsNames)
      console.log('countryQuery', countryQuery)

      // actualiza el objeto state query con los nuevos valores
      // setQuery(newQuery)

      FilterCountriesDinamic(getApiConfig(), {
        field_display_name: fieldsNames,
        field_id: fieldsIds,
        country_query: countryQuery,
      })
        .then((resp) => {
          setforCountriesFilter(true)
          setData(resp.countries)
          setTotal(resp.country_total)
        })
        .catch((error) => console.error(error))
    }
  }, [query])

  // FUNCION PARA LIMPIAR LA BUSQUEDA ///////////////////////

  const handleClearFilter = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState,
      fields: [],
    }))
  }
  /////////////////////// FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    //setIsLoading(true)
    console.log('valor inputvalue', inputValue)
    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      countries_query: {
        value: inputValue,
        label: inputValue,
      },
    }))
    setIsLoading(false)
  }

  useEffect(() => {
    const isEmpty = Object.values(query).every(
      (value) =>
        value === null ||
        value === undefined ||
        (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
        (typeof value !== 'object' && value === '')
    )

    if (isEmpty) {
      console.log('no tiene nada')
    } else {
      console.log('tiene algo')
    }
  }, [query])

  useEffect(() => {
    console.log('esto es query', query)
  }, [query])

  return (
    <Wrapper>
      <Column width="30%">
        <BlueBox onClick={BlueHandler} list={list}>
          <BlueListItem sinB>
            <LinkTo>
              <Icon flex name="SingletonRank" marginRight="25px" />
              COUNTRIES
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
                <LinkTo href="/fields">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  FIELDS
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
              options={fields}
              isMulti
              getOptionLabel={(fields) => fields.display_name}
              getOptionValue={(fields) => fields.id}
              onChange={fieldSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.fields}
              style={{ padding: '24px 20px' }}
              placeholder="by Field"
            />
          </SelectWrapper>

          {Object.values(query).every(
            (value) =>
              value === undefined ||
              value === null ||
              (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
              (typeof value !== 'object' && value === '')
          ) ? null : (
            <ButtonDiv>
              <FillterButton onClick={handleClearFilter}>Clear Filter</FillterButton>
            </ButtonDiv>
          )}
        </Box>
      </Column>
      <Column white boxShadow width="67%">
        <TableHeader>
          <TableTitle>
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Countries
          </TableTitle>

          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                countries_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.countries_query}
            placeholder="Search Countries"
          />
        </TableHeader>
        {forCountriesFilter ? (
          <TableComp tableData={data} workTable bigTable forCountriesFilter />
        ) : (
          <TableComp tableData={data} workTable bigTable forCountriesFilter />
        )}
      </Column>
    </Wrapper>
  )
}

export default CountriesFilter
