import moment from "moment";
import React from 'react';
import { Badge, Button, Col } from "react-bootstrap";
import { BsClock, BsFileText, BsLayersFill } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetExamResultLoader } from "../../../store/exams";

export default function ExamByCat({exam}) {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.token ? true : false);
    return (
        <>
            <Col sm={7}>
                    <Badge variant="warning" style={{position: "absolute", top: '-25px', left: "-10px"}}>
                        {!authToken && exam.categoryType.filter(cat=> cat.name === 'Free').length > 0 && "Free" }
                    </Badge>
                    <h4 className="">
                        <BsLayersFill size="1.5rem" />
                        <span className="ml-2" >
                            {exam.title}
                        </span>
                    </h4>
                    <div className="">
                        <BsClock size="1.5rem" /> 
                        <Badge className="ml-2" variant="light">{moment(exam.createdAt).format('YYYY-MM-DD hh:mm A')}</Badge>
                    </div>
                </Col>
                <Col sm={5} className="d-flex align-items-center">
                    <Link  className="text-white" to={((!authToken && exam.categoryType.filter(cat=> cat.name === 'Free').length > 0) ? "/exams/free/" : "/exams/") + exam.id}>
                        <Button variant="outline-light" onClick={()=>{
                            dispatch(resetExamResultLoader());
                            }}>
                                <FormattedMessage id="btn.start" defaultMessage="Start Exam"/>
                        </Button>
                    </Link>
                </Col>
                <Col sm={12}>
                    <hr />   
                    <p className="">
                        <BsFileText size="1.5rem" />
                        <span className="ml-2" >{exam.description}</span>                     
                    </p>
                </Col>            
        </>
    )
}
