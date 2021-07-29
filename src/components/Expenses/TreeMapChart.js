import React from 'react';

import TreeMap from '../TreeMap';
// import TreeMapLabel from './TreeMapLabel';

const TreeMapChart = (props) => {
  const chartDataPoints = [
    ['Category',
    'Parent',
    'Percentage',
    'Color' ],
    ['Top Layer', null, 0, 0],
    ['Subfunds (Top Layer)','Top Layer',0,0],
    ['Direct Investments (Top Layer)', 'Top Layer', 0,0],
    ['Direct Investments (Fund 1)', 'Fund 1',0,0],
    ['Subfunds (Fund 1)', 'Fund 1',0,0],
    ['Direct Investments (Subfund 1)', 'Subfund 1',0,0],
    ['Fund 1', 'Subfunds (Top Layer)',0,0],
    ['Subfund 1', 'Fund 1',0,0],

  ];

  for (const expense of props.expenses) {
    chartDataPoints.push([`${expense.title}:${expense.amount}`, expense.parent, expense.amount, expense.amount])
  }


  return <TreeMap dataPoints={chartDataPoints} />;
};

export default TreeMapChart;
