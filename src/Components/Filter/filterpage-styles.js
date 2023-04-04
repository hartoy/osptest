import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  font-family: Roboto, sans-serif;
  margin-top: 110px;

  @media (min-width: 1000px) {
    width: 970px;
    margin-top: 140px;
    flex-direction: row;
    align-items: flex-start;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: white;
  @media (min-width: 1000px) {
    width: ${(props) => props.width};
    box-shadow: ${(props) => (props.boxShadow ? '2px 2px 10px 2px rgba(0, 0, 0, 0.1)' : '')};
    border-radius: 5px;
    position: relative;
    background-color: ${(props) => (props.white ? 'white' : '#F4F5F9')};
  }
`

const TableHeader = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    width: 90%;
    margin-bottom: 25px;
  }
`

const TableTitle = styled.h2`
  display: none;
  @media (min-width: 1000px) {
    font-size: 32px;
    line-height: 50px;
    color: rgb(55, 117, 185);
    margin: 0px;
    padding-bottom: 10px;
    display: block;
    margin-top: 25px;
  }
`

const BlueBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9998;
  width: 180px;
  height: 48px;
  background-color: #224974;
  align-items: center;
  font-size: 12px;
  line-height: 34px;
  positon: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-transform: uppercase;
  border-bottom: 0.3rem solid transparent;

  :hover {
    background-color: #3775b9;
    border-bottom: 0.3rem solid #3775b9;
  }

  ${({ list }) =>
    list
      ? css`
          border-bottom-left-radius: unset;
          border-bottom-right-radius: unset;
          border-bottom: 0.3rem solid #48688c;
          margin: -1px;
        `
      : css`
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        `}

  color: white;
  @media (min-width: 1000px) {
    width: 100%;
    font-size: 18px;
    line-height: 34px;
    height: 60px;
  }
`

const BlueList = styled.ul`
  border-top: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #224974;
  position: absolute;
  width: 180px;
  top: 180px;
  padding-inline-start: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style-type: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 100%;
    font-size: 18px;
    line-height: 34px;
    top: 59px;
  }
`

const BlueListItem = styled.li`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.sinB ? '' : '0.1rem solid #48688C')};
  width: 100%;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  :hover {
    background-color: #3775b9;
    border-radius: 5px;
  }

  @media (min-width: 1000px) {
    height: 60px;
    font-size: 14px;
  }

  ${(props) =>
    props.sinPadding &&
    css`
      padding-left: 0px;
      padding-right: 0px;
    `}
`
const LinkTo = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`

const Box = styled.div`
  width: 100%;
  border-bottom: 2px solid rgb(55, 117, 185);
  box-sizing: border-box;
  height: 39px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 35px;
  padding-bottom: 35px;
  flex: 1;

  @media (min-width: 1000px) {
    width: 100%;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    background: white;
    padding: 24px 20px;
    height: 160px;
  }
`
const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`

const FilterText = styled.h4`
  font-size: 11px;
  text-transform: uppercase;
  margin: 0px;
  @media (min-width: 1000px) {
    display: none;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  position: relative;
`
const FillterButton = styled.button`
  border: none;
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  background: rgb(82, 91, 101);
  border-radius: 5px;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
`

const SelectWrapper = styled.div`
  flex-grow: 1;
  margin-top: 20px;
  display: ${(props) => (props.hideFilter ? 'none' : 'block')};
  @media (min-width: 1000px) {
    display: block;
  }

  ${(props) =>
    props.inLine &&
    css`
    display: flex;
      justify-content: space-between;
     @media (min-width: 1000px) {
      display: flex;
      justify-content: space-between;
    `}
    }
`

export {
  Wrapper,
  Column,
  BlueBox,
  TableHeader,
  TableTitle,
  LinkTo,
  BlueList,
  BlueListItem,
  Box,
  FilterText,
  BoxWrapper,
  FillterButton,
  ButtonDiv,
  SelectWrapper,
}
