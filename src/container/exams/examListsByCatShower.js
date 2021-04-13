import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Badge, Row } from "react-bootstrap";
import { useParams } from 'react-router';
import ExamByCat from "./component/examByCat";



export default function ExamListsByCatShower() {
    const {id} = useParams();
    let [name, idA] = [null, null];
    if(id) [name, idA] = id.split('-');
    const [exams, setExams] = useState([]);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_SITE_URL + "/exams/category/" + idA)
        .then(response=>{
            setExams(response.data);
        })
        .catch(e=>{
            console.log(e)
        })
        
    },[])
    return (
        <div className="mt-5">
            <h2 className="text-center">
                <span className="mr-2">Available Exams Under</span>
                <Badge variant="warning">{name}</Badge>
            </h2>
            <p className="text-center text-danger">{exams.length < 1 && "NO Exam is avaiable."}</p>
            <div className="d-flex justify-content-between">
                {exams.map(exam=><Row className="m-2 p-3 bg-secondary text-white" style={{width: "350px"}}>
                    <ExamByCat key={exam.title} exam={exam} />
                </Row>)}
            </div>
        </div>
    )
}
