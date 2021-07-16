import React from 'react';

// import Chart from '../Chart/Chart';
import BarChart from '../BarChart';
import TreeMap from '../TreeMap';

const ExpensesChart = (props) => {
  const chartDataPoints = [

  ];

  for (const expense of props.expenses) {
    chartDataPoints.push({ label: expense.title, value: expense.amount })
  }

  return <TreeMap dataPoints={chartDataPoints} />;
};

//FOR TREEMAP
// const ExpensesChart = (props) => {
//   const chartDataPoints = [
//     ['Category',
//     'Parent',
//     'Percentage',
//     'Color' ],
//     ['Top Layer', null, 0, 0]

//   ];

//   for (const expense of props.expenses) {
//     chartDataPoints.push([expense.title, expense.parent, expense.amount, expense.amount])
//   }


//   return <TreeMap dataPoints={chartDataPoints} />;
// };

export default ExpensesChart;
