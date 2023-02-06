import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingletonTitleId } from '../../services/index.js'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/index'
import TableComp from '../Table/index'
import SingletonGraphic from '../Singleton/GraphicSingleton/index'
import Modal from '../Modal/index'
import Dropdown from '../Dropdown/index'
import Icons from '../Icons/index'
import MapComponent from '../Map/index.js'
import { useAuthContext } from '../../authContext'
import {
  SWrapper,
  Primary,
  Box,
  TableButton,
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
  ButtonWrapper,
  ModalWrapper,
  ModalButton,
  ButtonTableWrapper,
  SingletonButton,
} from './singleton-styles'

import { Title } from '../Title/title-styles'
import asigmentImg from '../Singleton/singleton-asigment.jpg'
import Icon from '../Icons'

export default function SingletonBox() {
  const params = useParams()
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const { cut, setCut } = useAuthContext()
  const [mapModal, setMapModal] = useState(true)
  const { normalized, setNormalized } = useAuthContext()
  const [changeTable, setChangeTable] = useState(false)

  const ManageModal = () => {
    setOpen(!open)
    setCut(!cut)
  }

  const ManageMapModal = () => {
    setOpen(!open)
    setMapModal(!mapModal)
    console.log('valor mapModal', mapModal)
  }

  const ChangeTable = () => {
    setChangeTable(!changeTable)
  }

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
        <SWrapper forSpinner>
          <Spinner />
        </SWrapper>
      ) : (
        <SWrapper>
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
              <Title mobile marginTop="20px" marginBottom="15px">
                MOST FREQUENTLY ASSIGNED AT
              </Title>
              <Title desktop fontSizeSmall textAlign="left" marginTop="30px" marginBottom="30px">
                MOST FREQUENTLY ASSIGNED AT
              </Title>
              <ButtonTableWrapper>
                <SingletonButton onClick={ChangeTable}>Titles</SingletonButton>
                <SingletonButton onClick={ChangeTable}>Schools</SingletonButton>
              </ButtonTableWrapper>
              {changeTable ? (
                <TableComp tableData={data.institutions.institutions.slice(0, 10)} singleton />
              ) : (
                <TableComp tableData={data.institutions.institutions.slice(11, 21)} singleton />
              )}
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
                  <MiniBox marginBottom="6px" key={value.code}>
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
                    <Text border key={value.syllabus_count}>
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
              <Title mobile marginBottom="55px">
                Appearances By Year
              </Title>
              <ButtonWrapper mobile>
                <Dropdown />
              </ButtonWrapper>
              <Title desktop heightSingleton fontSizeSmall marginBottom="50px">
                Appearances By Year
              </Title>
              <ButtonWrapper>
                <Dropdown />
                <Icon name="ModalButton" onClick={ManageModal} marginRight="25px" />
              </ButtonWrapper>
              {normalized ? (
                <SingletonGraphic dataGraphic={data.citation_count_chart_normalized} />
              ) : (
                <SingletonGraphic dataGraphic={data.citation_count_chart} />
              )}
            </Box>
            <Box>
              <Title mobile marginBottom="35px">
                Map (up to 200 schools shown)
              </Title>
              <Title desktop heightSingleton fontSizeSmall marginBottom="55px">
                Map (up to 200 schools shown)
              </Title>
              <ButtonWrapper style={{ justifyContent: 'end', top: '95px' }}>
                <Icon name="ModalButton" onClick={ManageMapModal} marginRight="10px" />
              </ButtonWrapper>
              <MapComponent markers={data.institutions.institutions} />
            </Box>
          </Column>
          {open ? (
            <Modal>
              {!mapModal ? (
                <>
                  <ButtonWrapper alingSelf="flex-end">
                    <ModalButton onClick={ManageMapModal}>X</ModalButton>
                  </ButtonWrapper>
                  <ModalWrapper modalWidth="100%" modalHeight="100%">
                    <MapComponent markers={data.institutions.institutions} />
                  </ModalWrapper>
                </>
              ) : (
                <>
                  <ButtonWrapper alingSelf="flex-end">
                    <ModalButton onClick={ManageModal}>X</ModalButton>
                  </ButtonWrapper>
                  <ModalWrapper modalWidth="60%" modalHeight="50%">
                    <Title desktop heightSingleton fontSizeSmall marginBottom="15px">
                      Appearances By Year
                    </Title>
                    {normalized ? (
                      <SingletonGraphic dataGraphic={data.citation_count_chart_normalized} />
                    ) : (
                      <SingletonGraphic dataGraphic={data.citation_count_chart} />
                    )}
                  </ModalWrapper>
                </>
              )}
            </Modal>
          ) : (
            ''
          )}
        </SWrapper>
      )}
    </>
  )
}
