
import React from 'react'
import Chart from "react-google-charts";
import './TreeMap.css';



const TreeMap = (props) => {


    return <div>
<Chart
  width={'100%'}
  height={'500px'}
  chartType="TreeMap"
  loader={<div>Loading Chart</div>}
  data={props.dataPoints}
  options={{
    minColor: '#f3ffff',
    midColor: '#00b9bc',
    maxColor: '#007c7d',
    headerHeight: 30,
    fontColor: 'black',
    // fontSize: 18,
    showScale: false,
    maxDepth: 2,
    legend: { position: "top", alignment: "start", maxLines: 2 },
    chartArea: {left: 20, right:30},
    textStyle: {color: 'black', fontName: 'Arial', fontSize: '20', y:"500"}
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>}

export default TreeMap;