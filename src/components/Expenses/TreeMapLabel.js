import React, { useContext } from 'react';
import ParentContext from '../../store/parent-context';


const TreeMapLabel = (props) => {

  const ctx = useContext(ParentContext);
  let currentValues = ctx.parent;
  console.log("currentValues");
  console.log(currentValues);

  // const currentValues = [ctx.parent, ctx.grandparent, ctx.greatgrandparent, ctx.greatgreat]

  const titleClickHandler = (event) => {
    console.log(event);
    let clickedTitle = event.target.innerText;
    console.log("clickedTitle");
    console.log(clickedTitle);
    let titleIndex = currentValues.indexOf(clickedTitle);
    let newValues = currentValues.slice(0,(titleIndex+1));
    ctx.onTitleClick(newValues);
  };

  let content = [];
  for (let item in ctx.parent){
    content.push(<h2 onClick={titleClickHandler}>{ctx.parent[item]}</h2>)
  }

  return content;
};

export default TreeMapLabel;
