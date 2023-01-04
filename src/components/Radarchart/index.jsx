import "./index.css";

import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

function Radarchart({ props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(props);
    props?.data.map((e, i) => {
      const count = i + 1;
      e.kind = props?.kind[count];
    });
    setData(props?.data);
  }, [props]);

  // console.log(data);

  function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    console.log(payload, x, y, textAnchor, stroke);
  }

  return (
    <div className="radarchartContainer">
      <RadarChart cx="50%" cy="50%" width={258} height={200} data={data}>
        <PolarGrid stroke="white" radialLines={false} />

        {/* <PolarAngleAxis dataKey="kind" fill="black" /> */}
        <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />

        <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
      </RadarChart>
    </div>
  );
}

Radarchart.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
  kind: PropTypes.objectOf(PropTypes.string),
};

// Barchart.propTypes = {
//   props: PropTypes.arrayOf(
//     PropTypes.shape({
//       day: PropTypes.string,
//       kilogram: PropTypes.number,
//       calories: PropTypes.number,
//     })
//   ),
// };

export default Radarchart;
