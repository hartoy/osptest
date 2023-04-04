import styled from 'styled-components'
const SearchStyles = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  width: 350px;

  @media (min-width: 992px) {
    max-width: 350px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media (min-width: 1200px) {
    max-width: 350px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
`
const MobileSearch = styled.div`
  background-color: white;
  width: 85%;
  height: 275px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 10px 20px 10px;
  margin: 0 auto;
  position: absolute;
  bottom: -130px;
  left: 0;
  right: 0;

  ul {
    display: flex;
    padding-inline-start: 0px;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px;
    cursor: pointer;
  }
  span {
    color: #224974;
    font-size: 10.5px;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    margin-top: 5px;
  }
  svg {
    background-color: #dde8f2;
    border-radius: 50%;
    padding: 18px;
    height: 20px;
    width: 21px;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`

const DeskSearch = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 378px;
    height: 712px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    ul {
      list-style: none;
    }
    li {
      background-color: #d2e0ed;
      border-radius: 5px;
      margin-top: 8px;
      margin-bottom: 8px;
      width: 289px;
      height: 66px;
      display: flex;
      align-items: center;
      justify-content: start;
      box-sizing: border-box;
      padding: 8px 0px 8px 30px;
      margin-bottom: 16px;
      margin-top: 8px;
      cursor: pointer;
    }
    p {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 20px;
      font-family: Roboto, sans-serif;
      font-weight: 900;
      color: #224974;
      text-transform: uppercase;
      letter-spacing: 0.11em;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      font-family: Roboto, sans-serif;
      color: #525b65;
      text-align: initial;
      letter-spacing: 0.03em;
    }
    svg {
      height: 27px;
      width: 29px;
    }
  }
`

export { SearchStyles, MobileSearch, DeskSearch }
