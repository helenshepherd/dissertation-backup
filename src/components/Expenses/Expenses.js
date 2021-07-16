import React, { useContext } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './TreeMapChart';
import './Expenses.css';
import ParentContext from '../../store/parent-context';
import TreeMapChart from './TreeMapChart';


const Expenses = (props) => {
  const ctx = useContext(ParentContext);

  const filteredExpenses = props.items.filter((expense) => {
    return expense.parent === ctx.parent;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={ctx.parent}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        <TreeMapChart expenses={props.items}/>

        <ExpensesList 
          selected = {ctx.parent}
          items={filteredExpenses} />
          
      </Card>
    </div>
  );
};

export default Expenses;
