import React, {useContext} from 'react';

import './ExpensesFilter.css';
import ParentContext from '../../store/parent-context';

const ExpensesFilter = (props) => {
  const ctx = useContext(ParentContext);

  const dropdownChangeHandler = (event) => {
    ctx.onItemClick(event.target.value);
    console.log(event);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by parent</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value=''>None</option>
          <option value='Fund 1'>Fund 1</option>
          <option value='Fund 2'>Fund 2</option>
          <option value='Fund 3'>Fund 3</option>
          <option value='Fund 4'>Fund 4</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
