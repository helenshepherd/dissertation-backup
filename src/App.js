import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ParentContext from './store/parent-context';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Fund 1',
    amount: 24,
    parent: '',
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Fund 2', amount: 32, parent: '', date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Fund 3',
    amount: 11,
    parent: '',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Fund 4',
    amount: 23,
    parent: '',
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'McDonald\'s',
    amount: 9,
    parent: 'Fund 1',
    date: new Date(2020, 5, 10),
  },
  {
    id: 'e6',
    title: 'Apple',
    amount: 18,
    parent: 'Fund 1',
    date: new Date(2020, 5, 10),
  },
  {
    id: 'e7',
    title: 'SubFund 1',
    amount: 10,
    parent: 'Fund 1',
    date: new Date(2020, 5, 10),
  },
  {
    id: 'e8',
    title: 'Shell',
    amount: 22,
    parent: 'Fund 1',
    date: new Date(2020, 5, 10),
  },
  {
    id: 'e9',
    title: 'Airbus',
    amount: 17,
    parent: 'Fund 1',
    date: new Date(2021, 6, 2),
  },
  {
    id: 'e10',
    title: 'Novartis',
    amount: 24,
    parent: 'Fund 1',
    date: new Date(2021, 6, 2),
  },
  {
    id: 'e11',
    title: 'Enel',
    amount: 21,
    parent: 'SubFund 1',
    date: new Date(2021, 6, 2),
  },
  {
    id: 'e12',
    title: 'Vodafone',
    amount: 17,
    parent: 'SubFund 1',
    date: new Date(2021, 6, 2),
  },
  {
    id: 'e13',
    title: 'Tesla',
    amount: 34,
    parent: 'SubFund 1',
    date: new Date(2021, 6, 2),
  },
  {
    id: 'e14',
    title: 'Home Depot',
    amount: 28,
    parent: 'SubFund 1',
    date: new Date(2021, 6, 2),
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
