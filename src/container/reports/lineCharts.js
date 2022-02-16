import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineCharts({ labels, dataSetFirst, dataSetSec }) {
  const options = {
    responsive: true, // Instruct chart js to respond nicely.
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            min: 0,
            max: 100
          }
        }
      ]
    }
  }
  const data = {
    labels: [...labels],
    datasets: [
      {
        label: 'Score(Percentage)', // Name the series
        data: [...dataSetFirst], // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 3 // Specify bar border width
      },
      {
        label: 'Wrong Score(Percentage)', // Name the series
        data: [...dataSetSec], // Specify the data values array
        fill: false,
        borderColor: '#FF8C33', // Add custom color border (Line)
        backgroundColor: '#FF8C33', // Add custom color background (Points and Fill)
        borderWidth: 2 // Specify bar border width
        //type: 'bar'
      }
    ]
  }
  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}
