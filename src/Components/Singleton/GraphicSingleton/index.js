import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './graphicsingleton-styles.css'
import { useAuthContext } from '../../../authContext'

export default function SingletonGraphic({ dataGraphic }) {
  const [propsData, setPropsData] = useState([])
  const { cut } = useAuthContext()

  useEffect(() => {
    if (cut) {
      const daTaGraphicCut = dataGraphic.slice(8.13)
      setPropsData(daTaGraphicCut)
    } else {
      setPropsData(dataGraphic)
    }
  }, [cut, dataGraphic])

  return (
    <>
      <ResponsiveContainer height={380}>
        <BarChart
          width={500}
          height={300}
          data={propsData}
          margin={{
            top: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Count" dataKey="count" stackId="a" fill="#3C495D" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
