import React, { useState, useContext } from 'react';

import Expenses from './components/Expenses/Expenses';
import ParentContext from './store/parent-context';
import '../node_modules/react-vis/dist/style.css';
import RVdata from './datasets/RVdata.js';
// import dummyData from './datasets/dummydata.js';

const RVprops = RVdata;

function shadeHexColor(color, percent) {
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// const DUMMY_EXPENSES = dummyData;

const App = () => {
  const ctx = useContext(ParentContext);
  
  const [filteredParent, setFilteredParent] = useState(['Top Layer']);

  const filterChangeHandler = (selectedParent) => {
    let current = ctx.parent;
    current.push(selectedParent);
    setFilteredParent([...current]);
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
