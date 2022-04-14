import React from 'react'
import { useIntl } from 'react-intl'
import ExamCard from '../../../exams/gallary/examCard'
import BigCard from '../bigCard/bigCard'

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min
// }

const ExamsFeaturedCard = ({ featuredExams, courseId }) => {
  //const featuredExams = useSelector((state) => state.dashboard.featuredExams)
  const intl = useIntl()

  return (
    <BigCard
      header={intl.formatMessage({
        id: 'db.fe',
        defaultMessage: 'Featured Exams'
      })}
      headerColor={'primary'}
      showDatePicker={false}
    >
      <div className='d-flex justify-content-around flex-wrap'>
        {featuredExams.map((exam, index) => (
          <ExamCard
            key={exam.id}
            examId={exam.id}
            courseId={courseId}
            imgSrc={
              exam.categoryType.length > 0
                ? process.env.REACT_APP_SITE_URL +
                  '/images/bootstrap/featured_0' +
                  (Math.floor(Math.random() * 3) + 1) +
                  '.svg'
                : process.env.REACT_APP_SITE_URL + '/images/bootstrap/uncat.svg'
            }
            title={exam.title}
            categoryType={
              exam.categoryType.length > 0
                ? exam.categoryType
                : [{ name: 'Uncategorized' }]
            }
            description={exam.description}
            createdAt={exam.createdAt}
          />
        ))}
      </div>
    </BigCard>
  )
}

export default ExamsFeaturedCard
