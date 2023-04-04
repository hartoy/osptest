import Axios from 'axios'
const API_GENOSHA = process.env.REACT_APP_API_GENOSHA

const callApi = async (endpoint, config) => {
  const url = `${process.env.REACT_APP_API_GENOSHA}${endpoint.replace(/^\/+/, '')}`
  const response = await Axios(url, config)
  return response.data
}

export const getData = async (config) => {
  const endpoint = '/api/v1/auth/memberships'
  return await callApi(endpoint, config)
}

export const getDataSearch = async (config) => {
  const endpoint = 'stats/?format=json'
  return await callApi(endpoint, config)
}

export const getSyllabi = async (config) => {
  const endpoint = 'syllabi/?format=json&size=50'
  return await callApi(endpoint, config)
}

export const getTitlesBasic = async (config) => {
  const endpoint = 'titles/'

  return await callApi(endpoint, config)
}

export const getWorkSearch = async (config) => {
  const endpoint = 'titles/?format=json&size=10'
  return await callApi(endpoint, config)
}

export const getWorkSearchBig = async (config) => {
  const endpoint = 'titles/?format=json&size=50'

  return await callApi(endpoint, config)
}

export const getFieldSearch = async (size, config) => {
  const endpoint = `fields/?format=json&size=${size}`
  return await callApi(endpoint, config)
}

export const getSingletonTitleId = async (id, config) => {
  const endpoint = `titles/${id}`

  return await callApi(endpoint, config)
}

export const getSingletonFieldsId = async (id, config) => {
  const endpoint = `fields/${id}`

  return await callApi(endpoint, config)
}

export const changeUserData = async (data, config) => {
  const endpoint = '/api/v1/auth/me/update'
  return await callApi(endpoint, { method: 'PUT', data, ...config })
}

export const getUserData = async (config) => {
  const endpoint = '/api/v1/auth/me'

  return await callApi(endpoint, config)
}

export const getCountries = async (config) => {
  const endpoint = 'countries/'
  return await callApi(endpoint, config)
}

export const getPublishers = async (config) => {
  const endpoint = 'publishers/?format=json&size=50'
  return await callApi(endpoint, config)
}

export const getFieldsByCountry = async (countryCode, countryName, config) => {
  const endpoint = `fields/?format=json&size=50&institution_country_codes=${countryCode}&country_query=${countryName}`

  return await callApi(endpoint, config)
}

export const getFieldsByQuery = async (query, config) => {
  const endpoint = `fields/?format=json&size=50&field_query=${query}`
  return await callApi(endpoint, config)
}

export const getSchools = async (config) => {
  const endpoint = 'schools/?format=json&size=50'
  return await callApi(endpoint, config)
}

export const getAuthors = async (config) => {
  const endpoint = 'authors/?format=json&size=50'
  return await callApi(endpoint, config)
}

export const testDinamic = async (config, query) => {
  let endpoint = '/fields/?format=json&size=50'

  if (query.field_query) {
    endpoint += `&field_query=${query.field_query}`
  }

  if (query.institution_country_codes) {
    query.institution_country_codes.forEach((country) => {
      endpoint += `&institution_country_codes=${encodeURIComponent(country)}`
    })
  }

  if (query.country_query) {
    query.country_query.forEach((country) => {
      endpoint += `&country_query=${encodeURIComponent(country)}`
    })
  }

  return await callApi(endpoint, config)
}

export const FilterCountriesDinamic = async (config, query) => {
  const endpoint = '/countries/?format=json&size=50'

  let url = `${endpoint}`

  console.log('que recibe FilterCountriesDinamic', query)

  if (query.field_id) {
    query.field_id.forEach((field_id) => {
      url += `&field_ids=${encodeURIComponent(field_id)}`
    })
  }

  if (query.field_display_name) {
    query.field_display_name.forEach((display_name) => {
      url += `&field_query=${encodeURIComponent(display_name)}`
    })
  }

  if (query.country_query) {
    url += `&country_query=${query.country_query}`
  }

  return await callApi(url, config)
}

export const FilterSchoolsDinamic = async (config, query) => {
  let endpoint = '/schools/?format=json&size=50'

  console.log('que recibe FilterSchoolsDinamic', query)

  if (query.field_ids) {
    query.field_ids.forEach((field_id) => {
      endpoint += `&field_ids=${encodeURIComponent(field_id)}`
    })
  }

  if (query.institution_country_codes) {
    query.institution_country_codes.forEach((country_codes) => {
      endpoint += `&institution_country_codes=${encodeURIComponent(country_codes)}`
    })
  }

  if (query.institution_types) {
    endpoint += `&institution_types=${query.institution_types}`
  }

  if (query.syllabus_year_start) {
    endpoint += `&syllabus_year_start=${query.syllabus_year_start}`
  }

  if (query.syllabus_year_end) {
    endpoint += `&syllabus_year_end=${query.syllabus_year_end}`
  }

  if (query.institution_state_codes) {
    endpoint += `&institution_state_codes=US-${query.institution_state_codes}`
  }

  if (query.institution_query) {
    endpoint += `&institution_query=${query.institution_query}`
  }

  if (query.field_query) {
    query.field_query.forEach((field_q) => {
      endpoint += `&field_query=${encodeURIComponent(field_q)}`
    })
  }

  if (query.country_query) {
    query.country_query.forEach((country_q) => {
      endpoint += `&country_query=${encodeURIComponent(country_q)}`
    })
  }

  return callApi(endpoint, config)
}

export const PublishersDinamic = async (config, query) => {
  let endpoint = '/publishers/?format=json&size=50'

  console.log('que recibe PublishersDinamic', query)

  if (query.field_ids) {
    query.field_ids.forEach((field_id) => {
      endpoint += `&field_ids=${encodeURIComponent(field_id)}`
    })
  }

  if (query.country_codes) {
    query.country_codes.forEach((country_code) => {
      endpoint += `&institution_country_codes=${encodeURIComponent(country_code)}`
    })
  }

  if (query.syllabus_query) {
    endpoint += `&syllabus_query=${query.syllabus_query}`
  }

  if (query.work_publication_types) {
    endpoint += `&work_publication_types=${query.work_publication_types}`
  }

  if (query.field_name) {
    query.field_name.forEach((field_q) => {
      endpoint += `&field_query=${encodeURIComponent(field_q)}`
    })
  }

  if (query.publisher_query) {
    endpoint += `&publisher_query=${query.publisher_query}`
  }

  if (query.country_query) {
    query.country_query.forEach((country_q) => {
      endpoint += `&country_query=${encodeURIComponent(country_q)}`
    })
  }

  return callApi(endpoint, config)
}

export const AuthorsDinamic = async (config, query) => {
  let endpoint = '/authors/?format=json&size=50'

  console.log('que recibe AuthorsDinamic', query)

  if (query.author_ids) {
    query.author_ids.forEach((author_id) => {
      endpoint += `&author_ids=${encodeURIComponent(author_id)}`
    })
  }

  if (query.institution_country_codes) {
    query.institution_country_codes.forEach((country_code) => {
      endpoint += `&institution_country_codes=${encodeURIComponent(country_code)}`
    })
  }

  if (query.institution_ids) {
    query.institution_ids.forEach((inst_id) => {
      endpoint += `&institution_ids=${encodeURIComponent(inst_id)}`
    })
  }

  if (query.institution_types) {
    endpoint += `&institution_types=${query.institution_types}`
  }

  if (query.work_year_start) {
    endpoint += `&work_year_start=${query.work_year_start}`
  }

  if (query.work_year_end) {
    endpoint += `&work_year_end=${query.work_year_end}`
  }

  if (query.institution_state_codes) {
    endpoint += `&institution_state_codes=US-${query.institution_state_codes}`
  }

  if (query.work_publication_types) {
    endpoint += `&work_publication_types=${query.work_publication_types}`
  }

  if (query.institution_query) {
    query.institution_query.forEach((inst_q) => {
      endpoint += `&institution_query=${encodeURIComponent(inst_q)}`
    })
  }

  if (query.author_query) {
    endpoint += `&author_query=${query.author_query}`
  }

  if (query.field_query) {
    query.field_query.forEach((field_q) => {
      endpoint += `&field_query=${encodeURIComponent(field_q)}`
    })
  }

  if (query.country_query) {
    query.country_query.forEach((country_q) => {
      endpoint += `&country_query=${encodeURIComponent(country_q)}`
    })
  }

  return callApi(endpoint, config)
}

export const TitlesDinamic = async (config, query) => {
  let endpoint = '/titles/?format=json&size=50'
  console.log('que recibe titlesDinamic', query)

  if (query.author_ids) {
    query.author_ids.forEach((author_id) => {
      endpoint += `&author_ids=${encodeURIComponent(author_id)}`
    })
  }

  if (query.institution_country_codes) {
    query.institution_country_codes.forEach((institution_country_code) => {
      endpoint += `&institution_country_codes=${encodeURIComponent(institution_country_code)}`
    })
  }

  if (query.institution_ids) {
    query.institution_ids.forEach((institution_id) => {
      endpoint += `&institution_ids=${encodeURIComponent(institution_id)}`
    })
  }

  if (query.institution_types) {
    endpoint += `&institution_types=${query.institution_types}`
  }

  if (query.syllabus_query) {
    endpoint += `&syllabus_query=${query.syllabus_query}`
  }

  if (query.work_year_start) {
    endpoint += `&work_year_start=${query.work_year_start}`
  }

  if (query.work_year_end) {
    endpoint += `&work_year_end=${query.work_year_end}`
  }

  if (query.institution_state_codes) {
    endpoint += `&institution_state_codes=US-${query.institution_state_codes}`
  }

  if (query.work_publication_types) {
    endpoint += `&work_publication_types=${query.work_publication_types}`
  }

  if (query.institution_query) {
    query.institution_query.forEach((inst_q) => {
      endpoint += `&institution_query=${encodeURIComponent(inst_q)}`
    })
  }

  if (query.work_query) {
    endpoint += `&work_query=${query.work_query}`
  }

  if (query.author_query) {
    query.author_query.forEach((auth_q) => {
      endpoint += `&author_query=${encodeURIComponent(auth_q)}`
    })
  }

  if (query.field_query) {
    query.field_query.forEach((field_q) => {
      endpoint += `&field_query=${encodeURIComponent(field_q)}`
    })
  }

  if (query.country_query) {
    query.country_query.forEach((country_q) => {
      endpoint += `&country_query=${encodeURIComponent(country_q)}`
    })
  }

  return callApi(endpoint, config)
}

export const SyllabiDinamic = async (config, query) => {
  let endpoint = '/syllabi/?format=json&size=50'
  console.log('que recibe titlesDinamic', query)

  if (query.field_ids) {
    query.field_ids.forEach((field_id) => {
      endpoint += `&field_ids=${encodeURIComponent(field_id)}`
    })
  }

  if (query.author_ids) {
    query.author_ids.forEach((author_id) => {
      endpoint += `&author_ids=${encodeURIComponent(author_id)}`
    })
  }

  if (query.institution_country_codes) {
    query.institution_country_codes.forEach((institution_country_code) => {
      endpoint += `&institution_country_codes=${encodeURIComponent(institution_country_code)}`
    })
  }

  if (query.institution_ids) {
    query.institution_ids.forEach((institution_id) => {
      endpoint += `&institution_ids=${encodeURIComponent(institution_id)}`
    })
  }

  if (query.institution_types) {
    endpoint += `&institution_types=${query.institution_types}`
  }

  if (query.syllabus_year_start) {
    endpoint += `&syllabus_year_start=${query.syllabus_year_start}`
  }

  if (query.syllabus_year_end) {
    endpoint += `&syllabus_year_end=${query.syllabus_year_end}`
  }

  if (query.institution_state_codes) {
    endpoint += `&institution_state_codes=US-${query.institution_state_codes}`
  }

  if (query.work_ids) {
    endpoint += `&work_ids=${query.work_ids}`
  }

  if (query.institution_query) {
    query.institution_query.forEach((inst_q) => {
      endpoint += `&institution_query=${encodeURIComponent(inst_q)}`
    })
  }

  if (query.work_query) {
    endpoint += `&work_query=${query.work_query}`
  }

  if (query.author_query) {
    query.author_query.forEach((auth_q) => {
      endpoint += `&author_query=${encodeURIComponent(auth_q)}`
    })
  }

  if (query.field_query) {
    query.field_query.forEach((field_q) => {
      endpoint += `&field_query=${encodeURIComponent(field_q)}`
    })
  }

  if (query.country_query) {
    query.country_query.forEach((country_q) => {
      endpoint += `&country_query=${encodeURIComponent(country_q)}`
    })
  }

  if (query.syllabus_query) {
    endpoint += `&syllabus_query=${query.syllabus_query}`
  }

  return callApi(endpoint, config)
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
