import React, { useState, useContext } from 'react';

import Expenses from './components/Expenses/Expenses';
import ParentContext from './store/parent-context';
import '../node_modules/react-vis/dist/style.css';
import RVdata from './datasets/RVdata.js';
// import dummyData from './datasets/dummydata.js';

const RVprops = RVdata;

// const DUMMY_EXPENSES = dummyData;

const App = () => {
  const ctx = useContext(ParentContext);
  
  const [filteredParent, setFilteredParent] = useState(['Top Layer']);

  const filterChangeHandler = (selectedParent) => {
    console.log(selectedParent);
    let current = ctx.parent;
    current.push(selectedParent);
    setFilteredParent(current);
  };

  const titleClickHandler = (newValues) => {
    setFilteredParent(newValues);
  }

console.log("app.js - filteredParent")
console.log(filteredParent)
console.log("app.js - ctx.parent")
console.log(ctx.parent)
  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      onItemClick: filterChangeHandler,
      onTitleClick: titleClickHandler
    }}> {/* //the.Provider makes it a component */}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <Expenses items={RVprops} />
    </ParentContext.Provider>
  );
};

export default App;
