import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { LoginWrapper, Form, Input, Button, Denied } from './login-styles.js'
import { Title } from '../Title/title-styles'
import { useAuthContext } from '../../authContext'
import { PostCall } from '../../services/index.js'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner/index'

const Login = (props) => {
  const { setUserData, setIsLoading, logout, isLoading } = useAuthContext()

  const API_GENOSHA = process.env.REACT_APP_API_GENOSHA

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [empty, setEmpty] = useState(false)
  const [denied, setDenied] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    setIsLoading(true)
    e.preventDefault()
    const userData = {
      username: email,
      password: password,
    }

    PostCall(userData)
      .then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem('access', resp.data.access)
          localStorage.setItem('refresh', resp.data.refresh)
          const token = localStorage.getItem('access')
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          }
          Axios.get(`${API_GENOSHA}/api/v1/auth/me`, config)
            .then((response) => {
              setUserData(response.data)
              console.log('entro desde login')
              setIsLoading(false)
              navigate('/')
            })
            .catch((err) => {
              if (err.response.status >= 401) {
                setIsLoading(false)
                console.log(err)
                logout()
              }
            })
        } else if (resp.response.status >= 401) {
          setDenied(true)
        }
      })
      .catch((err) => console.log(err))
    if (email.length === 0 && password.length === 0) {
      setEmpty(true)
    }
  }

  return (
    <LoginWrapper>
      <Title mobile width="300px" textAlign="center">
        Login
      </Title>
      <Title desktop>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLoading ? (
          <Button type="submit">
            <Spinner forLogin />
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
      </Form>
      {empty && <Denied> ❌ Campos vacios </Denied>}
      {denied && <Denied> ❌ Usuario invalido </Denied>}
    </LoginWrapper>
  )
}

export default Login
