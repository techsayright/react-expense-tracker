import React from "react";
import Card from "../../CardShadow/Card";
import './ExpenseDate.css'

export default function ExpenseDate(props) {
  
  return (
    <Card  className="styleDate">
      <div className="getDate" title="Date">{new Date(props.Date).getDate() < 9 ? "0" +new Date(props.Date).getDate() : new Date(props.Date).getDate() }</div>

      {/* i hv done + 1 below coz it returns indexmonth which is starts from 0 */}
      <div className="getMonth" title="Month">{new Date(props.Date).getMonth() +1}</div> 
      <div className="getYear" title="Year">{new Date(props.Date).getFullYear()}</div>
    </Card>
  );
}
