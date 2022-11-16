import styled from 'styled-components'

const FooterStyles = styled.div`
  background-color: #d2e0ed;
  height: 228px;
  font-size: 15px;
  line-height: 30px;
  color: rgb(34, 73, 116);
  font-family: Roboto, sans-serif;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;

  .first-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }

  ul {
    padding-inline-start: 0px;
  }

  ul li {
    list-style-type: none;
  }

  .open {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: center;
    height: 232px;
    display: flex;
    flex-direction: column;
    padding-top: 0px;

    .first-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 800px;
    }
    ul {
      display: flex;
    }

    li {
      margin-right: 12px;
      margin-left: 12px;
    }

    svg {
      display: block;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
export { FooterStyles }
