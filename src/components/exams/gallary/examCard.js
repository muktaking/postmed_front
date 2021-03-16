import moment from 'moment'
import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetExamResultLoader } from '../../../store/exams'


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

export default function ExamCard({width="350px", examId, imgSrc, title, categoryType, description, createdAt, free}) {
    const dispatch = useDispatch();
    return (
        <>
            <Card key={examId} className="mr-2 mb-2" style={{width:width}}>
                <Card.Img
                    variant="top"
                    src={imgSrc}
                />
                <Card.Body>
                    <div>
                        <Card.Title style={{fontSize: '1.4rem' ,fontWeight: '900'}}>{title}</Card.Title>
                        
                        <Card.Subtitle>
                        {categoryType &&
                            categoryType.map((category) => (
                            <Badge variant={categoryTypeVariant(category.name)} className="mr-1">
                                {category.name}
                            </Badge>
                            ))}
                        </Card.Subtitle>

                    </div>
                    
                    <Card.Text className="mt-1 pt-2">
                    <p className="">{description} </p>
            
                    <p className="text-muted text-right">Start on: {moment(createdAt).calendar()}</p>
                    </Card.Text>
        
                    <div className="d-flex justify-content-around">
                        <Link  className="text-white" to={(free ? "/exams/free/" : "/exams/") + examId}>
                        <Button variant="outline-primary" onClick={()=>{
                            dispatch(resetExamResultLoader());
                            }}>Start Exam</Button></Link>
                        <Link className="text-white" to={"/result/rank/" + examId}><Button onClick={()=>{
                            dispatch(resetExamResultLoader());
                        }} variant="outline-dark">Rank</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
