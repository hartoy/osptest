import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getUserData, changeUserData } from '../../services/index.js'
import { useAuthContext } from '../../authContext'
import Modal from '../Modal/index'
import {
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
} from './updateform-styles.js'

import Icon from '../Icons'

const UpdateForm = () => {
  const [userData, setUserData] = useState([])
  const [finalUserData, setFinaluserData] = useState([])
  const [changed, setChanged] = useState(false)
  const [finished, setFinished] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const { logout } = useAuthContext()

  const token = localStorage.getItem('access')
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  useEffect(() => {
    getUserData(config)
      .then((res) => {
        setUserData(res)
      })
      .catch((error) => console.error(error))
  }, [])

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      organization_name: '',
      email: '',
      country: '',
      state: '',
      city: '',
      city_code: '',
      street: '',
      confirm_email: '',
    },
  })

  const handleChange = (event) => {
    const dataValue = event.target.value
    const dataName = event.target.name

    const oldValue = userData[event.target.name]
    console.log(userData)
    console.log('oldvalue', oldValue)
    console.log('new value', dataValue)

    if (oldValue !== dataValue) {
      setChanged(true)
    } else {
      setChanged(false)
    }

    setFinaluserData({
      ...finalUserData,
      [event.target.name]: event.target.value,
    })
  }

  const ManageModal = () => {
    setFinished(false)
  }

  useEffect(() => {
    reset({
      first_name: userData.first_name,
      last_name: userData.last_name,
      organization_name: userData.organization_name,
      username: userData.username,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      city_code: userData.city_code,
      street: userData.street,
      confirm_email: userData.username,
    })
  }, [reset, userData])

  const onSubmit = () => {
    const email = watch('username')
    const confirmEmail = watch('confirm_email')

    console.log(email, confirmEmail)
    if (email !== confirmEmail) {
      setEmailError(true)
    } else {
      setEmailError(false)
      const updatedData = {}
      for (let key in finalUserData) {
        if (finalUserData[key] !== userData[key]) {
          updatedData[key] = finalUserData[key]
        }
      }

      const token = localStorage.getItem('access')
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      }

      changeUserData(updatedData, config)
        .then((res) => {
          console.log('respuesta final', res)
        })
        .catch((error) => console.error(error))

      setFinished(true)
      setChanged(false)
    }
  }

  const logOut = () => {
    logout()
  }

  useEffect(() => {}, [])

  return (
    <Wrapper>
      <Header forMobile>
        {userData.length !== 0 ? (
          <HeaderBox>
            <BoxMail marginTop="20px">
              {userData.first_name} <span style={{ fontWeight: '500' }}>from</span> Genosha
            </BoxMail>
            <BoxText marginTop="6px">{userData.username}</BoxText>
          </HeaderBox>
        ) : (
          ''
        )}
        <TitleHeader>Account Information</TitleHeader>
      </Header>
      <Box>
        {userData.length !== 0 ? (
          <BoxMail marginBottom="3px">
            {userData.first_name} <span style={{ fontWeight: '500' }}>from</span> {userData.organization_name}
          </BoxMail>
        ) : (
          ''
        )}
        {userData.length !== 0 ? (
          <BoxMail marginBottom="3px">
            <BoxText marginBottom="8px">{userData.username}</BoxText>
          </BoxMail>
        ) : (
          ''
        )}
        <BoxText style={{ fontWeight: '900', letterSpacing: '2.6px' }}>MAIN USER</BoxText>
        <BoxList>
          <BoxListItem>
            <Icon flex name="SingletonRank" marginRight="10px" /> Account info
          </BoxListItem>
          <BoxListItem>
            <Icon flex name="SingletonRank" marginRight="10px" /> Change Password
          </BoxListItem>
          <BoxListItem onClick={logOut}>
            <Icon flex name="SingletonRank" marginRight="10px" /> Log Out
          </BoxListItem>
        </BoxList>
      </Box>
      <Primary>
        <Header forDesk>
          <TitleHeader>Account Information</TitleHeader>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroupBox>
            <InputWrapper initial>
              <LabelStyle htmlFor="" twoInLine>
                First Name
                <InputText
                  name="first_name"
                  type="text"
                  {...register('first_name', { required: true })}
                  onChange={handleChange}
                />
              </LabelStyle>
              {errors.first_name?.type === 'required' && <p>El campo no puede estar vacio</p>}
            </InputWrapper>
            <InputWrapper end>
              <LabelStyle htmlFor="" twoInLine>
                Last Name
                <InputText type="text" {...register('last_name', { required: true })} onChange={handleChange} />
              </LabelStyle>
              {errors.last_name?.type === 'required' && <p>El campo no puede estar vacio</p>}
            </InputWrapper>
          </InputGroupBox>
          <InputWrapper>
            <LabelStyle htmlFor="">
              Organization Name
              <InputText type="text" {...register('organization_name', { required: true })} onChange={handleChange} />
            </LabelStyle>
            {errors.organization_name?.type === 'required' && <p>El campo no puede estar vacio</p>}
          </InputWrapper>
          <InputWrapper>
            <LabelStyle htmlFor="">
              Account Type
              {userData.length === 0 ? (
                <InputText type="text" value="" readOnly />
              ) : (
                <InputText type="text" value={userData.membership.name} readOnly />
              )}
            </LabelStyle>
          </InputWrapper>
          <ContactBox>
            <TextContact>If you want tho change your account type,</TextContact>
            <ContactLink>CONTACT US</ContactLink>
          </ContactBox>
          <InputWrapper>
            <LabelStyle htmlFor="">
              Street Address
              <InputText type="text" {...register('street', { required: true })} onChange={handleChange} />
            </LabelStyle>
            {errors.street?.type === 'required' && <p>El campo no puede estar vacio</p>}
          </InputWrapper>
          <InputGroupBox>
            <InputWrapper initial>
              <LabelStyle htmlFor="" twoInLine>
                City
                <InputText type="text" {...register('city', { required: true })} onChange={handleChange} />
              </LabelStyle>
              {errors.city?.type === 'required' && <p>El campo no puede estar vacio</p>}
            </InputWrapper>
            <InputWrapper end>
              <LabelStyle htmlFor="" twoInLine>
                State/Province
                <InputText type="text" {...register('state', { required: true })} onChange={handleChange} />
              </LabelStyle>
              {errors.state?.type === 'required' && <p>El campo no puede estar vacio</p>}
            </InputWrapper>
          </InputGroupBox>
          <InputGroupBox>
            <InputWrapper initial>
              <LabelStyle htmlFor="" twoInLine>
                Country
                <InputText type="text" {...register('country', { required: true })} onChange={handleChange} />
              </LabelStyle>
              {errors.country?.type === 'required' && <p>El campo no puede estar vacio</p>}
            </InputWrapper>
            <InputWrapper end>
              <LabelStyle htmlFor="" twoInLine>
                Postal Code
                <InputText type="text" {...register('city_code', { required: true })} onChange={handleChange} />
              </LabelStyle>
              {errors.city_code?.type === 'required' && <p>El campo no puede estar vacio</p>}
            </InputWrapper>
          </InputGroupBox>
          <InputGroupBox>
            <InputWrapper initial>
              <LabelStyle htmlFor="" twoInLine>
                Email
                <InputText
                  type="text"
                  {...register('username', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required: true,
                  })}
                  onChange={handleChange}
                />
              </LabelStyle>
              {errors.email?.type === 'required' && <p>El campo no puede estar vacio</p>}
              {errors.email?.type === 'pattern' && <p>Formato email incorrecto</p>}
            </InputWrapper>
            <InputWrapper end>
              <LabelStyle htmlFor="" twoInLine>
                Confirm email
                <InputText type="text" {...register('confirm_email', { required: true })} />
              </LabelStyle>
              {errors.confirm_email?.type === 'required' && <p>El campo no puede estar vacio</p>}
              {emailError === true && <p>El mail no coincide</p>}
            </InputWrapper>
          </InputGroupBox>
          {changed ? (
            <div>
              <FormButton changed type="submit">
                Save
              </FormButton>
            </div>
          ) : (
            <div style={{ cursor: 'not-allowed' }}>
              <FormButton style={{ pointerEvents: 'none' }} type="">
                Save
              </FormButton>
            </div>
          )}
        </Form>
      </Primary>
      {finished ? (
        <Modal small>
          <h2>Account information updated</h2>
          <ModalButton onClick={ManageModal}>OK</ModalButton>
        </Modal>
      ) : (
        ''
      )}
    </Wrapper>
  )
}

export default UpdateForm
