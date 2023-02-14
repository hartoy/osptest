import Axios from 'axios'
const API_GENOSHA = process.env.REACT_APP_API_GENOSHA

export const getData = async () => {
  let response = await Axios(`https://os-analytics-api-dev.opensyllabus.org/api/v1/auth/memberships`)
  return response.data
}

export const getDataSearch = async () => {
  let response = await Axios(`https://os-analytics-api-dev.opensyllabus.org/stats/?format=json`)
  return response.data
}

export const getWorkSearch = async (config) => {
  let response = await Axios(`https://os-analytics-api-dev.opensyllabus.org/titles/?format=json&size=10`, config)
  return response.data
}

export const getFieldSearch = async (config) => {
  let response = await Axios(`https://os-analytics-api-dev.opensyllabus.org/fields/?format=json&size=10`, config)
  return response.data
}

export const getSingletonTitleId = async (config, id) => {
  let response = await Axios(`https://os-analytics-api-dev.opensyllabus.org/titles/${id}`, config)
  return response.data
}

export const changeUserData = async (data, config) => {
  let response = await Axios.put(`https://os-analytics-api-dev.opensyllabus.org/api/v1/auth/me/update`, data, config)
  return response.data
}

export const getUserData = async (config) => {
  let response = await Axios(`https://os-analytics-api-dev.opensyllabus.org/api/v1/auth/me`, config)
  return response.data
}

export async function PostCall(dataUser) {
  try {
    const response = await Axios({
      url: `${API_GENOSHA}api/v1/auth/token`,
      method: 'POST',
      data: dataUser,
    })
    return response
  } catch (error) {
    return error
  }
}

export const getAuth = async () => {
  let response = await Axios(`${API_GENOSHA}auth/me`)
  return response.data
}
