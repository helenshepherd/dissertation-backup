import React, {useContext} from 'react';
import TreeMapLabel from './TreeMapLabel';

import TreeMapRV from '../TreeMapRV';
// import TreeMapLabel from '../TreeMapLabel';

import ParentContext from '../../store/parent-context';


    
//purple #3a3c62
//color.light #d7d0dd
// background.dark #242640
// tumelo #2eb6b9
const TreeMapRVChart = (props) => {
    const ctx = useContext(ParentContext);
    console.log("chart parent", ctx.parent)
    console.log("chart shades", ctx.directInvestmentsBubbles)

    let Subfunds = [];
    let DirectInvestments = [];

    let tempDirectInvestments = [];
    let tempSubfunds = [];

    for(const investment of props.investments) {
        if(investment.type==='Direct Investments'){
            tempDirectInvestments.push({"title":`${investment.title}`, "size":`${investment.amount}`});
        }
        else if(investment.type === 'Subfunds'){
            tempSubfunds.push({"title":`${investment.title}`, "size":`${investment.amount}`});
        }
    }
    tempDirectInvestments.sort((a,b) => parseFloat(b.size) - parseFloat(a.size));
    tempDirectInvestments.forEach((element,index)=>element.color=ctx.directInvestmentsBubbles[index]);
    DirectInvestments=tempDirectInvestments;
    tempSubfunds.sort((a,b) => parseFloat(b.size) - parseFloat(a.size));
    tempSubfunds.forEach((element,index)=>element.color=ctx.subfundsBubbles[index]);
    Subfunds=tempSubfunds;



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
