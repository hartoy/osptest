import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './barchart-styles.css'

const data = [
  {
    name: '2014',
    EnglishLiterature: 613,
    Business: 149,
    FineArts: 45,
    Education: 24,
    Other: 464,
    amt: 1295,
  },
  {
    name: '2015',
    EnglishLiterature: 640,
    Business: 188,
    FineArts: 85,
    Education: 31,
    Other: 276,
    amt: 1220,
  },
  {
    name: '2016',
    EnglishLiterature: 587,
    Business: 115,
    FineArts: 50,
    Education: 18,
    Other: 255,
    amt: 1025,
  },
  {
    name: '2017',
    EnglishLiterature: 998,
    Business: 75,
    FineArts: 25,
    Education: 17,
    Other: 224,
    amt: 1339,
  },
  {
    name: '2018',
    EnglishLiterature: 523,
    Business: 94,
    FineArts: 25,
    Education: 12,
    Other: 166,
    amt: 820,
  },
]

export default function BarGraphic() {
  return (
    <ResponsiveContainer height={320}>
      <BarChart
        width={375}
        height={320}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="English Literature" dataKey="EnglishLiterature" stackId="a" fill="#204354" />
        <Bar name="Business" dataKey="Business" stackId="a" fill="#95999E" />
        <Bar name="Fine Arts" dataKey="FineArts" stackId="a" fill="#2E83C0" />
        <Bar name="Education" dataKey="Education" stackId="a" fill="#3775B9" />
        <Bar name="Other" dataKey="Other" stackId="a" fill="#B2CFEE" />
      </BarChart>
    </ResponsiveContainer>
  )
}
