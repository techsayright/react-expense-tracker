import React, { useState } from "react";
import Card from "../CardShadow/Card";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {

  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  const onSubmitHandler = e =>{
    e.preventDefault();

    const formNewData = {
      ExpenseItem : item,
      ExpenseCost : cost,
      ExpenseDate : date,
    } 

    // console.log(formNewData);
    props.onSubmitData(formNewData);


    // after clicking the submit button we are going to set the value blank
    setItem("");
    setCost("");
    setDate("");
    
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Card className="form-control">
        <div className="ExpenseItem">
          <input
            type="text"
            name="ExpenseItem"
            id="ExpenseItem"
            value={item}
            placeholder="Expense Item Name"
            onChange={(e) => {
              setItem(e.target.value);
            }}
            required
          />
        </div>
        <div className="ExpenseCost">
          <input
            type="number"
            name="ExpenseCost"
            id="ExpenseCost"
            placeholder="Expense Cost (Rs)"
            min="10"
            step="1"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
            required
          />
        </div>
        <div className="ExpenseDate">
          <input
            type="date"
            name="ExpenseDate"
            id="ExpenseDate"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
        </div>
        <div className="sButton">
          <button type="button" onClick={()=>props.onCancel(false)}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </Card>
    </form>
  );
}
