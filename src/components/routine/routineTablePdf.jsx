import * as moment from 'dayjs'
import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink
} from '@react-pdf/renderer'
import { FaFilePdf } from 'react-icons/fa'
import { getStatus } from './showRoutine'

// Create styles
const styles = StyleSheet.create({
  heading: {
    paddingLeft: 5,
    marginVertical: 10
  },
  bottomSection: {
    marginVertical: 10,
    textAlign: 'right',
    padding: 5,
    fontSize: 8
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10
  }
})

const MyDoc = ({ routine, title }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.heading} fixed>{`Routine for ${title}`}</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: '10%' }]}>
            <Text style={styles.tableCell}>Serial No.</Text>
          </View>
          <View style={[styles.tableCol, { width: '50%' }]}>
            <Text style={styles.tableCell}>Topic</Text>
          </View>
          <View style={[styles.tableCol, { width: '15%' }]}>
            <Text style={styles.tableCell}>Status</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Start On</Text>
          </View>
        </View>
        {routine.map((syllabus, ind) => (
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>{ind + 1}</Text>
            </View>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{syllabus.syllabus} </Text>
            </View>
            <View style={[styles.tableCol, { width: '15%' }]}>
              <Text style={styles.tableCell}>
                {getStatus(syllabus.startDate, syllabus.endDate)}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {moment(syllabus.startDate).format('DD-MMM-YYYY, h:mm a')}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.bottomSection} fixed>
        {moment().format('MM-DD-YYYY')}
      </Text>
    </Page>
  </Document>
)

export default function RoutineTablePdf({ routine, title }) {
  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc routine={routine} title={title} />}
        fileName={title + '.pdf'}
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            'Loading document...'
          ) : (
            <scan>
              Download Pdf Version: <FaFilePdf size={'1.8rem'} />
            </scan>
          )
        }
      </PDFDownloadLink>
    </div>
  )
}
