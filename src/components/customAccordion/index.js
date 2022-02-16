import React, { useContext } from 'react'
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'

function ContextAwareToggle({ heading, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext)

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )

  const isCurrentEventKey = currentEventKey === eventKey

  return (
    <Card.Header
      className='d-flex justify-content-between px-2'
      onClick={decoratedOnClick}
    >
      <span>{heading}</span>
      <span>
        {!isCurrentEventKey ? (
          <FaAngleDown size='1.4rem' />
        ) : (
          <FaAngleRight size='1.4rem' />
        )}
      </span>
    </Card.Header>
  )
}

export default function CustomAccordin({ headings = [], descriptions = [] }) {
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        {headings.map((h, i) => (
          <Card>
            <ContextAwareToggle heading={h} eventKey={i} />
            <Accordion.Collapse eventKey={i}>
              <Card.Body>{descriptions[i]}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  )
}

export const AccordionStart = ({ children, key = 0, ...props }) => (
  <Accordion props={props}>{children}</Accordion>
)

export const AccordionCard = ({ children, heading, eventKey, ...props }) => (
  <Card props={props}>
    <ContextAwareToggle heading={heading} eventKey={eventKey} />
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>{children}</Card.Body>
    </Accordion.Collapse>
  </Card>
)
