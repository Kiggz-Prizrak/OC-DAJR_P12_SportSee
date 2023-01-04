import "./main.css";
import UserData from "../api";

import React, { useState, useEffect } from "react";


import Sidebar from "../components/Sidebar";
import Linechart from "../components/Linechart";
import Radarchart from "../components/Radarchart";
import Piechart from "../components/Piechart";
import Barchart from "../components/Barchart";
import DataItem from "../components/DataItem";


/**
 * page for showing the dashboard.
 *
 * @page
 */

export default function Dashboard() {
  const [data, setData] = useState({});

  /**
   * await the userData class from the api to bring him to the state
   *
   * @hooks
   */
  useEffect(() => {
    // console.log(UserData);
    setData(UserData);
  }, []);

  //console.log(data._keyData);
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <div className="dashboardContent">
        <h1>
          Bonjour{" "}
          <span style={{ color: "red" }}>{data._userDatas?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="dataContainer">
          <div className="graphContainer">
            <Barchart props={data._activity} />
            <div className="graphList">
              <Linechart props={data.averageSessions} />
              <Radarchart props={data._performance} />
              <Piechart props={data._todayScore} />
            </div>
          </div>
          <div className="keyDataContainer">
            <DataItem
              data={data._keyData?.calorieCount}
              item={"Calories"}
              color={"#FF0000"}
              icon={"fa-solid fa-fire"}
            />
            <DataItem
              data={data._keyData?.proteinCount}
              item={"Proteines"}
              color={"#4AB8FF"}
              icon={"fa-solid fa-drumstick-bite"}
            />
            <DataItem
              data={data._keyData?.carbohydrateCount}
              item={"Glucides"}
              color={"#FDCC0C"}
              icon={"fa-solid fa-apple-whole"}
            />
            <DataItem
              data={data._keyData?.lipidCount}
              item={"Lipides"}
              color={"#FD5181"}
              icon={"fa-solid fa-burger"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
