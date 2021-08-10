import React, { useState, useContext } from 'react';

import Investments from './components/Investments/Investments';
import ParentContext from './store/parent-context';
import '../node_modules/react-vis/dist/style.css';
import RVdata from './datasets/RVdata.js';

const RVprops = RVdata;

const App = () => {
  const ctx = useContext(ParentContext);
  
  const [filteredParent, setFilteredParent] = useState([{title: 'Top Layer', id: 'aa'}]);
  const [selectedBubbles, setSelectedBubbles] = useState(['']);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [enteredText, setEnteredText] = useState(''); //use ref if only want value when submitted

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
    setSelectedBubbles([...previous]);
  };

  const industryClickHandler = (industry) => {
    console.log(industry)
    // let test = ctx.listParent;
    // test.push(industry)
    setSelectedIndustry(industry);
  }
  
  const inputChangeHandler = event => {
      setEnteredText(event.target.value);
      console.log(event.target.value);
  }

  const searchSubmissionHandler = event => {
      event.preventDefault(); //stops http request being sent
      console.log(enteredText);
      setEnteredText('');
  }

  return (
    <ParentContext.Provider value={{
      parent: filteredParent,
      // industry: selectedIndustry,
      listParent: selectedIndustry,
      directInvestmentsBubbles: ctx.directInvestmentsBubbles,
      subfundsBubbles: ctx.subfundsBubbles,
      selectedBubbles: selectedBubbles,
      selectedIndustry: selectedIndustry,
      subfundsHighlight: ctx.subfundsHighlight,
      directInvestmentsHighlight: ctx.directInvestmentsHighlight,
      searchInput: enteredText,
      onItemClick: filterChangeHandler,
      onTitleClick: titleClickHandler,
      onBubbleClick: bubbleClickHandler,
      onIndustryClick: industryClickHandler,
      onSearchInput: inputChangeHandler,
      onSearchSubmit: searchSubmissionHandler
    }}> {/* //the.Provider makes it a component */}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      
      <div>{selectedIndustry}</div>
      <Investments items={RVprops}/>
    </ParentContext.Provider>
  );
};

export default App;
