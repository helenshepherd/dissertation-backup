import React from 'react';
import TreeMapLabel from './TreeMapLabel';

import TreeMapRV from '../TreeMapRV';
// import TreeMapLabel from '../TreeMapLabel';


//purple #3a3c62
//color.light #d7d0dd
// background.dark #242640
// tumelo #2eb6b9
const TreeMapRVChart = (props) => {
    const Subfunds = [];
    const DirectInvestments = [];

    for(const investment of props.investments) {
        if(investment.type==='Direct Investments'){
            DirectInvestments.push({"title":`${investment.title}`, "color": "#2eb6b9", "size":`${investment.amount}`})
        }
        else if(investment.type === 'Subfunds'){
            Subfunds.push({"title":`${investment.title}`, "color": "#e83b77", "size":`${investment.amount}`})
        }
    }
    const RVDataPoints = {
        "title": "Top Layer", 
        "color":"transparent", 
        "children": [
            {
                'title': 'Direct Investments',
                "className": "test",
                "style": {'align-items': "flex-start", "gap": "-20px"}, 
                "color": "#3a3c62",
                "children": [...DirectInvestments]
            },
            {
                "title": "Subfunds", 
                "color": "#d7d0dd",
                "style": {'align-items': "flex-start"}, 
                "children": [...Subfunds]
            }
            ]
        };


  return (
    <div>
        <TreeMapLabel currentParent={props.chartParent}/>
        <TreeMapRV dataRV={RVDataPoints} />
    </div>);
};

export default TreeMapRVChart;
