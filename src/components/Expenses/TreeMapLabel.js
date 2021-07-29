import React, { useContext } from 'react';
import ParentContext from '../../store/parent-context';


const TreeMapLabel = (props) => {

  const ctx = useContext(ParentContext);

  const titleClickHandler = (event) => {
    ctx.onTitleClick(event.target.innerText);
  };


  return (
    <div>
        <h2 onClick={titleClickHandler}>{ctx.greatgreat}</h2>
        <h2 onClick={titleClickHandler}>{ctx.greatgrandparent}</h2>
        <h2 onClick={titleClickHandler}>{ctx.grandparent}</h2>
        <h2 onClick={titleClickHandler}>{ctx.parent}</h2>
    </div>
  );
};

export default TreeMapLabel;