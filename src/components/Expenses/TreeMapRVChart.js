import React from 'react';

import TreeMapRV from '../TreeMapRV';
// import TreeMapLabel from '../TreeMapLabel';

const TreeMapRVChart = (props) => {
    console.log("investments")
    console.log(props.investments)
    const Subfunds = [];
    const DirectInvestments = [];

    for(const investment of props.investments) {
        if(investment.type==='Direct Investments'){
            DirectInvestments.push({"title":`${investment.title}`, "color": "#ff0000", "size":`${investment.amount}`})
        }
        else if(investment.type === 'Subfunds'){
            Subfunds.push({"title":`${investment.title}`, "color": "#ff0000", "size":`${investment.amount}`})
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
                "color": "orange",
                "children": [...DirectInvestments]
            },
            {
                "title": "Subfunds", 
                "color": "orange",
                "style": {'align-items': "flex-start"}, 
                "children": [...Subfunds]
            }
            ]
        };


  return <TreeMapRV dataRV={RVDataPoints} />;
};

export default TreeMapRVChart;
