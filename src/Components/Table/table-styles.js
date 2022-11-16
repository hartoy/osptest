import styled, { css } from 'styled-components'

const TableStyles = styled.div`
  margin-right: auto;
  margin-left: auto;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: ${(props) => (props.alignEnd ? 'end' : '')};
  }

  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`
const Table = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  padding-inline-start: 0;
  width: 300px;

  @media (min-width: 1000px) {
    background: #ffffff;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 551px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }

  ${(props) =>
    props.marginMob &&
    css`
      @media only screen and (max-width: 1000px) {
        margin-top: 60px;
      }
    `}
`
const TableItem = styled.li`
  display: flex;
  background-color: ${(props) => (props.value % 2 === 0 ? '#F6F6F6' : 'white')};
  height: 129px;
  box-sizing: border-box;
  padding: 3px 0px 14px 0px;
  border-radius: 5px;
  width: 100%;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 80px;
    padding-bottom: 5px;
    align-items: ${(props) => (props.alingItems ? 'start' : '')};
  }
`

const Line = styled.div`
  height: 0.2px;
  border: 1px solid #d9d9d6;
  width: 220px;
  color: #d9d9d6;
  margin-bottom: ${(props) => (props.mBot15 ? '15px' : '10px')};
  margin-top: 5px;
  background-color: #d9d9d6;
  @media (min-width: 1000px) {
    display: none;
  }
`
const NumberDiv = styled.div`
  display: flex;
  justify-content: end;
  width: 40px;
  padding-right: 10px;
  @media (min-width: 1000px) {
    width: 45px;
  }
`

const TableText = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: #405063;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 1000px) {
    font-size: 16px;
    width: 270px;
  }
`

const ItemSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #224974;
  margin-bottom: 5px;
  font-style: ${(props) => (props.italic ? 'italic' : '')};
  @media (min-width: 1000px) {
    font-size: 13px;
  }
`

const TableNumber = styled.span`
  display: flex;
  font-weight: 300;
  font-size: 25px;
  line-height: 18px;
  color: #3775b9;
  justify-content: center;
  align-items: top;
  padding: 20px 1px 0px 0px;
  height: 20px;

  ${(props) =>
    props.desk &&
    css`
      font-weight: 700;
      font-size: 18px;
      color: ${(props) => (props.blue ? '#3775B9' : '#2C2925')};
      margin-left: 10px;
      width: 40px;
    `}
`

const MobileNumberDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1000px) {
    display: none;
  }
`

const MobileNumbers = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #405063;
  color: ${(props) => (props.green ? '#9BD331' : '#405063')};
  display: flex;
  align-items: center;

  img {
    height: 14px;
    margin-right: 5px;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`
const DeskNumbers = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    width: 150px;
  }
`
const DeskMarkers = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    width: 90%;
    margin-left: 105px;
    margin-bottom: 5px;
  }
`
const Marker = styled.span`
  display: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    width: ${(props) => props.width};
    margin-right: ${(props) => props.marginRight};
  }
`

const TableButton = styled.button`
  height: 42px;
  color: white;
  background-color: #3775b9;
  font-size: 13px;
  font-weight: 700;
  width: 164px;
  border-style: none;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 45px;
  border-radius: 5px;
  margin-bottom: 45px;

  @media (min-width: 1000px) {
    margin-top: 25px;
  }
`

export {
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
}
