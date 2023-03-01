import styled, { css } from 'styled-components'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: 40px;
  margin-bottom: ${(props) => (props.sinBot ? '0px' : '40px')};
  padding-top: 25px;
  padding-bottom: 25px;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
  }

  ${(props) =>
    props.special &&
    css`
      @media (min-width: 992px) {
        width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      @media (min-width: 1200px) {
        width: 1170px;
        margin: 0 auto;
      }
    `}

  ${(props) =>
    props.forSingletons &&
    css`
      background-color: white;
      @media (min-width: 1000px) {
        background-color: #f4f5f9;
      }
    `}

  ${(props) =>
    props.center &&
    css`
      @media (min-width: 992px) {
        align-items: center;
      }
    `}
`
export default Section
