import React from 'react';

// import Chart from '../Chart/Chart';
import BarChart from '../BarChart';

const ExpensesChart = (props) => {
  const chartDataPoints = [

  ];

  for (const expense of props.expenses) {
    chartDataPoints.push({ label: expense.title, value: expense.amount })
  }

  return <BarChart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
