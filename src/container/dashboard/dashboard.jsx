import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import BigCards from "../../components/dashboard/bigCards/bigCards";
import MiniCards from "../../components/dashboard/miniCards/miniCards";
import { dashboardStudent } from "../../store/dashboard";
import { resetExamResultLoader } from "../../store/exams";

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetExamResultLoader());
    setLoading(true);
    axios
      .get(process.env.REACT_APP_SITE_URL + "/dashboard")
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          dispatch({ type: dashboardStudent.type, payload: response.data });
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e)
      });
  },[]);

  return (
    <div className="">
      {
        loading && <Spinner
        animation="grow"
        role="status"
        variant="dark"
        className="content-center"
       >
       </Spinner>
      }
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <MiniCards />
      <hr className="my-3" />
      <BigCards />
    </div>
  );
};

export default Dashboard;
