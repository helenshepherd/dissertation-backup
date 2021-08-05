import React, { useContext } from 'react';

import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
import InvestmentsList from './InvestmentsList';
// import ExpensesChart from './TreeMapChart';
import './Investments.css';
import ParentContext from '../../store/parent-context';
// import TreeMapChart from './TreeMapChart';
import TreeMapRVChart from '../Chart/TreeMapRVChart';


const Investments = (props) => {
  const ctx = useContext(ParentContext);

  const filteredParentExpenses = props.items.filter((expense) => {
    return expense.id === (ctx.parent[ctx.parent.length-1]).id;
  });

  return (  
 
    <div>
      <Card className='expenses'>
      
        {ctx.parent.map((item) => (
          <TreeMapRVChart
            chartParent={item.id}
            investments={props.items.filter((investment) => {
              return investment.parent === item.id;
            })}
          />
        ))} 
        <InvestmentsList 
          selected = {ctx.parent}
          items={filteredParentExpenses} />
          {/* <ExpensesFilter
          selected={ctx.parent}
        /> */}
        {/* <ExpensesChart expenses={filteredParentExpenses} /> */}
        {/* <TreeMapChart expenses={props.items}/>   */}
      </Card>
    </div>
  );
};

export default Investments;

