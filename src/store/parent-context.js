import React from 'react';

function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)

const directInvestmentsBubblesColor= '#2eb6b9';
let DIshades=[directInvestmentsBubblesColor];

for(let num=0.1; num <1; num=num+0.1){
    DIshades.push(shadeHexColor(directInvestmentsBubblesColor, num));
}
const subfundsBubblesColor= '#e83b77';
let SubfundsShades=[subfundsBubblesColor];

for(let num=0.1; num <1; num=num+0.1){
    SubfundsShades.push(shadeHexColor(subfundsBubblesColor, num));
}
const ParentContext = React.createContext({
    parent: ['Top Layer'],
    // directInvestmentsBackground: '',
    directInvestmentsBubbles: [...DIshades],
    // subfundsBackground:'',
    subfundsBubbles: [...SubfundsShades],
    // directInvestmentsBubblesShades: [],
    // subfundsBubblesShades: []
    selectedBubbles: ['']
});



export default ParentContext;