import React, { useState } from "react";
import { Expense } from "./Expenses/Expense";
import "./App.css";
import Card from "./CardShadow/Card";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import {FilterByYear} from './FilterByYear/FilterByYear'
import Chart from './Chart/Chart'


export default function App() {

  let expenseData = [
    {
      ExpenseDate: "2018-08-08",
      ExpenseItem: "School Fees",
      ExpenseCost: "2000",
    },
    {
      ExpenseDate: "2020-05-15",
      ExpenseItem: "Grocery",
      ExpenseCost: "500",
    },
    {
      ExpenseDate: "2019-06-10",
      ExpenseItem: "Petrol",
      ExpenseCost: "2000",
    },
    {
      ExpenseDate: "2020-08-15",
      ExpenseItem: "Travelling",
      ExpenseCost: "1000",
    },
    {
      ExpenseDate: "2021-05-10",
      ExpenseItem: "Roaming",
      ExpenseCost: "200",
    },
  ];
  
  const [selectedValue, setSelectedValue] = useState(+"");

  const [gotVal, setGotVal] = useState(expenseData)

  const [isAddingVal, setIsAddingVal] = useState(false);

  const getValueFrmChild = (newValues)=>{
    console.log(newValues); 

    // this is how we push data in array react--------------------
    setGotVal((preExpenseData)=>{
      return [newValues, ...preExpenseData]
    });
        // --------OR----------------
    // setGotVal([newValues, ...gotVal]);
    // console.log(gotVal);
    setIsAddingVal(false);
  }


  const onSelectChange=(selectedVal)=>{
    setSelectedValue(selectedVal);

  }

  // filtering array for selected year...which will further pass for the map function
  let filteredValues = gotVal.filter((val)=>{
    return ((selectedValue !== +"") ? new Date(val.ExpenseDate).getFullYear() === selectedValue : new Date(val.ExpenseDate).getFullYear())
  })

  return (
    
    <Card className="main">

      {!isAddingVal && <button onClick={()=>{setIsAddingVal(true)}} id="adding">Add New Expense</button>}
      {isAddingVal && <ExpenseForm onSubmitData={getValueFrmChild} onCancel={setIsAddingVal} />}

      <FilterByYear selectedValue={selectedValue} onSelectChange={onSelectChange}/>

      <Chart filteredValues={filteredValues}/>

      {   
          (filteredValues.length===0) ? <h1 className="err_msg">Not Found Any Expenses at {selectedValue}</h1> : filteredValues.map((values, index) => {
            return (<Expense SendExpenseData={values}  key={index}/>);
        })
      }

      {/* gotVal.filter((val)=>{
            return ((selectedValue !== +"") ? new Date(val.ExpenseDate).getFullYear() === selectedValue : new Date(val.ExpenseDate).getFullYear())
        }).map((values, index) => {
            return (<Expense SendExpenseData={values}  key={index}/>);
        }) */}


    </Card>
  );
}
