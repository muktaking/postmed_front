import React from "react";
import MiniBlock from "./miniBlock";


const upcomingExam = ({ value, footerValue,id }) => {
  return (
    <MiniBlock
      heading={"Latest Exam"}
      //
      value={value}
      //
      id={id}
      faIcon={"file"}
      footerHeading={"Start On"}
      footerValue={footerValue}
      color={"success"}
      faFooterIcon={"clock"}
    />
  );
};

export default upcomingExam;
