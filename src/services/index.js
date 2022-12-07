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

export const getWorkSearch = async () => {
  let response = await Axios(`https://explorer-api.opensyllabus.org/v1/works.json?size=10`)
  return response.data
}

export const getFieldSearch = async () => {
  let response = await Axios(`https://explorer-api.opensyllabus.org/v1/fields.json?size=10`)
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
