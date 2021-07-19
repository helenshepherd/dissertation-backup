
import React from 'react'
import Chart from "react-google-charts";



const TreeMap = (props) => {

    console.log(props.dataPoints)
    return <div>
<Chart
  width={'100%'}
  height={'500px'}
  chartType="TreeMap"
  loader={<div>Loading Chart</div>}
  data={props.dataPoints}
  options={{
    minColor: '#f00',
    midColor: '#ddd',
    maxColor: '#0d0',
    headerHeight: 15,
    fontColor: 'black',
    showScale: true,
  }}
  options={{
    maxDepth: 2
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>}

export default TreeMap;