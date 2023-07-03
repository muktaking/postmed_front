import * as _ from 'lodash'
import React, { useState } from 'react'
import { Bar, HorizontalBar } from 'react-chartjs-2'
import { useIntl } from 'react-intl'
import BigCard from '../bigCard/bigCard'
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa'

const ReportCard = ({ userExamStat }) => {
  //const userExamStat = useSelector((state) => state.dashboard.userExamStat)
  const [showOverlay, setShowOverlay] = useState(false)
  const intl = useIntl()

  const examTitles = userExamStat ? _.map(userExamStat.examTitles, 'title') : []
  const mark = userExamStat
    ? _.map(
        userExamStat.stat,
        (value) => +((value.averageScore / value.totalMark) * 100).toFixed(2)
      )
    : []
  //const stat = userExamStat ? _.map(userExamStat.stat, "averageScore") : [];

  const horizontalBarOptions = {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100
          }
        }
      ]
    }
  }
  const BarOptions = {
    responsive: true, // Instruct chart js to respond nicely.
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100
          }
        }
      ]
    }
  }
  const data = {
    labels: examTitles,
    datasets: [
      {
        label: 'Marks in Percentage', // Name the series
        data: mark, // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
        maxBarThickness: 35,
        barPercentage: 0.5
      }
    ]
  }

  return (
    <BigCard
      header={intl.formatMessage({
        id: 'db.ur',
        defaultMessage: 'User Reports'
      })}
      headerColor={'info'}
      showDatePicker={false}
    >
      {showOverlay && (
        <div style={styles.overlayContatiner}>
          <FaSearchMinus
            size='1.6rem'
            style={styles.visibilityIcon}
            onClick={() => {
              setShowOverlay(false)
            }}
          />
          <HorizontalBar data={data} options={horizontalBarOptions} />
        </div>
      )}
      <Bar data={data} options={BarOptions} />
      <FaSearchPlus
        style={styles.visibilityIcon}
        onClick={() => {
          setShowOverlay(true)
        }}
      />
    </BigCard>
  )
}

const styles = {
  overlayContatiner: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'block',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FBFFDC'
  },
  visibilityIcon: {
    cursor: 'pointer',
    position: 'absolute',
    bottom: 30,
    right: 20
  }
}

export default ReportCard
