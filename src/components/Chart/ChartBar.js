import React from "react";
import "./ChartBar.css";

export default function ChartBar(props) {

    let heightValue = (props.value / props.highestValue) * 100;
    // console.log(heightValue);

  return (
    <div className="chartBar">
      <div className="chartBar__inner">
        <div className="ChartBar__fill" style={{ height: heightValue+"%"}}></div>
      </div>
      <div className="chartBar__label">{props.label}</div>
    </div>
  );
}
