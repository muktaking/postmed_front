import axios from "axios";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import BigCards from "../../components/dashboard/bigCards/bigCards";
import MiniCards from "../../components/dashboard/miniCards/miniCards";
import { dashboardStudent } from "../../store/dashboard";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SITE_URL + "/dashboard")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: dashboardStudent.type, payload: response.data });
        }
      })
      .catch((e) => console.log(e));
  });

  return (
    <div className="">
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
