import styled, { css } from 'styled-components'

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  font-family: Roboto, sans-serif;
  height: 65vh;

  @media (min-width: 992px) {
    width: 970px;
    height: 70vh;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
const Form = styled.form`
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #3775b9;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background-color: #3775b9;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  box-sizing: border-box;
  height: 37px;

  ${(props) =>
    props.forSpinner &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`
const Denied = styled.p`
  color: #3775b9;
`
export { LoginWrapper, Form, Input, Button, Denied }
