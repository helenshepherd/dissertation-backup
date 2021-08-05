import React from 'react';

import './InvestmentLogo.css';

const InvestmentLogo = (props) => {
  const initial = props.title[0];
  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  // const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{initial}</div>
    </div>
  );
};

export default InvestmentLogo;
