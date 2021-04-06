/* eslint-disable prettier/prettier */
import React from "react";
import { Form } from "react-bootstrap";
import {
  FaMinusCircle,
  FaRegCheckCircle,
  FaRegTimesCircle
} from "react-icons/fa";

const answerStatus = {
  True: 1,
  False: 0,
  NotAnswered: -1,
};

const QTypeNumber = {
  SingleBestAnswer: "sba",
  Matrix: "matrix",
};

const sbaStyle={
  marginLeft: '2rem',
  marginRight: '.6rem'
}

export default function stem({qIndex, index, qType, answer, qStem, aStem,isUntouched }) {
 
  return (
    <div className="d-flex flex-nowrap">
      {qType === QTypeNumber.Matrix && (
        <>
          <div className="mr-2">
            {answer === answerStatus.True && (
              <FaRegCheckCircle style={{ color: "#3c763d" }} size="1.4rem" />
            )}
            {answer === answerStatus.False && (
              <FaRegTimesCircle style={{ color: "#a94442" }} size="1.4rem" />
            )}
            {answer === answerStatus.NotAnswered && (
              <FaMinusCircle style={{ color: "#777" }} size="1.4rem" />
            )}
          </div>
          <div className="mr-2">{qStem}</div>
          {!isUntouched && <div>
            <Form.Check
              inline
              disabled
              label="true"
              type="radio"
              checked={
                (answer !== answerStatus.NotAnswered) ?
                answer === answerStatus.True ? aStem === "1" : aStem !== "1"
                : false
              }
            />
            <Form.Check
              inline
              disabled
              label="False"
              type="radio"
              checked={
                (answer !== answerStatus.NotAnswered)?
                answer === answerStatus.True ? aStem === "0" : aStem !== "0"
                : false
              }
            />

          </div>}
        </>
      )}

      {qType === QTypeNumber.SingleBestAnswer && (
        <>

          <div className="d-flex mr-2">
            <div className="">
              { answer[1] ?
                  index + 1 === answer[1] ? 
                    answer[0] === answer[1] ?
                      <FaRegCheckCircle style={{ color: "#3c763d", marginRight: sbaStyle.marginRight }} size="1.4rem" />
                      : <FaRegTimesCircle style={{ color: "#a94442", marginRight: sbaStyle.marginRight }} size="1.4rem" />
                  : index + 1 === answer[0] ?
                      <FaRegCheckCircle style={{ color: "#3c763d", marginRight: sbaStyle.marginRight }} size="1.4rem" />
                      : <div style={{width: '2rem'}}></div>

                : index + 1 === answer[0] ?
                    <FaRegCheckCircle style={{ color: "#3c763d", marginRight: sbaStyle.marginRight }} size="1.4rem" />
                    : <div style={{width: '2rem'}}></div>
              }
            </div>
            <div className="">
              {
                answer[1] ?
                  index +1 === answer[1] ?
                    <Form.Check
                    inline
                    disabled
                    type="radio"
                    name={qIndex}
                    checked={true}
                    />
                    : <Form.Check
                    inline
                    disabled
                    type="radio"
                    name={qIndex}
                    checked={false}
                    />
                  : <Form.Check
                  inline
                  disabled
                  type="radio"
                  name={qIndex}
                  checked={false}
                  />
              }
            </div>
          </div>


          {/* <div className="mr-2">
            {!answer[1] && (index + 1 === answer[0] ? (
              <div className="d-flex">
                <FaRegCheckCircle style={{ color: "#3c763d", marginRight: sbaStyle.marginRight }} size="1.4rem" />
                <Form.Check
                inline
                disabled
                type="radio"
                name={qIndex}
                checked={false}
                />
              </div>
            )
          : (
            <>
              <Form.Check
              inline
              disabled
              style={{marginLeft: sbaStyle.marginLeft}}
              type="radio"
              name={qIndex}
              checked={false}
              />
            </>)
            )
          
          }
            {answer[1] && ( (index + 1 === answer[1] ) ? 
                answer[0] === answer[1] ? (
                  <div className="d-flex">
                    <FaCheckCircle
                      style={{ color: "#3c763d", marginRight: sbaStyle.marginRight }}
                      size="1.4rem"
                    />
                    <Form.Check
                      inline
                      disabled
                      type="radio"
                      name={qIndex}
                      checked={true}
                      />
                    </div>
                  )
              : (
                <div className="d-flex">
                  <FaRegTimesCircle style={{ color: "#a94442", marginRight: sbaStyle.marginRight }} size="1.4rem" />
                  <Form.Check
                    inline
                    disabled
                    type="radio"
                    name={qIndex}
                    checked={true}
                    />
                </div>
                )
              :   ( index + 1 === answer[0]  ? (
                <div className="d-flex">
                  <FaCheckCircle
                    style={{ color: "#3c763d", marginRight: sbaStyle.marginRight }}
                    size="1.4rem"
                  />
                  <Form.Check
                    inline
                    disabled
                    type="radio"
                    name={qIndex}
                    checked={false}
                    />
                </div>
              ) 
                  :  <Form.Check
                  inline
                  disabled
                  style={{marginLeft: sbaStyle.marginLeft}}
                  type="radio"
                  name={qIndex}
                  checked={false}
                  />             
              )
            )            
            }
          </div> */}
          <div className="">{qStem}</div>
        </>
      )}
    </div>
  );
}
