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
import { getFieldSearch, getCountries, getAuthors, getSchools, AuthorsDinamic } from '../../services/index.js'
import Icon from '../Icons'
import SelectDropwDown from '../Select/select'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = []

const AuthorsFilter = () => {
  const [data, setData] = useState([])

  const [list, toggleList] = useToggle(false)
  const [filterValue, setFilterValue] = useState([])
  const [hideFilter, toggleHideFilter] = useToggle(true)
  const [forQuery, setForQuery] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [isLoading, setIsLoading] = useState(false)

  const [institutions, setInstitutions] = useState([])
  const [fields, setFields] = useState([])
  const [countries, setCountries] = useState([])
  const [usaStates, setUsaStates] = useState(usStatesList)
  const [years, setYears] = useState(yearsData)
  const [schoolType, setSchoolType] = useState(institutionData)
  const [publiType, setPubliType] = useState([publicationTypeData])
  const [total, setTotal] = useState('')

  const [query, setQuery] = useState({
    institutions: [],
    fields: [],
    countries: [],
    state: null,
    startYear: null,
    endYear: null,
    schoolType: null,
    publiType: null,
    authors_query: null,
  })

  const MainfilterableProps = ['institutions', 'fields', 'countries', 'state', 'startYear', 'endYear', 'schoolType']
  const mainClearFilterButton = MainfilterableProps.some(
    (prop) =>
      query[prop] !== null &&
      query[prop] !== undefined &&
      (Array.isArray(query[prop]) ? query[prop].length > 0 : query[prop] !== '')
  )

  const getApiConfig = () => {
    const token = localStorage.getItem('access')
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  }

  ///SE MONTA EL COMPONENTE TRAGIO LA DATA DE LOS FILTROS /////////////

  useEffect(() => {
    Promise.all([getSchools(getApiConfig()), getCountries(getApiConfig()), getFieldSearch(50, getApiConfig())])
      .then((responses) => {
        const [schoolsResp, countriesResp, fieldsResp] = responses
        setInstitutions(schoolsResp.institutions)
        setCountries(countriesResp.countries)
        setFields(fieldsResp.fields)
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

  const instSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      institutions: value,
    }))
  }, [])

  const countrySelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      countries: value,
    }))
  }, [])

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
  const publiTypeSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      publiType: value,
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
      console.log('que hay en query', query)

      // const newQuery = { ...query }

      const fieldId = query.fields.map((fields) => fields.id)
      const fieldName = query.fields.map((fields) => fields.display_name)
      const countryIds = query.countries.map((idCountry) => idCountry.id)
      const institutionsId = query.institutions.map((inst) => inst.id)
      const institutionsName = query.institutions.map((inst) => inst.display_name)
      const schoolType = query.schoolType?.id || ''
      const startYear = query.startYear?.value || ''
      const endYear = query.endYear?.value || ''
      const stateId = query.state?.id || ''
      const publiType = query.publiType?.id || ''
      const countryNames = query.countries.map((country) => country.country)
      const wordSearch = query.authors_query?.value || ''

      console.log('fieldId:', fieldId)
      console.log('fieldName:', institutionsId)
      console.log('countryNames:', countryNames)
      console.log('countryIds:', countryIds)
      console.log('stateId:', stateId)
      console.log('startYear:', startYear)
      console.log('endYear:', endYear)
      console.log('schoolType:', schoolType)
      console.log('wordSearch:', wordSearch)
      console.log('publiType:', publiType)

      // setQuery(newQuery)

      AuthorsDinamic(getApiConfig(), {
        field_ids: fieldId,
        institution_country_codes: countryIds,
        institution_ids: institutionsId,
        institution_types: schoolType,
        work_year_start: startYear,
        work_year_end: endYear,
        institution_state_codes: stateId,
        work_publication_types: publiType,
        institution_query: institutionsName,
        author_query: wordSearch,
        field_query: fieldName,
        country_query: countryNames,
      })
        .then((resp) => {
          console.log(resp)
          setForQuery(true)
          setData(resp.authors)

          setTotal(resp.author_total)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('no tiene nada')
      getAuthors(getApiConfig())
        .then((resp) => {
          setForQuery(false)
          setData(resp.authors)

          console.log('authors data', resp.authors)
          setTotal(resp.author_total)
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
      institutions: [],
      fields: [],
      countries: [],
      state: null,
      startYear: null,
      endYear: null,
      schoolType: null,
    }))
  }

  const handleClearFilterTitles = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState, // Copiar los valores actuales del estado
      publiType: null,
    }))
  }

  // FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    //setIsLoading(true)

    console.log('valor input value', inputValue)

    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      authors_query: {
        value: inputValue,
        label: inputValue,
      },
    }))
  }

  ////////////////////////////////////////////////////////////////

  return (
    <Wrapper>
      <Column width="30%">
        <BlueBox onClick={BlueHandler} list={list}>
          <BlueListItem sinB>
            <LinkTo>
              <Icon flex name="SingletonRank" marginRight="25px" />
              AUTHORS
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
              options={institutions}
              isMulti
              getOptionLabel={(institutions) => institutions.display_name}
              getOptionValue={(institutions) => institutions.id}
              onChange={instSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.institutions}
              style={{ padding: '24px 20px' }}
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
              onChange={fieldSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.fields}
              style={{ padding: '24px 20px' }}
              placeholder="by Field"
            />
          </SelectWrapper>
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
              style={{ padding: '24px 20px' }}
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
              style={{ padding: '24px 20px' }}
              placeholder="by School type"
            />
          </SelectWrapper>
          {mainClearFilterButton ? (
            <ButtonDiv>
              <FillterButton onClick={handleClearFilter}>Clear Filter</FillterButton>
            </ButtonDiv>
          ) : null}
        </Box>
        <Box>
          <BoxWrapper onClick={HideFilter}>
            Filter Titles
            <FilterText>Expand</FilterText>
          </BoxWrapper>

          <SelectDropwDown
            selectType="select"
            options={publiType[0]}
            getOptionLabel={(publiType) => publiType.name}
            getOptionValue={(publiType) => publiType.name}
            onChange={publiTypeSelect}
            isSercheable
            isClearable={true}
            escapeClearsValue
            value={query.publiType}
            style={{ padding: '24px 20px' }}
            placeholder="by Publication Type"
          />
          {query.publiType !== null ? (
            <ButtonDiv>
              <FillterButton onClick={handleClearFilterTitles}>Clear Filter</FillterButton>
            </ButtonDiv>
          ) : (
            ''
          )}
        </Box>
      </Column>
      <Column white boxShadow width="67%">
        <TableHeader>
          <TableTitle>
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Authors
          </TableTitle>

          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                authors_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.authors_query}
            placeholder="Search Authors"
          />
        </TableHeader>
        {forQuery ? (
          <TableComp tableData={data} singleton forAuthorsFilter flexTable bigTable forQuery />
        ) : (
          <TableComp tableData={data} singleton forAuthorsFilter flexTable bigTable />
        )}
      </Column>
    </Wrapper>
  )
}

export default AuthorsFilter
