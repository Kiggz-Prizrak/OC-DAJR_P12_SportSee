import "./index.css";

import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * Component for showing details of the user.
 *
 * @component
 * Return the barchart which contains information about weight and calories burned
 */

function Barchart({ props }) {
  const [data, setData] = useState([]);

  /**
   *
   * @hooks useEffect
   * await the props and push value to data
   */
  useEffect(() => {
    setData(props);
  }, [props]);

  const CustomTooltip = ({ payload }) => {
    const kg = payload[0]?.value;
    const cal = payload[1]?.value;
    //console.log(payload);
    return (
      <div className="barchartTooltip">
        <p>{kg}kg</p>
        <p>{cal}kcal</p>
      </div>
    );
  };

  //console.log(props);
  return (
    <div className="barchartContainer">
      <div className="barchartLegend">
        <h2>Activité quotidienne</h2>
        <ul>
          <li>
            <span className="black">
              <i className="fa-solid fa-circle"></i>
            </span>
            Poids (kg)
          </li>
          <li>
            <span className="red">
              <i className="fa-solid fa-circle"></i>
            </span>
            Calories brûlées (kCal)
          </li>
        </ul>
      </div>
      <BarChart
        width={835}
        height={180}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={9}
      >
        <CartesianGrid />

        <XAxis
          stroke="false"
          padding={{ left: 10, right: 10 }} /*scale="point"*/
        />
        <YAxis stroke="false" orientation="right" />

        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
        />

        <Bar radius={[5, 5, 0, 0]} dataKey="kilogram" fill="#282D30" />
        <Bar radius={[5, 5, 0, 0]} dataKey="calories" fill="#E60000" />
      </BarChart>
    </div>
  );
}


Barchart.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  )
};

export default Barchart;
