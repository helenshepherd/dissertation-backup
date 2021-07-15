import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by parent</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value=''>None</option>
          <option value='Home'>Home</option>
          <option value='Car'>Car</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
