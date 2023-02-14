import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  font-family: Roboto, sans-serif;
  margin-top: 75px;
  background-color: white;

  @media (min-width: 992px) {
    width: 970px;
    margin-top: 140px;
    flex-direction: row;
    align-items: flex-start;
    background-color: transparent;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const Header = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  box-sizing: border-box;
  padding-top: 30px;
  align-items: center;
  width: 108%;
  background-image: url(/static/media/header-bg.1f8a51fe4963b5403d9f.png);
  height: 330px;
  background-size: cover;

  @media (min-width: 768px) {
    width: 103%;
  }

  @media (min-width: 992px) {
    width: 100%;
    height: 254px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  ${(props) =>
    props.forMobile &&
    css`
      @media (min-width: 768px) {
        display: none;
      }
    `}

  ${(props) =>
    props.forDesk &&
    css`
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    `}
`

const TitleHeader = styled.h2`
  color: white;
  letter-spacing: 0px;
  font-size: 32px;
  text-align: center;
  margin: 0px;
  font-weight: 300;

  @media (min-width: 992px) {
    margin-top: 35px;
    font-size: 42px;
  }
`

const HeaderBox = styled.div`
  width: 75%;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  text-align: center;
  color: #3775b9;
  max-width: 253px;
  height: 80px;
  margin-bottom: 35px;
  @media (min-width: 992px) {
    display: none;
  }
`
const InputGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    width: 90%;
  }
`

const BoxMail = styled.h3`
  font-size: 15px;
  letter-spacing: 0.1px;
  margin-top: ${(props) => props.marginTop || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
`
const BoxText = styled.p`
  font-size: 12px;
  letter-spacing: 0.1px;
  margin-top: ${(props) => props.marginTop || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
`

const BoxList = styled.ul`
  padding-inline-start: 0px;
`

const BoxListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  padding: 20px 3px 20px 3px;
  border-radius: 5px;
  font-weight: 900;
  font-size: 12px;
  line-height: 26px;

  :active,
  :hover {
    background-color: #3775b9;
  }
`

const FormButton = styled.button`
  padding: 10px 15px;
  background-color: rgb(82, 91, 101);
  border-radius: 5px;
  color: white;
  width: 165px;
  cursor: not-allowed;
  text-transform: uppercase;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  box-sizing: border-box;
  font-size: 14px;
  ${(props) =>
    props.changed &&
    css`
      background-color: #3775b9;
      cursor: pointer;
    `}

  @media (min-width: 992px) {
    margin-top: 35px;
  }
`

const Box = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 24%;
    border-radius: 5px;
    background-color: #224974;
    color: white;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 6px 6px);
    padding: 25px 25px 25px 30px;
    box-sizing: border-box;
    max-height: 319px;
  }
`

const Primary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    width: 73%;
    border-radius: 5px;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 6px 6px);
    background-color: white;
    align-items: center;
    margin-bottom: 85px;
  }
`

const Form = styled.form`
  width: 100%;
  margin-top: 40px;
  display: Flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 992px) {
    background-color: white;
    width: 80%;
  }
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  width: 90%;

  ${(props) =>
    props.initial &&
    css`
      @media (min-width: 992px) {
        align-items: initial;
      }
    `}

  ${(props) =>
    props.end &&
    css`
      @media (min-width: 992px) {
        align-items: end;
      }
    `}
`

const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgb(82, 91, 101);
  font-size: 14px;

  ${(props) =>
    props.twoInLine &&
    css`
      @media (min-width: 992px) {
        width: 95%;
      }
    `}
`

const ContactBox = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 15px 0px 10px 0px;

  @media (min-width: 992px) {
    margin: 25px 0px 25px 0px;
  }
`

const TextContact = styled.p`
  color: rgb(34, 73, 116);
  font-weight: 400;
  font-size: 13px;

  @media (min-width: 992px) {
    font-size: 13px;
    align-self: center;
  }
`

const ContactLink = styled.a`
  color: rgb(34, 73, 116);
  letter-spacing: 2.6px;
  font-size: 13px;
  line-height: 20px;
  padding: 5px 0px 0px;
  font-weight: 500;
  align-self: center;
  cursor: pointer;
  text-underline-offset: 7px;
  text-decoration: underline;
`

const InputText = styled.input`
  display: flex;
  flex-direction: column;
  height: 42px;
  margin-top: 6px;
  margin-bottom: 2px;
  color: ${({ readOnly }) => (readOnly ? 'grey' : 'rgb(55, 117, 185)')};
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(149, 153, 158);
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 0px 15px;
  box-sizing: border-box;
  cursor: ${({ readOnly }) => (readOnly ? 'not-allowed' : '')};

  :focus {
    outline-color: rgb(55, 117, 185);
  }
`
const ModalButton = styled.button`
  border: none;
  display: flex;
  padding: 10px 15px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(55, 117, 185);
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  margin: 0px;
  color: white;
`

export {
  Wrapper,
  Header,
  InputText,
  InputWrapper,
  LabelStyle,
  FormButton,
  Box,
  Primary,
  TitleHeader,
  HeaderBox,
  Form,
  ContactBox,
  TextContact,
  ContactLink,
  BoxMail,
  BoxText,
  InputGroupBox,
  BoxList,
  BoxListItem,
  ModalButton,
}
