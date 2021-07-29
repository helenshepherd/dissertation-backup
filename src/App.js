import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import ParentContext from './store/parent-context';
import '../node_modules/react-vis/dist/style.css';
import RVdata from './datasets/RVdata.js';
// import dummyData from './datasets/dummydata.js';

const RVprops = RVdata;

// const DUMMY_EXPENSES = dummyData;

const App = () => {
  
  const [filteredParent, setFilteredParent] = useState('Top Layer');
  const [filteredGrandparent, setFilteredGrandparent] = useState('');
  const [filteredGreatGrandparent, setFilteredGreatGrandparent] = useState('');
  const [filteredGreatGreat, setFilteredGreatGreat] = useState('');

  // const [expenses, setExpenses] = useState(RVdata);

  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  const filterChangeHandler = (selectedParent) => {
    setFilteredGreatGreat(filteredGreatGrandparent);
    setFilteredGreatGrandparent(filteredGrandparent)
    setFilteredGrandparent(filteredParent);
    setFilteredParent(selectedParent);
  };

  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      grandparent: filteredGrandparent,
      greatgrandparent: filteredGreatGrandparent,
      greatgreat: filteredGreatGreat,
      onItemClick: filterChangeHandler
    }}> {/* //the.Provider makes it a component */}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <Expenses items={RVprops} />
    </ParentContext.Provider>
  );
};

export default App;
