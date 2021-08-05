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
  
  const [filteredParent, setFilteredParent] = useState([{title: 'Top Layer', id: 'aa'}]);
  const [selectedBubbles, setSelectedBubbles] = useState(['']);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const filterChangeHandler = (selectedParent) => {
    let current = ctx.parent;
    current.push(selectedParent);
    setFilteredParent([...current]);
  };

  const titleClickHandler = (newValues) => {
    setFilteredParent([...newValues]);
  };

  const bubbleClickHandler = (bubbleID) => {
    let previous = ctx.selectedBubbles;
    previous.push(bubbleID);
    // setSelectedBubbles([...previous]);
  };

  const industryClickHandler = (industry) => {
    console.log(industry)
    // let test = ctx.listParent;
    // test.push(industry)
    setSelectedIndustry(industry);
  }

  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      // industry: selectedIndustry,
      listParent: selectedIndustry,
      directInvestmentsBubbles: ctx.directInvestmentsBubbles,
      subfundsBubbles: ctx.subfundsBubbles,
      selectedBubbles: ctx.selectedBubbles,
      selectedIndustry: ctx.selectedIndustry,
      subfundsHighlight: ctx.subfundsHighlight,
      directInvestmentsHighlight: ctx.directInvestmentsHighlight,
      onItemClick: filterChangeHandler,
      onTitleClick: titleClickHandler,
      onBubbleClick: bubbleClickHandler,
      onIndustryClick: industryClickHandler
    }}> {/* //the.Provider makes it a component */}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      
      <div>{selectedIndustry}</div>
      <Investments items={RVprops} />
    </ParentContext.Provider>
  );
};

export default App;
