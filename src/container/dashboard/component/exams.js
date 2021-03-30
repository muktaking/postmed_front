import moment from 'moment'
import React from 'react'
import { Table } from 'react-bootstrap'
import { examType } from '../../exams/examLists'

export default function Exams({exams}) {
    return (
        <div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Start From</th>
                    </tr>
                </thead>
                <tbody>                    
                    {exams.map((exam, ind)=><tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{exam.title}</td>
                        <td>{examType[exam.type]}</td>
                        <td>{exam.description}</td>
                        <td>{exam.categoryType.map(cat=>cat.name).join(', ')}</td>
                        <td>{moment(exam.createdAt).format('YYYY-MM-DD, hh:mm a')}</td>
                    </tr>)}
                   
                </tbody>
            </Table>
                        
        </div>
    )
}
