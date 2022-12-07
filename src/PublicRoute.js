import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from './authContext'

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext()

  return (
    <div>
      <Outlet />
    </div>
  )
}
