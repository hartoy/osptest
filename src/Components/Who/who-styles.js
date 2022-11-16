import styled from 'styled-components'

const WhoStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  h1 {
    color: rgb(55, 117, 185);
    font-weight: 900;
    letter-spacing: 2.7px;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    letter-spacing: 2.7px;
    margin-top: 25px;
    margin-bottom: 60px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding-inline-start: 0px;
    width: 95%;
  }

  li {
    background-color: #f4f5f9;
    height: 190px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding-top: 8px;
  }

  p {
    font-size: 13px;
    color: rgb(34, 73, 116);
    font-family: Roboto, sans-serif;
    font-weight: 500;
    text-align: center;
    width: 230px;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 550px;
    width: 750px;
    justify-content: center;

    h1 {
      font-size: 26px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      margin-bottom: 60px;
    }
    li {
      font-size: 18px;
      display: flex;
      flex-direction: row;
      width: 450px;
      height: 174px;
      justify-content: space-around;
      align-items: center;
      positon: relative;
    }
    p {
      width: 50%;
      font-size: 18px;
      margin-top: 0px;
    }
  }

  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export { WhoStyles }
