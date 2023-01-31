import { useNavigate, Outlet } from 'react-router-dom'
import { useAuthContext } from './authContext'
import Axios from 'axios'

export default function PrivateRoute() {
  const { userData } = useAuthContext()
  const { setUserData, setIsLoading, logout } = useAuthContext()
  const API_GENOSHA = process.env.REACT_APP_API_GENOSHA
  const navigate = useNavigate()

  if (userData === undefined) {
    const token = localStorage.getItem('access')
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    console.log('se esta validando el token en private routes')
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
          navigate('/login')
        }
      })
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
