import React from 'react'
import Card from '../CardShadow/Card';
import './Chart.css'
import ChartBar from './ChartBar';

export default function Chart(props) {

    let ChartData=[
        {label : "Jan", value: 0},
        {label : "Feb", value: 0},
        {label : "Mar", value: 0},
        {label : "April", value: 0},
        {label : "May", value: 0},
        {label : "June", value: 0},
        {label : "July", value: 0},
        {label : "Aug", value: 0},
        {label : "Sep", value: 0},
        {label : "Oct", value: 0},
        {label : "Nov", value: 0},
        {label : "Dec", value: 0}
    ];

    for (const val of props.filteredValues) {
        let costVal=val.ExpenseCost;

        // adding same months expense cost so i hv done +=
        ChartData[new Date(val.ExpenseDate).getMonth()].value += +costVal;
        console.log(ChartData[new Date(val.ExpenseDate).getMonth()].value);
    }

    let arrayVal = ChartData.map((v)=> v.value)
    // console.log(arrayVal);
    let highestValue = Math.max(...arrayVal);
    // console.log(highestValue);

    return (
        <Card className="chart_main">
            {ChartData.map((data, index)=>{
               return <ChartBar label={data.label} value={data.value} highestValue={highestValue} key={index}/>
            })}
        </Card>
    )
}
