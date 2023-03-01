import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Surface } from 'recharts'
import './graphicsingleton-styles.css'
import { useAuthContext } from '../../../authContext'

export default function FieldsSingletonGraphic({ dataGraphic }) {
  const [propsData, setPropsData] = useState([])
  const [first, setFirst] = useState([])
  const { cut } = useAuthContext()

  const colors = ['#204354', '#525B65', '#2E83C0', '#3775B9']

  function getNextColor() {
    getNextColor.index = getNextColor.index || 0
    const color = colors[getNextColor.index]
    getNextColor.index = (getNextColor.index + 1) % colors.length
    return color
  }

  useEffect(() => {
    getNextColor()
    setPropsData(dataGraphic)
    setFirst(dataGraphic[0])
  }, [cut, dataGraphic, first])

  return (
    <>
      {Object.entries(first).map(([key, value]) => {
        if (key !== 'year') {
          return (
            <>
              <h2 className="rechart-title">{key}</h2>
              <ResponsiveContainer height={100}>
                <BarChart
                  width={600}
                  height={100}
                  data={propsData}
                  margin={{
                    top: 25,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <Tooltip />
                  <Bar dataKey={key} stackId="a" fill={getNextColor()} />
                </BarChart>
              </ResponsiveContainer>
            </>
          )
        }
      })}
    </>
  )
}
