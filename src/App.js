import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ParentContext from './store/parent-context';

const DUMMY_EXPENSES = [
  {
    id: 'a1',
    title: 'Financials',
    amount: 46.9,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a2',
    title: 'Industrials',
    amount: 43.1,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a3',
    title: 'Consumer Goods',
    amount: 42.5,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a4',
    title: 'Consumer Services',
    amount: 35.93,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a5',
    title: 'Technology',
    amount: 48.9,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a6',
    title: 'Healthcare',
    amount: 42.2,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a7',
    title: 'Basic Materials',
    amount: 32.44,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a8',
    title: 'Utilities',
    amount: 31.79,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'a9',
    title: 'Oil & Gas',
    amount: 32.03,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },  
  {
    id: 'a10',
    title: 'Telecoms',
    amount: 32.63,
    parent: 'Direct Investments (Top Layer)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e0',
    title: 'Fund 1',
    amount: 0,
    parent: 'Subfunds (Top Layer)',
    date: new Date(2020, 7, 14),
  },

  { 
    id: 'e2', 
    title: 'Fund 2', 
    amount: 5, 
    parent: 'Subfunds (Top Layer)', 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Fund 3',
    amount: 2,
    parent: 'Subfunds (Top Layer)',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Fund 4',
    amount: 8,
    parent: 'Subfunds (Top Layer)',
    date: new Date(2021, 5, 12),
  },
  {
    id: 'b1',
    title: {v: 'Financials1', f: 'Financials'},
    amount: 16.9,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b2',
    title: {v: 'Industrials1', f: 'Industrials'},
    amount: 13.1,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b3',
    title: {v: 'ConsumerGoods1', f: 'Consumer Goods'},
    amount: 12.5,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b4',
    title: {v: 'ConsumerServices1', f: 'Consumer Services'},
    amount: 5.93,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b5',
    title: {v: 'Technology1', f: 'Technology'},
    amount: 18.9,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b6',
    title: {v: 'Healthcare1', f: 'Healthcare'},
    amount: 12.2,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b7',
    title: {v: 'BasicMaterials1', f: 'Basic Materials'},
    amount: 2.44,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b8',
    title: {v: 'Utilities1', f: 'Utilities'},
    amount: 1.79,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'b9',
    title: {v: 'Oil&Gas1', f: 'Oil & Gas'},
    amount: 2.03,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },  
  {
    id: 'b10',
    title: {v: 'Telecoms1', f: 'Telecoms'},
    amount: 2.63,
    parent: 'Direct Investments (Fund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'c1',
    title: 'Subfund 1',
    amount: 5,
    parent: 'Subfunds (Fund 1)',
    date: new Date(2020, 7, 14),
  },

  { 
    id: 'c2', 
    title: 'Subfund 2', 
    amount: 8, 
    parent: 'Subfunds (Fund 1)', 
    date: new Date(2021, 2, 12) 
  },

  {
    id: 'd1',
    title: {v: 'Financials2', f: 'Financials'},
    amount: 0.9,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd2',
    title: {v: 'Industrials2', f: 'Industrials'},
    amount: 1.1,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd3',
    title: {v: 'ConsumerGoods2', f: 'Consumer Goods'},
    amount: 1.5,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd4',
    title: {v: 'ConsumerServices2', f: 'Consumer Services'},
    amount: 1.93,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd5',
    title: {v: 'Technology2', f: 'Technology'},
    amount: 1.9,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd6',
    title: {v: 'Healthcare2', f: 'Healthcare'},
    amount: 1.2,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd7',
    title: {v: 'BasicMaterials2', f: 'Basic Materials'},
    amount: 0.44,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd8',
    title: {v: 'Utilities2', f: 'Utilities'},
    amount: 0.79,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'd9',
    title: {v: 'Oil&Gas2', f: 'Oil & Gas'},
    amount: 1.03,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },  
  {
    id: 'd10',
    title: {v: 'Telecoms2', f: 'Telecoms'},
    amount: 0.63,
    parent: 'Direct Investments (Subfund 1)',
    date: new Date(2020, 7, 14),
  },
  
];

const App = () => {
  
  const [filteredParent, setFilteredParent] = useState('');

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedParent) => {
    setFilteredParent(selectedParent);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      onItemClick: filterChangeHandler
    }}> {/* //the.Provider makes it a component */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </ParentContext.Provider>
  );
};

export default App;
