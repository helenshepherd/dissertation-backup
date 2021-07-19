import React from 'react';

import TreeMap from '../TreeMap';

const TreeMapChart = (props) => {
  const chartDataPoints = [
    ['Category',
    'Parent',
    'Percentage',
    'Color' ],
    ['Top Layer', null, 0, 0],
    ['Subfunds','Top Layer',0,0],
    ['Direct Investments', 'Top Layer', 0,0]

  ];

  for (const expense of props.expenses) {
    chartDataPoints.push([expense.title, expense.parent, expense.amount, expense.amount])
  }


  return <TreeMap dataPoints={chartDataPoints} />;
};

export default TreeMapChart;
