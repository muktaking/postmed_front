import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { Badge, Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetExamResultLoader } from '../../../store/exams';
import { canActivate, rolePermitted } from '../../../utils/canActivate';


const categoryTypeVariant = (name)=>{
    let variant = "primary"
    switch (name) {
        case 'Featured':
            variant = "warning"
            break;
        case 'Free':
            variant = "secondary"
            break;
    
        default:
            break;
    }
    return variant;
}

export default function ExamCard({width="350px", examId, imgSrc, title, categoryType, description, createdAt, free, examLoader}) {
    const dispatch = useDispatch();
    const token = useSelector(state=> state.auth.token);
    const intl = useIntl();
    const [res, setRes] = useState(null);

    return (
        <>
            <Card key={examId} className="mr-2 mb-2" style={{width:width}}>
                {!canActivate(rolePermitted.admin, token) && <Card.Img
                    variant="top"
                    src={imgSrc}
                />}
                <Card.Body>
                    <div>
                        <Card.Title style={{fontSize: '1.4rem' ,fontWeight: '900'}}>{title}</Card.Title>
                        
                        <Card.Subtitle>
                        {categoryType &&
                            categoryType.map((category) => (
                            <Badge key={category.name} variant={categoryTypeVariant(category.name)} className="mr-1">
                                {category.name}
                            </Badge>
                            ))}
                        </Card.Subtitle>

                    </div>
                    
                    <div className="mt-1 pt-2">
                        <p className="">{description} </p>
                
                        <p className="text-muted text-right">
                            {intl.formatMessage({id: 'db.so', defaultMessage: "Start on"})} : {moment(createdAt).calendar()}
                        </p>
                    </div>
        
                    {!canActivate(rolePermitted.admin, token) && <div className="d-flex justify-content-around">
                        <Link  className="text-white" to={(free ? "/exams/free/" : "/exams/") + examId}>
                            <Button variant="outline-primary" onClick={()=>{
                                dispatch(resetExamResultLoader());
                                }}>
                                    <FormattedMessage id="btn.start" defaultMessage="Start Exam"/>
                            </Button>
                        </Link>
                        <Link className="text-white" to={"/result/rank/" + examId}>
                            <Button onClick={()=>{dispatch(resetExamResultLoader())}} variant="outline-dark">
                                <FormattedMessage id="btn.rank" defaultMessage="Rank"/>
                            </Button>
                        </Link>
                    </div> }

                    {canActivate(rolePermitted.admin, token) && <div>
                            <Button disabled={true} variant="primary" className="mr-3" >
                                Edit
                            </Button>
                            <OverlayTrigger trigger="click" placement="top" overlay={<PopoverWrapper id={examId} res={res} setRes={setRes} token={token} examLoader={examLoader} />}>
                                <Button onClick={()=>{dispatch(resetExamResultLoader())}} variant="danger">
                                    Delete
                                </Button>
                            </OverlayTrigger>    
                            
                        </div>}
                </Card.Body>
            </Card>
        </>
    )
}


const PopoverWrapper = React.forwardRef(({id, res, setRes, token, examLoader, ...props}, ref)=>(
    <Popover id="popover-basic" ref={ref} {...props} >
      <Popover.Title as="h3">Are You Sure To delete The Exam</Popover.Title>
      <Popover.Content>
          <p>
              {res}
          </p>
        <Button variant="danger" onClick={()=>{
            //setAuthorizationToken(token);
            axios({
                baseURL: process.env.REACT_APP_SITE_URL,
                url: '/exams/' + id,
                method: 'delete',
              })
            .then(response=>{
                examLoader();
                setRes("Successfully Deleted");
            })
            .catch(error=>{
                setRes("Can not delete the exam"+ JSON.stringify(error));
            })
        }}>Yes</Button>
      </Popover.Content>
    </Popover>
  ));
  