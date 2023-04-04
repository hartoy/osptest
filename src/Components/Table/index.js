import React, { useState, useEffect } from 'react'
import { getWorkSearch, getFieldSearch } from '../../services/index.js'
import {
  TableStyles,
  Table,
  TableItem,
  TableText,
  TableNumber,
  ItemTitle,
  ItemSpan,
  Line,
  NumberDiv,
  MobileNumberDiv,
  MobileNumbers,
  DeskNumbers,
  DeskMarkers,
  Marker,
  TableButton,
  ToSingleton,
  ButtonTableWrapper,
  SingletonButton,
} from './table-styles'

import Icon from '../Icons'
import { Title } from '../Title/title-styles'

const TableComp = ({
  field,
  alignEnd,
  singleton,
  workTable,
  tableData,
  singletonField,
  deskTitle,
  marginLeft,
  marginRight,
  flexTable,
  bigTable,
  forQuery,
  forCountriesFilter,
  forSchoolsFilter,
  forPublishersFilter,
  forAuthorsFilter,
  forTitlesFilter,
  syllabiFilterTable,
}) => {
  const [work, setWork] = useState([])
  const [fields, setFields] = useState([])
  const [workSingleton, setWorkSingleton] = useState([])

  useEffect(() => {
    setFields(tableData)
    setWork(tableData)
    console.log('que data recibe la tabla', tableData)
  }, [tableData])

  return (
    <>
      {field ? (
        <TableStyles alignEnd={alignEnd} marginRight={marginRight} marginLeft={marginLeft}>
          <Title mobile marginBottom="35px">
            Top Fields
          </Title>

          <Table bigTable={bigTable}>
            {deskTitle && (
              <Title desktop fontSizeSmall textAlign="left" marginTop="40px" marginBottom="40px" marginRight="300px">
                Top Fields
              </Title>
            )}
            <DeskMarkers bigTable={bigTable}>
              <Marker bigTable={bigTable} width="320px">
                Fields
              </Marker>
              <Marker marginRight="20px">syllabi</Marker>
            </DeskMarkers>
            {fields.map((data, index) => {
              return (
                <ToSingleton key={data.rank} href={`singleton/fields/${data.id}`}>
                  <TableItem value={index} alingItems forSingleFields flexTable={flexTable}>
                    <NumberDiv flexTable={flexTable}>
                      <TableNumber style={{ paddingTop: '10px' }}>{index + 1}</TableNumber>
                    </NumberDiv>
                    <TableText flexTable={flexTable}>
                      <ItemTitle>{forQuery ? data.field : data.display_name}</ItemTitle>
                      <Line mBot15 />
                      <MobileNumberDiv>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          <ItemSpan>{data.syllabus_count.toLocaleString()}</ItemSpan>
                        </MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      <TableNumber desk style={{ width: '85%' }}>
                        {data.syllabus_count.toLocaleString()}
                      </TableNumber>
                    </DeskNumbers>
                  </TableItem>
                </ToSingleton>
              )
            })}
            <TableButton>Show More</TableButton>
          </Table>
        </TableStyles>
      ) : (
        ''
      )}
      {workTable ? (
        <TableStyles alignEnd={alignEnd}>
          <Title mobile marginBottom="35px">
            {forCountriesFilter || forTitlesFilter ? '' : 'Top Titles'}
          </Title>

          <Table>
            <Title desktop fontSizeSmall textAlign="left" marginTop="40px" marginBottom="40px" marginRight="300px">
              {forCountriesFilter || forTitlesFilter ? '' : 'Top Titles'}
            </Title>
            <DeskMarkers>
              <Marker width="260px">{forCountriesFilter ? 'Countries' : 'Titles'}</Marker>
              <Marker marginRight="20px">
                <Marker width="260px">{forCountriesFilter ? 'Syllabi' : 'COASSIGNMENTS'}</Marker>
              </Marker>
              <Marker>{forCountriesFilter ? 'Schools' : 'SCORE'}</Marker>
            </DeskMarkers>
            {work.map((data, index) => {
              return (
                <ToSingleton key={data.id} href={`/singleton/${data.id}`}>
                  <TableItem value={index} key={data.id}>
                    <NumberDiv>
                      <TableNumber>
                        {forTitlesFilter ? index + 1 : ''}
                        {forCountriesFilter ? index + 1 : ''}
                        {/* {data.rank} */}
                      </TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle>
                        {forTitlesFilter ? data.title : ''}
                        {data.country}
                      </ItemTitle>
                      <ItemSpan>{forCountriesFilter ? '' : data.authors[0].display_name}</ItemSpan>
                      {forTitlesFilter ? <ItemSpan> {data.publisher?.id} </ItemSpan> : ''}

                      <Line />
                      <MobileNumberDiv>
                        <MobileNumbers green>
                          <Icon name="TableGreenIcon" marginRight="5px" />
                          <ItemSpan>
                            <ItemSpan>
                              {forCountriesFilter
                                ? data.syllabus_count.toLocaleString('es', {
                                    useGrouping: true,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 3,
                                  })
                                : data.score.toFixed(3)}
                            </ItemSpan>
                          </ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          <ItemSpan>
                            {forCountriesFilter
                              ? data.institution_count.toLocaleString('es')
                              : data.citation_count.toLocaleString()}
                          </ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers></MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers forCountriesFilter>
                      <TableNumber desk style={{ width: '85%' }}>
                        {forCountriesFilter
                          ? data.syllabus_count.toLocaleString('es')
                          : data.citation_count.toLocaleString()}
                      </TableNumber>
                      <TableNumber desk blue>
                        {forCountriesFilter ? data.institution_count.toLocaleString('es') : data.score.toFixed(3)}
                      </TableNumber>
                    </DeskNumbers>
                  </TableItem>
                </ToSingleton>
              )
            })}
            <TableButton>Show More</TableButton>
          </Table>
        </TableStyles>
      ) : (
        ''
      )}
      {singleton ? (
        <TableStyles alignEnd={alignEnd}>
          <Table singleton>
            <DeskMarkers singleton>
              <Marker marginRight="10px" width="360px">
                {forAuthorsFilter ? 'Authors' : 'Schools'}
              </Marker>
              <Marker>{forAuthorsFilter ? 'Appareances' : 'Syllabi'}</Marker>
            </DeskMarkers>
            {tableData.map((data, index) => {
              return (
                <ToSingleton key={data.index} singleton href={`/singleton/${data.id}`}>
                  <TableItem singleton value={index} alingItems>
                    <NumberDiv>
                      <TableNumber style={{ paddingTop: '10px' }}>{index + 1}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle singleton Bold>
                        {forAuthorsFilter ? data.id : ''}
                        {forPublishersFilter ? data.publisher : ''}
                        {forSchoolsFilter ? data.institution : ''}
                      </ItemTitle>
                      <ItemTitle singleton>
                        {data.state ? data.state + ', ' : ''}
                        {forSchoolsFilter ? data.country.id : ''}
                      </ItemTitle>
                      <Line singleton mBot15 />
                      <MobileNumberDiv>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          {data.syllabus_count !== undefined ? (
                            <ItemSpan>{data.syllabus_count.toLocaleString()}</ItemSpan>
                          ) : (
                            ''
                          )}
                          {data.citation_count !== undefined ? (
                            <TableNumber singleton desk style={{ width: '90%' }}>
                              {data.citation_count.toLocaleString()}
                            </TableNumber>
                          ) : (
                            ''
                          )}
                        </MobileNumbers>
                        <MobileNumbers></MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      {data.syllabus_count !== undefined ? (
                        <TableNumber singleton desk style={{ width: '90%' }}>
                          {data.syllabus_count.toLocaleString()}
                        </TableNumber>
                      ) : (
                        ''
                      )}
                      {data.citation_count !== undefined ? (
                        <TableNumber singleton desk style={{ width: '90%' }}>
                          {data.citation_count.toLocaleString()}
                        </TableNumber>
                      ) : (
                        ''
                      )}
                    </DeskNumbers>
                  </TableItem>
                </ToSingleton>
              )
            })}
            <TableButton>Show More</TableButton>
          </Table>
        </TableStyles>
      ) : (
        ''
      )}
      {singletonField ? (
        <TableStyles alignEnd={alignEnd}>
          <Table singleton>
            <DeskMarkers style={{ marginLeft: '0px', width: '100%' }}>
              <Marker style={{ marginLeft: '24px', marginRight: '40px' }}>Rank</Marker>
              <Marker marginRight="10px" width="360px">
                Titles
              </Marker>
              <Marker style={{ marginRight: '15px' }}>Appareances</Marker>
              <Marker>Score</Marker>
            </DeskMarkers>
            {tableData.map((data, index) => {
              return (
                <ToSingleton key={data.index} singleton href={`/singleton/${data.id}`}>
                  <TableItem singleton value={index} alingItems>
                    <NumberDiv>
                      <TableNumber style={{ paddingTop: '10px' }}>{index + 1}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle singleton Bold>
                        {data.display_name}
                      </ItemTitle>
                      <ItemTitle singleton>{data.authors[0].display_name}</ItemTitle>
                      <Line singleton mBot15 />
                      <MobileNumberDiv style={{ justifyContent: 'start' }}>
                        <MobileNumbers style={{ marginRight: '20px' }}>
                          <Icon name="SingletonRank" marginRight="5px" />
                          {data.citation_count.toLocaleString('es-US')}
                        </MobileNumbers>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          {parseFloat(data.score.toFixed(2))}
                        </MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      <TableNumber singleton desk style={{ width: '90%' }}>
                        {data.citation_count.toLocaleString('es-US')}
                      </TableNumber>
                      <TableNumber singleton desk style={{ width: '90%' }}>
                        {parseFloat(data.score.toFixed(2))}
                      </TableNumber>
                    </DeskNumbers>
                  </TableItem>
                </ToSingleton>
              )
            })}
            <TableButton>Show More</TableButton>
          </Table>
        </TableStyles>
      ) : (
        ''
      )}
      {syllabiFilterTable && (
        <TableStyles alignEnd={alignEnd}>
          <Table singleton>
            <DeskMarkers style={{ marginLeft: '0px', width: '100%' }}>
              <Marker style={{ marginLeft: '24px', marginRight: '40px' }}>Rank</Marker>
              <Marker marginRight="10px" width="360px">
                Titles
              </Marker>
            </DeskMarkers>

            {tableData.map((data, index) => {
              return (
                <ToSingleton key={data.index} singleton href={`/singleton/${data.id}`}>
                  <TableItem singleton value={index} alingItems>
                    <NumberDiv>
                      <TableNumber style={{ paddingTop: '10px' }}>{index + 1}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle singleton Bold syllabiText width="65%">
                        {data.code}
                      </ItemTitle>
                      <ItemTitle singleton Bold syllabiText width="65%">
                        {data.display_name}
                      </ItemTitle>
                      <ItemTitle singleton Bold syllabiText width="65%">
                        {data.institution.institution + ','} {data.year}
                      </ItemTitle>
                      <Line syllabyLine />
                      <ItemTitle singleton syllabiText width="80%" heightS height="35px">
                        {data.description}
                      </ItemTitle>
                      <MobileNumberDiv style={{ justifyContent: 'start' }}></MobileNumberDiv>
                    </TableText>
                    <DeskNumbers></DeskNumbers>
                  </TableItem>
                </ToSingleton>
              )
            })}
            <TableButton>Show More</TableButton>
          </Table>
        </TableStyles>
      )}
    </>
  )
}

export default TableComp
