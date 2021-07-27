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
  console.log("ctxparent");
  console.log(ctx.parent);
  const filteredExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.parent;
  });
  console.log("filteredExpeneses");
  console.log(filteredExpenses);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={ctx.parent}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        <TreeMapChart expenses={props.items}/>
        <TreeMapRVChart investments={filteredExpenses}/>
        <ExpensesList 
          selected = {ctx.parent}
          items={filteredExpenses} />
          
      </Card>
    </div>
  );
};

export default Expenses;
