import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 308px;
  align-items: center;
  border-radius: 12px;
  list-style-type: none;
  box-shadow: rgb(0 0 0 / 10%) 2px 2px 10px 2px;
  padding-top: 15px;
  font-family: Roboto, sans-serif;
  position: relative;
  margin: 35px;

  ul {
    list-style-type: none;
  }

  p {
    padding: 10px;
    margin: 0px;
    min-height: 75px;
  }

  h3 {
    color: rgb(55, 117, 185);
    font-size: 16px;
  }

  p,
  li {
    font-size: 13px;
    letter-spacing: 0.1px;
    color: rgb(85, 85, 85);
    list-style-type: none;
    max-width: 270px;
  }

  li {
    margin-bottom: 10px;
    position: relative;
  }

  li:before {
    content: '✓';
    position: absolute;
    left: -1em;
    color: rgb(55, 117, 185);
  }

  ul {
    list-style-type: none;
    text-align: left;
    padding-inline-start: 0px;
  }

  @media (min-width: 1000px) {
    width: 275px;
    height: 335px;
    margin-bottom: 30px;

    h3 {
      font-size: 20px;
    }

    p,
    li {
      font-size: 18px;
      max-width: 700px;
    }
  }
`

const Line = styled.div`
  width: 65%;
  height: 1px;
  background: rgba(55, 117, 185, 0.5);
`

const Price = styled.div`
  color: rgb(55, 117, 185);
  font-weight: 900;
  letter-spacing: 2.7px;
  font-size: 16px;
  letter-spacing: 2.7px;
  margin-top: 25px;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 1000px) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 17px;
  }
`

const CardBottom = styled.div`
  position: absolute;
  bottom: 0px;
  height: 82px;
  text-align: center;
  font-size: 18px;
  background: rgb(210, 224, 237);
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { CardWrapper, CardBottom, Line, Price }
