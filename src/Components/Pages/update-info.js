import React from 'react'
import { useAuthContext } from '../../authContext'
import UpdateForm from '../UpdateForm'
const UpdateInfo = () => {
  const { isLoading } = useAuthContext()

  return <UpdateForm />
}

export default UpdateInfo
