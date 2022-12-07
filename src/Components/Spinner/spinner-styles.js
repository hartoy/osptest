import styled from 'styled-components'

const SpinnerWrapper = styled.div`
  height: ${(props) => props.height};
`
const Spin = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: 70px;
  height: 70px;
  border: 10px solid #f3f3f3;
  /* Light grey */
  border-top: 10px solid #3775b9;
  /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 40%;

  ${(props) =>
    props.forLogin &&
    `
      position: relative;    
      width: 5px;
      height: 5px;
      border-top: 10px solid white;
      }
    `}
`

export { SpinnerWrapper, Spin }
