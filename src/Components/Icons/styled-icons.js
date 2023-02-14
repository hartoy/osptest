import styled, { css } from 'styled-components'

const IconStyles = styled.div`
  height: ${(props) => props.height || ''};
  width: ${(props) => props.width || ''};
  margin-right: ${(props) => props.marginRight || '0'};
  margin-left: ${(props) => props.marginLeft || '0'};
  margin-top: ${(props) => props.marginTop || '0'};
  padding: ${(props) => props.padding || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  display: ${({ flex }) => (flex ? 'flex' : '')};

  ${(props) =>
    props.forMobile &&
    css`
      display: none;
      @media only screen and (max-width: 1000px) {
        display: block;
      }
    `}

  ${(props) =>
    props.forDesktop &&
    css`
      display: none;
      @media only screen and (min-width: 1000px) {
        display: block;
      }
    `}

    ${(props) =>
    props.who &&
    css`
      padding: 15px;
      background-color: white;
      border-radius: 50%;
      width: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`

export { IconStyles }
