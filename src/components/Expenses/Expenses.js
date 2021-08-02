import React, { useContext } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
// import ExpensesChart from './TreeMapChart';
import './Expenses.css';
import ParentContext from '../../store/parent-context';
import TreeMapChart from './TreeMapChart';
import TreeMapRVChart from './TreeMapRVChart';


const Expenses = (props) => {
  const ctx = useContext(ParentContext);

  const filteredParentExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.parent[ctx.parent.length-1];
  });
// 
  console.log("expenses.js")
  return (  
    //test
    <div>
      <Card className='expenses'>
      
        {ctx.parent.map((item) => (
          <TreeMapRVChart
            chartParent={item}
            investments={props.items.filter((investment) => {
              return investment.parent === item;
            })}
          />
        ))} 
        <ExpensesList 
          selected = {ctx.parent}
          items={filteredParentExpenses} />
          <ExpensesFilter
          selected={ctx.parent}
        />
        {/* <ExpensesChart expenses={filteredParentExpenses} /> */}
        <TreeMapChart expenses={props.items}/>  
      </Card>
    </div>
  );
};

export default Expenses;

