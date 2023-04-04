import React, { useState, useEffect, useCallback } from 'react'
import { useToggle } from 'react-use'

import { usStatesList, yearsData, institutionData } from './data-filter'
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
import { getFieldSearch, getCountries, FilterSchoolsDinamic, getSchools } from '../../services/index.js'
import Icon from '../Icons'
import SelectDropwDown from '../Select/select'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = []

const SchoolsFilter = () => {
  const [data, setData] = useState([])
  const [list, toggleList] = useToggle(false)
  const [filterValue, setFilterValue] = useState([])
  const [hideFilter, toggleHideFilter] = useToggle(true)
  const [forQuery, setForQuery] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [isLoading, setIsLoading] = useState(false)

  const [countries, setCountries] = useState([])
  const [fields, setFields] = useState([])
  const [usaStates, setUsaStates] = useState(usStatesList)
  const [years, setYears] = useState(yearsData)
  const [schoolType, setSchoolType] = useState(institutionData)
  const [total, setTotal] = useState('')

  const [query, setQuery] = useState({
    fields: [],
    countries: [],
    states: null,
    startYear: null,
    endYear: null,
    schoolType: null,
    school_query: null,
  })

  const getApiConfig = () => {
    const token = localStorage.getItem('access')
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  }

  ///SE MONTA EL COMPONENTE TRAGIO LA DATA DE LOS FILTROS /////////////

  useEffect(() => {
    Promise.all([getCountries(getApiConfig()), getFieldSearch(50, getApiConfig())])
      .then(([countries, fields]) => {
        setCountries(countries.countries)
        setFields(fields.fields)
      })
      .catch((error) => console.error(error))
  }, [])

  ////////////////////////////////////////////////////////////////////

  ///FUNCIONES PARA MANEJAR MENUES /////////////

  const BlueHandler = () => {
    toggleList()
  }

  const HideFilter = () => {
    toggleHideFilter()
  }
  ///FUNCIONES DE LOS SELECT DE LA IZQUIERDA PARA ENTRAR DATA /////////////

  function countrySelect(value) {
    console.log('value de country,', value)
    setQuery((prevQuery) => ({
      ...prevQuery,
      countries: value,
    }))
  }

  const fieldSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      fields: value,
    }))
  }, [])

  const usaStateSelect = useCallback((value) => {
    console.log('value que llega de states', value)
    setQuery((prevQuery) => ({
      ...prevQuery,
      states: value,
    }))
  }, [])

  const startYearSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      startYear: value,
    }))
  }, [])

  const endYearSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      endYear: value,
    }))
  }, [])

  const schoolTypeSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      schoolType: value,
    }))
  }, [])

  ////////////////////////////////////////////////////////////////

  //FUNCION PARA FILTRAR TODO ///////////////////////////////////

  useEffect(() => {
    const isEmpty = Object.values(query).every(
      (value) =>
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
        (typeof value !== 'object' && value === '')
    )

    if (!isEmpty) {
      console.log('va a llamar por que query tiene data', query)

      // const newQuery = { ...query }

      const fieldName = query.fields.map((fields) => fields.display_name)
      const fieldId = query.fields.map((fields) => fields.id)
      const countryNames = query.countries.map((country) => country.country)
      const countryIds = query.countries.map((idCountry) => idCountry.id)
      const stateId = query.states?.id || ''
      const startYear = query.startYear?.value || ''
      const endYear = query.endYear?.value || ''
      const schoolType = query.schoolType?.id || ''
      const wordSearch = query.school_query?.value || ''

      console.log('fieldId:', fieldId)
      console.log('fieldName:', fieldName)
      console.log('countryNames:', countryNames)
      console.log('countryIds:', countryIds)
      console.log('stateId:', stateId)
      console.log('startYear:', startYear)
      console.log('endYear:', endYear)
      console.log('schoolType:', schoolType)
      console.log('wordSearch:', wordSearch)

      // setQuery(newQuery)

      FilterSchoolsDinamic(getApiConfig(), {
        field_ids: fieldId,
        institution_country_codes: countryIds,
        institution_types: schoolType,
        syllabus_year_start: startYear,
        syllabus_year_end: endYear,
        institution_state_codes: stateId,
        field_query: fieldName,
        country_query: countryNames,
        institution_query: wordSearch,
      })
        .then((resp) => {
          setForQuery(true)
          setData(resp.institutions)
          setTotal(resp.institution_total)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('no tiene nada')
      getSchools(getApiConfig())
        .then((resp) => {
          setForQuery(false)
          setData(resp.institutions)
          console.log('schools data', resp.institutions)
          setTotal(resp.institution_total)
        })
        .catch((error) => console.error(error))
    }
  }, [query])

  ////////////////////////////////////////////////////////////////

  // FUNCION PARA LIMPIAR LA BUSQUEDA ///////////////////////

  const handleClearFilter = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState,
      fields: [],
      countries: [],
      states: [],
      startYear: null,
      endYear: null,
      schoolType: null,
    }))
  }

  // FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    // setIsLoading(true)

    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      school_query: {
        value: inputValue,
        label: inputValue,
      },
    }))

    // getFieldsByQuery(getApiConfig(), newOption.value).then((resp) => {
    //   console.log('query resp', resp)
    //   setForQuery(true)
    //   setData(resp.fields)
    //   setIsLoading(false)
    // })
  }

  ////////////////////////////////////////////////////////////////

  ////SI LA BUSQUEDA DEL QUERY QUEDA VACIA////////////////////////

  // useEffect(() => {
  //   if (query.school_query === null || '') {
  //     console.log('field_school es "" o null ', query.school_query)
  //     setData(originalData)
  //     console.log('tabla original')
  //     setForQuery(false)
  //     setOptions([])
  //     setQuery((prev) => ({
  //       ...prev,
  //       school_query: {
  //         value: '',
  //         label: '',
  //       },
  //     }))
  //   }
  // }, [query.school_query])

  return (
    <Wrapper>
      <Column width="30%">
        <BlueBox onClick={BlueHandler} list={list}>
          <BlueListItem sinB>
            <LinkTo>
              <Icon flex name="SingletonRank" marginRight="25px" />
              SCHOOLS
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
                <LinkTo href="/fields">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  FIELDS
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
            {/* <Select
              options={fields}
              isMulti
              getOptionLabel={(fields) => fields.display_name}
              getOptionValue={(fields) => fields.id}
              onChange={fieldSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              noOptionsMessage={() => 'No country was found'}
              value={query.fields}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Field"
            /> */}
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
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Field"
            />
          </SelectWrapper>
          <SelectWrapper hideFilter={hideFilter}>
            {/* <Select
              options={countries}
              isMulti
              getOptionLabel={(countries) => countries.country}
              getOptionValue={(countries) => countries.id}
              onChange={countrySelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              noOptionsMessage={() => 'No country was found'}
              value={query.countries}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Country"
            /> */}
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
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Country"
            />
          </SelectWrapper>

          <SelectWrapper hideFilter={hideFilter}>
            {/* <Select
              options={usaStates}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={usaStateSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              noOptionsMessage={() => 'No country was found'}
              value={query.states}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by State"
            /> */}
            <SelectDropwDown
              selectType="select"
              options={usaStates}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={usaStateSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.states}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by State"
            />
          </SelectWrapper>
          <SelectWrapper inLine hideFilter={hideFilter}>
            {/* <Select
              options={yearsData.map((year) => ({ value: year, label: year }))}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              onChange={startYearSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              noOptionsMessage={() => 'No country was found'}
              value={query.startYear}
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: '48%',
                }),
              }}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="Start year"
            /> */}
            <SelectDropwDown
              selectType="select"
              options={yearsData.map((year) => ({ value: year, label: year }))}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              onChange={startYearSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.startYear}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="Start year"
            />
            {/* <Select
              options={yearsData.map((year) => ({ value: year, label: year }))}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              onChange={endYearSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              noOptionsMessage={() => 'No country was found'}
              value={query.endYear}
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: '48%',
                }),
              }}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="End year"
            /> */}
            <SelectDropwDown
              selectType="select"
              options={yearsData.map((year) => ({ value: year, label: year }))}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              onChange={endYearSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.endYear}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="End year"
            />
          </SelectWrapper>
          <SelectWrapper hideFilter={hideFilter}>
            {/* <Select
              options={schoolType}
              getOptionLabel={(schoolType) => schoolType.name}
              getOptionValue={(schoolType) => schoolType.id}
              onChange={schoolTypeSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              noOptionsMessage={() => 'No country was found'}
              value={query.schoolType}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by School type"
            /> */}
            <SelectDropwDown
              selectType="select"
              options={schoolType}
              getOptionLabel={(schoolType) => schoolType.name}
              getOptionValue={(schoolType) => schoolType.id}
              onChange={schoolTypeSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.schoolType}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by School type"
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
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Schools
          </TableTitle>

          {/* <CreatableSelect
            isClearable
            isDisabled={isLoading}
            isLoading={isLoading}
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                school_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.school_query}
            components={{
              DropdownIndicator: () => null,
            }}
            placeholder="Search Schools"
          /> */}
          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                school_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.school_query}
            placeholder="Search Schools"
          />
        </TableHeader>
        {forQuery ? (
          <TableComp tableData={data} singleton forSchoolsFilter flexTable bigTable forQuery />
        ) : (
          <TableComp tableData={data} singleton forSchoolsFilter flexTable bigTable />
        )}
      </Column>
    </Wrapper>
  )
}

export default SchoolsFilter
