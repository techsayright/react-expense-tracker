import React from "react";
import "./FilterByYear.css";
import Card from '../CardShadow/Card'

export const FilterByYear = (props) => {
  return (
    <Card className="FilterByYear">
      <div className="txt">Filter By Year</div>
      <div className="selOpt">                                                              {/**yaha pe + karke values number convert ki hai */}
        <select name="FilterByYear" id="FilterByYear" value={props.selectedValue} onChange={(e)=>{props.onSelectChange(+e.target.value)}}> 
          <option value=""  defaultValue={""}>
            --Select Year--
          </option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020" name="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </Card>
  );
};
