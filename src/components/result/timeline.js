import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import "./timeline.css";


const type = [
    "Assignment",
    "Weekly",
    "Monthly",
    "Assesment",
    "Term",
    "Test",
    "Final",
  ];

export default function Timeline() {
    const userExamStat = useSelector((state) => state.dashboard.userExamStat);

    const examTitles = userExamStat
        ? _.map(userExamStat.examTitles, "title")
        : [];
    const examType = userExamStat
    ? _.map(userExamStat.examTitles, "type")
    : [];    
    const marks = userExamStat
        ? _.map(
            userExamStat.stat,
            (value)=>`Mark: ${value.averageScore} Out of ${value.totalMark}`
        )
        : [];
    const lastAttemptTimes = userExamStat
    ? _.map(
        userExamStat.stat,
        "lastAttemptTime"
    )
    : [];    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">All Exam Results</h6>
                            <div id="content">
                                <ul className="timeline">
                                    {
                                    examTitles.map ((value, ind) => 
                                    <li key={value} className="event" data-date={moment(lastAttemptTimes[ind]).format("YYYY-MM-DD, h:mm a")}>
                                        <h3>{value}</h3>
                                        <p className="text-danger">{type[examType[ind]]}</p>
                                        <p className="text-secondary">{marks[ind]}</p>
                                    </li>)
                                        }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
