import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './thingsgraphics.css'

const data = {
  'English Literature': {
    data: {
      2000: '36',
      2001: '93',
      2002: '110',
      2003: '132',
      2004: '174',
      2005: '156',
      2006: '227',
      2007: '215',
      2008: '272',
      2009: '254',
      2010: '719',
      2011: '805',
      2012: '633',
      2013: '453',
      2014: '613',
      2015: '640',
      2016: '587',
      2017: '998',
      2018: '523',
    },
  },
  Business: {
    data: {
      2000: '2',
      2001: '3',
      2002: '0',
      2003: '3',
      2004: '9',
      2005: '16',
      2006: '22',
      2007: '55',
      2008: '145',
      2009: '179',
      2010: '96',
      2011: '121',
      2012: '142',
      2013: '171',
      2014: '149',
      2015: '188',
      2016: '115',
      2017: '75',
      2018: '94',
    },
  },
  'Fine Arts': {
    data: {
      2000: '0',
      2001: '0',
      2002: '3',
      2003: '3',
      2004: '1',
      2005: '5',
      2006: '2',
      2007: '18',
      2008: '2',
      2009: '1',
      2010: '8',
      2011: '11',
      2012: '42',
      2013: '51',
      2014: '45',
      2015: '85',
      2016: '50',
      2017: '25',
      2018: '25',
    },
  },
  Education: {
    data: {
      2000: '1',
      2001: '2',
      2002: '0',
      2003: '5',
      2004: '8',
      2005: '5',
      2006: '5',
      2007: '18',
      2008: '34',
      2009: '30',
      2010: '30',
      2011: '35',
      2012: '33',
      2013: '26',
      2014: '24',
      2015: '31',
      2016: '18',
      2017: '17',
      2018: '12',
    },
  },
  Other: {
    data: {
      2000: '16',
      2001: '25',
      2002: '32',
      2003: '35',
      2004: '73',
      2005: '73',
      2006: '111',
      2007: '17',
      2008: '210',
      2009: '178',
      2010: '144',
      2011: '225',
      2012: '246',
      2013: '293',
      2014: '464',
      2015: '276',
      2016: '255',
      2017: '224',
      2018: '166',
    },
  },
}

export default function BarGraphic() {
  const [dataArray, setDataArray] = useState()

  useEffect(() => {
    setDataArray(data)
  }, [])

  return <></>
}

// {
//   asi es el grafico solo

//    <ResponsiveContainer key={key} height={180}>
//   <BarChart width={430} height={150} data={dataArray}>
//     <Bar name={value} dataKey={value} fill="blue" />
//     <XAxis dataKey="name" />
//     <Tooltip />
//     <Legend />
//   </BarChart>
// </ResponsiveContainer> }

//  asi lo deje antes de cortar
// {
//   dataArray
//     ? Object.entries(dataArray).map(([key, value]) => {
//         return (
//           <BarChart width={430} height={150} data={dataArray}>
//             {Object.entries(value.data).map(([key, value]) => {
//               return (
//                 <>
//                   <Bar name={value} dataKey={value} fill="blue" />
//                   <XAxis dataKey={key} />
//                 </>
//               )
//             })}
//             <Tooltip />
//             <Legend />
//           </BarChart>
//         )
//       })
//     : ''
// }
