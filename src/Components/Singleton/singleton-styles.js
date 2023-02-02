import styled, { css } from 'styled-components'

const color = {
  lightBlue: '#3188D3',
  grey: '#525B65',
  black: '#525B65',
}

const GoTo = styled.a`
  text-decoration: none;
`

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  font-family: Roboto, sans-serif;
  margin-top: 110px;
  background-color: white;

  @media (min-width: 992px) {
    width: 970px;
    margin-top: 140px;
    flex-direction: row;
    align-items: flex-start;
    background-color: transparent;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  ${(props) =>
    props.forSpinner &&
    css`
      height: 55vh;
    `}
`

const Primary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    width: 100%;
    max-width: 640px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 25px;
    margin: 12px 0px 12px 0px;
    border-radius: 5px;
    background-color: white;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1000px) {
    width: ${(props) => (props.al60 ? '60%' : '40%')};
  }
`

const PrimaryBody = styled.div`
  display: flex;
  margin: 25px 0px 30px 0px;

  @media (min-width: 1000px) {
    width: 100%;
  }
`
const PrimaryStats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 0px 20px;

  @media (min-width: 1000px) {
    display: none;
  }

  ${(props) =>
    props.desk &&
    css`
      display: none;

      @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
      }
    `}
`

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  @media (min-width: 1000px) {
    width: 100%;
    max-width: 450px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 25px;
    margin: 12px 0px 12px 0px;
    border-radius: 5px;
    background-color: white;
  }
`
const PrimaryAuthor = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #3775b9;
  margin: 5px 0px 0px 0px;

  @media (min-width: 1000px) {
    display: none;
  }

  ${(props) =>
    props.desk &&
    css`
      display: none;

      @media (min-width: 1000px) {
        display: block;
      }
    `}
`
const Deskstats = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`
const EeachStat = styled.div`
  display: flex;
  flex-direction: column;
`

const PrimaryTitle = styled.h1`
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
  color: #525b65;
  margin: 3px 0px 5px 0px;
  white-space: wrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 1000px) {
    display: none;
  }

  ${(props) =>
    props.desk &&
    css`
      display: none;

      @media (min-width: 1000px) {
        display: block;
        font-size: 42px;
        line-height: 46px;
        width: 106%;
      }
    `}
`
const LongText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #525b65;
  width: 100%;
`
const StatTitle = styled.h4`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.16em;
  color: #525b65;
  margin: 0px 0px 5px 0px;
`

const Stat = styled.p`
  display: flex;
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.green ? '#9BD331' : '#3775B9')};
`

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background: #c8cfd7;
  margin-bottom: 15px;
`

const Text = styled.p`
  font-weight: ${(props) => (props.bold ? 'bold' : '400')};
  color: ${(props) => (props.black ? 'black' : '#525B65')};
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBot};

  ${(props) =>
    props.border &&
    css`
      border-style: solid;
      border-color: #525b65;
      border-radius: 3px;
      border-width: 1px;
      padding: 4px;
      margin: 4px 8px 4px 0px;
    `}

  ${(props) =>
    props.desk &&
    css`
      display: none;

      @media (min-width: 1000px) {
        display: block;
      }
    `}

    ${(props) =>
    props.mobile &&
    css`
      @media (min-width: 1000px) {
        display: none;
      }
    `}
`
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.modalHeight};
  width: ${(props) => props.modalWidth};
`

const MiniBox = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: #95999e;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  justify-content: center;
  align-self: center;
  width: 100%;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`
const Number = styled.span`
  font-size: 15px;
  color: #3775b9;
  margin-right: 3px;
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
  margin-top: 30px;
  border-radius: 5px;
  margin-bottom: 15px;
  align-self: center;

  @media (min-width: 1000px) {
    margin-top: 25px;
  }

  ${(props) =>
    props.primaryButton &&
    css`
      width: 103px;
      color: #224974;
      background-color: #d2e0ed;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.11em;
      align-self: left;
      margin-bottom: 30px;
    `}
`
const Img = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  border-radius: 3px;

  ${(props) =>
    props.portada &&
    css`
      @media (min-width: 1000px) {
        max-width: 190px;
        max-height: 278px;
      }
    `}
`
const ButtonWrapper = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: right;
    align-self: ${(props) => props.alingSelf};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    width: 90%;
    display: flex;
    top: 75px;
    align-items: flex-start;
  }

  ${(props) =>
    props.mobile &&
    css`
      display: block;
      position: absolute;
      z-index: 1;
      top: 30px;
      @media (min-width: 1000px) {
        display: none;
      }
    `}
`

const ModalButton = styled.button`
  background-color: #3775b9;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  border-style: none;
  position: absolute;
  top: 60px;
`

const SingletonButton = styled.button`
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  text-align: center;
  color: #3775b9;
  padding: 5px 5px 5px 5px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  border-color: #3775b9;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 42px;
  cursor: pointer;
  border-style: none;
  border-style: solid;
  border-color: #3775b9;

  :focus {
    background-color: #3775b9;
    color: white;
    border-color: #3775b9;
    border-style: solid;
  }
`
const ButtonTableWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: initial;
`

export {
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
  ButtonWrapper,
  ModalWrapper,
  ModalButton,
  ButtonTableWrapper,
  SingletonButton,
}
