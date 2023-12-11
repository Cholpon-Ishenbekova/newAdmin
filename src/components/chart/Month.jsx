import React, {useState} from 'react'
import Chart from 'react-apexcharts'

function Month() {
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
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
          }
      },
        series: [
          {
            name: "Average Working hours",
            data: [7, 7.5, 8, 7, 7.5, 8, 7, 7, 7.5, 8, 7, 7.5, 8, 7 ]
          }
        ]
    })
        
    
  return (
      <div className='month'>
          <div className="monthContainer">
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

export default Month