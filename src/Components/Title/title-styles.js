import styled from 'styled-components'

const Title = styled.h1`
  color: rgb(55, 117, 185);
  font-weight: 900;
  letter-spacing: 2.7px;
  font-family: Roboto, sans-serif;
  letter-spacing: 2.7px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: ${(props) => props.textAlign};
  margin-right: ${(props) => props.marginRight};
  width: ${(props) => props.width};
  text-transform: uppercase;
  display: none;

  ${(props) =>
    props.mobile &&
    `
      @media only screen and (max-width: 1000px) {
        display: block;
        font-size: 16px;
      }
    `}

  ${(props) =>
    props.desktop &&
    `
      @media only screen and (min-width: 1000px) {
        display: block;
        font-size: 26px;
        font-size: ${(props) => (props.fontSizeSmall ? '20px' : '26px')};
      }
    `}
`

const RevisionsTitle = styled.h2`
  line-height: 28px;
  font-family: Roboto, sans-serif;
  color: #224974;
  font-weight: 300;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  display: none;

  ${(props) =>
    props.mobile &&
    `
      @media only screen and (max-width: 1000px) {
        display: block;
        font-size: 22px;
      }
    `}
  ${(props) =>
    props.desktop &&
    `
      @media only screen and (min-width: 1000px) {
        display: block;
        font-size: 28px;
      }
    `};
`
export { Title, RevisionsTitle }
