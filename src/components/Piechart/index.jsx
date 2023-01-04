import "./index.css";
import "react-circular-progressbar/dist/styles.css";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Piechar({ props }) {
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(props * 100);
  }, [props]);

  return (
    <div className="circularProgressbarContainer">
      <h2>Score</h2>
      <div className="circularProgressbar">
        <CircularProgressbar
          value={data}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: "#f00",
            // trailColor: "#FFFFFF",
          })}
        />
      </div>
      <div className="circularProgressbarData">
        <h3>{data}%</h3>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}

Piechar.propTypes = {
  props: PropTypes.number,
};

export default Piechar;
