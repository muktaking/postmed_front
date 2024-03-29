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
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginVertical: 10
  }
})

const MyDoc = ({ questions, name }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Text style={styles.heading}>{`Chapter: ${name}`}</Text>
      {questions.map((ques, index) => (
        <View style={styles.section}>
          <Text>{`${index + 1}. [ ${ques.id} ] ${ques.qText} <${
            ques.qType
          }>`}</Text>
          <View style={{ paddingHorizontal: 35, marginTop: 5 }}>
            {ques.stems.map((stem, ind) => (
              <Text>
                {ind +
                  1 +
                  '. ' +
                  stem.qStem +
                  ' < ' +
                  (ques.qType === 'matrix'
                    ? stem.aStem === '1'
                      ? 'True'
                      : 'False'
                    : '') +
                  ' > [ ' +
                  stem.fbStem +
                  ' ]'}
              </Text>
            ))}
          </View>
          <Text style={{ marginTop: 5, marginBottom: 5 }}>
            {ques.qType === 'sba'
              ? '< Correct Answer: ' + ques.stems[0].aStem + ' >'
              : ''}
          </Text>
          <Text style={{ marginTop: 5, marginBottom: 5 }}>
            {'<Explanation: ' + ques.generalFeedback + ' >'}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
)

export default function PdfRenderer({ questions, name }) {
  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc questions={questions} name={name} />}
        fileName={name + '_Questions'}
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  )
}
