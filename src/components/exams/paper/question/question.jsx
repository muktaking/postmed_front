import React from 'react'
import { Badge, Image, ListGroup, Table } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Stem from './stem'

const QuestionForm = ({ question, handleChange, defaultChecked, index }) => {
  console.log(index)
  return (
    <ListGroup as='ul' className='mt-3'>
      <ListGroup.Item className='lead' as='li' active>
        <Badge variant='danger'>Question No. {index}</Badge>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ node, children, ...props }) => (
              <Table
                bordered
                responsive
                className='text-white w-50'
                children={children}
              />
            ),

            img: ({ node, src, alt, ...props }) => (
              <LazyLoadComponent>
                <Image src={src} alt={alt} width={350} fluid />
              </LazyLoadComponent>
            )
          }}
        >
          {question.qText}
        </ReactMarkdown>
        {/* <FaFlag color='red' /> */}
      </ListGroup.Item>

      {question.stems.map((stem, index) => (
        <ListGroup.Item as='li' key={index}>
          <Stem
            qType={question.qType}
            stem={stem}
            index={index + 1}
            id={question.id}
            handleChange={handleChange}
            defaultChecked={
              defaultChecked
                ? question.qType === 'matrix'
                  ? defaultChecked[index]
                  : defaultChecked[0]
                : null
            }
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default QuestionForm
