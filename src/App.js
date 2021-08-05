import React, { useState, useContext } from 'react';

import Investments from './components/Investments/Investments';
import ParentContext from './store/parent-context';
import '../node_modules/react-vis/dist/style.css';
import RVdata from './datasets/RVdata.js';
// import dummyData from './datasets/dummydata.js';

const RVprops = RVdata;

// const DUMMY_EXPENSES = dummyData;

const App = () => {
  const ctx = useContext(ParentContext);
  
  const [filteredParent, setFilteredParent] = useState(['aa']);
  const [selectedBubbles, setSelectedBubbles] = useState(['']);

  const filterChangeHandler = (selectedParent) => {
    let current = ctx.parent;
    current.push(selectedParent);
    setFilteredParent([...current]);
  };

  const titleClickHandler = (newValues) => {
    setFilteredParent(newValues);
  };

  const bubbleClickHandler = (bubbleID) => {
    let previous = ctx.selectedBubbles;
    previous.push(bubbleID);
    setSelectedBubbles([...previous]);
  };

  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      directInvestmentsBubbles: ctx.directInvestmentsBubbles,
      subfundsBubbles: ctx.subfundsBubbles,
      selectedBubbles: ctx.selectedBubbles,
      subfundsHighlight: ctx.subfundsHighlight,
      directInvestmentsHighlight: ctx.directInvestmentsHighlight,
      onItemClick: filterChangeHandler,
      onTitleClick: titleClickHandler,
      onBubbleClick: bubbleClickHandler
    }}> {/* //the.Provider makes it a component */}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <Investments items={RVprops} />
    </ParentContext.Provider>
  );
};

export default App;
