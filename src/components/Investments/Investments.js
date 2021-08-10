import React, { useContext } from 'react';

import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
import InvestmentsList from './InvestmentsList';
// import ExpensesChart from './TreeMapChart';
import './Investments.css';
import ParentContext from '../../store/parent-context';
// import TreeMapChart from './TreeMapChart';
import TreeMapRVChart from '../Chart/TreeMapRVChart';
import SearchBar from '../SearchBar/SearchBar';


const Investments = (props) => {
  const ctx = useContext(ParentContext);

  const filteredParentExpenses = props.items.filter((expense) => {
    return expense.parent === (ctx.parent[ctx.parent.length-1]).id;
  });

  const listItems = props.items.filter((item) => {
    return item.parent === (ctx.listParent);
  })

  const searchResults = props.items.filter((item)=>{
    return item.title.toLowerCase().includes((ctx.searchInput).toLowerCase());
  })

  console.log(ctx.searchInput);
  console.log("searchResrults", searchResults);

  return (  
    <div>
      <Card className='expenses'>
        <SearchBar/>
        {ctx.searchInput!='' ? (
          <InvestmentsList
          items={searchResults}
          />)
          :null
        }
        {ctx.parent.map((item) => (
          <TreeMapRVChart
            chartParent={item.id}
            investments={props.items.filter((investment) => {
              return investment.parent === item.id;
            })}
          />
        ))} 
        
        {ctx.listParent != '' ? (
          <InvestmentsList 
          selected = {ctx.listParent}
          items={listItems} /> )
          :null
        }
        
          {/* <ExpensesFilter
          selected={ctx.parent}
        /> */}
        {/* <ExpensesChart expenses={filteredParentExpenses} /> */}
        {/* <TreeMapChart expenses={props.items}/>   */}
      </Card>
    </div>
  );
};

export default Investments;

