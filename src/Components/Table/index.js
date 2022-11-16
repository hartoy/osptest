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
} from './table-styles'

import Icon from '../Icons'
import { Title } from '../Title/title-styles'

const TableComp = ({ field, alignEnd }) => {
  const [work, setWork] = useState([])
  const [fields, setFields] = useState([])

  useEffect(() => {
    getWorkSearch()
      .then((resp) => setWork(resp.results.works))
      .catch((error) => console.error(error))

    getFieldSearch()
      .then((resp) => setFields(resp.results.fields))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <TableStyles alignEnd={alignEnd}>
        <Title mobile marginBottom="35px">
          Top {field ? 'Fields' : 'Titles'}
        </Title>

        <Table>
          <Title desktop fontSizeSmall textAlign="left" marginTop="40px" marginBottom="40px" marginRight="340px">
            Top {field ? 'Fields' : 'Titles'}
          </Title>
          {field ? (
            <DeskMarkers>
              <Marker width="320px">Fields</Marker>
              <Marker marginRight="20px">syllabi</Marker>
            </DeskMarkers>
          ) : (
            <DeskMarkers>
              <Marker width="260px">Titles</Marker>
              <Marker marginRight="20px">COASSIGNMENTS</Marker>
              <Marker>SCORE</Marker>
            </DeskMarkers>
          )}
          {!field ? (
            <>
              {work.map((data, index) => {
                return (
                  <TableItem value={index} key={data.rank}>
                    <NumberDiv>
                      <TableNumber>{data.rank}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle>{data.name}</ItemTitle>
                      <ItemSpan>{data.persons[0].name}</ItemSpan>
                      <ItemSpan>{data.publisher.name}</ItemSpan>
                      <Line />
                      <MobileNumberDiv>
                        <MobileNumbers green>
                          <Icon name="TableGreenIcon" marginRight="5px" />
                          <ItemSpan>{data.score}</ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          <ItemSpan>{data.appearances.toLocaleString()}</ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers></MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      <TableNumber desk style={{ width: '85%' }}>
                        {data.appearances.toLocaleString()}
                      </TableNumber>
                      <TableNumber desk blue>
                        {data.score}
                      </TableNumber>
                    </DeskNumbers>
                  </TableItem>
                )
              })}
            </>
          ) : (
            <>
              {fields.map((data, index) => {
                return (
                  <TableItem value={index} alingItems key={data.rank}>
                    <NumberDiv>
                      <TableNumber style={{ paddingTop: '17px' }}>{data.rank}</TableNumber>
                    </NumberDiv>
                    <TableText>
                      <ItemTitle>{data.name}</ItemTitle>
                      <Line mBot15 />
                      <MobileNumberDiv>
                        <MobileNumbers>
                          <Icon name="TableGreyIcon" marginRight="5px" />
                          <ItemSpan>{data.syllabusCount.toLocaleString()}</ItemSpan>
                        </MobileNumbers>
                        <MobileNumbers></MobileNumbers>
                      </MobileNumberDiv>
                    </TableText>
                    <DeskNumbers>
                      <TableNumber desk style={{ width: '85%' }}>
                        {data.syllabusCount.toLocaleString()}
                      </TableNumber>
                    </DeskNumbers>
                  </TableItem>
                )
              })}
            </>
          )}

          <TableButton>Show More</TableButton>
        </Table>
      </TableStyles>
    </>
  )
}

export default TableComp
