import styled from 'styled-components'

const ThingsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;

  img,
  .graficos {
    width: 300px;
  }

  .graficos {
    margin-top: 15px;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    height: 650px;
    width: 750px;

    img {
      width: 450px;
      margin-right: 140px;
    }
  }

  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  width: 300px;

  @media (min-width: 1000px) {
    width: 550px;
  }
`
const StyledLi = styled.li`
  position: relative;
  color: rgb(82, 91, 101);
  font-weight: 400;
  letter-spacing: 0.1px;
  font-size: 13px;
  line-height: 20px;
  font-family: Roboto, sans-serif;

  :before {
    content: '✓';
    position: absolute;
    left: -1em;
    color: rgb(55, 117, 185);
  }

  @media (min-width: 1000px) {
    font-size: 18px;
    width: 85%;
    margin-bottom: 15px;
  }
`

const Graficos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  align-items: center;
  @media (min-width: 1000px) {
    justify-content: center;
  }
`
export { ThingsStyles, Graficos, StyledLi, StyledUl }
