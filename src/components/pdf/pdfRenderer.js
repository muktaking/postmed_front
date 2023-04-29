import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink
} from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    //height: '150px',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold'
  },
  section: {
    marginTop: '5',
    marginBottom: '5'
    //padding: '5 15 5 5'
    // flexGrow: 1
  }
})

const MyDoc = ({ questions }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      {questions.map((ques) => (
        <View style={styles.section}>
          <Text>{`[ ${ques.id} ]. ${ques.qText}. <${ques.qType}>`}</Text>
          <View style={{ paddingHorizontal: 35, marginTop: 5 }}>
            {ques.stems.map((stem, ind) => (
              <Text>
                {ind +
                  1 +
                  '. ' +
                  stem.qStem +
                  '< ' +
                  stem.aStem +
                  ' >' +
                  '[ ' +
                  stem.fbStem +
                  ' ]'}
              </Text>
            ))}
          </View>
          <Text style={{ marginTop: 5, marginBottom: 5 }}>
            {ques.generalFeedback}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
)

export default function PdfRenderer({ questions }) {
  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc questions={questions} />}
        fileName='somename.pdf'
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  )
}
