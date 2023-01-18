import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingletonTitleId } from '../../services/index.js'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/index'

import {
  SWrapper,
  Primary,
  Box,
  TableButton,
  color,
  Text,
  MiniBox,
  Number,
  Img,
  PrimaryAuthor,
  PrimaryTitle,
  PrimaryBody,
  PrimaryStats,
  LongText,
  StatTitle,
  Stat,
  Line,
  Column,
  Deskstats,
  EeachStat,
  GoTo,
} from './singleton-styles'

import { Title } from '../Title/title-styles'
import asigmentImg from '../Singleton/singleton-asigment.jpg'
import asigmentGraImg from '../Singleton/singleton-graphic.jpg'
import asigmentMapImg from '../Singleton/singleton-map.jpg'
import portada from '../Singleton/portada.jpg'
import Icon from '../Icons'

export default function SingletonBox() {
  const params = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('access')
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    getSingletonTitleId(config, params.id)
      .then((resp) => {
        setData(resp)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      {data.length === 0 ? (
        <Spinner />
      ) : (
        <SWrapper>
          {console.log(data)}
          <Column al60>
            <Primary>
              <Link to="/revisions">
                <TableButton primaryButton>Titles</TableButton>
              </Link>
              <PrimaryAuthor>{data.authors[0].display_name} </PrimaryAuthor>
              <PrimaryTitle>{data.display_name.substring(0, 55)}</PrimaryTitle>
              <Text mobile style={{ color: '#3188D3' }}>
                Multiple Editions
              </Text>
              <PrimaryBody>
                <Img portada src={data.image_urls[0]}></Img>
                <PrimaryStats>
                  <StatTitle>OVERALL RANKING</StatTitle>
                  <Stat>
                    <Icon name="SingletonRank" marginRight="10px" /> #{data.rank}
                  </Stat>
                  <Line />
                  <StatTitle>APPEARANCES</StatTitle>
                  <Stat>
                    <Icon name="TableGreyIcon" marginRight="10px" />
                    {data.citation_count}
                  </Stat>
                  <Line />
                  <StatTitle>SCORE</StatTitle>
                  <Stat green>
                    <Icon name="TableGreenIcon" marginRight="10px" /> {data.score.toFixed(2)}
                  </Stat>
                </PrimaryStats>
                <PrimaryStats desk>
                  <PrimaryAuthor desk>{data.authors[0].display_name} </PrimaryAuthor>
                  <PrimaryTitle desk>{data.display_name.substring(0, 52)}</PrimaryTitle>
                  <Text style={{ color: '#3188D3' }}>Multiple Editions</Text>
                  <Line style={{ marginTop: '60px' }} />
                  <Deskstats>
                    <EeachStat>
                      <StatTitle>OVERALL RANKING</StatTitle>
                      <Stat>
                        <Icon name="SingletonRank" marginRight="5px" /> #{data.rank}
                      </Stat>
                    </EeachStat>
                    <EeachStat>
                      <StatTitle>APPEARANCES</StatTitle>
                      <Stat>
                        <Icon name="TableGreyIcon" marginRight="5px" />
                        {data.citation_count}
                      </Stat>
                    </EeachStat>
                    <EeachStat style={{ alignItems: 'center' }}>
                      <StatTitle>SCORE</StatTitle>
                      <Stat green>
                        <Icon name="TableGreenIcon" marginRight="5px" /> {data.score.toFixed(2)}
                      </Stat>
                    </EeachStat>
                  </Deskstats>
                </PrimaryStats>
              </PrimaryBody>
              <LongText>{data.description}</LongText>
            </Primary>
          </Column>
          <Column>
            <Box>
              <Title mobile marginBottom="20px">
                Availability
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="20px">
                Availability
              </Title>
              <MiniBox>
                {Object.entries(data.availability).map(([key, value]) => {
                  return (
                    <GoTo key={key} href={value}>
                      <Text marginBot="5px" style={{ color: '#3188D3' }}>
                        {key}
                      </Text>
                    </GoTo>
                  )
                })}
              </MiniBox>
            </Box>
            <Box>
              <Title mobile marginBottom="20px">
                See it on Syllabi
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="20px">
                See it on Syllabi
              </Title>
              {Object.entries(data.syllabi.syllabi).map(([key, value]) => {
                return (
                  <MiniBox marginBottom="6px">
                    <Text bold style={{ color: '#3188D3' }}>
                      {value.code}
                    </Text>
                    <Text bold marginTop="3px">
                      {value.title}
                    </Text>
                    <Text marginTop="3px">
                      {value.institution.display_name}, {value.year}
                    </Text>
                  </MiniBox>
                )
              })}
              <TableButton>Show more</TableButton>
            </Box>
            <Box>
              <Title mobile marginBottom="20px">
                Field Breakdown
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="20px">
                Field Breakdown
              </Title>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {Object.entries(data.fields.fields).map(([key, value]) => {
                  return (
                    <Text border>
                      <Number>{value.syllabus_count} </Number>
                      {value.display_name}
                    </Text>
                  )
                })}
              </div>
            </Box>
            <Box>
              <Title mobile marginBottom="35px">
                The Co-Assignment Galaxy
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="35px">
                The Co-Assignment Galaxy
              </Title>
              <Img src={asigmentImg}></Img>
            </Box>
            <Box>
              <Title mobile marginBottom="35px">
                Appearances by Top Fields and Year
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="35px">
                Appearances by Top Fields and Year
              </Title>
              <Img src={asigmentGraImg}></Img>
            </Box>
            <Box>
              <Title mobile marginBottom="35px">
                Map (up to 200 schools shown)
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="35px">
                Map (up to 200 schools shown)
              </Title>
              <Img src={asigmentMapImg}></Img>
            </Box>
          </Column>
        </SWrapper>
      )}
    </>
  )
}
