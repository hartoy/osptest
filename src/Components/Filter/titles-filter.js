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
  getSchools,
  getAuthors,
  getWorkSearchBig,
  TitlesDinamic,
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

const TitlesFilter = () => {
  const [data, setData] = useState([])
  const [list, toggleList] = useToggle(false)

  const [countries, setCountries] = useState([])
  const [institutions, setInstitutions] = useState([])
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
    concept_query: null,
    institutions: [],
    fields: [],
    countries: [],
    state: null,
    startYear: null,
    endYear: null,
    schoolType: null,
    titles_query: null,
    authors: [],
    publiType: null,
  })

  const MainfilterableProps = [
    'concept_query',
    'countries',
    'endYear',
    'fields',
    'institutions',
    'schoolType',
    'startYear',
    'state',
  ]
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

  ///SE MONTA EL COMPONENTE TRAGIO LA DATA DE LOS FILTROS //////////

  useEffect(() => {
    Promise.all([
      getCountries(getApiConfig()),
      getFieldSearch(50, getApiConfig()),
      getSchools(getApiConfig()),
      getAuthors(getApiConfig()),
    ])
      .then(([countries, fields, schools, authors]) => {
        setCountries(countries.countries)
        setFields(fields.fields)
        setInstitutions(schools.institutions)
        setAuthors(authors.authors)
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
  const authorsSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      authors: value,
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
    console.log('query', query)

    const isEmpty = Object.values(query).every(
      (value) =>
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
        (typeof value !== 'object' && value === '')
    )

    if (!isEmpty) {
      console.log('va a llamar por que query tiene algo')
      console.log('query', query)
      // crea una nueva copia del objeto state query
      // const newQuery = { ...query }
      const authorsId = query.authors.map((author) => author.id)
      console.log('authorsId', authorsId)
      const countryCode = query.countries.map((country) => country.id)
      console.log('countryCode', countryCode)
      const institutionIds = query.institutions.map((institution) => institution.id)
      console.log('institutionIds', institutionIds)
      const institutionTypes = query.schoolType?.id || ''
      console.log('institutionTypes', institutionTypes)
      const conceptQuery = query.concept_query?.value || ''
      console.log('conceptQuery', conceptQuery)
      const startYear = query.startYear?.value || ''
      console.log('startYear', startYear)
      const endYear = query.endYear?.value || ''
      console.log('endYear', endYear)
      const instStateCode = query.state?.id || ''
      console.log('instStateCode', instStateCode)
      const workPubliType = query.publiType?.id || ''
      console.log('workPubliType', workPubliType)
      const institutionName = query.institutions.map((institution) => institution.display_name)
      console.log('institutionName', institutionName)
      const titleWordSearch = query.titles_query?.value || ''
      console.log('titleWordSearch', titleWordSearch)
      const authorsName = query.authors.map((author) => author.display_name)
      console.log('authorsName', authorsName)
      const fieldQuery = query.fields.map((field) => field.display_name)
      console.log('fieldQuery', fieldQuery)
      const countriesQuery = query.countries.map((country) => country.display_name)
      console.log('countriesQuery', countriesQuery)

      // actualiza el objeto state query con los nuevos valores
      // setQuery(newQuery)

      TitlesDinamic(getApiConfig(), {
        author_ids: authorsId,
        institution_country_codes: countryCode,
        institution_ids: institutionIds,
        institution_types: institutionTypes,
        syllabus_query: conceptQuery,
        work_year_start: startYear,
        work_year_end: endYear,
        institution_state_codes: instStateCode,
        work_publication_types: workPubliType,
        institution_query: institutionName,
        work_query: titleWordSearch,
        author_query: authorsName,
        field_query: fieldQuery,
        country_query: countriesQuery,
      })
        .then((resp) => {
          setForQuery(true)
          setData(resp.works)
          setTotal(resp.work_total)
          console.log('llamada final de busqueda', resp)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('no hay nada en query')
      getWorkSearchBig(getApiConfig())
        .then((resp) => {
          setForQuery(false)
          setData(resp.works)
          setTotal(resp.work_total)
          console.log('tabla original', resp)
        })
        .catch((error) => console.error(error))
    }
  }, [query])

  // FUNCION PARA LIMPIAR LA BUSQUEDA ///////////////////////

  const handleClearSyllaby = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState, // Copiar los valores actuales del estado
      concept_query: null,
      institutions: [],
      fields: [],
      countries: [],
      state: null,
      startYear: null,
      endYear: null,
      schoolType: null,
      titles_query: null,
    }))
  }

  const handleClearFilterTitles = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState, // Copiar los valores actuales del estado
      authors: [],
      publiType: null,
    }))
  }

  /////////////////////////////////////////////////////////////////
  // FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    setIsLoading(true)

    console.log('valor input titles query', inputValue)

    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      titles_query: {
        value: inputValue,
        label: inputValue,
      },
    }))
  }

  ////////////////////////////////////////////////////////////////////////

  // FUNCION PARA EL CONCEPT QUERY SEARCH ///////////////////////
  const conceptHandleCreate = (inputValue) => {
    console.log('valor inputvalue en concepQuery', inputValue)

    const newOption = createOptionConcept(inputValue)
    setOptionsConcept((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      concept_query: {
        value: inputValue,
        label: inputValue,
      },
    }))
  }

  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // if (query.authors.length > 0) {
    //   console.log('query.authors tiene algo', query.authors.length)
    // } else {
    //   console.log('query.authors vacio', query.authors.length)
    // }

    if (query.authors.length > 0 || query.publiType !== null) {
      console.log('tienen algo')
    } else {
      console.log('no tienen nada')
    }
  }, [query.authors, query.publiType])

  return (
    <Wrapper>
      <Column width="30%">
        <BlueBox onClick={BlueHandler} list={list}>
          <BlueListItem sinB>
            <LinkTo>
              <Icon flex name="SingletonRank" marginRight="25px" />
              TTITLES
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
                <LinkTo href="/syllaby">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  SYLLABI
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
              selectType="CreatableSelect"
              isClearable
              onChange={(newValue) => {
                setQuery((prevQuery) => ({
                  ...prevQuery,
                  concept_query: newValue,
                }))
              }}
              onCreateOption={conceptHandleCreate}
              options={optionsConcept}
              value={query.concept_query}
              placeholder="Enter a search keyword or a concept"
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
              style={{ padding: '24px 20px' }}
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
              value={query.startYear}
              isSercheable
              isClearable={true}
              escapeClearsValue
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
              <FillterButton onClick={handleClearSyllaby}>Clear Filter</FillterButton>
            </ButtonDiv>
          ) : null}
        </Box>
        <Box>
          <BoxWrapper onClick={HideFilter}>
            Filter Ttitles
            <FilterText>Expand</FilterText>
          </BoxWrapper>
          <SelectWrapper hideFilter={hideFilter}>
            <SelectDropwDown
              selectType="select"
              options={authors}
              isMulti
              getOptionLabel={(authors) => authors.display_name}
              getOptionValue={(authors) => authors.id}
              onChange={authorsSelect}
              isSercheable
              isClearable={true}
              escapeClearsValue
              value={query.authors}
              style={{ padding: '24px 20px' }}
              placeholder="by Authors"
            />
          </SelectWrapper>
          <SelectWrapper hideFilter={hideFilter}>
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
          </SelectWrapper>
          {console.log('publitype', query.publiType, 'authors', query.authors)}
          {query.publiType !== null || query.authors.length > 0 ? (
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
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Titles
          </TableTitle>

          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                titles_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.titles_query}
            placeholder="Search Titles"
          />
        </TableHeader>
        {forQuery ? (
          <TableComp tableData={data} workTable forTitlesFilter flexTable bigTable forQuery />
        ) : (
          <TableComp tableData={data} workTable forTitlesFilter flexTable bigTable />
        )}
      </Column>
    </Wrapper>
  )
}

export default TitlesFilter
