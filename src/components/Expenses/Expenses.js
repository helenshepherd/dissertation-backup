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

  const filteredParentExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.parent;
  });
  const filteredGrandparentExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.grandparent;
  });
  const filteredGreatGrandparentExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.greatgrandparent;
  });
  const filteredGreatGreatExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.greatgreat;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={ctx.parent}
        />
        {/* <ExpensesChart expenses={filteredParentExpenses} /> */}
        <TreeMapChart expenses={props.items}/>
        <TreeMapRVChart 
          investments={filteredGrandparentExpenses}/>
        <TreeMapRVChart 
          investments={filteredParentExpenses}/>
        
        <ExpensesList 
          selected = {ctx.parent}
          items={filteredParentExpenses} />
          
      </Card>
    </div>
  );
};

export default Expenses;
