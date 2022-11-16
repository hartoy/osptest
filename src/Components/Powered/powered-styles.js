import styled from 'styled-components'

const PoweredStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-reverse;
    height: 650px;
    width: 750px;
    justify-content: start;
    align-items: center;
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
  margin-left: 30px;
  margin-right: 5px;
  width: 300px;

  @media (min-width: 1000px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 55%;
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
    margin-bottom: 10px;
  }
`
export { PoweredStyles, StyledLi, StyledUl }
