import React from "react";
import Card from '../CardShadow/Card'
import ExpenseDate from './ExpenseDate/ExpenseDate'
import "./Expense.css";

export const Expense = (props) => {
  let passDate =props.SendExpenseData.ExpenseDate;
  return (
    <>
      <Card className="container">
        <div className="ExDate">
          <ExpenseDate Date={passDate}/>
        </div>
        <div className="ExItem">
          <h1>{props.SendExpenseData.ExpenseItem}</h1>
        </div>
        <div className="ExCost">
          <h1>Rs.{props.SendExpenseData.ExpenseCost}</h1>
        </div>
      </Card>
    </>
  );
};
