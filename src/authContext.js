import { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

export const AuthContext = createContext()
const API_GENOSHA = process.env.REACT_APP_API_GENOSHA

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const logout = useCallback(function () {
    window.localStorage.removeItem('login', true)
    window.localStorage.removeItem('access', true)
    window.localStorage.removeItem('refresh', true)
    setUserData()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('access')
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    if (userData === undefined) {
      console.log('se esta validando el token en auth')
      Axios.get(`${API_GENOSHA}api/v1/auth/me`, config)
        .then((response) => {
          setUserData(response.data)
          setIsLoading(false)
        })
        .catch((err) => {
          if (err.response.status >= 401) {
            setIsLoading(false)
            console.log(err)
            logout()
          }
        })
    }
  }, [window.location])

  const value = useMemo(
    () => ({
      logout,
      isLoading,
      userData,
      setIsLoading,
      setUserData,
    }),
    [logout, isLoading, userData, setIsLoading, setUserData]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
}

export function useAuthContext() {
  return useContext(AuthContext)
}
