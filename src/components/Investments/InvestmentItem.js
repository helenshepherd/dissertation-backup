import React, { useContext } from 'react';

import InvestmentLogo from './InvestmentLogo';
import Card from '../UI/Card';
import './InvestmentItem.css';
import ParentContext from '../../store/parent-context';

const InvestmentItem = (props) => {
  const ctx = useContext(ParentContext);

  const clickListener = (event) => {
    // console.log(props.title);
    ctx.onItemClick(props.title);
  };

  return (
    <li onClick={clickListener}>
      <Card className='expense-item'>
        <InvestmentLogo title={props.title} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <h2>(within  {props.parent})</h2>
          <div className='expense-item__price'>{props.amount}%</div>
        </div>
      </Card>
    </li>
  );
};

export default InvestmentItem;
