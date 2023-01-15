import "./index.css";

import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * Component for showing linechart.
 *
 * @component
 * Return the linechart with day in the XAxis and timeout in the YAxis
 */
function Linechart({ props }) {
  const [data, setData] = useState([]);

  /**
   *
   * @hooks useEffect
   * await the props 
   * dispatch the day value to the week's day  and push value to data
   * 
   */
  useEffect(() => {
    const list = props;

    list?.map((e, i) => {
      switch (i) {
        case 0:
          e.day = "L";
          break;
        case 1:
          e.day = "M";
          break;
        case 2:
          e.day = "M";
          break;
        case 3:
          e.day = "J";
          break;
        case 4:
          e.day = "V";
          break;
        case 5:
          e.day = "S";
          break;
        case 6:
          e.day = "D";
          break;
        default:
          console.log("données inconnu");
      }
      setData(list);
    });
    // console.log(props);
  }, [props]);

  const CustomTooltip = ({ active, payload, label }) => {
    const tooltipValue = payload[0]?.value;
    return (
      <div className="custom-tooltip">
        <p>{tooltipValue}min</p>
      </div>
    );
  };
  return (
    <div className="linechartContainer">
      <h3>Durée moyenne des sessions</h3>
      <LineChart
        width={258}
        height={180}
        borderRadius={5}
        backgroundColor="#FF0000"
        data={data}
        yncId="anyId"
      >
        <XAxis
          tick={{ fill: "white" }}
          padding={{ left: 10, right: 10 }}
          tickLine={{ stroke: "transparent" }}
          axisLine={{ stroke: "transparent" }}
          dataKey="day"
        />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
        />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
          strokeWidth={3}
          activeDot={{ stroke: "grey", strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </div>
  );
}

Linechart.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
  
      sessionLength: PropTypes.number,
    })
  ),
};

export default Linechart;
