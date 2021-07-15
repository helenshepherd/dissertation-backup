import React, { useContext } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ParentContext from '../../store/parent-context';

const ExpenseItem = (props) => {
  const ctx = useContext(ParentContext);

  const clickListener = (event) => {
    console.log(props.title);
    ctx.onItemClick(props.title);
  };

  return (
    <li onClick={clickListener}>
      <Card className='expense-item'>
        <ExpenseDate title={props.title} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <h2>(within  {props.parent})</h2>
          <div className='expense-item__price'>{props.amount}%</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
