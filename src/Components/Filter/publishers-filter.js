import React, { useState, useEffect, useCallback } from 'react'
import { useToggle } from 'react-use'
import SelectDropwDown from '../Select/select'
import { publicationTypeData } from './data-filter'
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
  getFieldsByQuery,
  getPublishers,
  PublishersDinamic,
} from '../../services/index.js'
import Icon from '../Icons'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const createOptionConcept = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = []

const PublishersFilter = () => {
  const [data, setData] = useState([])
  const [list, toggleList] = useToggle(false)
  const [countries, setCountries] = useState([])
  const [fields, setFields] = useState([])
  const [publiType, setPubliType] = useState([publicationTypeData])
  const [filterValue, setFilterValue] = useState([])
  const [hideFilter, toggleHideFilter] = useToggle(true)
  const [forQuery, setForQuery] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [optionsConcept, setOptionsConcept] = useState(defaultOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState('')
  const [query, setQuery] = useState({
    fields: [],
    countries: [],
    publiType: null,
    concept_query: null,
    publishers_query: null,
  })

  const MainfilterableProps = ['fields', 'countries', 'concept_query']
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
    Promise.all([getCountries(getApiConfig()), getFieldSearch(50, getApiConfig())])
      .then(([countriesResp, fieldsResp]) => {
        setCountries(countriesResp.countries)
        setFields(fieldsResp.fields)
        console.log('respuesta de fields search', fieldsResp.fields)
      })
      .catch((error) => console.error(error))

    console.log('publiType', publiType)
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

  const publiTypeSelect = useCallback((value) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      publiType: value,
    }))
  }, [])
  /////////////////////////////////////////////////////////////////

  useEffect(() => {
    const isEmpty = Object.values(query).every(
      (value) =>
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.values(value).every((subValue) => subValue === '')) ||
        (typeof value !== 'object' && value === '')
    )

    if (!isEmpty) {
      console.log('llamando por que hay data')

      //const newQuery = { ...query }

      const countryIds = query.countries.map((country) => country.id)
      const countryNames = query.countries.map((country) => country.display_name)
      const fieldName = query.fields.map((fields) => fields.display_name)
      const fieldId = query.fields.map((fields) => fields.id)
      const publiType = query.publiType?.id || ''
      const conceptSearch = query.concept_query?.value || ''
      const publishersSearch = query.publishers_query?.value || ''

      console.log('countryNames', countryNames)
      console.log('countryIds', countryIds)
      console.log('fieldName', fieldName)
      console.log('fieldId', fieldId)
      console.log('publiType', publiType)
      console.log('conceptSearch', conceptSearch)
      console.log('publishersSearch', publishersSearch)

      // setQuery(newQuery)

      PublishersDinamic(getApiConfig(), {
        country_query: countryNames,
        country_codes: countryIds,
        field_name: fieldName,
        field_ids: fieldId,
        work_publication_types: publiType,
        syllabus_query: conceptSearch,
        publisher_query: publishersSearch,
      })
        .then((resp) => {
          setForQuery(true)
          setData(resp.publishers)

          setTotal(resp.publisher_total)
          console.log('publishers', resp)
        })
        .catch((error) => console.error(error))
    } else {
      console.log('no hay pais seleccionado')
      getPublishers(getApiConfig())
        .then((resp) => {
          setForQuery(false)
          setData(resp.publishers)

          setTotal(resp.publisher_total)
          console.log('publishers', resp)
        })
        .catch((error) => console.error(error))
    }
  }, [query])

  //////////////////////////////////////////////////////////////////////////////

  // FUNCION PARA LIMPIAR LA BUSQUEDA ///////////////////////

  const handleClearFilter = () => {
    setFilterValue([])
    console.log('se paso value a vacio', filterValue.length)

    setQuery((prevState) => ({
      ...prevState,
      fields: [],
      countries: [],
      concept_query: null,
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
  /////////////////////////////////////////////////////////////////

  // FUNCION PARA EL QUERY SEARCH ///////////////////////
  const handleCreate = (inputValue) => {
    // setIsLoading(true)

    console.log('valor inputvalue', inputValue)

    const newOption = createOption(inputValue)
    setOptions((prev) => [...prev, newOption])

    setQuery((prev) => ({
      ...prev,
      publishers_query: {
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

  ///SI LA BUSQUEDA DEL QUERY QUEDA VACIA////////////////////////

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
              PUBLISHERS
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
                <LinkTo href="/fields">
                  <Icon flex name="SingletonRank" marginRight="25px" />
                  FIELDS
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
            {total.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })} Publishers
          </TableTitle>

          <SelectDropwDown
            selectType="CreatableSelect"
            isClearable
            onChange={(newValue) => {
              setQuery((prevQuery) => ({
                ...prevQuery,
                publishers_query: newValue,
              }))
            }}
            onCreateOption={handleCreate}
            options={options}
            value={query.publishers_query}
            placeholder="Search Publishers"
          />
        </TableHeader>
        {forQuery ? (
          <TableComp tableData={data} singleton flexTable forPublishersFilter bigTable forQuery />
        ) : (
          <TableComp tableData={data} singleton flexTable forPublishersFilter bigTable />
        )}
      </Column>
    </Wrapper>
  )
}

export default PublishersFilter
