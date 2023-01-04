import './index.css'

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function DataItem(props) {

    // console.log(props)
  return (
    <div className="dataItemContainer">
      <div
        className="dataItemIconContainer"
        style={{ color: props.color}}
      >
        <div
          className="dataItemBlockBackground"
          style={{ color: props.color, backgroundColor: props.color }}
        ></div>
        <i className={props.icon}></i>
      </div>
      <div className="data">
        <h3>{props.data}</h3>
        <p>{props.item}</p>
      </div>
    </div>
  );
}

DataItem.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.shape({
      data: PropTypes.number,
      item: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

export default DataItem