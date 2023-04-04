import React, { useState, useEffect, useCallback } from 'react'
import { useToggle } from 'react-use'

import { usStatesList, yearsData, institutionData, publicationTypeData } from './data-filter'
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
import {
  getFieldSearch,
  getCountries,
  getTitlesBasic,
  getAuthors,
  getSchools,
  getSyllabi,
  SyllabiDinamic,
} from '../../services/index.js'
import Icon from '../Icons'
import SelectDropwDown from '../Select/select'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const createOptionConcept = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = []

const SyllabiFilter = () => {
  const [data, setData] = useState([])
  const [list, toggleList] = useToggle(false)

  const [countries, setCountries] = useState([])
  const [institutions, setInstitutions] = useState([])
  const [titles, setTitles] = useState([])
  const [authors, setAuthors] = useState([])
  const [fields, setFields] = useState([])
  const [usaStates, setUsaStates] = useState(usStatesList)
  const [years, setYears] = useState(yearsData)
  const [schoolType, setSchoolType] = useState(institutionData)
  const [publiType, setPubliType] = useState([publicationTypeData])

  const [filterValue, setFilterValue] = useState([])
  const [hideFilter, toggleHideFilter] = useToggle(true)
  const [forQuery, setForQuery] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [optionsConcept, setOptionsConcept] = useState(defaultOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState('')

  const [query, setQuery] = useState({
    titles: null,
    authors: [],
    institutions: [],
    fields: [],
    countries: [],
    state: null,
    startYear: null,
    endYear: null,
    schoolType: null,
    syllabi_query: null,
  })

  const getApiConfig = () => {
    const token = localStorage.getItem('access')
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  }

  ///SE MONTA EL COMPONENTE TRAGIO LA DATA DE LOS FILTROS //////////

  useEffect(() => {
    Promise.all([
      getCountries(getApiConfig()),
      getFieldSearch(50, getApiConfig()),
      getAuthors(getApiConfig()),
      getTitlesBasic(getApiConfig()),
      getSchools(getApiConfig()),
    ])
      .then(([countriesResp, fieldsResp, authorsResp, titlesResp, schoolsResp]) => {
        setCountries(countriesResp.countries)
        setFields(fieldsResp.fields)
        setAuthors(authorsResp.authors)
        setTitles(titlesResp.works)
        setInstitutions(schoolsResp.institutions)
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
  //FUNCIONES DE LOS SELECT DE LA IZQUIERDA PARA ENTRAR DATA /////////////

  const institutionsSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      institutions: value,
    }))
  }, [])
  const fieldsSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      fields: value,
    }))
  }, [])

  const countriesSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      countries: value,
    }))
  }, [])

  const usaStateSelect = useCallback((value) => {
    console.log('value que llega de states', value)
    setQuery((prevQuery) => ({
      ...prevQuery,
      state: value,
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
  const asignedAuthorSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      authors: value,
    }))
  }, [])

  const asignedTitleSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      titles: value,
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
      console.log('va a llamar por que query tiene algo', query)

      const fieldsId = query.fields.map((field) => field.id)
      console.log('fieldsId', fieldsId)
      const authorsId = query.authors.map((author) => author.id)
      console.log('authorsId', authorsId)
      const countryCode = query.countries.map((country) => country.id)
      console.log('countryCode', countryCode)
      const institutionIds = query.institutions.map((institution) => institution.id)
      console.log('institutionIds', institutionIds)
      const institutionTypes = query.schoolType?.id || ''
      console.log('institutionTypes', institutionTypes)
      const startYear = query.startYear?.value || ''
      console.log('startYear', startYear)
      const endYear = query.endYear?.value || ''
      console.log('endYear', endYear)
      const instStateCode = query.state?.id || ''
      console.log('instStateCode', instStateCode)
      const workId = query.titles?.id || ''
      console.log('workId', workId)
      const institutionName = query.institutions.map((institution) => institution.display_name)
      console.log('institutionName', institutionName)
      const workName = query.titles?.title || ''
      console.log('wworkName', workName)
      const authorsName = query.authors.map((author) => author.display_name)
      console.log('authorsName', authorsName)
      const fieldQuery = query.fields.map((field) => field.display_name)
      console.log('fieldQuery', fieldQuery)
      const countriesQuery = query.countries.map((country) => country.display_name)
      console.log('countriesQuery', countriesQuery)
      const sillabusQuery = query.syllabi_query?.value || ''
      console.log('sillabusQuery', sillabusQuery)

      SyllabiDinamic(getApiConfig(), {
        field_ids: fieldsId,
        author_ids: authorsId,
        institution_country_codes: countryCode,
        institution_ids: institutionIds,
        institution_types: institutionTypes,
        syllabus_year_start: startYear,
        syllabus_year_end: endYear,
        institution_state_codes: instStateCode,
        work_ids: workId,
        institution_query: institutionName,
        work_query: workName,
        author_query: authorsName,
        field_query: fieldQuery,
        country_query: countriesQuery,
        syllabus_query: sillabusQuery,
      })
        .then((resp) => {
          setForQuery(true)
          setData(resp.syllabi)
          setTotal(resp.syllabus_total)
          console.log('llamada final de busqueda', resp)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('no hay nada en query')
      getSyllabi(getApiConfig())
        .then((resp) => {
          setForQuery(false)
          setData(resp.syllabi)
          setTotal(resp.syllabus_total)
          console.log('tabla original ', resp)
        })
        .catch((error) => console.error(error))
    }
  }, [query])

  // FUNCION PARA LIMPIAR LA BUSQUEDA ///////////////////////

  const handleClearFilter = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      titles: null,
      authors: [],
      institutions: [],
      fields: [],
      countries: [],
      state: null,
      startYear: null,
      endYear: null,
      schoolType: null,
      syllabi_query: null,
    }))
  }

  /////////////////////////////////////////////////////////////////
  // FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    // setIsLoading(true)

    console.log('valor input syllabi_query query', inputValue)

    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      syllabi_query: {
        value: inputValue,
        label: inputValue,
      },
    }))
  }

  return (
    <Wrapper>
      <Column width="30%">
        <BlueBox onClick={BlueHandler} list={list}>
          <BlueListItem sinB>
            <LinkTo>
              <Icon flex name="SingletonRank" marginRight="25px" />
              SYLLABI
            </LinkTo>
          </BlueListItem>
          {list && (
            <BlueList>
              <BlueListItem>
                <LinkTo href="/fields">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  FIELDS
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
              options={titles}
              getOptionLabel={(titles) => titles.display_name}
              getOptionValue={(titles) => titles.id}
              onChange={asignedTitleSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.titles}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Asigned Title"
            />
          </SelectWrapper>

          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={authors}
              isMulti
              getOptionLabel={(authors) => authors.display_name}
              getOptionValue={(authors) => authors.id}
              onChange={asignedAuthorSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.authors}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Asigned Author"
            />
          </SelectWrapper>

          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={institutions}
              isMulti
              getOptionLabel={(institutions) => institutions.display_name}
              getOptionValue={(institutions) => institutions.id}
              onChange={institutionsSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.institutions}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Institution"
            />
          </SelectWrapper>
          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={fields}
              isMulti
              getOptionLabel={(fields) => fields.display_name}
              getOptionValue={(fields) => fields.id}
              onChange={fieldsSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.fields}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Fields"
            />
          </SelectWrapper>

          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={countries}
              isMulti
              getOptionLabel={(countries) => countries.display_name}
              getOptionValue={(countries) => countries.id}
              onChange={countriesSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.countries}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by Country"
            />
          </SelectWrapper>

          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={usaStates}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={usaStateSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.state}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="by State"
            />
          </SelectWrapper>

          <SelectWrapper inLine hideFilter={hideFilter}>
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
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: '48%',
                }),
              }}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="Start year"
            />

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
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: '48%',
                }),
              }}
              style={{ padding: '24px 20px', width: '100%' }}
              placeholder="End year"
            />
          </SelectWrapper>

          <SelectWrapper hideFilter={hideFilter}>
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
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Syllabi
          </TableTitle>

          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                syllabi_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.syllabi_query}
            placeholder="Search Syllabi"
          />
        </TableHeader>
        {forQuery ? (
          <TableComp tableData={data} syllabiFilterTable flexTable bigTable forQuery />
        ) : (
          <TableComp tableData={data} syllabiFilterTable flexTable bigTable />
        )}
      </Column>
    </Wrapper>
  )
}
export default SyllabiFilter
