import React from "react";
import { useSelector } from "react-redux";
import ExamCard from "../../../exams/gallary/examCard";
import BigCard from "../bigCard/bigCard";


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


const ExamsFeaturedCard = () => {
  const featuredExams = useSelector((state) => state.dashboard.featuredExams);

  return (
    <BigCard
      header="Featured Exams"
      headerColor={"primary"}
      showDatePicker={false}
    >
      <div  className="d-flex justify-content-around flex-wrap">
        {featuredExams.map((exam, index) => (
            <ExamCard
              examId = {exam.id} 
              imgSrc = {process.env.REACT_APP_SITE_URL+"/"+ exam.categoryType[getRndInteger(0,exam.categoryType.length)].imageUrl}
              title = {exam.title}
              categoryType = {exam.categoryType}
              description = {exam.description}
              createdAt = {exam.createdAt}
            />
        ))}
      </div>
    </BigCard>
  );
};

export default ExamsFeaturedCard;
