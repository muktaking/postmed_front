import React from 'react'
import { Form } from 'react-bootstrap'
import { FaCheckCircle, FaMinusCircle, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

const answerStatus = {
    True: 1,
    False: 0,
    NotAnswered: -1,
  }

const QTypeNumber = {
    SingleBestAnswer: "sba",
    Matrix: "matrix",
  }
  

export default function stem({index, qType, answer, qStem}) {
    
    return (
        <div className="d-flex flex-nowrap">
            {qType === QTypeNumber.Matrix && <>
                <div className="mr-2" >
                    {answer === answerStatus.True && <FaRegCheckCircle style={{color: '#3c763d'}}  size='1.4rem' />}
                    {answer === answerStatus.False && <FaRegTimesCircle style={{color: '#a94442'}} size='1.4rem' />}
                    {answer === answerStatus.NotAnswered && <FaMinusCircle style={{color: '#777'}} size='1.4rem' />}
                </div>
                <div className="mr-2">
                    {qStem}
                </div>
                <div>
                    <Form.Check inline disabled label="true" type="radio" checked={answer === answerStatus.True}/>
                    <Form.Check inline disabled  label="False" type="radio" checked={answer === answerStatus.False} />
                </div> 
            </>}

            {
                qType === QTypeNumber.SingleBestAnswer && <>
                <div className="mr-2" >
                    {index + 1 === answer[0] && <FaRegCheckCircle style={{color: '#3c763d'}}  size='1.4rem' />}
                    {index + 1 === answer[0] && answer[0] === answer[1] && <FaCheckCircle className="ml-1" style={{color: '#3c763d'}}  size='1.4rem' />}

                    { index + 1 === answer[1] &&  answer[0] !== answer[1] && <FaRegTimesCircle style={{color: '#a94442'}} size='1.4rem' />}
                </div>
                <div className="">
                    {qStem}
                </div>

                </>
            }

            
        </div>
    )
}
