import Axios from 'axios'

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
