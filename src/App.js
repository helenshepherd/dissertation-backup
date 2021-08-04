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
  const [selectedBubbles, setSelectedBubbles] = useState(['']);

  const filterChangeHandler = (selectedParent) => {
    let current = ctx.parent;
    current.push(selectedParent);
    setFilteredParent([...current]);
  };

  const titleClickHandler = (newValues) => {
    setFilteredParent(newValues);
  };

  const bubbleClickHandler = (bubbleTitle) => {
    let previous = ctx.selectedBubbles;
    previous.push(bubbleTitle);
    setSelectedBubbles([...previous]);
  };

  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      directInvestmentsBubbles: ctx.directInvestmentsBubbles,
      subfundsBubbles: ctx.subfundsBubbles,
      selectedBubbles: ctx.selectedBubbles,
      onItemClick: filterChangeHandler,
      onTitleClick: titleClickHandler,
      onBubbleClick: bubbleClickHandler
    }}> {/* //the.Provider makes it a component */}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <Expenses items={RVprops} />
    </ParentContext.Provider>
  );
};

export default App;
