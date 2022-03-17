import React from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieCharts({ labels, dataSetFirst }) {
  const options = {
    responsive: true // Instruct chart js to respond nicely.
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: false,
    //         min: 0,
    //         max: 100
    //       }
    //     }
    //   ]
    // }
  }
  const data = {
    labels: [...labels],
    datasets: [
      {
        label: 'Score(Percentage)', // Name the series
        data: [...dataSetFirst], // Specify the data values array
        backgroundColor: ['#2196f3', '#FF4533', '#706564'], // Add custom color background (Points and Fill)
        hoverOffset: 4
      }
    ]
  }
  return (
    <>
      <Pie data={data} options={options} />
    </>
  )
}
