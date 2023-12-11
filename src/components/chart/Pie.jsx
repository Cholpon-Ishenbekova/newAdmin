import React, {useState} from 'react'
import Chart from 'react-apexcharts'

function Pie() {
    const [state, setState] = useState({
        series: [90],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: ['You worked 7 hours'],
        },
    })
  return (
    <div>
      <Chart options={state.options} series={state.series} type="radialBar" height={350} />
    </div>
  )
}

export default Pie
