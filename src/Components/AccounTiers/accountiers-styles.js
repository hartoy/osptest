import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const AccountStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Roboto, sans-serif;
  padding-bottom: 85px;

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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;

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

export { AccountStyles, Wrapper }
