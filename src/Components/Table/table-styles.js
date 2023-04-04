import styled, { css } from 'styled-components'

const ToSingleton = styled.a`
  text-decoration: none;
  width: 100%;

  @media (min-width: 1000px) {
    width: 90%;
  }

  ${(props) =>
    props.singleton &&
    css`
      @media only screen and (min-width: 1000px) {
        width: 100%;
      }
    `}
`

const TableStyles = styled.div`
  margin-right: auto;
  margin-left: auto;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: ${(props) => (props.alignEnd ? 'end' : '')};
    width: 100%;

    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};
  }

  @media (min-width: 1000px) {
    max-width: 1170px;
  }
`
const Table = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  margin: ${(props) => (props.singleton ? '' : '0 auto')};
  padding-inline-start: 0;
  width: 100%;

  @media (min-width: 1000px) {
    background: #ffffff;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 551px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
    height: 100%;
    width: 100%;
  }

  ${(props) =>
    props.marginMob &&
    css`
      @media only screen and (max-width: 1000px) {
        margin-top: 60px;
      }
    `}

  ${(props) =>
    props.singleton &&
    css`
      width: 100%;
      @media only screen and (min-width: 1000px) {
        box-shadow: none;
      }
    `}

   ${(props) =>
    props.bigTable &&
    css`
      width: 100%;
      @media only screen and (min-width: 1000px) {
        box-shadow: none;
      }
    `}
`
const TableItem = styled.li`
  display: flex;
  background-color: ${(props) => (props.value % 2 === 0 ? '#F6F6F6' : 'white')};
  padding: 12px 10px 12px 0px;
  box-sizing: border-box;
  padding: 3px 0px 14px 0px;
  border-radius: 5px;
  width: ${(props) => (props.widTh90 ? '90%' : '100%')};
  min-width: 75px;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    width: ${(props) => (props.widTh90 ? '90%' : '100%')};
    align-items: center;
  }

  ${(props) =>
    props.singleton &&
    css`
      @media only screen and (min-width: 1000px) {
        justify-content: space-between;
        align-items: center;
      }
    `}

  ${(props) =>
    props.forSingleFields &&
    css`
      @media only screen and (min-width: 1000px) {
        min-height: 81px;
      }
    `}

    ${(props) =>
    props.flexTable &&
    css`
      @media only screen and (min-width: 1000px) {
        width: 100%;
      }
    `}
`

const Line = styled.div`
  height: 0.2px;
  border: 1px solid #d9d9d6;
  width: 90%;
  color: #d9d9d6;
  margin-bottom: 15px;
  margin-top: 5px;
  background-color: #d9d9d6;
  display: none;

  @media (max-width: 1000px) {
    display: block;
    margin-top: 10px;
  }

  ${(props) =>
    props.singleton &&
    css`
      margin-top: 0px;
    `}

  ${(props) =>
    props.syllabyLine &&
    css`
      color: #3775b9;
      border: 1px solid #3775b9;
      margin-bottom: 0px;
      display: block;
    `}
`

const NumberDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 5px;
  min-width: 40px;
  @media (min-width: 1000px) {
    width: 45px;
  }

  ${(props) =>
    props.flexTable &&
    css`
      @media only screen and (min-width: 1000px) {
        flex: 1 1 0%;
      }
    `}
`

const TableText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.flexTable &&
    css`
      @media only screen and (min-width: 1000px) {
        flex: 6 1 0%;
      }
    `}
`

const ItemTitle = styled.h3`
  font-weight: ${(props) => (props.Bold ? '600' : '400')};
  font-size: 18px;
  line-height: 18px;
  color: #405063;
  margin-bottom: 5px;
  width: 95%;

  @media (min-width: 1000px) {
    font-size: 16px;
    width: 270px;
  }
  ${(props) =>
    props.singleton &&
    css`
      margin-bottom: 5px;
      margin-top: 10px;
      line-height: 18px;
      @media only screen and (min-width: 1000px) {
        margin-bottom: 0px;
        margin-top: 10px;
      }
    `}
  ${(props) =>
    props.syllabiText &&
    css`
      height: ${(props) => (props.heightS ? '55px' : '')};
      overflow: hidden;
      text-overflow: ellipsis;

      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.width};
        height: ${(props) => (props.height ? props.height : 'auto')};
      }
    `}
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
  height: 20px;
  padding-right: 10px;
  ${(props) =>
    props.desk &&
    css`
      font-weight: 700;
      font-size: 18px;
      color: ${(props) => (props.blue ? '#3775B9' : '#2C2925')};
      margin-left: 10px;
      width: 40px;
      padding: 0px 0px 0px 0px;
    `}

  ${(props) =>
    props.singleton &&
    css`
      @media only screen and (min-width: 1000px) {
        padding: 10px 1px 0px 0px;
      }
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
    width: ${(props) => (props.singletonWith ? '183px' : '150px')};
  }

  ${(props) =>
    props.forCountriesFilter &&
    css`
      @media only screen and (min-width: 1000px) {
        margin-right: 25px;
      }
    `}
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
  ${(props) =>
    props.singleton &&
    css`
      @media only screen and (min-width: 1000px) {
        width: 84%;
      }
    `}

  ${(props) =>
    props.bigTable &&
    css`
      @media only screen and (min-width: 1000px) {
        margin-left: 200px;
        width: 90%;
      }
    `}
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

  ${(props) =>
    props.bigTable &&
    css`
      @media only screen and (min-width: 1000px) {
        width: 520px;
      }
    `}
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
  cursor: pointer;

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
  ToSingleton,
}
