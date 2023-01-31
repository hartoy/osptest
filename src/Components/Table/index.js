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

const TableComp = ({ field, alignEnd, singleton, workTable, tableData }) => {
  const [work, setWork] = useState([])
  const [fields, setFields] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('access')
    // console.log(token)
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    getWorkSearch(config)
      .then((resp) => {
        setWork(resp.works)
        // console.log('respuesta de works', resp.works)
      })
      .catch((error) => console.error(error))

    getFieldSearch(config)
      .then((resp) => {
        setFields(resp.fields)
        // console.log('respuesta de fields', resp.fields)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      {field ? (
        <TableStyles alignEnd={alignEnd}>
          <Title mobile marginBottom="35px">
            Top Fields
          </Title>

          <Table>
            <Title desktop fontSizeSmall textAlign="left" marginTop="40px" marginBottom="40px" marginRight="300px">
              Top Fields
            </Title>
            <DeskMarkers>
              <Marker width="320px">Fields</Marker>
              <Marker marginRight="20px">syllabi</Marker>
            </DeskMarkers>
            {fields.map((data, index) => {
              return (
                <ToSingleton href={`/singleton/${data.id}`}>
                  <TableItem value={index} alingItems key={data.rank}>
                    <NumberDiv>
                      <TableNumber style={{ paddingTop: '10px' }}>{index + 1}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle>{data.display_name}</ItemTitle>
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
            Top Titles
          </Title>

          <Table>
            <Title desktop fontSizeSmall textAlign="left" marginTop="40px" marginBottom="40px" marginRight="300px">
              Top Titles
            </Title>
            <DeskMarkers>
              <Marker width="260px">Titles</Marker>
              <Marker marginRight="20px">COASSIGNMENTS</Marker>
              <Marker>SCORE</Marker>
            </DeskMarkers>
            {work.map((data, index) => {
              return (
                <ToSingleton href={`/singleton/${data.id}`}>
                  <TableItem value={index} key={data.rank}>
                    <NumberDiv>
                      <TableNumber>{data.rank}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle>{data.display_name}</ItemTitle>
                      <ItemSpan>{data.authors[0].display_name}</ItemSpan>
                      <Line />
                      <MobileNumberDiv>
                        <MobileNumbers green>
                          <Icon name="TableGreenIcon" marginRight="5px" />
                          <ItemSpan>{data.score.toFixed(3)}</ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          <ItemSpan>{data.citation_count.toLocaleString()}</ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers></MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      <TableNumber desk style={{ width: '85%' }}>
                        {data.citation_count.toLocaleString()}
                      </TableNumber>
                      <TableNumber desk blue>
                        {data.score.toFixed(3)}
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
                Schools
              </Marker>
              <Marker>Syllabi</Marker>
            </DeskMarkers>
            {tableData.map((data, index) => {
              return (
                <ToSingleton singleton href={`/singleton/${data.id}`}>
                  <TableItem singleton value={index} alingItems key={data.index}>
                    <NumberDiv>
                      <TableNumber style={{ paddingTop: '10px' }}>{index + 1}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle singleton Bold>
                        {data.display_name}
                      </ItemTitle>

                      {data.state ? (
                        <ItemTitle singleton>
                          {data.state}, {data.country.display_name}
                        </ItemTitle>
                      ) : (
                        <ItemTitle singleton>{data.country.display_name}</ItemTitle>
                      )}
                      <Line singleton mBot15 />
                      <MobileNumberDiv>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          <ItemSpan>{data.syllabus_count.toLocaleString()}</ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers></MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      <TableNumber singleton desk style={{ width: '90%' }}>
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
    </>
  )
}

export default TableComp
