import React, { useState } from "react";
import "./Bottom.css";
import Chart from "react-apexcharts";

const Bottom = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#01565B", "#5ABA8A"],
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
          tools: {
            selections: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true,
            customIcons: [],
          },
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      },
    },
    series: [
      {
        name: "Updates",
        data: [25, 33, 13, 89, 34, 20, 30],
      },
      {
        name: "New Tasks",
        data: [70, 43, 53, 89, 44, 59, 62],
      },
    ],
  });

  return (
    <div className="bottom flex">
      <div className="graphDiv">
        <span className="title">All Activities (Graphical View)</span>
        <Chart className="chart"
          options={state.options}
          series={state.series}
          type="area"
          width="350"
        />
      </div>

      <div className="scheduleDiv">
        <span className="title">Upcoming Shedule</span>
        <div className="sigleTask flex">
          <div className="imgDiv flex">
            <img
              src="https://images.vexels.com/media/users/3/128132/isolated/preview/fa3b9aad78a9db81459bd03294a0f985-flat-laptop-icon-design.png"
              alt=""
            />
          </div>

          <div className="taskInfo">
            <span className="task">Desk Time Redesign</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">09:30 AM</span>
        </div>
        <div className="sigleTask flex">
          <div className="imgDiv flex">
            <img
              src="https://images.vexels.com/media/users/3/128132/isolated/preview/fa3b9aad78a9db81459bd03294a0f985-flat-laptop-icon-design.png"
              alt=""
            />
          </div>

          <div className="taskInfo">
            <span className="task">New Landing Page</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">10:30 AM</span>
        </div>
        <div className="sigleTask flex">
          <div className="imgDiv flex">
            <img
              src="https://images.vexels.com/media/users/3/128132/isolated/preview/fa3b9aad78a9db81459bd03294a0f985-flat-laptop-icon-design.png"
              alt=""
            />
          </div>

          <div className="taskInfo">
            <span className="task">Create Animation</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">11:59 AM</span>
        </div>
        <div className="btn">
          See All Activities
        </div>
      </div>
    </div>
  );
};

export default Bottom;
