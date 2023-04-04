export const usStatesList = [
  { id: 'AL', name: 'Alabama' },
  { id: 'AK', name: 'Alaska' },
  { id: 'AZ', name: 'Arizona' },
  { id: 'AR', name: 'Arkansas' },
  { id: 'CA', name: 'California' },
  { id: 'CO', name: 'Colorado' },
  { id: 'CT', name: 'Connecticut' },
  { id: 'DE', name: 'Delaware' },
  { id: 'FL', name: 'Florida' },
  { id: 'GA', name: 'Georgia' },
  { id: 'HI', name: 'Hawaii' },
  { id: 'ID', name: 'Idaho' },
  { id: 'IL', name: 'Illinois' },
  { id: 'IN', name: 'Indiana' },
  { id: 'IA', name: 'Iowa' },
  { id: 'KS', name: 'Kansas' },
  { id: 'KY', name: 'Kentucky' },
  { id: 'LA', name: 'Louisiana' },
  { id: 'ME', name: 'Maine' },
  { id: 'MD', name: 'Maryland' },
  { id: 'MA', name: 'Massachusetts' },
  { id: 'MI', name: 'Michigan' },
  { id: 'MN', name: 'Minnesota' },
  { id: 'MS', name: 'Mississippi' },
  { id: 'MO', name: 'Missouri' },
  { id: 'MT', name: 'Montana' },
  { id: 'NE', name: 'Nebraska' },
  { id: 'NV', name: 'Nevada' },
  { id: 'NH', name: 'New Hampshire' },
  { id: 'NJ', name: 'New Jersey' },
  { id: 'NM', name: 'New Mexico' },
  { id: 'NY', name: 'New York' },
  { id: 'NC', name: 'North Carolina' },
  { id: 'ND', name: 'North Dakota' },
  { id: 'OH', name: 'Ohio' },
  { id: 'OK', name: 'Oklahoma' },
  { id: 'OR', name: 'Oregon' },
  { id: 'PA', name: 'Pennsylvania' },
  { id: 'RI', name: 'Rhode Island' },
  { id: 'SC', name: 'South Carolina' },
  { id: 'SD', name: 'South Dakota' },
  { id: 'TN', name: 'Tennessee' },
  { id: 'TX', name: 'Texas' },
  { id: 'UT', name: 'Utah' },
  { id: 'VT', name: 'Vermont' },
  { id: 'VA', name: 'Virginia' },
  { id: 'WA', name: 'Washington' },
  { id: 'WV', name: 'West Virginia' },
  { id: 'WI', name: 'Wisconsin' },
  { id: 'WY', name: 'Wyoming' },
]
export const institutionData = [
  { id: 'two_year', name: 'Two Year' },
  { id: 'four_year', name: 'Four Year and Graduate' },
  { id: 'graduate', name: 'Graduate Only' },
  { id: 'research', name: 'R1 and R2 Only' },
]

export const publicationTypeData = [
  { id: 'book', name: 'Books' },
  { id: 'article', name: 'Articles' },
]

export const yearsData = []

for (let i = 2010; i <= 2022; i++) {
  yearsData.push(i)
}

export const filterTitlesWorks = [
  { title: 'Authors', type: 'persons', showLockIcon: false },
  { title: 'Publication type', type: 'publication', showLockIcon: false, value: publicationTypeData },
  { title: 'Open License / Access', type: 'license', showLockIcon: true },
]
export const advancedFiltersList = [
  {
    title1: 'From',
    title2: 'To',
    type: 'dates',
    typeTitle: 'Date or date range of classes taught',
    value1: yearsData,
    placeHolder1: 'Start year',
    placeHolder2: 'End year',
  },
  {
    title1: 'US State',
    title2: 'School type',
    type: 'usDrop',
    typeTitle: 'US Only',
    value1: usStatesList,
    value2: institutionData,
  },
]
