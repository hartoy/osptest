import styled from 'styled-components'

const Header = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: ${(props) => props.height || '555px'};
  align-items: center;
  box-sizing: border-box;

  h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    width: 300px;
    text-align: center;
  }

  p {
    font-size: 13px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 315px;
  }

  button {
    background-color: #3775b9;
    border-radius: 5px;
    border-style: none;
    font-size: 14px;
    color: white;
    font-weight: 900;
    width: 285px;
    height: 37px;
    margin-top: 15px;
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: flex-start;
    text-align: left;
    height: 630px;

    h1 {
      font-size: 42px;
      line-height: 50px;
      width: 700px;
      text-align: left;
    }

    p {
      font-size: 18px;
      line-height: 27px;
      width: 680px;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      align-items: flex-start;
    }
    button {
      margin-top: 35px;
      width: 285px;
      height: 53px;
    }
  }

  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
export { Header }
