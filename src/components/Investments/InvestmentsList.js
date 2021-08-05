import React from 'react';

import InvestmentItem from './InvestmentItem';
import './InvestmentsList.css';

const InvestmentsList = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <InvestmentItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          parent={expense.parent}
        />
      ))}
    </ul>
  );
};

export default InvestmentsList;
