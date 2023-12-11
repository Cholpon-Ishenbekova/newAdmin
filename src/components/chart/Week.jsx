import React, {useState} from 'react'
import Chart from 'react-apexcharts'

function Week() {
    const [state, setState] = useState({
      options: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: true,
            color: '#00B1F2',
            shadeTo: 'light',
            shadeIntensity: 1.56
          },
        },
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"]
          }
      },
        series: [
          {
            name: "Working hours",
            data: [7, 8, 7.5, 6, 5, 8, 7.5 ]
          }
        ]
    })
        
    
  return (
      <div className='day'>
          <div className="dayContainer">
          <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
    </div>
  )
}

export default Week
